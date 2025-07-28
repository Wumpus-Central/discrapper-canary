(r.d(t, { Z: () => G }), r(35282), r(704826));
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
    _ = r(85034),
    y = r(778877),
    b = r(903488),
    x = r(592125),
    E = r(768119),
    O = r(944486),
    v = r(585483),
    C = r(72006),
    j = r(405656),
    R = r(181389),
    I = r(854709),
    T = r(652399),
    P = r(861262),
    N = r(611004),
    A = r(778177),
    M = r(723642),
    k = r(981631),
    Z = r(388032),
    w = r(665333);
function L(e, t, r) {
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
let D = (0, S.hQ)(),
    F = c()(N.Z.fetchMessages, 500);
class H extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (v.S.subscribe(k.CkL.PERFORM_SEARCH, this.search), v.S.subscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), v.S.subscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: r } = this.props;
        if (t !== e.editorState) {
            let e = (0, j.kG)(C.Sq(t)),
                n = R.g9(e, t);
            (d.u$(r, e, n), null != this._editorRef && C.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (v.S.unsubscribe(k.CkL.PERFORM_SEARCH, this.search), v.S.unsubscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), v.S.unsubscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, j.kG)(C.Sq(e)).filter((e) => e.type !== p.ZP.NON_TOKEN_TYPE);
        return C.lv(t, e, f.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && N.Z.cleanUpSearchState(e);
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
            ariaControls: e ? D : void 0,
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
                              className: a()(w.search, {
                                  [w.open]: i || l,
                                  [w.focused]: l
                              }),
                              children: (0, n.jsx)(h.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, n.jsxs)(
                                      'div',
                                      {
                                          className: w.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, n.jsx)(h.BK9, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: i || r,
                                                  className: w.icon,
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
            L(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            L(this, '_editorRef', void 0),
            L(this, '_containerRef', s.createRef()),
            L(this, '_searchBarRef', s.createRef()),
            L(this, '_searchPopoutRef', s.createRef()),
            L(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: r, focus: n, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = C.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != r && 0 !== r && ' ' !== i.charAt(r - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = C.c2(t, a)), (r = 0)) : (a = C.x0(t, a, r, n)), (a = C.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(r) + t.length;
                ((a = C.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: C.Sq(a) }));
            }),
            L(this, 'handleSelectedIndexChanged', (e) => {
                var t, r;
                (null == (r = this._editorRef) || null == (t = r.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(D, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            L(this, 'renderPopout', () =>
                (0, n.jsx)(A.ZP, {
                    ref: this._searchPopoutRef,
                    navId: D,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            L(this, 'search', (e) => {
                let { searchId: t, isSearching: r } = this.props,
                    { queryString: n, searchEverywhere: s } = null != e ? e : {};
                if (null == n || '' === n) {
                    let { editorState: e } = this.props;
                    n = C.Sq(e);
                }
                if (null != t && !r) {
                    let e = (0, j.kG)(n),
                        t = (0, j.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, j.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
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
            L(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: r, searchType: n } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === C.Sq(t))) return void this.focusEditor();
                ((t = C.Hl(t, 0)),
                    this.setEditorState(t),
                    null != r &&
                        (0, T.cy)({
                            searchType: n,
                            searchId: r
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            L(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let r = O.Z.getChannelId(),
                    n = x.Z.getChannel(r),
                    s = _.Z.getCurrentConfig({ location: 'handleFocusSearch' }).enabled;
                if (((null == n ? void 0 : n.isThread()) && !s && (n = x.Z.getChannel(null == n ? void 0 : n.parent_id)), null == n)) return void this.focusEditor();
                let { searchId: l, searchType: a } = this.props,
                    i = (0, y.a)({ location: 'SearchBar_handleFocusSearch' }),
                    o = this.props.searchId === k.aib.DMS && i;
                if (n.isPrivate() && !o) return void this.focusEditor();
                let c = (0, j.X3)(n);
                if (null == c) return void this.focusEditor();
                ((0, T.PJ)({
                    searchType: a,
                    searchId: l
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: f.ZP[k.dCx.FILTER_IN].key + ''.concat(c, ' '),
                                replace: !0
                            }));
                    }));
            }),
            L(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            L(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            L(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            L(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: r } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        r ||
                        (0, T.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            L(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: r, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        n ||
                        e ||
                        (0, T.IZ)({
                            searchId: t,
                            searchType: r
                        }),
                        C.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            L(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            L(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: M.Z.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: M.Z.KEY_PRESS }))),
            L(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: r } = this._searchPopoutRef;
                return (this.handleOption(r) || ((0, I.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            L(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return (C.Sq(t).length >= 512 || ((t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 })), 'handled');
            }),
            L(this, 'handleKeyCommand', (e) => {
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
            L(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), r || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            L(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                d.j8(t, e);
            }),
            L(this, 'handleKeyBind', (e) => {
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
            (0, j.WU)());
    }
}
function B(e) {
    let { isSearchActive: t, searchId: r, searchType: n } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, T.IZ)({
                searchId: r,
                searchType: n
            })),
            !l.current && t && (l.current = !0));
    }, [t, r, n]);
}
function U(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = s.useMemo(() => ({ type: k.aib.DMS }), []),
        {
            isSearching: i,
            isSearchActive: o,
            hasResults: c
        } = (0, u.cj)([b.Z], () => {
            let e = b.Z.getTotalCount(k.aib.DMS);
            return {
                hasResults: null != e && e > 0,
                isSearching: b.Z.getIsFetching(k.aib.DMS),
                isSearchActive: b.Z.hasSearchState(k.aib.DMS)
            };
        });
    B({
        isSearchActive: o,
        searchId: k.aib.DMS,
        searchType: k.aib.DMS
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: r } = e;
            ((0, T.LQ)(k.aib.DMS),
                (0, T.tI)({
                    searchType: (0, P.g)(k.aib.DMS),
                    searchId: k.aib.DMS,
                    query: r,
                    queryString: t
                }),
                N.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: t
                }));
        },
        [a]
    );
    return (0, n.jsx)(H, {
        className: t,
        searchId: k.aib.DMS,
        searchType: k.aib.DMS,
        isSearching: i,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: r,
        onSearch: h,
        isSearchActive: o,
        placeholder: Z.intl.string(Z.t.m7OrlZ)
    });
}
function W(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = (0, u.e7)([E.Z], () => E.Z.getCurrentSearchId()),
        i = (0, P.k)(a),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([b.Z], () => {
            if (null == a)
                return {
                    isSearching: !1,
                    isSearchActive: !1,
                    hasResults: !1
                };
            let e = b.Z.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: b.Z.getIsFetching(a),
                isSearchActive: b.Z.hasSearchState(a)
            };
        });
    B({
        isSearchActive: c,
        searchId: a,
        searchType: i
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: t, query: r, searchEverywhere: n } = e;
            null != a &&
                ((0, T.LQ)(a),
                (0, T.tI)({
                    searchType: (0, P.g)(a),
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
                    searchMode: k.QIO.NEWEST
                }));
        },
        [a]
    );
    return (0, n.jsx)(H, {
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
function G(e) {
    let { className: t } = e,
        r = (0, u.e7)([E.Z], () => E.Z.getCurrentSearchId()),
        l = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, u.e7)([E.Z], () => (null != r ? E.Z.getEditorState(r) : null)),
        i = s.useMemo(() => (null != a ? a : C.nR(R.Jl(f.ZP))), [a]),
        o = (0, y.U)({ location: 'Search' });
    return r === k.aib.DMS && o
        ? (0, n.jsx)(U, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          })
        : (0, n.jsx)(W, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          });
}
