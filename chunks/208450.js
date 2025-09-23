n.d(t, {
    Z: () => z,
    o: () => K,
}),
    n(35282),
    n(704826);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(258863),
    l = n(299608),
    c = n.n(l),
    u = n(442837),
    d = n(481060),
    f = n(349033),
    _ = n(40851),
    p = n(857595),
    h = n(607070),
    m = n(313201),
    g = n(592125),
    E = n(430824),
    b = n(944486),
    y = n(585483),
    O = n(72006),
    v = n(181389),
    I = n(748610),
    T = n(171900),
    S = n(607802),
    A = n(612806),
    C = n(819439),
    N = n(945577),
    R = n(28964),
    P = n(971128),
    w = n(532428),
    D = n(583642),
    x = n(611004),
    L = n(778177),
    j = n(165017),
    M = n(817190),
    k = n(315322),
    U = n(723642),
    G = n(981631),
    B = n(388032),
    Z = n(339450);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n(614346);
let V = 512,
    H = (0, m.hQ)(),
    Y = c()(x.Z.fetchMessages, 500);
class W extends i.PureComponent {
    componentDidMount() {
        var e, t;
        y.S.subscribe(G.CkL.PERFORM_SEARCH, this.search),
            y.S.subscribe(G.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y.S.subscribe(G.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox");
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if ((n !== e.searchContext && I.Z.initializeAutocomplete(n), t !== e.editorState)) {
            let e = O.Sq(t),
                r = (0, S.kG)(O.Sq(t)),
                i = v.g9(r, t);
            I.Z.updateAutocompleteQuery({
                searchContext: n,
                tokens: r,
                cursorScope: i,
                queryString: e,
            }),
                null != this._editorRef && O.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        y.S.unsubscribe(G.CkL.PERFORM_SEARCH, this.search),
            y.S.unsubscribe(G.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y.S.unsubscribe(G.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, S.kG)(O.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return O.lv(t, e, w.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        x.Z.cleanUpSearchState(e);
    }
    handlePastedFiles() {
        return "handled";
    }
    handleDroppedFiles() {
        return "handled";
    }
    handleDrop() {
        return "handled";
    }
    renderInput(e) {
        let { editorState: t, placeholder: n } = this.props;
        return (0, r.jsx)(s.Editor, {
            autoCorrect: "off",
            ref: this.setEditorRef,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            handleReturn: this.handleReturn,
            handleBeforeInput: this.handleBeforeInput,
            handleKeyCommand: this.handleKeyCommand,
            handlePastedText: this.handlePastedText,
            handlePastedFiles: this.handlePastedFiles,
            handleDroppedFiles: this.handleDroppedFiles,
            handleDrop: this.handleDrop,
            keyBindingFn: this.handleKeyBind,
            placeholder: null != n ? n : B.intl.string(B.t["5h0QOD"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? H : void 0,
            ariaLabel: B.intl.string(B.t["5h0QOD"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let {
                searchContext: e,
                editorState: t,
                hasResults: n,
                className: i,
                searchBarContainerClassName: a,
                searchBarClassName: s,
                popoutAlignment: l,
            } = this.props,
            { focused: c } = this.state,
            u = O.Sq(t).length > 0;
        return (0, r.jsx)(d.yRy, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            align: l,
            animation: d.yRy.Animation.NONE,
            shouldShow: c,
            autoInvert: !1,
            children: (t, l) => {
                var f;
                let { isShown: _ } = l;
                return (0, r.jsx)("div", {
                    className: i,
                    ref: this._containerRef,
                    children: (0, r.jsx)("div", {
                        className: o()(Z.search, a, {
                            [Z.open]: u || c,
                            [Z.focused]: c,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (f = this._editorRef) ? void 0 : f.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: o()(Z.searchBar, s),
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(_),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: u || n,
                                            className: Z.icon,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, S.Tm)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
    constructor(e) {
        super(e),
            F(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            F(this, "_editorRef", void 0),
            F(this, "_containerRef", i.createRef()),
            F(this, "_searchBarRef", i.createRef()),
            F(this, "_searchPopoutRef", i.createRef()),
            F(this, "_searchFiltersRedesignPopoutRef", i.createRef()),
            F(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a } = e,
                    { editorState: o } = this.props,
                    s = O.Sq(o);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    a ? ((o = O.c2(t, o)), (n = 0)) : (o = O.x0(t, o, n, r)),
                    (o = O.Hl(o, V)),
                    (o = this.tokenize(o));
                let l = Number(n) + t.length;
                (o = O.iK(l, o)), this.setEditorState(o), i && this.search({ queryString: O.Sq(o) });
            }),
            F(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(H, "-").concat(e) : void 0),
                    this.setState({ selectedIndex: e });
            }),
            F(this, "renderPopout", () => {
                let { isSearchFiltersRedesignEnabled: e } = this.props;
                return e
                    ? (0, r.jsx)(D.Z, {
                          ref: this._searchFiltersRedesignPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: H,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                          className: this.props.searchPopoutClassName,
                      })
                    : (0, r.jsx)(L.ZP, {
                          ref: this._searchPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: H,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                          className: this.props.searchPopoutClassName,
                      });
            }),
            F(this, "search", (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r } = null != e ? e : {};
                if (null == n || "" === n) {
                    let { editorState: e } = this.props;
                    n = O.Sq(e);
                }
                if (!t) {
                    let e = (0, S.kG)(n),
                        t = (0, S.$G)(e);
                    for (let t = 0; t < e.length; t++)
                        (0, S.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r,
                    }),
                        d.uvj.announce(B.intl.string(B.t.pKCxWF)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            F(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === O.Sq(t))) return void this.focusEditor();
                (t = O.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, k.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            F(this, "handleFocusSearch", (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = b.Z.getChannelId(),
                    r = g.Z.getChannel(n),
                    i = A.Z.getCurrentConfig({ location: "handleFocusSearch" }).enabled;
                if (
                    ((null == r ? void 0 : r.isThread()) &&
                        !i &&
                        (r = g.Z.getChannel(null == r ? void 0 : r.parent_id)),
                    null == r)
                )
                    return void this.focusEditor();
                let { searchContext: a } = this.props,
                    o = (0, N.ad)({ location: "SearchBar_handleFocusSearch" }),
                    s = a.type === G.aib.DMS && o;
                if (r.isPrivate() && !s) return void this.focusEditor();
                let l = (0, S.X3)(r);
                if (null == l) return void this.focusEditor();
                (0, k.PJ)({ searchContext: a }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: w.ZP[G.dCx.FILTER_IN].key + "".concat(l, " "),
                                replace: !0,
                            });
                    });
            }),
            F(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            F(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            F(this, "setEditorRef", (e) => {
                this._editorRef = e;
            }),
            F(this, "onFocus", () => {
                let { searchContext: e, isSearchActive: t } = this.props;
                this.setState({ focused: !0 }), t || (0, k.I1)({ searchContext: e });
            }),
            F(this, "handleBlur", (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    n || e || (0, k.IZ)({ searchContext: t }), O.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            F(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            F(this, "handleOption", () => {
                let { current: e } = this._searchPopoutRef;
                return (
                    null != e &&
                    (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel()
                        ? e.handleSearchInChannel({ searchAutocompleteSelectAction: U.ZW.KEY_PRESS })
                        : e.selectOption({ searchAutocompleteSelectAction: U.ZW.KEY_PRESS }))
                );
            }),
            F(this, "handleRedesignOption", () => {
                let { current: e } = this._searchFiltersRedesignPopoutRef;
                return null != e && e.selectOption({ searchAutocompleteSelectAction: U.ZW.KEY_PRESS });
            }),
            F(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                return (
                    e.preventDefault(),
                    (this.props.isSearchFiltersRedesignEnabled ? this.handleRedesignOption() : this.handleOption()) ||
                        ((0, S.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()),
                    "handled"
                );
            }),
            F(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    O.Sq(t).length >= V ||
                        ((t = O.x0(e, t)),
                        (t = O.Hl(t, V)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        n || this.setState({ focused: !0 })),
                    "handled"
                );
            }),
            F(this, "handleKeyCommand", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case "backspace":
                    case "backspace-word":
                    case "backspace-to-start-of-line":
                    case "delete":
                    case "delete-word":
                        return (
                            (t = O.yd(e, t)),
                            (t = this.tokenize(t)),
                            this.setEditorState(t),
                            n || this.setState({ focused: !0 }),
                            "handled"
                        );
                    case "transpose-characters":
                    case "move-selection-to-start-of-block":
                    case "move-selection-to-end-of-block":
                        return (t = O.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
                    case "split-block":
                    case "underline":
                    case "bold":
                    case "italic":
                        return "handled";
                }
                return "not-handled";
            }),
            F(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = O.x0(e, t)),
                    (t = O.Hl(t, V)),
                    (t = this.tokenize(t)),
                    n || this.setState({ focused: !0 }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            F(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                I.Z.setSearchState(t, e);
            }),
            F(this, "getPopoutRef", () => {
                let { current: e } = this._searchFiltersRedesignPopoutRef,
                    { current: t } = this._searchPopoutRef;
                return this.props.isSearchFiltersRedesignEnabled ? e : t;
            }),
            F(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchContext: a, keyboardModeEnabled: o } = this.props;
                if ((e.stopPropagation(), "Escape" === t)) {
                    if ((e.preventDefault(), O.xb(i))) this.blurEditor();
                    else {
                        let e = O.FZ(i);
                        I.Z.setSearchState(a, e), this.setState({ focused: !0 });
                    }
                    return !0;
                }
                if ("ArrowUp" === t) {
                    e.preventDefault();
                    let t = this.getPopoutRef();
                    return null != t && t.focusPreviousOption(), !0;
                }
                if ("ArrowDown" === t) {
                    e.preventDefault();
                    let t = this.getPopoutRef();
                    return null != t && t.focusNextOption(), !0;
                }
                if ("Tab" === t) {
                    if (o) return;
                    return (0, p.Qj)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && n))
                    return e.preventDefault(), (i = r ? O.R8(i) : O.eE(i)), this.setEditorState(i), !0;
                if ("End" === t || ("ArrowRight" === t && n))
                    return e.preventDefault(), (i = r ? O.Wg(i) : O.NJ(i)), this.setEditorState(i), !0;
                if (("Delete" === t || "Backspace" === t) && n) {
                    let e = O.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return O.q0(e);
            }),
            (0, S.WU)();
    }
}
function K(e) {
    let {
            searchContext: t,
            className: n,
            searchBarContainerClassName: a,
            searchBarClassName: o,
            searchPopoutClassName: s,
            popoutAlignment: l,
        } = e,
        c = (0, S.Tm)(t),
        f = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        p = (0, u.e7)([M.Z], () => (null != c ? M.Z.getEditorState(c) : null)),
        m = (0, u.e7)([M.Z], () => M.Z.getIsSearchTokensInitialized()),
        b = i.useRef(m);
    i.useEffect(() => {
        m && b.current !== m && ((b.current = m), x.Z.ensureSearchInputDecorators(t));
    }, [m, t]);
    let y = i.useMemo(() => (null != p ? p : O.nR(v.Jl(w.ZP))), [p]),
        {
            isSearching: I,
            isSearchActive: A,
            hasResults: N,
        } = (0, u.cj)([T.Z], () => {
            let e = T.Z.getTotalCount(c);
            return {
                hasResults: null != e && e > 0,
                isSearching: T.Z.getIsFetching(c),
                isSearchActive: T.Z.hasSearchState(c),
            };
        }),
        D = i.useRef(A);
    i.useEffect(() => {
        D.current && !A && ((D.current = !1), (0, k.IZ)({ searchContext: t })), !D.current && A && (D.current = !0);
    }, [A, t]);
    let L = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i } = e;
                P.ZP.refreshSearchQueryAnalyticsId(t),
                    (0, k.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                    }),
                    t.type === G.aib.DMS
                        ? x.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: n,
                          })
                        : Y({
                              searchContext: t,
                              searchQuery: r,
                              queryString: n,
                              searchEverywhere: i,
                              offset: 0,
                              searchMode: G.QIO.NEWEST,
                          });
            },
            [t],
        ),
        j = (0, u.e7)([E.Z, g.Z], () => {
            let e = (0, S.b7)(t) ? t.guildId : null;
            if (null != e) {
                let t = E.Z.getGuild(e);
                return null == t ? null : t.name;
            }
            let n = (0, S.AH)(t);
            if (null != n) {
                let e = g.Z.getChannel(n);
                return null == e ? null : (0, S.nl)(e);
            }
            return null;
        }),
        U = (0, R.nP)({ location: "Search" }),
        F = (0, R.KS)({ location: "Search" }),
        V = U || F,
        H = (0, C.$)({ location: "Search" }),
        K = i.useMemo(
            () =>
                t.type === G.aib.DMS
                    ? B.intl.string(B.t.m7OrlZ)
                    : H
                      ? B.intl.formatToPlainString(B.t.LDZtFB, { name: j })
                      : V
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  B.intl.formatToPlainString(B.t.LDZtFB, { name: j }),
                                  (0, r.jsx)("span", {
                                      className: Z.keybind,
                                      children: (0, r.jsx)(d.M2$, {
                                          shortcut: ["mod", "f"],
                                          className: Z.shortcut,
                                      }),
                                  }),
                              ],
                          })
                        : B.intl.string(B.t["5h0QOD"]),
            [t.type, V, j, H],
        ),
        z = (0, _.bp)(),
        q = i.useRef(z);
    return (
        i.useEffect(() => {
            q.current = z;
        }, [z]),
        i.useEffect(() => {
            (0, k.O2)({
                searchContext: t,
                appContext: q.current,
            });
        }, [t]),
        (0, r.jsx)(W, {
            className: n,
            searchPopoutClassName: s,
            searchBarContainerClassName: a,
            searchBarClassName: o,
            searchContext: t,
            isSearching: I,
            editorState: y,
            hasResults: N,
            keyboardModeEnabled: f,
            onSearch: L,
            isSearchActive: A,
            placeholder: K,
            popoutAlignment: l,
            isSearchFiltersRedesignEnabled: V,
        })
    );
}
function z(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, j.H)({
            guildId: n,
            channelId: i,
        });
    return null == a
        ? null
        : (0, r.jsx)(K, {
              className: t,
              searchContext: a,
          });
}
