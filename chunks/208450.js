n.d(t, {
    ZP: () => q,
    uh: () => H,
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
    _ = n(857595),
    p = n(607070),
    h = n(313201),
    m = n(6025),
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
    C = n(945577),
    N = n(28964),
    R = n(971128),
    P = n(532428),
    D = n(583642),
    w = n(991896),
    x = n(611004),
    L = n(778177),
    M = n(165017),
    j = n(817190),
    k = n(315322),
    U = n(723642),
    G = n(125085),
    B = n(981631),
    Z = n(388032),
    F = n(557818);
function V(e, t, n) {
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
let H = 512,
    Y = (0, h.hQ)(),
    W = c()(x.Z.fetchMessages, 500);
class K extends i.PureComponent {
    componentDidMount() {
        var e, t;
        y.S.subscribe(B.CkL.PERFORM_SEARCH, this.search),
            y.S.subscribe(B.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y.S.subscribe(B.CkL.FOCUS_SEARCH, this.handleFocusSearch),
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
        y.S.unsubscribe(B.CkL.PERFORM_SEARCH, this.search),
            y.S.unsubscribe(B.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y.S.unsubscribe(B.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, S.kG)(O.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return O.lv(t, e, P.ZP);
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
            placeholder: null != n ? n : Z.intl.string(Z.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? Y : void 0,
            ariaLabel: Z.intl.string(Z.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: a } = this.state,
            s = O.Sq(t).length > 0;
        return (0, r.jsx)(d.yRy, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.yRy.Animation.NONE,
            shouldShow: a,
            autoInvert: !1,
            children: (t, l) => {
                var c;
                let { isShown: u } = l;
                return (0, r.jsx)("div", {
                    className: i,
                    ref: this._containerRef,
                    children: (0, r.jsx)("div", {
                        className: o()(F.search, {
                            [F.open]: s || a,
                            [F.focused]: a,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: F.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: s || n,
                                            className: F.icon,
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
            V(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            V(this, "_editorRef", void 0),
            V(this, "_containerRef", i.createRef()),
            V(this, "_searchBarRef", i.createRef()),
            V(this, "_searchPopoutRef", i.createRef()),
            V(this, "_searchFiltersRedesignPopoutRef", i.createRef()),
            V(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a } = e,
                    { editorState: o } = this.props,
                    s = O.Sq(o);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    a ? ((o = O.c2(t, o)), (n = 0)) : (o = O.x0(t, o, n, r)),
                    (o = O.Hl(o, H)),
                    (o = this.tokenize(o));
                let l = Number(n) + t.length;
                (o = O.iK(l, o)), this.setEditorState(o), i && this.search({ queryString: O.Sq(o) });
            }),
            V(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(Y, "-").concat(e) : void 0),
                    this.setState({ selectedIndex: e });
            }),
            V(this, "renderPopout", () => {
                let { isSearchFiltersRedesignEnabled: e } = this.props;
                return e
                    ? (0, r.jsx)(D.Z, {
                          ref: this._searchFiltersRedesignPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: Y,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                      })
                    : (0, r.jsx)(L.ZP, {
                          ref: this._searchPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: Y,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                      });
            }),
            V(this, "search", (e) => {
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
                        d.uvj.announce(Z.intl.string(Z.t.pKCxWP)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            V(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === O.Sq(t))) return void this.focusEditor();
                (t = O.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, k.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            V(this, "handleFocusSearch", (e) => {
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
                let { searchContext: a } = this.props;
                if (r.isPrivate() && a.type !== B.aib.DMS) return void this.focusEditor();
                let o = (0, S.X3)(r);
                if (null == o) return void this.focusEditor();
                (0, k.PJ)({ searchContext: a }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: P.ZP[B.dCx.FILTER_IN].key + "".concat(o, " "),
                                replace: !0,
                            });
                    });
            }),
            V(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            V(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            V(this, "setEditorRef", (e) => {
                this._editorRef = e;
            }),
            V(this, "onFocus", () => {
                let { searchContext: e, isSearchActive: t } = this.props;
                this.setState({ focused: !0 }), t || (0, k.I1)({ searchContext: e });
            }),
            V(this, "handleBlur", (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    n || e || (0, k.IZ)({ searchContext: t }), O.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            V(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            V(this, "handleOption", () => {
                let { current: e } = this._searchPopoutRef;
                return (
                    null != e &&
                    (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel()
                        ? e.handleSearchInChannel({ searchAutocompleteSelectAction: U.ZW.KEY_PRESS })
                        : e.selectOption({ searchAutocompleteSelectAction: U.ZW.KEY_PRESS }))
                );
            }),
            V(this, "handleRedesignOption", () => {
                let { current: e } = this._searchFiltersRedesignPopoutRef;
                return null != e && e.selectOption({ searchAutocompleteSelectAction: U.ZW.KEY_PRESS });
            }),
            V(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                return (
                    e.preventDefault(),
                    (this.props.isSearchFiltersRedesignEnabled ? this.handleRedesignOption() : this.handleOption()) ||
                        ((0, S.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()),
                    "handled"
                );
            }),
            V(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    O.Sq(t).length >= H ||
                        ((t = O.x0(e, t)),
                        (t = O.Hl(t, H)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        n || this.setState({ focused: !0 })),
                    "handled"
                );
            }),
            V(this, "handleKeyCommand", (e) => {
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
            V(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = O.x0(e, t)),
                    (t = O.Hl(t, H)),
                    (t = this.tokenize(t)),
                    n || this.setState({ focused: !0 }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            V(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                w.Z.updateSearchEditorState(t, e);
            }),
            V(this, "getPopoutRef", () => {
                let { current: e } = this._searchFiltersRedesignPopoutRef,
                    { current: t } = this._searchPopoutRef;
                return this.props.isSearchFiltersRedesignEnabled ? e : t;
            }),
            V(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r, ctrlKey: i } = e,
                    { editorState: a, searchContext: o, keyboardModeEnabled: s } = this.props;
                if ((e.stopPropagation(), (n || i) && "a" === t.toLowerCase())) {
                    e.preventDefault();
                    let t = O.m1(a);
                    return this.setEditorState(t), this.setState({ focused: !0 }), !0;
                }
                if ("Escape" === t) {
                    if ((e.preventDefault(), O.xb(a))) this.blurEditor();
                    else {
                        let e = O.FZ(a);
                        w.Z.updateSearchEditorState(o, e), this.setState({ focused: !0 });
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
                    if (s) return;
                    return (0, _.Qj)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && n))
                    return e.preventDefault(), (a = r ? O.R8(a) : O.eE(a)), this.setEditorState(a), !0;
                if ("End" === t || ("ArrowRight" === t && n))
                    return e.preventDefault(), (a = r ? O.Wg(a) : O.NJ(a)), this.setEditorState(a), !0;
                if (("Delete" === t || "Backspace" === t) && n) {
                    let e = O.FZ(a);
                    return this.setEditorState(e), !0;
                }
                return O.q0(e);
            }),
            (0, S.WU)();
    }
}
function z(e) {
    let { searchContext: t, className: n } = e,
        a = (0, S.Tm)(t),
        o = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        s = (0, u.e7)([j.Z], () => j.Z.getEditorState(a));
    i.useEffect(
        () => (
            m.Z.setSelectedSearchContext(a),
            () => {
                m.Z.setSelectedSearchContext(null);
            }
        ),
        [a],
    );
    let l = (0, u.e7)([j.Z], () => j.Z.getIsSearchTokensInitialized()),
        c = i.useRef(l);
    i.useEffect(() => {
        l && c.current !== l && ((c.current = l), x.Z.ensureSearchInputDecorators(t));
    }, [l, t]);
    let f = i.useMemo(() => (null != s ? s : O.nR(v.Jl(P.ZP))), [s]),
        {
            isSearching: _,
            isSearchSidebarOpen: h,
            hasResults: b,
        } = (0, u.cj)([T.Z], () => {
            let e = T.Z.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: T.Z.getIsFetching(a),
                isSearchSidebarOpen: T.Z.hasSearchState(a),
            };
        }),
        y = (0, d.VXO)(G.L),
        I = h || y,
        A = i.useRef(I);
    i.useEffect(() => {
        A.current && !I && ((A.current = !1), (0, k.IZ)({ searchContext: t })), !A.current && I && (A.current = !0);
    }, [I, t]);
    let D = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i } = e;
                R.Z.refreshSearchQueryAnalyticsId(t),
                    (0, k.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                    }),
                    w.Z.updateSearchMode(t, B.QIO.NEWEST),
                    W({
                        searchContext: t,
                        searchQueryString: n,
                        searchEverywhere: i,
                        offset: 0,
                    });
            },
            [t],
        ),
        L = (0, u.e7)([E.Z, g.Z], () => {
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
        M = (0, N.nP)({ location: "Search" }),
        U = (0, N.KS)({ location: "Search" }),
        F = M || U,
        V = (0, C.UX)({ location: "Search" }),
        H = i.useMemo(
            () =>
                t.type === B.aib.DMS
                    ? Z.intl.string(Z.t.m7OrlR)
                    : (t.type === B.aib.CHANNEL && V) || F
                      ? Z.intl.formatToPlainString(Z.t.LDZtFO, { name: L })
                      : Z.intl.string(Z.t["5h0QOP"]),
            [t.type, V, F, L],
        );
    return (0, r.jsx)(K, {
        className: n,
        searchContext: t,
        isSearching: _,
        editorState: f,
        hasResults: b,
        keyboardModeEnabled: o,
        onSearch: D,
        isSearchActive: I,
        placeholder: H,
        isSearchFiltersRedesignEnabled: F,
    });
}
function q(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, M.H)({
            guildId: n,
            channelId: i,
        });
    return null == a
        ? null
        : (0, r.jsx)(z, {
              className: t,
              searchContext: a,
          });
}
