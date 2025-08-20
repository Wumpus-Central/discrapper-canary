n.d(t, {
    Z: () => W,
    o: () => Y,
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
    w = n(611004),
    D = n(778177),
    x = n(165017),
    L = n(817190),
    j = n(315322),
    M = n(723642),
    k = n(981631),
    U = n(388032),
    G = n(448402);
function B(e, t, n) {
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
let Z = 512,
    V = (0, h.hQ)(),
    F = c()(w.Z.fetchMessages, 500);
class H extends i.PureComponent {
    componentDidMount() {
        var e, t;
        b.S.subscribe(k.CkL.PERFORM_SEARCH, this.search),
            b.S.subscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            b.S.subscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox");
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, T.kG)(y.Sq(t)),
                r = O.g9(e, t);
            v.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && y.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        b.S.unsubscribe(k.CkL.PERFORM_SEARCH, this.search),
            b.S.unsubscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            b.S.unsubscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, T.kG)(y.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return y.lv(t, e, P.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        w.Z.cleanUpSearchState(e);
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
            placeholder: null != n ? n : U.intl.string(U.t["5h0QOD"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? V : void 0,
            ariaLabel: U.intl.string(U.t["5h0QOD"]),
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
                        className: o()(G.search, a, {
                            [G.open]: u || c,
                            [G.focused]: c,
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (f = this._editorRef) ? void 0 : f.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: o()(G.searchBar, s),
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(_),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: u || n,
                                            className: G.icon,
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
            B(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            B(this, "_editorRef", void 0),
            B(this, "_containerRef", i.createRef()),
            B(this, "_searchBarRef", i.createRef()),
            B(this, "_searchPopoutRef", i.createRef()),
            B(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a } = e,
                    { editorState: o } = this.props,
                    s = y.Sq(o);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    a ? ((o = y.c2(t, o)), (n = 0)) : (o = y.x0(t, o, n, r)),
                    (o = y.Hl(o, Z)),
                    (o = this.tokenize(o));
                let l = Number(n) + t.length;
                (o = y.iK(l, o)), this.setEditorState(o), i && this.search({ queryString: y.Sq(o) });
            }),
            B(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(V, "-").concat(e) : void 0),
                    this.setState({ selectedIndex: e });
            }),
            B(this, "renderPopout", () =>
                (0, r.jsx)(D.ZP, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: V,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged,
                    className: this.props.searchPopoutClassName,
                }),
            ),
            B(this, "search", (e) => {
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
                        d.uvj.announce(U.intl.string(U.t.pKCxWF)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            B(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), "" === y.Sq(t))) return void this.focusEditor();
                (t = y.Hl(t, 0)),
                    this.setEditorState(t),
                    (0, j.cy)({ searchContext: n }),
                    r || Promise.resolve().then(() => this.blurEditor());
            }),
            B(this, "handleFocusSearch", (e) => {
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
                let { searchContext: a } = this.props,
                    o = (0, C.ad)({ location: "SearchBar_handleFocusSearch" }),
                    s = a.type === k.aib.DMS && o;
                if (r.isPrivate() && !s) return void this.focusEditor();
                let l = (0, T.X3)(r);
                if (null == l) return void this.focusEditor();
                (0, j.PJ)({ searchContext: a }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: P.ZP[k.dCx.FILTER_IN].key + "".concat(l, " "),
                                replace: !0,
                            });
                    });
            }),
            B(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            B(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            B(this, "setEditorRef", (e) => {
                this._editorRef = e;
            }),
            B(this, "onFocus", () => {
                let { searchContext: e, isSearchActive: t } = this.props;
                this.setState({ focused: !0 }), t || (0, j.I1)({ searchContext: e });
            }),
            B(this, "handleBlur", (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    n || e || (0, j.IZ)({ searchContext: t }), y.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            B(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            B(
                this,
                "handleOption",
                (e) =>
                    null != e &&
                    (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel()
                        ? e.handleSearchInChannel({ searchAutocompleteSelectAction: M.ZW.KEY_PRESS })
                        : e.selectOption({ searchAutocompleteSelectAction: M.ZW.KEY_PRESS })),
            ),
            B(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (
                    this.handleOption(n) || ((0, T.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()),
                    "handled"
                );
            }),
            B(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    y.Sq(t).length >= Z ||
                        ((t = y.x0(e, t)),
                        (t = y.Hl(t, Z)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        n || this.setState({ focused: !0 })),
                    "handled"
                );
            }),
            B(this, "handleKeyCommand", (e) => {
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
            B(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = y.x0(e, t)),
                    (t = y.Hl(t, Z)),
                    (t = this.tokenize(t)),
                    n || this.setState({ focused: !0 }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            B(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                v.Z.setSearchState(t, e);
            }),
            B(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchContext: a, keyboardModeEnabled: o } = this.props;
                if ((e.stopPropagation(), "Escape" === t)) {
                    if ((e.preventDefault(), y.xb(i))) this.blurEditor();
                    else {
                        let e = y.FZ(i);
                        v.Z.setSearchState(a, e), this.setState({ focused: !0 });
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
                    if (o) return;
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
function Y(e) {
    let {
            searchContext: t,
            className: n,
            searchBarContainerClassName: a,
            searchBarClassName: o,
            searchPopoutClassName: s,
            popoutAlignment: l,
        } = e,
        c = (0, T.Tm)(t),
        f = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        _ = (0, u.e7)([L.Z], () => (null != c ? L.Z.getEditorState(c) : null)),
        h = i.useMemo(() => (null != _ ? _ : y.nR(O.Jl(P.ZP))), [_]),
        {
            isSearching: E,
            isSearchActive: b,
            hasResults: v,
        } = (0, u.cj)([I.Z], () => {
            let e = I.Z.getTotalCount(c);
            return {
                hasResults: null != e && e > 0,
                isSearching: I.Z.getIsFetching(c),
                isSearchActive: I.Z.hasSearchState(c),
            };
        }),
        S = i.useRef(b);
    i.useEffect(() => {
        S.current && !b && ((S.current = !1), (0, j.IZ)({ searchContext: t })), !S.current && b && (S.current = !0);
    }, [b, t]);
    let C = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i } = e;
                R.ZP.refreshSearchQueryAnalyticsId(t),
                    (0, j.tI)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                    }),
                    t.type === k.aib.DMS
                        ? w.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: n,
                          })
                        : F({
                              searchContext: t,
                              searchQuery: r,
                              queryString: n,
                              searchEverywhere: i,
                              offset: 0,
                              searchMode: k.QIO.NEWEST,
                          });
            },
            [t],
        ),
        D = (0, u.e7)([g.Z, m.Z], () => {
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
        x = (0, N.xd)({
            isXDMSearch: t.type === k.aib.DMS,
            location: "Search",
        }),
        M = (0, N.dB)({
            isXDMSearch: t.type === k.aib.DMS,
            location: "Search",
        }),
        B = x || M,
        Z = (0, A.$)({ location: "Search" }),
        V = i.useMemo(
            () =>
                t.type === k.aib.DMS
                    ? U.intl.string(U.t.m7OrlZ)
                    : Z
                      ? U.intl.formatToPlainString(U.t.LDZtFB, { name: D })
                      : B
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  U.intl.formatToPlainString(U.t.LDZtFB, { name: D }),
                                  (0, r.jsx)("span", {
                                      className: G.keybind,
                                      children: (0, r.jsx)(d.M2$, {
                                          shortcut: ["mod", "f"],
                                          className: G.shortcut,
                                      }),
                                  }),
                              ],
                          })
                        : U.intl.string(U.t["5h0QOD"]),
            [t.type, B, D, Z],
        );
    return (0, r.jsx)(H, {
        className: n,
        searchPopoutClassName: s,
        searchBarContainerClassName: a,
        searchBarClassName: o,
        searchContext: t,
        isSearching: E,
        editorState: h,
        hasResults: v,
        keyboardModeEnabled: f,
        onSearch: C,
        isSearchActive: b,
        placeholder: V,
        popoutAlignment: l,
    });
}
function W(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, x.H)({
            guildId: n,
            channelId: i,
        });
    return null == a
        ? null
        : (0, r.jsx)(Y, {
              className: t,
              searchContext: a,
          });
}
