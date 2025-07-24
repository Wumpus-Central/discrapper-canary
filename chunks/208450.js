(r.d(t, { Z: () => W }), r(35282), r(704826));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(399834),
    o = r(299608),
    c = r.n(o),
    u = r(442837),
    h = r(481060),
    d = r(603263),
    p = r(349033),
    f = r(999650),
    g = r(857595),
    m = r(607070),
    S = r(313201),
    _ = r(778877),
    y = r(903488),
    b = r(592125),
    x = r(768119),
    E = r(944486),
    O = r(585483),
    C = r(72006),
    v = r(405656),
    j = r(181389),
    R = r(854709),
    I = r(652399),
    T = r(861262),
    P = r(611004),
    N = r(778177),
    A = r(723642),
    M = r(981631),
    Z = r(388032),
    k = r(665333);
function w(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
r(539658);
let L = (0, S.hQ)(),
    D = c()(P.Z.fetchMessages, 500);
class F extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (O.S.subscribe(M.CkL.PERFORM_SEARCH, this.search), O.S.subscribe(M.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), O.S.subscribe(M.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: r } = this.props;
        if (t !== e.editorState) {
            let e = (0, v.kG)(C.Sq(t)),
                n = j.g9(e, t);
            (d.u$(r, e, n), null != this._editorRef && C.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (O.S.unsubscribe(M.CkL.PERFORM_SEARCH, this.search), O.S.unsubscribe(M.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), O.S.unsubscribe(M.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, v.kG)(C.Sq(e)).filter((e) => e.type !== p.ZP.NON_TOKEN_TYPE);
        return C.lv(t, e, f.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && P.Z.cleanUpSearchState(e);
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
        let { editorState: t, placeholder: r } = this.props;
        return (0, n.jsx)(i.Editor, {
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
            placeholder: null != r ? r : Z.intl.string(Z.t['5h0QOD']),
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
        let { searchId: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            i = C.Sq(t).length > 0;
        return null == e
            ? null
            : (0, n.jsx)(h.yRy, {
                  targetElementRef: this._containerRef,
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: h.yRy.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: u } = o;
                      return (0, n.jsx)('div', {
                          className: s,
                          ref: this._containerRef,
                          children: (0, n.jsx)('div', {
                              className: a()(k.search, {
                                  [k.open]: i || l,
                                  [k.focused]: l
                              }),
                              children: (0, n.jsx)(h.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, n.jsxs)(
                                      'div',
                                      {
                                          className: k.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, n.jsx)(h.BK9, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: i || r,
                                                  className: k.icon,
                                                  isLoading: !1
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
            w(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            w(this, '_editorRef', void 0),
            w(this, '_containerRef', s.createRef()),
            w(this, '_searchBarRef', s.createRef()),
            w(this, '_searchPopoutRef', s.createRef()),
            w(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: r, focus: n, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = C.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != r && 0 !== r && ' ' !== i.charAt(r - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = C.c2(t, a)), (r = 0)) : (a = C.x0(t, a, r, n)), (a = C.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(r) + t.length;
                ((a = C.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: C.Sq(a) }));
            }),
            w(this, 'handleSelectedIndexChanged', (e) => {
                var t, r;
                (null == (r = this._editorRef) || null == (t = r.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(L, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            w(this, 'renderPopout', () =>
                (0, n.jsx)(N.ZP, {
                    ref: this._searchPopoutRef,
                    navId: L,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            w(this, 'search', (e) => {
                let { searchId: t, isSearching: r } = this.props,
                    { queryString: n, searchEverywhere: s } = null != e ? e : {};
                if (null == n || '' === n) {
                    let { editorState: e } = this.props;
                    n = C.Sq(e);
                }
                if (null != t && !r) {
                    let e = (0, v.kG)(n),
                        t = (0, v.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, v.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != s && s
                    }),
                        h.uvj.announce(Z.intl.string(Z.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            w(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: r, searchType: n } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === C.Sq(t))) return void this.focusEditor();
                ((t = C.Hl(t, 0)),
                    this.setEditorState(t),
                    null != r &&
                        (0, I.cy)({
                            searchType: n,
                            searchId: r
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            w(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let r = E.Z.getChannelId(),
                    n = b.Z.getChannel(r);
                if (((null == n ? void 0 : n.isThread()) && (n = b.Z.getChannel(null == n ? void 0 : n.parent_id)), null == n)) return void this.focusEditor();
                let { searchId: s, searchType: l } = this.props,
                    a = (0, _.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = this.props.searchId === M.aib.DMS && a;
                if (n.isPrivate() && !i) return void this.focusEditor();
                let o = (0, v.X3)(n);
                if (null == o) return void this.focusEditor();
                ((0, I.PJ)({
                    searchType: l,
                    searchId: s
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: f.ZP[M.dCx.FILTER_IN].key + ''.concat(o, ' '),
                                replace: !0
                            }));
                    }));
            }),
            w(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            w(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            w(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            w(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: r } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        r ||
                        (0, I.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            w(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: r, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        n ||
                        e ||
                        (0, I.IZ)({
                            searchId: t,
                            searchType: r
                        }),
                        C.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            w(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            w(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: A.Z.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: A.Z.KEY_PRESS }))),
            w(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: r } = this._searchPopoutRef;
                return (this.handleOption(r) || ((0, R.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            w(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return (C.Sq(t).length >= 512 || ((t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 })), 'handled');
            }),
            w(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = C.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 }), 'handled');
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
            w(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), r || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            w(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                d.j8(t, e);
            }),
            w(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: r, shiftKey: n } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), C.xb(s))) this.blurEditor();
                    else {
                        let e = C.FZ(s);
                        (d.j8(l, e), this.setState({ focused: !0 }));
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
                    return ((0, g.Qj)(), !0);
                }
                if ('Home' === t || ('ArrowLeft' === t && r)) return (e.preventDefault(), (s = n ? C.R8(s) : C.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && r)) return (e.preventDefault(), (s = n ? C.Wg(s) : C.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && r) {
                    let e = C.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return C.q0(e);
            }),
            (0, v.WU)());
    }
}
function H(e) {
    let { isSearchActive: t, searchId: r, searchType: n } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, I.IZ)({
                searchId: r,
                searchType: n
            })),
            !l.current && t && (l.current = !0));
    }, [t, r, n]);
}
function B(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = s.useMemo(() => ({ type: M.aib.DMS }), []),
        {
            isSearching: i,
            isSearchActive: o,
            hasResults: c
        } = (0, u.cj)([y.Z], () => {
            let e = y.Z.getTotalCount(M.aib.DMS);
            return {
                hasResults: null != e && e > 0,
                isSearching: y.Z.getIsFetching(M.aib.DMS),
                isSearchActive: y.Z.hasSearchState(M.aib.DMS)
            };
        });
    H({
        isSearchActive: o,
        searchId: M.aib.DMS,
        searchType: M.aib.DMS
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: r } = e;
            ((0, I.LQ)(M.aib.DMS),
                (0, I.tI)({
                    searchType: (0, T.g)(M.aib.DMS),
                    searchId: M.aib.DMS,
                    query: r,
                    queryString: t
                }),
                P.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: t
                }));
        },
        [a]
    );
    return (0, n.jsx)(F, {
        className: t,
        searchId: M.aib.DMS,
        searchType: M.aib.DMS,
        isSearching: i,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: r,
        onSearch: h,
        isSearchActive: o,
        placeholder: Z.intl.string(Z.t.m7OrlZ)
    });
}
function U(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = (0, u.e7)([x.Z], () => x.Z.getCurrentSearchId()),
        i = (0, T.k)(a),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([y.Z], () => {
            if (null == a)
                return {
                    isSearching: !1,
                    isSearchActive: !1,
                    hasResults: !1
                };
            let e = y.Z.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: y.Z.getIsFetching(a),
                isSearchActive: y.Z.hasSearchState(a)
            };
        });
    H({
        isSearchActive: c,
        searchId: a,
        searchType: i
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: t, query: r, searchEverywhere: n } = e;
            null != a &&
                ((0, I.LQ)(a),
                (0, I.tI)({
                    searchType: (0, T.g)(a),
                    searchId: a,
                    query: r,
                    queryString: t
                }),
                D({
                    searchId: a,
                    searchQuery: r,
                    queryString: t,
                    searchEverywhere: n,
                    offset: 0,
                    searchMode: M.QIO.NEWEST
                }));
        },
        [a]
    );
    return (0, n.jsx)(F, {
        className: t,
        searchId: a,
        searchType: i,
        isSearching: o,
        editorState: l,
        hasResults: h,
        keyboardModeEnabled: r,
        onSearch: d,
        isSearchActive: c
    });
}
function W(e) {
    let { className: t } = e,
        r = (0, u.e7)([x.Z], () => x.Z.getCurrentSearchId()),
        l = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, u.e7)([x.Z], () => (null != r ? x.Z.getEditorState(r) : null)),
        i = s.useMemo(() => (null != a ? a : C.nR(j.Jl(f.ZP))), [a]),
        o = (0, _.U)({ location: 'Search' });
    return r === M.aib.DMS && o
        ? (0, n.jsx)(B, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          })
        : (0, n.jsx)(U, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          });
}
