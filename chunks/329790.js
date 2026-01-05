n.d(t, {
    ZP: () => q,
    uh: () => H,
}),
    n(35282),
    n(704826),
    n(388685);
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
    m = n(313201),
    h = n(6025),
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
    N = n(28964),
    P = n(971128),
    R = n(532428),
    w = n(991896),
    D = n(611004),
    x = n(165017),
    L = n(817190),
    j = n(315322),
    M = n(522204),
    k = n(763439),
    U = n(723642),
    G = n(125085),
    Z = n(981631),
    F = n(388032),
    B = n(435288);
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
n(948648);
let H = 512,
    Y = (0, m.hQ)(),
    W = c()(D.Z.fetchMessages, 500);
class K extends i.PureComponent {
    componentDidMount() {
        var e, t;
        O.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search),
            O.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            O.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox");
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
        O.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search),
            O.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            O.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, C.kG)(v.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return v.lv(t, e, R.ZP);
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
            placeholder: null != n ? n : F.intl.string(F.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? Y : void 0,
            ariaLabel: F.intl.string(F.t["5h0QOP"]),
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
                        className: o()(B.search, {
                            [B.open]: s || a,
                            [B.focused]: a,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: B.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: s || n,
                                            className: B.icon,
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
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a, searchQuerySource: o } = e,
                    { editorState: s } = this.props,
                    l = v.Sq(s);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    a ? ((s = v.c2(t, s)), (n = 0)) : (s = v.x0(t, s, n, r)),
                    (s = v.Hl(s, H)),
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
                    ? (0, r.jsx)(M.Z, {
                          ref: this._searchFiltersRedesignPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: Y,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                      })
                    : (0, r.jsx)(k.ZP, {
                          ref: this._searchPopoutRef,
                          searchContext: this.props.searchContext,
                          navId: Y,
                          onSelectedIndexChanged: this.handleSelectedIndexChanged,
                      });
            }),
            V(this, "search", (e) => {
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
                        d.uvj.announce(F.intl.string(F.t.pKCxWP)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            V(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === v.Sq(t))) return void this.focusEditor();
                (t = v.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, j.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            V(this, "handleFocusSearch", (e) => {
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
                if (r.isPrivate() && a.type !== Z.aib.DMS) return void this.focusEditor();
                let o = (0, C.X3)(r);
                if (null == o) return void this.focusEditor();
                (0, j.PJ)({ searchContext: a }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: R.ZP[Z.dCx.FILTER_IN].key + "".concat(o, " "),
                                replace: !0,
                                searchQuerySource: U.w7.SEARCH_TEXT_INPUT,
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
                let { searchContext: e, isSearchSidebarOrModalOpen: t } = this.props;
                this.setState({ focused: !0 }), t || (0, j.I1)({ searchContext: e });
            }),
            V(this, "handleBlur", (e) => {
                let { searchContext: t, isSearchSidebarOrModalOpen: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    n || e || (0, j.IZ)({ searchContext: t }), v.xb(this.props.editorState) && this.clearSearch();
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
                        ((0, C.X$)() && t
                            ? this.search({
                                  searchEverywhere: !0,
                                  searchQuerySource: U.w7.SEARCH_TEXT_INPUT,
                              })
                            : this.search({ searchQuerySource: U.w7.SEARCH_TEXT_INPUT })),
                    "handled"
                );
            }),
            V(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    v.Sq(t).length >= H ||
                        ((t = v.x0(e, t)),
                        (t = v.Hl(t, H)),
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
            V(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = v.x0(e, t)),
                    (t = v.Hl(t, H)),
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
function z(e) {
    let { searchContext: t, className: n } = e,
        a = (0, C.Tm)(t),
        o = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        s = (0, u.e7)([L.Z], () => L.Z.getEditorState(a));
    i.useEffect(
        () => (
            h.Z.setSelectedSearchContext(a),
            () => {
                h.Z.setSelectedSearchContext(null);
            }
        ),
        [a],
    );
    let l = (0, u.e7)([L.Z], () => L.Z.getIsSearchTokensInitialized()),
        c = i.useRef(l);
    i.useEffect(() => {
        l && c.current !== l && ((c.current = l), D.Z.ensureSearchInputDecorators(t));
    }, [l, t]);
    let f = i.useMemo(() => (null != s ? s : v.nR(S.Jl(R.ZP))), [s]),
        { isSearching: p, hasResults: m } = (0, u.cj)([T.Z], () => {
            let e = T.Z.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: T.Z.getIsFetching(a),
            };
        }),
        O = (0, u.e7)([g.ZP], () => g.ZP.getCurrentSearchContextId()),
        [I, A] = i.useState(!1),
        x = i.useRef(I),
        M = (0, u.e7)([g.ZP, y.Z, E.Z], () => {
            let e = y.Z.getCurrentlySelectedChannelId(),
                t = E.Z.getChannel(e);
            return g.ZP.getSection(e, null == t ? void 0 : t.isDM()) === Z.ULH.SEARCH;
        }),
        k = M || I;
    i.useEffect(() => {
        O === (0, C.Tm)(t) && A(M);
    }, [O, M, t]);
    let U = (0, d.VXO)(G.L),
        B = k || U;
    i.useEffect(() => {
        x.current && !I && ((x.current = !1), (0, j.IZ)({ searchContext: t })), !x.current && I && (x.current = !0);
    }, [t, I]);
    let V = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i, searchQuerySource: a } = e;
                P.Z.refreshSearchQueryAnalyticsId(t),
                    (0, j.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                        searchQuerySource: a,
                    }),
                    w.Z.updateSearchMode(t, Z.QIO.NEWEST),
                    W({
                        searchContext: t,
                        searchQueryString: n,
                        searchEverywhere: i,
                        offset: 0,
                    });
            },
            [t],
        ),
        H = (0, u.e7)([b.Z, E.Z], () => {
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
        Y = (0, N.kU)({ location: "Search" }),
        z = i.useMemo(() => {
            switch (t.type) {
                case Z.aib.DMS:
                    return F.intl.string(F.t.m7OrlR);
                case Z.aib.FAVORITES:
                    return F.intl.string(F.t["5h0QOP"]);
                default:
                    return F.intl.formatToPlainString(F.t.LDZtFO, { name: H });
            }
        }, [t.type, H]);
    return (0, r.jsx)(K, {
        className: n,
        searchContext: t,
        isSearching: p,
        editorState: f,
        hasResults: m,
        keyboardModeEnabled: o,
        onSearch: V,
        isSearchSidebarOrModalOpen: B,
        placeholder: z,
        isSearchFiltersRedesignEnabled: Y,
    });
}
function q(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, x.H)({
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
