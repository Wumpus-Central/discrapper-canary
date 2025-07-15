(n.d(t, { Z: () => z }), n(35282), n(704826));
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
    v = n(592125),
    O = n(768119),
    E = n(944486),
    j = n(585483),
    C = n(72006),
    I = n(405656),
    P = n(181389),
    R = n(854709),
    T = n(652399),
    N = n(861262),
    w = n(611004),
    k = n(778177),
    A = n(981631),
    Z = n(388032),
    F = n(665333);
function M(e, t, n) {
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
let L = (0, y.hQ)(),
    D = c()(h.yC, 500);
class H extends l.PureComponent {
    componentDidMount() {
        var e, t;
        (j.S.subscribe(A.CkL.PERFORM_SEARCH, this.search), j.S.subscribe(A.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), j.S.subscribe(A.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, I.kG)(C.Sq(t)),
                r = P.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && C.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (j.S.unsubscribe(A.CkL.PERFORM_SEARCH, this.search), j.S.unsubscribe(A.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), j.S.unsubscribe(A.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, I.kG)(C.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return C.lv(t, e, g.ZP);
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
            placeholder: null != n ? n : Z.intl.string(Z.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? L : void 0,
            ariaLabel: Z.intl.string(Z.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: l } = this.props,
            { focused: s } = this.state,
            i = C.Sq(t).length > 0;
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
                              className: a()(F.search, {
                                  [F.open]: i || s,
                                  [F.focused]: s
                              }),
                              children: (0, r.jsx)(d.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: F.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, r.jsx)(p.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: i || n,
                                                  className: F.icon
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
            M(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            M(this, '_editorRef', void 0),
            M(this, '_containerRef', l.createRef()),
            M(this, '_searchBarRef', l.createRef()),
            M(this, '_searchPopoutRef', l.createRef()),
            M(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: l, replace: s } = e,
                    { editorState: a } = this.props,
                    i = C.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), s ? ((a = C.c2(t, a)), (n = 0)) : (a = C.x0(t, a, n, r)), (a = C.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = C.iK(o, a)), this.setEditorState(a), l && this.search({ queryString: C.Sq(a) }));
            }),
            M(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(L, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            M(this, 'renderPopout', () =>
                (0, r.jsx)(k.ZP, {
                    ref: this._searchPopoutRef,
                    navId: L,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            M(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: l } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = C.Sq(e);
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
                        d.uvj.announce(Z.intl.string(Z.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            M(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: l } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === C.Sq(t))) return void this.focusEditor();
                ((t = C.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, T.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    l || Promise.resolve().then(() => this.blurEditor()));
            }),
            M(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = E.Z.getChannelId(),
                    r = v.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = v.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchId: l, searchType: s } = this.props,
                    a = (0, x.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = this.props.searchId === A.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (0, I.X3)(r);
                if (null == o) return void this.focusEditor();
                ((0, T.PJ)({
                    searchType: s,
                    searchId: l
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: g.ZP[A.dCx.FILTER_IN].key + ''.concat(o, ' '),
                                replace: !0
                            }));
                    }));
            }),
            M(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            M(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            M(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            M(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, T.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            M(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        r ||
                        e ||
                        (0, T.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        C.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            M(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            M(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel() : e.selectOption())),
            M(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, R.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            M(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (C.Sq(t).length >= 512 || ((t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
            }),
            M(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = C.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = C.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return 'handled';
                }
                return 'not-handled';
            }),
            M(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            M(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            M(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: l, searchId: s, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), C.xb(l))) this.blurEditor();
                    else {
                        let e = C.FZ(l);
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (l = r ? C.R8(l) : C.eE(l)), this.setEditorState(l), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (l = r ? C.Wg(l) : C.NJ(l)), this.setEditorState(l), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = C.FZ(l);
                    return (this.setEditorState(e), !0);
                }
                return C.q0(e);
            }),
            (0, I.WU)());
    }
}
function B(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        s = l.useRef(t);
    l.useEffect(() => {
        (s.current &&
            !t &&
            ((s.current = !1),
            (0, T.IZ)({
                searchId: n,
                searchType: r
            })),
            !s.current && t && (s.current = !0));
    }, [t, n, r]);
}
function U(e) {
    let { className: t, keyboardModeEnabled: n, editorState: s } = e,
        a = l.useMemo(() => ({ type: A.aib.DMS }), []),
        i = (0, u.e7)([_.Z], () => {
            let e = _.Z.getTotalCount(A.aib.DMS);
            return null != e && e > 0;
        }),
        o = (0, u.e7)([_.Z], () => _.Z.getIsFetching(A.aib.DMS)),
        c = o || i;
    B({
        isSearchActive: c,
        searchId: A.aib.DMS,
        searchType: A.aib.DMS
    });
    let d = l.useCallback(
        (e) => {
            let { queryString: t } = e;
            w.Z.fetchCrossDMMessages({
                searchContext: a,
                selectedPageIndex: 0,
                queryString: t
            });
        },
        [a]
    );
    return (0, r.jsx)(H, {
        className: t,
        searchId: A.aib.DMS,
        searchType: A.aib.DMS,
        isSearching: o,
        editorState: s,
        hasResults: i,
        keyboardModeEnabled: n,
        onSearch: d,
        isSearchActive: c,
        placeholder: Z.intl.string(Z.t['1sHpLC'])
    });
}
function G(e) {
    let { className: t, keyboardModeEnabled: n, editorState: s } = e,
        a = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()),
        i = (0, N.k)(a),
        o = (0, u.e7)([O.Z], () => O.Z.isActive(a)),
        c = (0, u.e7)([O.Z], () => O.Z.hasResults(a)),
        d = (0, u.e7)([O.Z], () => null != a && O.Z.isSearching(a));
    B({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = l.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && D(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(H, {
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
function z(e) {
    let { className: t } = e,
        n = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()),
        s = (0, u.e7)([S.Z], () => S.Z.keyboardModeEnabled),
        a = (0, u.e7)([O.Z], () => (null != n ? O.Z.getEditorState(n) : null)),
        i = l.useMemo(() => (null != a ? a : C.nR(P.Jl(g.ZP))), [a]),
        o = (0, x.U)({ location: 'Search' });
    return n === A.aib.DMS && o
        ? (0, r.jsx)(U, {
              className: t,
              keyboardModeEnabled: s,
              editorState: i
          })
        : (0, r.jsx)(G, {
              className: t,
              keyboardModeEnabled: s,
              editorState: i
          });
}
