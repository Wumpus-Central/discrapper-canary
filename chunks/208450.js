(r.d(t, { Z: () => B }), r(35282), r(704826));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(399834),
    o = r(299608),
    c = r.n(o),
    u = r(442837),
    h = r(481060),
    d = r(349033),
    p = r(857595),
    f = r(607070),
    g = r(313201),
    m = r(592125),
    S = r(944486),
    _ = r(585483),
    y = r(72006),
    x = r(181389),
    b = r(748610),
    E = r(171900),
    C = r(518944),
    v = r(607802),
    O = r(612806),
    R = r(945577),
    I = r(861262),
    j = r(532428),
    T = r(611004),
    P = r(778177),
    N = r(315322),
    A = r(723642),
    Z = r(981631),
    M = r(388032),
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
let L = (0, g.hQ)(),
    F = c()(T.Z.fetchMessages, 500);
class D extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (_.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search), _.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: r } = this.props;
        if (t !== e.editorState) {
            let e = (0, v.kG)(y.Sq(t)),
                n = x.g9(e, t);
            (b.Z.updateAutocompleteQuery(r, e, n), null != this._editorRef && y.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (_.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search), _.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, v.kG)(y.Sq(e)).filter((e) => e.type !== d.ZP.NON_TOKEN_TYPE);
        return y.lv(t, e, j.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && T.Z.cleanUpSearchState(e);
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
            placeholder: null != r ? r : M.intl.string(M.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? L : void 0,
            ariaLabel: M.intl.string(M.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            i = y.Sq(t).length > 0;
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
                    i = y.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != r && 0 !== r && ' ' !== i.charAt(r - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = y.c2(t, a)), (r = 0)) : (a = y.x0(t, a, r, n)), (a = y.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(r) + t.length;
                ((a = y.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: y.Sq(a) }));
            }),
            w(this, 'handleSelectedIndexChanged', (e) => {
                var t, r;
                (null == (r = this._editorRef) || null == (t = r.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(L, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            w(this, 'renderPopout', () =>
                (0, n.jsx)(P.ZP, {
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
                    n = y.Sq(e);
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
                        h.uvj.announce(M.intl.string(M.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            w(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: r, searchType: n } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === y.Sq(t))) return void this.focusEditor();
                ((t = y.Hl(t, 0)),
                    this.setEditorState(t),
                    null != r &&
                        (0, N.cy)({
                            searchType: n,
                            searchId: r
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            w(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let r = S.Z.getChannelId(),
                    n = m.Z.getChannel(r),
                    s = O.Z.getCurrentConfig({ location: 'handleFocusSearch' }).enabled;
                if (((null == n ? void 0 : n.isThread()) && !s && (n = m.Z.getChannel(null == n ? void 0 : n.parent_id)), null == n)) return void this.focusEditor();
                let { searchId: l, searchType: a } = this.props,
                    i = (0, R.a)({ location: 'SearchBar_handleFocusSearch' }),
                    o = this.props.searchId === Z.aib.DMS && i;
                if (n.isPrivate() && !o) return void this.focusEditor();
                let c = (0, v.X3)(n);
                if (null == c) return void this.focusEditor();
                ((0, N.PJ)({
                    searchType: a,
                    searchId: l
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: j.ZP[Z.dCx.FILTER_IN].key + ''.concat(c, ' '),
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
                        (0, N.I1)({
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
                        (0, N.IZ)({
                            searchId: t,
                            searchType: r
                        }),
                        y.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            w(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            w(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: A.ZW.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: A.ZW.KEY_PRESS }))),
            w(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: r } = this._searchPopoutRef;
                return (this.handleOption(r) || ((0, v.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            w(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return (y.Sq(t).length >= 512 || ((t = y.x0(e, t)), (t = y.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 })), 'handled');
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
                        return ((t = y.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = y.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = y.x0(e, t)), (t = y.Hl(t, 512)), (t = this.tokenize(t)), r || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            w(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                b.Z.setSearchState(t, e);
            }),
            w(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: r, shiftKey: n } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), y.xb(s))) this.blurEditor();
                    else {
                        let e = y.FZ(s);
                        (b.Z.setSearchState(l, e), this.setState({ focused: !0 }));
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
                    return ((0, p.Qj)(), !0);
                }
                if ('Home' === t || ('ArrowLeft' === t && r)) return (e.preventDefault(), (s = n ? y.R8(s) : y.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && r)) return (e.preventDefault(), (s = n ? y.Wg(s) : y.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && r) {
                    let e = y.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return y.q0(e);
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
            (0, N.IZ)({
                searchId: r,
                searchType: n
            })),
            !l.current && t && (l.current = !0));
    }, [t, r, n]);
}
function W(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = s.useMemo(() => ({ type: Z.aib.DMS }), []),
        {
            isSearching: i,
            isSearchActive: o,
            hasResults: c
        } = (0, u.cj)([E.Z], () => {
            let e = E.Z.getTotalCount(Z.aib.DMS);
            return {
                hasResults: null != e && e > 0,
                isSearching: E.Z.getIsFetching(Z.aib.DMS),
                isSearchActive: E.Z.hasSearchState(Z.aib.DMS)
            };
        });
    H({
        isSearchActive: o,
        searchId: Z.aib.DMS,
        searchType: Z.aib.DMS
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: r } = e;
            ((0, N.LQ)(Z.aib.DMS),
                (0, N.tI)({
                    searchType: (0, I.g)(Z.aib.DMS),
                    searchId: Z.aib.DMS,
                    query: r,
                    queryString: t
                }),
                T.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: t
                }));
        },
        [a]
    );
    return (0, n.jsx)(D, {
        className: t,
        searchId: Z.aib.DMS,
        searchType: Z.aib.DMS,
        isSearching: i,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: r,
        onSearch: h,
        isSearchActive: o,
        placeholder: M.intl.string(M.t.m7OrlZ)
    });
}
function U(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = (0, u.e7)([C.Z], () => C.Z.getCurrentSearchId()),
        i = (0, I.k)(a),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([E.Z], () => {
            if (null == a)
                return {
                    isSearching: !1,
                    isSearchActive: !1,
                    hasResults: !1
                };
            let e = E.Z.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: E.Z.getIsFetching(a),
                isSearchActive: E.Z.hasSearchState(a)
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
                ((0, N.LQ)(a),
                (0, N.tI)({
                    searchType: (0, I.g)(a),
                    searchId: a,
                    query: r,
                    queryString: t
                }),
                F({
                    searchId: a,
                    searchQuery: r,
                    queryString: t,
                    searchEverywhere: n,
                    offset: 0,
                    searchMode: Z.QIO.NEWEST
                }));
        },
        [a]
    );
    return (0, n.jsx)(D, {
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
function B(e) {
    let { className: t } = e,
        r = (0, u.e7)([C.Z], () => C.Z.getCurrentSearchId()),
        l = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        a = (0, u.e7)([C.Z], () => (null != r ? C.Z.getEditorState(r) : null)),
        i = s.useMemo(() => (null != a ? a : y.nR(x.Jl(j.ZP))), [a]),
        o = (0, R.U)({ location: 'Search' });
    return r === Z.aib.DMS && o
        ? (0, n.jsx)(W, {
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
