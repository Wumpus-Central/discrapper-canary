n.d(t, {
    Z: () => K,
    o: () => W,
}),
    n(35282),
    n(704826);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(258863),
    l = n(299608),
    c = n.n(l),
    u = n(442837),
    d = n(481060),
    f = n(349033),
    _ = n(857595),
    p = n(607070),
    h = n(313201),
    m = n(592125),
    g = n(430824),
    E = n(944486),
    b = n(585483),
    y = n(72006),
    O = n(181389),
    v = n(748610),
    I = n(171900),
    T = n(607802),
    S = n(612806),
    A = n(819439),
    C = n(945577),
    N = n(28964),
    R = n(971128),
    P = n(532428),
    w = n(583642),
    D = n(611004),
    x = n(778177),
    L = n(165017),
    j = n(817190),
    M = n(315322),
    k = n(723642),
    U = n(981631),
    G = n(388032),
    B = n(557818);
function Z(e, t, n) {
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
n(571654);
let F = 512,
    V = (0, h.hQ)(),
    H = c()(D.Z.fetchMessages, 500);
class Y extends i.PureComponent {
    componentDidMount() {
        var e, t;
        b.S.subscribe(U.CkL.PERFORM_SEARCH, this.search),
            b.S.subscribe(U.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            b.S.subscribe(U.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox");
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, T.kG)(y.Sq(t)),
                r = O.g9(e, t);
            v.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && y.iE(this._editorRef.editor);
        }
        n !== e.searchContext && v.Z.initializeAutocomplete(n);
    }
    componentWillUnmount() {
        b.S.unsubscribe(U.CkL.PERFORM_SEARCH, this.search),
            b.S.unsubscribe(U.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            b.S.unsubscribe(U.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, T.kG)(y.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return y.lv(t, e, P.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        D.Z.cleanUpSearchState(e);
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
            placeholder: null != n ? n : G.intl.string(G.t["5h0QOD"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? V : void 0,
            ariaLabel: G.intl.string(G.t["5h0QOD"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let {
                searchContext: e,
                editorState: t,
                hasResults: n,
                className: i,
                searchBarContainerClassName: o,
                searchBarClassName: s,
                popoutAlignment: l,
            } = this.props,
            { focused: c } = this.state,
            u = y.Sq(t).length > 0;
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
                        className: a()(B.search, o, {
                            [B.open]: u || c,
                            [B.focused]: c,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (f = this._editorRef) ? void 0 : f.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: a()(B.searchBar, s),
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(_),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: u || n,
                                            className: B.icon,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, T.Tm)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
    constructor(e) {
        super(e),
            Z(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            Z(this, "_editorRef", void 0),
            Z(this, "_containerRef", i.createRef()),
            Z(this, "_searchBarRef", i.createRef()),
            Z(this, "_searchPopoutRef", i.createRef()),
            Z(this, "_searchFiltersRedesignPopoutRef", i.createRef()),
            Z(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: o } = e,
                    { editorState: a } = this.props,
                    s = y.Sq(a);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    o ? ((a = y.c2(t, a)), (n = 0)) : (a = y.x0(t, a, n, r)),
                    (a = y.Hl(a, F)),
                    (a = this.tokenize(a));
                let l = Number(n) + t.length;
                (a = y.iK(l, a)), this.setEditorState(a), i && this.search({ queryString: y.Sq(a) });
            }),
            Z(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(V, "-").concat(e) : void 0),
                    this.setState({ selectedIndex: e });
            }),
            Z(this, "renderPopout", () => {
                let { isSearchFiltersRedesignEnabled: e } = this.props;
                return e
                    ? (0, r.jsx)(w.Z, {
                          ref: this._searchFiltersRedesignPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: V,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                          className: this.props.searchPopoutClassName,
                      })
                    : (0, r.jsx)(x.ZP, {
                          ref: this._searchPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: V,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                          className: this.props.searchPopoutClassName,
                      });
            }),
            Z(this, "search", (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r } = null != e ? e : {};
                if (null == n || "" === n) {
                    let { editorState: e } = this.props;
                    n = y.Sq(e);
                }
                if (!t) {
                    let e = (0, T.kG)(n),
                        t = (0, T.$G)(e);
                    for (let t = 0; t < e.length; t++)
                        (0, T.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r,
                    }),
                        d.uvj.announce(G.intl.string(G.t.pKCxWF)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            Z(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === y.Sq(t))) return void this.focusEditor();
                (t = y.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, M.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            Z(this, "handleFocusSearch", (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = E.Z.getChannelId(),
                    r = m.Z.getChannel(n),
                    i = S.Z.getCurrentConfig({ location: "handleFocusSearch" }).enabled;
                if (
                    ((null == r ? void 0 : r.isThread()) &&
                        !i &&
                        (r = m.Z.getChannel(null == r ? void 0 : r.parent_id)),
                    null == r)
                )
                    return void this.focusEditor();
                let { searchContext: o } = this.props,
                    a = (0, C.ad)({ location: "SearchBar_handleFocusSearch" }),
                    s = o.type === U.aib.DMS && a;
                if (r.isPrivate() && !s) return void this.focusEditor();
                let l = (0, T.X3)(r);
                if (null == l) return void this.focusEditor();
                (0, M.PJ)({ searchContext: o }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: P.ZP[U.dCx.FILTER_IN].key + "".concat(l, " "),
                                replace: !0,
                            });
                    });
            }),
            Z(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            Z(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            Z(this, "setEditorRef", (e) => {
                this._editorRef = e;
            }),
            Z(this, "onFocus", () => {
                let { searchContext: e, isSearchActive: t } = this.props;
                this.setState({ focused: !0 }), t || (0, M.I1)({ searchContext: e });
            }),
            Z(this, "handleBlur", (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    n || e || (0, M.IZ)({ searchContext: t }), y.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            Z(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            Z(
                this,
                "handleOption",
                (e) =>
                    null != e &&
                    (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel()
                        ? e.handleSearchInChannel({ searchAutocompleteSelectAction: k.ZW.KEY_PRESS })
                        : e.selectOption({ searchAutocompleteSelectAction: k.ZW.KEY_PRESS })),
            ),
            Z(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (
                    this.handleOption(n) || ((0, T.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()),
                    "handled"
                );
            }),
            Z(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    y.Sq(t).length >= F ||
                        ((t = y.x0(e, t)),
                        (t = y.Hl(t, F)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        n || this.setState({ focused: !0 })),
                    "handled"
                );
            }),
            Z(this, "handleKeyCommand", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case "backspace":
                    case "backspace-word":
                    case "backspace-to-start-of-line":
                    case "delete":
                    case "delete-word":
                        return (
                            (t = y.yd(e, t)),
                            (t = this.tokenize(t)),
                            this.setEditorState(t),
                            n || this.setState({ focused: !0 }),
                            "handled"
                        );
                    case "transpose-characters":
                    case "move-selection-to-start-of-block":
                    case "move-selection-to-end-of-block":
                        return (t = y.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
                    case "split-block":
                    case "underline":
                    case "bold":
                    case "italic":
                        return "handled";
                }
                return "not-handled";
            }),
            Z(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = y.x0(e, t)),
                    (t = y.Hl(t, F)),
                    (t = this.tokenize(t)),
                    n || this.setState({ focused: !0 }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            Z(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                v.Z.setSearchState(t, e);
            }),
            Z(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchContext: o, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), "Escape" === t)) {
                    if ((e.preventDefault(), y.xb(i))) this.blurEditor();
                    else {
                        let e = y.FZ(i);
                        v.Z.setSearchState(o, e), this.setState({ focused: !0 });
                    }
                    return !0;
                }
                if ("ArrowUp" === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return null != t && t.focusPreviousOption(), !0;
                }
                if ("ArrowDown" === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return null != t && t.focusNextOption(), !0;
                }
                if ("Tab" === t) {
                    if (a) return;
                    return (0, _.Qj)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && n))
                    return e.preventDefault(), (i = r ? y.R8(i) : y.eE(i)), this.setEditorState(i), !0;
                if ("End" === t || ("ArrowRight" === t && n))
                    return e.preventDefault(), (i = r ? y.Wg(i) : y.NJ(i)), this.setEditorState(i), !0;
                if (("Delete" === t || "Backspace" === t) && n) {
                    let e = y.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return y.q0(e);
            }),
            (0, T.WU)();
    }
}
function W(e) {
    let {
            searchContext: t,
            className: n,
            searchBarContainerClassName: o,
            searchBarClassName: a,
            searchPopoutClassName: s,
            popoutAlignment: l,
        } = e,
        c = (0, T.Tm)(t),
        f = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        _ = (0, u.e7)([j.Z], () => (null != c ? j.Z.getEditorState(c) : null)),
        h = (0, u.e7)([j.Z], () => j.Z.getIsSearchTokensInitialized()),
        E = i.useRef(h);
    i.useEffect(() => {
        h && E.current !== h && ((E.current = h), D.Z.ensureSearchInputDecorators(t));
    }, [h, t]);
    let b = i.useMemo(() => (null != _ ? _ : y.nR(O.Jl(P.ZP))), [_]),
        {
            isSearching: v,
            isSearchActive: S,
            hasResults: C,
        } = (0, u.cj)([I.Z], () => {
            let e = I.Z.getTotalCount(c);
            return {
                hasResults: null != e && e > 0,
                isSearching: I.Z.getIsFetching(c),
                isSearchActive: I.Z.hasSearchState(c),
            };
        }),
        w = i.useRef(S);
    i.useEffect(() => {
        w.current && !S && ((w.current = !1), (0, M.IZ)({ searchContext: t })), !w.current && S && (w.current = !0);
    }, [S, t]);
    let x = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i } = e;
                R.ZP.refreshSearchQueryAnalyticsId(t),
                    (0, M.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                    }),
                    t.type === U.aib.DMS
                        ? D.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: n,
                          })
                        : H({
                              searchContext: t,
                              searchQuery: r,
                              queryString: n,
                              searchEverywhere: i,
                              offset: 0,
                              searchMode: U.QIO.NEWEST,
                          });
            },
            [t],
        ),
        L = (0, u.e7)([g.Z, m.Z], () => {
            let e = (0, T.b7)(t) ? t.guildId : null;
            if (null != e) {
                let t = g.Z.getGuild(e);
                return null == t ? null : t.name;
            }
            let n = (0, T.AH)(t);
            if (null != n) {
                let e = m.Z.getChannel(n);
                return null == e ? null : (0, T.nl)(e);
            }
            return null;
        }),
        k = (0, N.nP)({
            isXDMSearch: t.type === U.aib.DMS,
            location: "Search",
        }),
        Z = (0, N.KS)({
            isXDMSearch: t.type === U.aib.DMS,
            location: "Search",
        }),
        F = k || Z,
        V = (0, A.$)({ location: "Search" }),
        W = i.useMemo(
            () =>
                t.type === U.aib.DMS
                    ? G.intl.string(G.t.m7OrlZ)
                    : V
                      ? G.intl.formatToPlainString(G.t.LDZtFB, { name: L })
                      : F
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  G.intl.formatToPlainString(G.t.LDZtFB, { name: L }),
                                  (0, r.jsx)("span", {
                                      className: B.keybind,
                                      children: (0, r.jsx)(d.M2$, {
                                          shortcut: ["mod", "f"],
                                          className: B.shortcut,
                                      }),
                                  }),
                              ],
                          })
                        : G.intl.string(G.t["5h0QOD"]),
            [t.type, F, L, V],
        );
    return (0, r.jsx)(Y, {
        className: n,
        searchPopoutClassName: s,
        searchBarContainerClassName: o,
        searchBarClassName: a,
        searchContext: t,
        isSearching: v,
        editorState: b,
        hasResults: C,
        keyboardModeEnabled: f,
        onSearch: x,
        isSearchActive: S,
        placeholder: W,
        popoutAlignment: l,
        isSearchFiltersRedesignEnabled: F,
    });
}
function K(e) {
    let { className: t, guildId: n, channelId: i } = e,
        o = (0, L.H)({
            guildId: n,
            channelId: i,
        });
    return null == o
        ? null
        : (0, r.jsx)(W, {
              className: t,
              searchContext: o,
          });
}
