(n.d(t, { Z: () => G }), n(35282), n(704826));
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
    p = n(349033),
    f = n(999650),
    g = n(857595),
    m = n(607070),
    _ = n(313201),
    S = n(977885),
    y = n(778877),
    b = n(903488),
    x = n(592125),
    E = n(768119),
    C = n(944486),
    O = n(585483),
    v = n(72006),
    I = n(405656),
    j = n(181389),
    R = n(854709),
    T = n(652399),
    P = n(861262),
    N = n(611004),
    A = n(778177),
    Z = n(723642),
    k = n(981631),
    M = n(388032),
    L = n(665333);
function w(e, t, n) {
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
let F = (0, _.hQ)(),
    D = c()(h.yC, 500);
class H extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (O.S.subscribe(k.CkL.PERFORM_SEARCH, this.search), O.S.subscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), O.S.subscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, I.kG)(v.Sq(t)),
                r = j.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && v.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (O.S.unsubscribe(k.CkL.PERFORM_SEARCH, this.search), O.S.unsubscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), O.S.unsubscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, I.kG)(v.Sq(e)).filter((e) => e.type !== p.ZP.NON_TOKEN_TYPE);
        return v.lv(t, e, f.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && (h.qt(e), S.Z.clearSearchState(e));
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
            ariaControls: e ? F : void 0,
            ariaLabel: M.intl.string(M.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: l } = this.state,
            i = v.Sq(t).length > 0;
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
                              className: a()(L.search, {
                                  [L.open]: i || l,
                                  [L.focused]: l
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
                                              (0, r.jsx)(d.BK9, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: i || n,
                                                  className: L.icon,
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
                let { query: t, anchor: n, focus: r, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = v.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = v.c2(t, a)), (n = 0)) : (a = v.x0(t, a, n, r)), (a = v.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = v.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: v.Sq(a) }));
            }),
            w(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(F, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            w(this, 'renderPopout', () =>
                (0, r.jsx)(A.ZP, {
                    ref: this._searchPopoutRef,
                    navId: F,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            w(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: s } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = v.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, I.kG)(r),
                        t = (0, I.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, I.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != s && s
                    }),
                        d.uvj.announce(M.intl.string(M.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            w(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === v.Sq(t))) return void this.focusEditor();
                ((t = v.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, T.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            w(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = C.Z.getChannelId(),
                    r = x.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = x.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchId: s, searchType: l } = this.props,
                    a = (0, y.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = this.props.searchId === k.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (0, I.X3)(r);
                if (null == o) return void this.focusEditor();
                ((0, T.PJ)({
                    searchType: l,
                    searchId: s
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: f.ZP[k.dCx.FILTER_IN].key + ''.concat(o, ' '),
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
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, T.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            w(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        r ||
                        e ||
                        (0, T.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        v.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            w(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            w(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: Z.Z.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: Z.Z.KEY_PRESS }))),
            w(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, R.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            w(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (v.Sq(t).length >= 512 || ((t = v.x0(e, t)), (t = v.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
            }),
            w(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = v.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = v.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                    { focused: n } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = v.x0(e, t)), (t = v.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            w(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            w(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), v.xb(s))) this.blurEditor();
                    else {
                        let e = v.FZ(s);
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
                    return ((0, g.Qj)(), !0);
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? v.R8(s) : v.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? v.Wg(s) : v.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = v.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return v.q0(e);
            }),
            (0, I.WU)());
    }
}
function B(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, T.IZ)({
                searchId: n,
                searchType: r
            })),
            !l.current && t && (l.current = !0));
    }, [t, n, r]);
}
function U(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = s.useMemo(() => ({ type: k.aib.DMS }), []),
        i = (0, u.e7)([b.Z], () => {
            let e = b.Z.getTotalCount(k.aib.DMS);
            return null != e && e > 0;
        }),
        o = (0, u.e7)([b.Z], () => b.Z.getIsFetching(k.aib.DMS)),
        c = o || i;
    B({
        isSearchActive: c,
        searchId: k.aib.DMS,
        searchType: k.aib.DMS
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: t, query: n } = e;
            ((0, T.LQ)(k.aib.DMS),
                (0, T.tI)({
                    searchType: (0, P.g)(k.aib.DMS),
                    searchId: k.aib.DMS,
                    query: n,
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
    return (0, r.jsx)(H, {
        className: t,
        searchId: k.aib.DMS,
        searchType: k.aib.DMS,
        isSearching: o,
        editorState: l,
        hasResults: i,
        keyboardModeEnabled: n,
        onSearch: d,
        isSearchActive: c,
        placeholder: M.intl.string(M.t.m7OrlZ)
    });
}
function W(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = (0, u.e7)([E.Z], () => E.Z.getCurrentSearchId()),
        i = (0, P.k)(a),
        o = (0, u.e7)([E.Z], () => E.Z.isActive(a)),
        c = (0, u.e7)([E.Z], () => E.Z.hasResults(a)),
        d = (0, u.e7)([E.Z], () => null != a && E.Z.isSearching(a));
    B({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a &&
                ((0, T.LQ)(a),
                (0, T.tI)({
                    searchType: (0, P.g)(a),
                    searchId: a,
                    query: n,
                    queryString: t
                }),
                D(a, n, t, !!r));
        },
        [a]
    );
    return (0, r.jsx)(H, {
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
function G(e) {
    let { className: t } = e,
        n = (0, u.e7)([E.Z], () => E.Z.getCurrentSearchId()),
        l = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, u.e7)([E.Z], () => (null != n ? E.Z.getEditorState(n) : null)),
        i = s.useMemo(() => (null != a ? a : v.nR(j.Jl(f.ZP))), [a]),
        o = (0, y.U)({ location: 'Search' });
    return n === k.aib.DMS && o
        ? (0, r.jsx)(U, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          })
        : (0, r.jsx)(W, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          });
}
