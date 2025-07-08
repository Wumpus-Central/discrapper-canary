(n.d(t, { Z: () => V }), n(35282), n(704826));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(399834),
    o = n(299608),
    c = n.n(o),
    u = n(442837),
    d = n(481060),
    h = n(603263),
    p = n(461745),
    f = n(349033),
    g = n(999650),
    m = n(857595),
    S = n(607070),
    y = n(933557),
    b = n(313201),
    x = n(778877),
    _ = n(903488),
    E = n(416638),
    v = n(592125),
    O = n(984933),
    j = n(699516),
    C = n(768119),
    I = n(944486),
    R = n(594174),
    P = n(585483),
    T = n(72006),
    N = n(405656),
    A = n(51144),
    w = n(181389),
    k = n(854709),
    M = n(652399),
    F = n(861262),
    Z = n(611004),
    D = n(778177),
    L = n(981631),
    H = n(862825),
    U = n(388032),
    G = n(665333);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(539658);
let z = (0, b.hQ)(),
    q = c()(h.yC, 500);
class W extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (P.S.subscribe(L.CkL.PERFORM_SEARCH, this.search), P.S.subscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), P.S.subscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, N.kG)(T.Sq(t)),
                r = w.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && T.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (P.S.unsubscribe(L.CkL.PERFORM_SEARCH, this.search), P.S.unsubscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), P.S.unsubscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, N.kG)(T.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return T.lv(t, e, g.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && h.qt(e);
    }
    handlePastedFiles() {
        return 'handled';
    }
    handleDroppedFiles() {
        return 'handled';
    }
    handleDrop() {
        return 'handled';
    }
    renderInput(e) {
        let { editorState: t, placeholder: n } = this.props;
        return (0, r.jsx)(i.Editor, {
            autoCorrect: 'off',
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
            placeholder: null != n ? n : U.intl.string(U.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? z : void 0,
            ariaLabel: U.intl.string(U.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: l } = this.state,
            i = T.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.yRy, {
                  targetElementRef: this._containerRef,
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.yRy.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: u } = o;
                      return (0, r.jsx)('div', {
                          className: s,
                          ref: this._containerRef,
                          children: (0, r.jsx)('div', {
                              className: a()(G.search, {
                                  [G.open]: i || l,
                                  [G.focused]: l
                              }),
                              children: (0, r.jsx)(d.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: G.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, r.jsx)(p.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: i || n,
                                                  className: G.icon
                                              })
                                          ]
                                      },
                                      e
                                  )
                              })
                          })
                      });
                  }
              });
    }
    constructor(e) {
        (super(e),
            B(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            B(this, '_editorRef', void 0),
            B(this, '_containerRef', s.createRef()),
            B(this, '_searchBarRef', s.createRef()),
            B(this, '_searchPopoutRef', s.createRef()),
            B(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = T.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = T.c2(t, a)), (n = 0)) : (a = T.x0(t, a, n, r)), (a = T.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = T.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: T.Sq(a) }));
            }),
            B(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(z, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            B(this, 'renderPopout', () =>
                (0, r.jsx)(D.ZP, {
                    ref: this._searchPopoutRef,
                    navId: z,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            B(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: s } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = T.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, N.kG)(r),
                        t = (0, N.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, N.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != s && s
                    }),
                        d.uvj.announce(U.intl.string(U.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            B(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === T.Sq(t))) return void this.focusEditor();
                ((t = T.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, M.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            B(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = I.Z.getChannelId(),
                    r = v.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = v.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchId: s, searchType: l } = this.props,
                    a = (0, x.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = this.props.searchId === L.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (function (e) {
                    var t, n;
                    if (e.isGroupDM()) {
                        let t = (0, y.F6)(e, R.default, j.Z);
                        return t.includes(' ') ? '"'.concat(t, '"') : t;
                    }
                    if (e.isDM()) {
                        let n = e.getRecipientId(),
                            r = R.default.getUser(n);
                        return null != (t = A.ZP.getUserTag(r)) ? t : null;
                    }
                    let r = O.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id],
                        s = null != (n = null == r ? void 0 : r.name) ? n : e.name;
                    return '#'.concat(s);
                })(r);
                if (null == o) return void this.focusEditor();
                ((0, M.PJ)({
                    searchType: l,
                    searchId: s
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: g.ZP[L.dCx.FILTER_IN].key + ''.concat(o, ' '),
                                replace: !0
                            }));
                    }));
            }),
            B(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            B(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            B(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            B(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, M.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            B(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        r ||
                        e ||
                        (0, M.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        T.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            B(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            B(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return ((null != n && n.selectOption()) || ((0, k.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            B(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (T.Sq(t).length >= 512 || ((t = T.x0(e, t)), (t = T.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
            }),
            B(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = T.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = T.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return 'handled';
                }
                return 'not-handled';
            }),
            B(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = T.x0(e, t)), (t = T.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            B(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            B(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), T.xb(s))) this.blurEditor();
                    else {
                        let e = T.FZ(s);
                        (h.j8(l, e), this.setState({ focused: !0 }));
                    }
                    return !0;
                }
                if ('ArrowUp' === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return (null != t && t.focusPreviousOption(), !0);
                }
                if ('ArrowDown' === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return (null != t && t.focusNextOption(), !0);
                }
                if ('Tab' === t) {
                    if (a) return;
                    return ((0, m.Qj)(), !0);
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? T.R8(s) : T.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? T.Wg(s) : T.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = T.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return T.q0(e);
            }),
            (0, N.WU)());
    }
}
function K(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, M.IZ)({
                searchId: n,
                searchType: r
            })),
            !l.current && t && (l.current = !0));
    }, [t, n, r]);
}
function Q(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = s.useMemo(() => ({ type: L.aib.DMS }), []),
        i = (0, u.e7)([C.Z], () => C.Z.getSearchResultsQueryString(L.aib.DMS)),
        o = (0, E.jj)(a, H.sR.MESSAGES, i),
        c = (0, u.e7)([_.Z], () => {
            let e = _.Z.getTotalCount(o);
            return null != e && e > 0;
        }),
        d = (0, u.e7)([_.Z], () => _.Z.getIsFetching(o)),
        h = d || c;
    K({
        isSearchActive: h,
        searchId: L.aib.DMS,
        searchType: L.aib.DMS
    });
    let p = s.useCallback(
        (e) => {
            let { queryString: t } = e;
            Z.Z.fetchCrossDMMessages({
                searchContext: a,
                selectedPageIndex: 0,
                queryString: t
            });
        },
        [a]
    );
    return (0, r.jsx)(W, {
        className: t,
        searchId: L.aib.DMS,
        searchType: L.aib.DMS,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: p,
        isSearchActive: h,
        placeholder: U.intl.string(U.t['1sHpLC'])
    });
}
function J(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = (0, u.e7)([C.Z], () => C.Z.getCurrentSearchId()),
        i = (0, F.k)(a),
        o = (0, u.e7)([C.Z], () => C.Z.isActive(a)),
        c = (0, u.e7)([C.Z], () => C.Z.hasResults(a)),
        d = (0, u.e7)([C.Z], () => null != a && C.Z.isSearching(a));
    K({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && q(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(W, {
        className: t,
        searchId: a,
        searchType: i,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: h,
        isSearchActive: o
    });
}
function V(e) {
    let { className: t } = e,
        n = (0, u.e7)([C.Z], () => C.Z.getCurrentSearchId()),
        l = (0, u.e7)([S.Z], () => S.Z.keyboardModeEnabled),
        a = (0, u.e7)([C.Z], () => (null != n ? C.Z.getEditorState(n) : null)),
        i = s.useMemo(() => (null != a ? a : T.nR(w.Jl(g.ZP))), [a]),
        o = (0, x.U)({ location: 'Search' });
    return n === L.aib.DMS && o
        ? (0, r.jsx)(Q, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          })
        : (0, r.jsx)(J, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          });
}
