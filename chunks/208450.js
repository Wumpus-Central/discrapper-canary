(n.d(t, { Z: () => X }), n(35282), n(704826));
var r = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
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
    y = n(607070),
    b = n(933557),
    S = n(313201),
    x = n(977885),
    _ = n(778877),
    v = n(903488),
    O = n(416638),
    E = n(592125),
    j = n(984933),
    C = n(699516),
    P = n(768119),
    R = n(944486),
    I = n(594174),
    T = n(585483),
    N = n(72006),
    k = n(405656),
    w = n(51144),
    A = n(181389),
    Z = n(854709),
    F = n(652399),
    M = n(861262),
    L = n(611004),
    D = n(778177),
    H = n(981631),
    U = n(862825),
    B = n(388032),
    G = n(665333);
function z(e, t, n) {
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
let q = (0, S.hQ)(),
    W = c()(h.yC, 500);
class K extends l.PureComponent {
    componentDidMount() {
        var e, t;
        (T.S.subscribe(H.CkL.PERFORM_SEARCH, this.search), T.S.subscribe(H.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), T.S.subscribe(H.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, k.kG)(N.Sq(t)),
                r = A.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && N.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (T.S.unsubscribe(H.CkL.PERFORM_SEARCH, this.search), T.S.unsubscribe(H.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), T.S.unsubscribe(H.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, k.kG)(N.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return N.lv(t, e, g.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && (h.qt(e), x.Z.clearSearchState(e));
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
            placeholder: null != n ? n : B.intl.string(B.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? q : void 0,
            ariaLabel: B.intl.string(B.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: l } = this.props,
            { focused: s } = this.state,
            i = N.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.yRy, {
                  targetElementRef: this._containerRef,
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.yRy.Animation.NONE,
                  shouldShow: s,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: u } = o;
                      return (0, r.jsx)('div', {
                          className: l,
                          ref: this._containerRef,
                          children: (0, r.jsx)('div', {
                              className: a()(G.search, {
                                  [G.open]: i || s,
                                  [G.focused]: s
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
            z(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            z(this, '_editorRef', void 0),
            z(this, '_containerRef', l.createRef()),
            z(this, '_searchBarRef', l.createRef()),
            z(this, '_searchPopoutRef', l.createRef()),
            z(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: l, replace: s } = e,
                    { editorState: a } = this.props,
                    i = N.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), s ? ((a = N.c2(t, a)), (n = 0)) : (a = N.x0(t, a, n, r)), (a = N.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = N.iK(o, a)), this.setEditorState(a), l && this.search({ queryString: N.Sq(a) }));
            }),
            z(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(q, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            z(this, 'renderPopout', () =>
                (0, r.jsx)(D.ZP, {
                    ref: this._searchPopoutRef,
                    navId: q,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            z(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: l } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = N.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, k.kG)(r),
                        t = (0, k.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, k.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != l && l
                    }),
                        d.uvj.announce(B.intl.string(B.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            z(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: l } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === N.Sq(t))) return void this.focusEditor();
                ((t = N.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, F.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    l || Promise.resolve().then(() => this.blurEditor()));
            }),
            z(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = R.Z.getChannelId(),
                    r = E.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = E.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchId: l, searchType: s } = this.props,
                    a = (0, _.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = this.props.searchId === H.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (function (e) {
                    var t, n;
                    if (e.isGroupDM()) {
                        let t = (0, b.F6)(e, I.default, C.Z);
                        return t.includes(' ') ? '"'.concat(t, '"') : t;
                    }
                    if (e.isDM()) {
                        let n = e.getRecipientId(),
                            r = I.default.getUser(n);
                        return null != (t = w.ZP.getUserTag(r)) ? t : null;
                    }
                    let r = j.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id],
                        l = null != (n = null == r ? void 0 : r.name) ? n : e.name;
                    return '#'.concat(l);
                })(r);
                if (null == o) return void this.focusEditor();
                ((0, F.PJ)({
                    searchType: s,
                    searchId: l
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: g.ZP[H.dCx.FILTER_IN].key + ''.concat(o, ' '),
                                replace: !0
                            }));
                    }));
            }),
            z(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            z(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            z(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            z(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, F.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            z(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        r ||
                        e ||
                        (0, F.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        N.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            z(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            z(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return ((null != n && n.selectOption()) || ((0, Z.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            z(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (N.Sq(t).length >= 512 || ((t = N.x0(e, t)), (t = N.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
            }),
            z(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = N.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = N.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return 'handled';
                }
                return 'not-handled';
            }),
            z(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = N.x0(e, t)), (t = N.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            z(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            z(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: l, searchId: s, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), N.xb(l))) this.blurEditor();
                    else {
                        let e = N.FZ(l);
                        (h.j8(s, e), this.setState({ focused: !0 }));
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (l = r ? N.R8(l) : N.eE(l)), this.setEditorState(l), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (l = r ? N.Wg(l) : N.NJ(l)), this.setEditorState(l), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = N.FZ(l);
                    return (this.setEditorState(e), !0);
                }
                return N.q0(e);
            }),
            (0, k.WU)());
    }
}
function Q(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        s = l.useRef(t);
    l.useEffect(() => {
        (s.current &&
            !t &&
            ((s.current = !1),
            (0, F.IZ)({
                searchId: n,
                searchType: r
            })),
            !s.current && t && (s.current = !0));
    }, [t, n, r]);
}
function J(e) {
    let { className: t, keyboardModeEnabled: n, editorState: s } = e,
        a = l.useMemo(() => ({ type: H.aib.DMS }), []),
        i = (0, u.e7)([P.Z], () => P.Z.getSearchResultsQueryString(H.aib.DMS)),
        o = (0, O.jj)(a, U.sR.MESSAGES, i),
        c = (0, u.e7)([v.Z], () => {
            let e = v.Z.getTotalCount(o);
            return null != e && e > 0;
        }),
        d = (0, u.e7)([v.Z], () => v.Z.getIsFetching(o)),
        h = d || c;
    Q({
        isSearchActive: h,
        searchId: H.aib.DMS,
        searchType: H.aib.DMS
    });
    let p = l.useCallback(
        (e) => {
            let { queryString: t } = e;
            L.Z.fetchCrossDMMessages({
                searchContext: a,
                selectedPageIndex: 0,
                queryString: t
            });
        },
        [a]
    );
    return (0, r.jsx)(K, {
        className: t,
        searchId: H.aib.DMS,
        searchType: H.aib.DMS,
        isSearching: d,
        editorState: s,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: p,
        isSearchActive: h,
        placeholder: B.intl.string(B.t['1sHpLC'])
    });
}
function V(e) {
    let { className: t, keyboardModeEnabled: n, editorState: s } = e,
        a = (0, u.e7)([P.Z], () => P.Z.getCurrentSearchId()),
        i = (0, M.k)(a),
        o = (0, u.e7)([P.Z], () => P.Z.isActive(a)),
        c = (0, u.e7)([P.Z], () => P.Z.hasResults(a)),
        d = (0, u.e7)([P.Z], () => null != a && P.Z.isSearching(a));
    Q({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = l.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && W(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(K, {
        className: t,
        searchId: a,
        searchType: i,
        isSearching: d,
        editorState: s,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: h,
        isSearchActive: o
    });
}
function X(e) {
    let { className: t } = e,
        n = (0, u.e7)([P.Z], () => P.Z.getCurrentSearchId()),
        s = (0, u.e7)([y.Z], () => y.Z.keyboardModeEnabled),
        a = (0, u.e7)([P.Z], () => (null != n ? P.Z.getEditorState(n) : null)),
        i = l.useMemo(() => (null != a ? a : N.nR(A.Jl(g.ZP))), [a]),
        o = (0, _.U)({ location: 'Search' });
    return n === H.aib.DMS && o
        ? (0, r.jsx)(J, {
              className: t,
              keyboardModeEnabled: s,
              editorState: i
          })
        : (0, r.jsx)(V, {
              className: t,
              keyboardModeEnabled: s,
              editorState: i
          });
}
