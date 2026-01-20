n.d(t, {
    ZP: () => K,
    uh: () => B,
}),
    n(35282),
    n(704826);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(923010),
    l = n(299608),
    c = n.n(l),
    u = n(442837),
    d = n(481060),
    f = n(349033),
    p = n(857595),
    _ = n(607070),
    h = n(313201),
    m = n(6025),
    g = n(433355),
    E = n(592125),
    b = n(430824),
    y = n(944486),
    O = n(585483),
    v = n(72006),
    S = n(181389),
    I = n(748610),
    T = n(171900),
    C = n(607802),
    A = n(612806),
    N = n(423880),
    P = n(532428),
    w = n(991896),
    R = n(611004),
    D = n(165017),
    x = n(817190),
    L = n(315322),
    j = n(763439),
    M = n(723642),
    k = n(125085),
    U = n(981631),
    G = n(388032),
    Z = n(435288);
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
n(948648);
let B = 512,
    V = (0, h.hQ)(),
    H = c()(R.Z.fetchMessages, 500);
class Y extends i.PureComponent {
    componentDidMount() {
        O.S.subscribe(U.CkL.PERFORM_SEARCH, this.search),
            O.S.subscribe(U.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            O.S.subscribe(U.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if ((n !== e.searchContext && I.Z.initializeAutocomplete(n), t !== e.editorState)) {
            let e = v.Sq(t),
                r = (0, C.kG)(v.Sq(t)),
                i = S.g9(r, t);
            I.Z.updateAutocompleteQuery({
                searchContext: n,
                tokens: r,
                cursorScope: i,
                queryString: e,
            }),
                null != this._editorRef && v.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        var e, t, n;
        O.S.unsubscribe(U.CkL.PERFORM_SEARCH, this.search),
            O.S.unsubscribe(U.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            O.S.unsubscribe(U.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null == (n = this._editorRef) ||
                null == (t = n.editor) ||
                null == (e = t.removeEventListener) ||
                e.call(t, "cut", this.handleCutEvent);
    }
    tokenize(e) {
        let t = (0, C.kG)(v.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return v.lv(t, e, P.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        R.Z.cleanUpSearchState(e);
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
            placeholder: null != n ? n : G.intl.string(G.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? V : void 0,
            ariaLabel: G.intl.string(G.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: a } = this.state,
            s = v.Sq(t).length > 0;
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
                        className: o()(Z.search, {
                            [Z.open]: s || a,
                            [Z.focused]: a,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: Z.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: s || n,
                                            className: Z.icon,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, C.Tm)(e),
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
            F(this, "handleCutEvent", (e) => {
                if ((e.preventDefault(), null == e.clipboardData)) return;
                let { editorState: t } = this.props,
                    n = t.getSelection();
                if (n.isCollapsed()) return;
                let r = v.Sq(t),
                    i = n.getStartOffset(),
                    a = n.getEndOffset(),
                    o = r.substring(i, a);
                e.clipboardData.setData("text/plain", o);
                let s = v.yd("delete", t);
                (s = this.tokenize(s)), this.setEditorState(s);
            }),
            F(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a, searchQuerySource: o } = e,
                    { editorState: s } = this.props,
                    l = v.Sq(s);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    a ? ((s = v.c2(t, s)), (n = 0)) : (s = v.x0(t, s, n, r)),
                    (s = v.Hl(s, B)),
                    (s = this.tokenize(s));
                let c = Number(n) + t.length;
                (s = v.iK(c, s)),
                    this.setEditorState(s),
                    i &&
                        this.search({
                            queryString: v.Sq(s),
                            searchQuerySource: o,
                        });
            }),
            F(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(V, "-").concat(e) : void 0),
                    this.setState({ selectedIndex: e });
            }),
            F(this, "renderPopout", () =>
                (0, r.jsx)(j.Z, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: V,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged,
                }),
            ),
            F(this, "search", (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r, searchQuerySource: i } = null != e ? e : {};
                if (null == n || "" === n) {
                    let { editorState: e } = this.props;
                    n = v.Sq(e);
                }
                if (!t) {
                    let e = (0, C.kG)(n),
                        t = (0, C.$G)(e);
                    for (let t = 0; t < e.length; t++)
                        (0, C.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r,
                        searchQuerySource: i,
                    }),
                        d.uvj.announce(G.intl.string(G.t.pKCxWP)),
                        this.handleBlur();
                }
                return !0;
            }),
            F(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === v.Sq(t))) return void this.focusEditor();
                (t = v.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, L.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            F(this, "handleFocusSearch", (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = y.Z.getChannelId(),
                    r = E.Z.getChannel(n),
                    i = A.Z.getCurrentConfig({ location: "handleFocusSearch" }).enabled;
                if (
                    ((null == r ? void 0 : r.isThread()) &&
                        !i &&
                        (r = E.Z.getChannel(null == r ? void 0 : r.parent_id)),
                    null == r)
                )
                    return void this.focusEditor();
                let { searchContext: a } = this.props;
                if (r.isPrivate() && a.type !== U.aib.DMS) return void this.focusEditor();
                let o = (0, C.X3)(r);
                if (null == o) return void this.focusEditor();
                (0, L.PJ)({ searchContext: a }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: P.ZP[U.dCx.FILTER_IN].key + "".concat(o, " "),
                                replace: !0,
                                searchQuerySource: M.w7.SEARCH_TEXT_INPUT,
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
                var t, n, r, i, a, o;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.removeEventListener("cut", this.handleCutEvent),
                    (this._editorRef = e),
                    null == (i = this._editorRef) ||
                        null == (r = i.editor) ||
                        r.setAttribute("aria-haspopup", "listbox"),
                    null == (o = this._editorRef) ||
                        null == (a = o.editor) ||
                        a.addEventListener("cut", this.handleCutEvent);
            }),
            F(this, "onFocus", () => {
                let { searchContext: e } = this.props;
                this.setState({ focused: !0 }), N.Z.setFocused(e, !0);
            }),
            F(this, "handleBlur", () => {
                let { searchContext: e } = this.props;
                N.Z.setFocused(e, !1),
                    this.setState({ focused: !1 }, () => {
                        v.xb(this.props.editorState) && this.clearSearch();
                    });
            }),
            F(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            F(this, "handleOption", () => {
                let { current: e } = this._searchPopoutRef;
                return null != e && e.selectOption({ searchAutocompleteSelectAction: M.ZW.KEY_PRESS });
            }),
            F(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                return (
                    e.preventDefault(),
                    this.handleOption() ||
                        ((0, C.X$)() && t
                            ? this.search({
                                  searchEverywhere: !0,
                                  searchQuerySource: M.w7.SEARCH_TEXT_INPUT,
                              })
                            : this.search({ searchQuerySource: M.w7.SEARCH_TEXT_INPUT })),
                    "handled"
                );
            }),
            F(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    v.Sq(t).length >= B ||
                        ((t = v.x0(e, t)),
                        (t = v.Hl(t, B)),
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
                            (t = v.yd(e, t)),
                            (t = this.tokenize(t)),
                            this.setEditorState(t),
                            n || this.setState({ focused: !0 }),
                            "handled"
                        );
                    case "transpose-characters":
                    case "move-selection-to-start-of-block":
                    case "move-selection-to-end-of-block":
                        return (t = v.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
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
                    (t = v.x0(e, t)),
                    (t = v.Hl(t, B)),
                    (t = this.tokenize(t)),
                    n || this.setState({ focused: !0 }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            F(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                w.Z.updateSearchEditorState(t, e);
            }),
            F(this, "getPopoutRef", () => {
                let { current: e } = this._searchPopoutRef;
                return e;
            }),
            F(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r, ctrlKey: i } = e,
                    { editorState: a, searchContext: o, keyboardModeEnabled: s } = this.props;
                if ((e.stopPropagation(), (n || i) && "a" === t.toLowerCase())) {
                    e.preventDefault();
                    let t = v.m1(a);
                    return this.setEditorState(t), this.setState({ focused: !0 }), !0;
                }
                if ("Escape" === t) {
                    if ((e.preventDefault(), v.xb(a))) this.blurEditor();
                    else {
                        let e = v.FZ(a);
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
                    return (0, p.Qj)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && n))
                    return e.preventDefault(), (a = r ? v.R8(a) : v.eE(a)), this.setEditorState(a), !0;
                if ("End" === t || ("ArrowRight" === t && n))
                    return e.preventDefault(), (a = r ? v.Wg(a) : v.NJ(a)), this.setEditorState(a), !0;
                if (("Delete" === t || "Backspace" === t) && n) {
                    let e = v.FZ(a);
                    return this.setEditorState(e), !0;
                }
                return v.q0(e);
            }),
            (0, C.WU)();
    }
}
function W(e) {
    let { searchContext: t, className: n } = e,
        a = (0, C.Tm)(t),
        o = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        s = (0, u.e7)([x.Z], () => x.Z.getEditorState(a));
    i.useEffect(
        () => (
            m.Z.setSelectedSearchContext(a),
            () => {
                m.Z.setSelectedSearchContext(null);
            }
        ),
        [a],
    );
    let l = (0, u.e7)([x.Z], () => x.Z.getIsSearchTokensInitialized()),
        c = i.useRef(l);
    i.useEffect(() => {
        l && c.current !== l && ((c.current = l), R.Z.ensureSearchInputDecorators(t));
    }, [l, t]);
    let f = i.useMemo(() => (null != s ? s : v.nR(S.Jl(P.ZP))), [s]),
        { isSearching: p, hasResults: h } = (0, u.cj)([T.Z], () => {
            let e = T.Z.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: T.Z.getIsFetching(a),
            };
        }),
        O = (0, u.e7)([g.ZP, y.Z, E.Z], () => {
            let e = y.Z.getCurrentlySelectedChannelId(),
                t = E.Z.getChannel(e);
            return g.ZP.getSection(e, null == t ? void 0 : t.isDM()) === U.ULH.SEARCH;
        });
    i.useEffect(() => {
        N.Z.setSidebarOpen(t, O);
    }, [t, O]);
    let I = (0, d.VXO)(k.L);
    i.useEffect(() => {
        N.Z.setFiltersModalOpen(t, I);
    }, [t, I]);
    let A = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i, searchQuerySource: a } = e;
                N.Z.refreshQueryId(t),
                    (0, L.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                        searchQuerySource: a,
                    }),
                    w.Z.updateSearchMode(t, U.QIO.NEWEST),
                    H({
                        searchContext: t,
                        searchQueryString: n,
                        searchEverywhere: i,
                        offset: 0,
                    });
            },
            [t],
        ),
        D = (0, u.e7)([b.Z, E.Z], () => {
            let e = (0, C.b7)(t) ? t.guildId : null;
            if (null != e) {
                let t = b.Z.getGuild(e);
                return null == t ? null : t.name;
            }
            let n = (0, C.AH)(t);
            if (null != n) {
                let e = E.Z.getChannel(n);
                return null == e ? null : (0, C.nl)(e);
            }
            return null;
        }),
        j = i.useMemo(() => {
            switch (t.type) {
                case U.aib.DMS:
                    return G.intl.string(G.t.m7OrlR);
                case U.aib.FAVORITES:
                    return G.intl.string(G.t["5h0QOP"]);
                default:
                    return G.intl.formatToPlainString(G.t.LDZtFO, { name: D });
            }
        }, [t.type, D]);
    return (0, r.jsx)(Y, {
        className: n,
        searchContext: t,
        isSearching: p,
        editorState: f,
        hasResults: h,
        keyboardModeEnabled: o,
        onSearch: A,
        placeholder: j,
    });
}
function K(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, D.H)({
            guildId: n,
            channelId: i,
        });
    return null == a
        ? null
        : (0, r.jsx)(W, {
              className: t,
              searchContext: a,
          });
}
