n.d(t, {
    Z: () => G,
    o: () => Q,
}),
    n(35282),
    n(704826);
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(399834),
    o = n(299608),
    c = n.n(o),
    u = n(442837),
    d = n(481060),
    h = n(349033),
    p = n(857595),
    f = n(607070),
    _ = n(313201),
    g = n(592125),
    S = n(430824),
    m = n(944486),
    y = n(585483),
    b = n(72006),
    E = n(181389),
    x = n(748610),
    C = n(171900),
    O = n(607802),
    v = n(612806),
    R = n(819439),
    j = n(945577),
    P = n(28964),
    T = n(971128),
    I = n(532428),
    A = n(611004),
    N = n(778177),
    Z = n(165017),
    w = n(817190),
    k = n(315322),
    M = n(723642),
    D = n(981631),
    L = n(388032),
    F = n(448402);
function H(e, t, n) {
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
n(890150);
let U = (0, _.hQ)(),
    B = c()(A.Z.fetchMessages, 500);
class W extends s.PureComponent {
    componentDidMount() {
        var e, t;
        y.S.subscribe(D.CkL.PERFORM_SEARCH, this.search),
            y.S.subscribe(D.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y.S.subscribe(D.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox");
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, O.kG)(b.Sq(t)),
                r = E.g9(e, t);
            x.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && b.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        y.S.unsubscribe(D.CkL.PERFORM_SEARCH, this.search),
            y.S.unsubscribe(D.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y.S.unsubscribe(D.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, O.kG)(b.Sq(e)).filter((e) => e.type !== h.ZP.NON_TOKEN_TYPE);
        return b.lv(t, e, I.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        A.Z.cleanUpSearchState(e);
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
        return (0, r.jsx)(i.Editor, {
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
            placeholder: null != n ? n : L.intl.string(L.t["5h0QOD"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? U : void 0,
            ariaLabel: L.intl.string(L.t["5h0QOD"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let {
                searchContext: e,
                editorState: t,
                hasResults: n,
                className: s,
                searchBarContainerClassName: l,
                searchBarClassName: i,
            } = this.props,
            { focused: o } = this.state,
            c = b.Sq(t).length > 0;
        return (0, r.jsx)(d.yRy, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.yRy.Animation.NONE,
            shouldShow: o,
            autoInvert: !1,
            children: (t, u) => {
                var h;
                let { isShown: p } = u;
                return (0, r.jsx)("div", {
                    className: s,
                    ref: this._containerRef,
                    children: (0, r.jsx)("div", {
                        className: a()(F.search, l, {
                            [F.open]: c || o,
                            [F.focused]: o,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (h = this._editorRef) ? void 0 : h.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: a()(F.searchBar, i),
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(p),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: c || n,
                                            className: F.icon,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, O.Tm)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
    constructor(e) {
        super(e),
            H(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            H(this, "_editorRef", void 0),
            H(this, "_containerRef", s.createRef()),
            H(this, "_searchBarRef", s.createRef()),
            H(this, "_searchPopoutRef", s.createRef()),
            H(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = b.Sq(a);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== i.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    l ? ((a = b.c2(t, a)), (n = 0)) : (a = b.x0(t, a, n, r)),
                    (a = b.Hl(a, 512)),
                    (a = this.tokenize(a));
                let o = Number(n) + t.length;
                (a = b.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: b.Sq(a) });
            }),
            H(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(U, "-").concat(e) : void 0),
                    this.setState({ selectedIndex: e });
            }),
            H(this, "renderPopout", () =>
                (0, r.jsx)(N.ZP, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: U,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged,
                    className: this.props.searchPopoutClassName,
                }),
            ),
            H(this, "search", (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r } = null != e ? e : {};
                if (null == n || "" === n) {
                    let { editorState: e } = this.props;
                    n = b.Sq(e);
                }
                if (!t) {
                    let e = (0, O.kG)(n),
                        t = (0, O.$G)(e);
                    for (let t = 0; t < e.length; t++)
                        (0, O.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r,
                    }),
                        d.uvj.announce(L.intl.string(L.t.pKCxWF)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            H(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === b.Sq(t))) return void this.focusEditor();
                (t = b.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, k.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            H(this, "handleFocusSearch", (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = m.Z.getChannelId(),
                    r = g.Z.getChannel(n),
                    s = v.Z.getCurrentConfig({ location: "handleFocusSearch" }).enabled;
                if (
                    ((null == r ? void 0 : r.isThread()) &&
                        !s &&
                        (r = g.Z.getChannel(null == r ? void 0 : r.parent_id)),
                    null == r)
                )
                    return void this.focusEditor();
                let { searchContext: l } = this.props,
                    a = (0, j.ad)({ location: "SearchBar_handleFocusSearch" }),
                    i = l.type === D.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (0, O.X3)(r);
                if (null == o) return void this.focusEditor();
                (0, k.PJ)({ searchContext: l }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: I.ZP[D.dCx.FILTER_IN].key + "".concat(o, " "),
                                replace: !0,
                            });
                    });
            }),
            H(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            H(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            H(this, "setEditorRef", (e) => {
                this._editorRef = e;
            }),
            H(this, "onFocus", () => {
                let { searchContext: e, isSearchActive: t } = this.props;
                this.setState({ focused: !0 }), t || (0, k.I1)({ searchContext: e });
            }),
            H(this, "handleBlur", (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    n || e || (0, k.IZ)({ searchContext: t }), b.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            H(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            H(
                this,
                "handleOption",
                (e) =>
                    null != e &&
                    (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel()
                        ? e.handleSearchInChannel({ searchAutocompleteSelectAction: M.ZW.KEY_PRESS })
                        : e.selectOption({ searchAutocompleteSelectAction: M.ZW.KEY_PRESS })),
            ),
            H(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (
                    this.handleOption(n) || ((0, O.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()),
                    "handled"
                );
            }),
            H(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    b.Sq(t).length >= 512 ||
                        ((t = b.x0(e, t)),
                        (t = b.Hl(t, 512)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        n || this.setState({ focused: !0 })),
                    "handled"
                );
            }),
            H(this, "handleKeyCommand", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case "backspace":
                    case "backspace-word":
                    case "backspace-to-start-of-line":
                    case "delete":
                    case "delete-word":
                        return (
                            (t = b.yd(e, t)),
                            (t = this.tokenize(t)),
                            this.setEditorState(t),
                            n || this.setState({ focused: !0 }),
                            "handled"
                        );
                    case "transpose-characters":
                    case "move-selection-to-start-of-block":
                    case "move-selection-to-end-of-block":
                        return (t = b.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
                    case "split-block":
                    case "underline":
                    case "bold":
                    case "italic":
                        return "handled";
                }
                return "not-handled";
            }),
            H(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = b.x0(e, t)),
                    (t = b.Hl(t, 512)),
                    (t = this.tokenize(t)),
                    n || this.setState({ focused: !0 }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            H(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                x.Z.setSearchState(t, e);
            }),
            H(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: s, searchContext: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), "Escape" === t)) {
                    if ((e.preventDefault(), b.xb(s))) this.blurEditor();
                    else {
                        let e = b.FZ(s);
                        x.Z.setSearchState(l, e), this.setState({ focused: !0 });
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
                    return (0, p.Qj)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && n))
                    return e.preventDefault(), (s = r ? b.R8(s) : b.eE(s)), this.setEditorState(s), !0;
                if ("End" === t || ("ArrowRight" === t && n))
                    return e.preventDefault(), (s = r ? b.Wg(s) : b.NJ(s)), this.setEditorState(s), !0;
                if (("Delete" === t || "Backspace" === t) && n) {
                    let e = b.FZ(s);
                    return this.setEditorState(e), !0;
                }
                return b.q0(e);
            }),
            (0, O.WU)();
    }
}
function Q(e) {
    let {
            searchContext: t,
            className: n,
            searchBarContainerClassName: l,
            searchBarClassName: a,
            searchPopoutClassName: i,
        } = e,
        o = (0, O.Tm)(t),
        c = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        h = (0, u.e7)([w.Z], () => (null != o ? w.Z.getEditorState(o) : null)),
        p = s.useMemo(() => (null != h ? h : b.nR(E.Jl(I.ZP))), [h]),
        {
            isSearching: _,
            isSearchActive: m,
            hasResults: y,
        } = (0, u.cj)([C.Z], () => {
            let e = C.Z.getTotalCount(o);
            return {
                hasResults: null != e && e > 0,
                isSearching: C.Z.getIsFetching(o),
                isSearchActive: C.Z.hasSearchState(o),
            };
        }),
        x = s.useRef(m);
    s.useEffect(() => {
        x.current && !m && ((x.current = !1), (0, k.IZ)({ searchContext: t })), !x.current && m && (x.current = !0);
    }, [m, t]);
    let v = s.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: s } = e;
                T.ZP.refreshSearchQueryAnalyticsId(t),
                    (0, k.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                    }),
                    t.type === D.aib.DMS
                        ? A.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: n,
                          })
                        : B({
                              searchContext: t,
                              searchQuery: r,
                              queryString: n,
                              searchEverywhere: s,
                              offset: 0,
                              searchMode: D.QIO.NEWEST,
                          });
            },
            [t],
        ),
        j = (0, u.e7)([S.Z, g.Z], () => {
            let e = (0, O.b7)(t) ? t.guildId : null;
            if (null != e) {
                let t = S.Z.getGuild(e);
                return null == t ? null : t.name;
            }
            let n = (0, O.AH)(t);
            if (null != n) {
                let e = g.Z.getChannel(n);
                return null == e ? null : (0, O.nl)(e);
            }
            return null;
        }),
        N = (0, P.xd)({
            isXDMSearch: t.type === D.aib.DMS,
            location: "Search",
        }),
        Z = (0, P.dB)({
            isXDMSearch: t.type === D.aib.DMS,
            location: "Search",
        }),
        M = N || Z,
        H = (0, R.$)({ location: "Search" }),
        U = s.useMemo(
            () =>
                t.type === D.aib.DMS
                    ? L.intl.string(L.t.m7OrlZ)
                    : H
                      ? L.intl.formatToPlainString(L.t.LDZtFB, { name: j })
                      : M
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  L.intl.formatToPlainString(L.t.LDZtFB, { name: j }),
                                  (0, r.jsx)("span", {
                                      className: F.keybind,
                                      children: (0, r.jsx)(d.M2$, {
                                          shortcut: ["mod", "f"],
                                          className: F.shortcut,
                                      }),
                                  }),
                              ],
                          })
                        : L.intl.string(L.t["5h0QOD"]),
            [t.type, M, j, H],
        );
    return (0, r.jsx)(W, {
        className: n,
        searchPopoutClassName: i,
        searchBarContainerClassName: l,
        searchBarClassName: a,
        searchContext: t,
        isSearching: _,
        editorState: p,
        hasResults: y,
        keyboardModeEnabled: c,
        onSearch: v,
        isSearchActive: m,
        placeholder: U,
    });
}
function G(e) {
    let { className: t, guildId: n, channelId: s } = e,
        l = (0, Z.H)({
            guildId: n,
            channelId: s,
        });
    return null == l
        ? null
        : (0, r.jsx)(Q, {
              className: t,
              searchContext: l,
          });
}
