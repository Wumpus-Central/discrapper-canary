(n.d(t, { Z: () => W }), n(35282), n(704826));
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
    S = n(607070),
    y = n(313201),
    b = n(977885),
    x = n(778877),
    _ = n(903488),
    v = n(416638),
    O = n(592125),
    E = n(768119),
    j = n(944486),
    C = n(585483),
    P = n(72006),
    I = n(405656),
    R = n(181389),
    T = n(854709),
    N = n(652399),
    w = n(861262),
    k = n(611004),
    A = n(778177),
    Z = n(981631),
    F = n(862825),
    M = n(388032),
    L = n(665333);
function D(e, t, n) {
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
let H = (0, y.hQ)(),
    B = c()(h.yC, 500);
class U extends l.PureComponent {
    componentDidMount() {
        var e, t;
        (C.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search), C.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, I.kG)(P.Sq(t)),
                r = R.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && P.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (C.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search), C.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, I.kG)(P.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return P.lv(t, e, g.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && (h.qt(e), b.Z.clearSearchState(e));
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
            placeholder: null != n ? n : M.intl.string(M.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? H : void 0,
            ariaLabel: M.intl.string(M.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: l } = this.props,
            { focused: s } = this.state,
            i = P.Sq(t).length > 0;
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
                              className: a()(L.search, {
                                  [L.open]: i || s,
                                  [L.focused]: s
                              }),
                              children: (0, r.jsx)(d.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: L.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, r.jsx)(p.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: i || n,
                                                  className: L.icon
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
            D(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            D(this, '_editorRef', void 0),
            D(this, '_containerRef', l.createRef()),
            D(this, '_searchBarRef', l.createRef()),
            D(this, '_searchPopoutRef', l.createRef()),
            D(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: l, replace: s } = e,
                    { editorState: a } = this.props,
                    i = P.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), s ? ((a = P.c2(t, a)), (n = 0)) : (a = P.x0(t, a, n, r)), (a = P.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = P.iK(o, a)), this.setEditorState(a), l && this.search({ queryString: P.Sq(a) }));
            }),
            D(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(H, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            D(this, 'renderPopout', () =>
                (0, r.jsx)(A.ZP, {
                    ref: this._searchPopoutRef,
                    navId: H,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            D(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: l } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = P.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, I.kG)(r),
                        t = (0, I.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, I.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != l && l
                    }),
                        d.uvj.announce(M.intl.string(M.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            D(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: l } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === P.Sq(t))) return void this.focusEditor();
                ((t = P.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, N.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    l || Promise.resolve().then(() => this.blurEditor()));
            }),
            D(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = j.Z.getChannelId(),
                    r = O.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = O.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchId: l, searchType: s } = this.props,
                    a = (0, x.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = this.props.searchId === Z.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (0, I.X3)(r);
                if (null == o) return void this.focusEditor();
                ((0, N.PJ)({
                    searchType: s,
                    searchId: l
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: g.ZP[Z.dCx.FILTER_IN].key + ''.concat(o, ' '),
                                replace: !0
                            }));
                    }));
            }),
            D(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            D(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            D(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            D(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, N.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            D(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        r ||
                        e ||
                        (0, N.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        P.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            D(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            D(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel() : e.selectOption())),
            D(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, T.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            D(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (P.Sq(t).length >= 512 || ((t = P.x0(e, t)), (t = P.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
            }),
            D(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = P.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = P.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return 'handled';
                }
                return 'not-handled';
            }),
            D(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = P.x0(e, t)), (t = P.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            D(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            D(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: l, searchId: s, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), P.xb(l))) this.blurEditor();
                    else {
                        let e = P.FZ(l);
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (l = r ? P.R8(l) : P.eE(l)), this.setEditorState(l), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (l = r ? P.Wg(l) : P.NJ(l)), this.setEditorState(l), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = P.FZ(l);
                    return (this.setEditorState(e), !0);
                }
                return P.q0(e);
            }),
            (0, I.WU)());
    }
}
function G(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        s = l.useRef(t);
    l.useEffect(() => {
        (s.current &&
            !t &&
            ((s.current = !1),
            (0, N.IZ)({
                searchId: n,
                searchType: r
            })),
            !s.current && t && (s.current = !0));
    }, [t, n, r]);
}
function z(e) {
    let { className: t, keyboardModeEnabled: n, editorState: s } = e,
        a = l.useMemo(() => ({ type: Z.aib.DMS }), []),
        i = (0, u.e7)([E.Z], () => E.Z.getSearchResultsQueryString(Z.aib.DMS)),
        o = (0, v.jj)(a, F.sR.MESSAGES, i),
        c = (0, u.e7)([_.Z], () => {
            let e = _.Z.getTotalCount(o);
            return null != e && e > 0;
        }),
        d = (0, u.e7)([_.Z], () => _.Z.getIsFetching(o)),
        h = d || c;
    G({
        isSearchActive: h,
        searchId: Z.aib.DMS,
        searchType: Z.aib.DMS
    });
    let p = l.useCallback(
        (e) => {
            let { queryString: t } = e;
            k.Z.fetchCrossDMMessages({
                searchContext: a,
                selectedPageIndex: 0,
                queryString: t
            });
        },
        [a]
    );
    return (0, r.jsx)(U, {
        className: t,
        searchId: Z.aib.DMS,
        searchType: Z.aib.DMS,
        isSearching: d,
        editorState: s,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: p,
        isSearchActive: h,
        placeholder: M.intl.string(M.t['1sHpLC'])
    });
}
function q(e) {
    let { className: t, keyboardModeEnabled: n, editorState: s } = e,
        a = (0, u.e7)([E.Z], () => E.Z.getCurrentSearchId()),
        i = (0, w.k)(a),
        o = (0, u.e7)([E.Z], () => E.Z.isActive(a)),
        c = (0, u.e7)([E.Z], () => E.Z.hasResults(a)),
        d = (0, u.e7)([E.Z], () => null != a && E.Z.isSearching(a));
    G({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = l.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && B(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(U, {
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
function W(e) {
    let { className: t } = e,
        n = (0, u.e7)([E.Z], () => E.Z.getCurrentSearchId()),
        s = (0, u.e7)([S.Z], () => S.Z.keyboardModeEnabled),
        a = (0, u.e7)([E.Z], () => (null != n ? E.Z.getEditorState(n) : null)),
        i = l.useMemo(() => (null != a ? a : P.nR(R.Jl(g.ZP))), [a]),
        o = (0, x.U)({ location: 'Search' });
    return n === Z.aib.DMS && o
        ? (0, r.jsx)(z, {
              className: t,
              keyboardModeEnabled: s,
              editorState: i
          })
        : (0, r.jsx)(q, {
              className: t,
              keyboardModeEnabled: s,
              editorState: i
          });
}
