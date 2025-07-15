(r.d(t, { Z: () => G }), r(35282), r(704826));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(399834),
    i = r(299608),
    c = r.n(i),
    u = r(442837),
    d = r(481060),
    h = r(603263),
    p = r(349033),
    f = r(999650),
    g = r(857595),
    m = r(607070),
    b = r(313201),
    y = r(977885),
    S = r(778877),
    x = r(903488),
    O = r(592125),
    j = r(768119),
    v = r(944486),
    _ = r(585483),
    E = r(72006),
    C = r(405656),
    I = r(181389),
    R = r(854709),
    P = r(652399),
    T = r(861262),
    N = r(611004),
    k = r(778177),
    w = r(981631),
    Z = r(388032),
    A = r(665333);
function M(e, t, r) {
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
let F = (0, b.hQ)(),
    L = c()(h.yC, 500);
class D extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (_.S.subscribe(w.CkL.PERFORM_SEARCH, this.search), _.S.subscribe(w.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.subscribe(w.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: r } = this.props;
        if (t !== e.editorState) {
            let e = (0, C.kG)(E.Sq(t)),
                n = I.g9(e, t);
            (h.u$(r, e, n), null != this._editorRef && E.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (_.S.unsubscribe(w.CkL.PERFORM_SEARCH, this.search), _.S.unsubscribe(w.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.unsubscribe(w.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, C.kG)(E.Sq(e)).filter((e) => e.type !== p.ZP.NON_TOKEN_TYPE);
        return E.lv(t, e, f.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && (h.qt(e), y.Z.clearSearchState(e));
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
        return (0, n.jsx)(o.Editor, {
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
            ariaControls: e ? F : void 0,
            ariaLabel: Z.intl.string(Z.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            o = E.Sq(t).length > 0;
        return null == e
            ? null
            : (0, n.jsx)(d.yRy, {
                  targetElementRef: this._containerRef,
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.yRy.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, i) => {
                      var c;
                      let { isShown: u } = i;
                      return (0, n.jsx)('div', {
                          className: s,
                          ref: this._containerRef,
                          children: (0, n.jsx)('div', {
                              className: a()(A.search, {
                                  [A.open]: o || l,
                                  [A.focused]: l
                              }),
                              children: (0, n.jsx)(d.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, n.jsxs)(
                                      'div',
                                      {
                                          className: A.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, n.jsx)(d.BK9, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: o || r,
                                                  className: A.icon,
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
            M(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            M(this, '_editorRef', void 0),
            M(this, '_containerRef', s.createRef()),
            M(this, '_searchBarRef', s.createRef()),
            M(this, '_searchPopoutRef', s.createRef()),
            M(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: r, focus: n, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    o = E.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != r && 0 !== r && ' ' !== o.charAt(r - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = E.c2(t, a)), (r = 0)) : (a = E.x0(t, a, r, n)), (a = E.Hl(a, 512)), (a = this.tokenize(a)));
                let i = Number(r) + t.length;
                ((a = E.iK(i, a)), this.setEditorState(a), s && this.search({ queryString: E.Sq(a) }));
            }),
            M(this, 'handleSelectedIndexChanged', (e) => {
                var t, r;
                (null == (r = this._editorRef) || null == (t = r.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(F, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            M(this, 'renderPopout', () =>
                (0, n.jsx)(k.ZP, {
                    ref: this._searchPopoutRef,
                    navId: F,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            M(this, 'search', (e) => {
                let { searchId: t, isSearching: r } = this.props,
                    { queryString: n, searchEverywhere: s } = null != e ? e : {};
                if (null == n || '' === n) {
                    let { editorState: e } = this.props;
                    n = E.Sq(e);
                }
                if (null != t && !r) {
                    let e = (0, C.kG)(n),
                        t = (0, C.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, C.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != s && s
                    }),
                        d.uvj.announce(Z.intl.string(Z.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            M(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: r, searchType: n } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === E.Sq(t))) return void this.focusEditor();
                ((t = E.Hl(t, 0)),
                    this.setEditorState(t),
                    null != r &&
                        (0, P.cy)({
                            searchType: n,
                            searchId: r
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            M(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let r = v.Z.getChannelId(),
                    n = O.Z.getChannel(r);
                if (((null == n ? void 0 : n.isThread()) && (n = O.Z.getChannel(null == n ? void 0 : n.parent_id)), null == n)) return void this.focusEditor();
                let { searchId: s, searchType: l } = this.props,
                    a = (0, S.a)({ location: 'SearchBar_handleFocusSearch' }),
                    o = this.props.searchId === w.aib.DMS && a;
                if (n.isPrivate() && !o) return void this.focusEditor();
                let i = (0, C.X3)(n);
                if (null == i) return void this.focusEditor();
                ((0, P.PJ)({
                    searchType: l,
                    searchId: s
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: f.ZP[w.dCx.FILTER_IN].key + ''.concat(i, ' '),
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
                let { searchId: e, searchType: t, isSearchActive: r } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        r ||
                        (0, P.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            M(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: r, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        n ||
                        e ||
                        (0, P.IZ)({
                            searchId: t,
                            searchType: r
                        }),
                        E.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            M(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            M(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel() : e.selectOption())),
            M(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: r } = this._searchPopoutRef;
                return (this.handleOption(r) || ((0, R.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            M(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return (E.Sq(t).length >= 512 || ((t = E.x0(e, t)), (t = E.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 })), 'handled');
            }),
            M(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = E.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = E.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                    { focused: r } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = E.x0(e, t)), (t = E.Hl(t, 512)), (t = this.tokenize(t)), r || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            M(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            M(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: r, shiftKey: n } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), E.xb(s))) this.blurEditor();
                    else {
                        let e = E.FZ(s);
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
                if ('Home' === t || ('ArrowLeft' === t && r)) return (e.preventDefault(), (s = n ? E.R8(s) : E.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && r)) return (e.preventDefault(), (s = n ? E.Wg(s) : E.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && r) {
                    let e = E.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return E.q0(e);
            }),
            (0, C.WU)());
    }
}
function H(e) {
    let { isSearchActive: t, searchId: r, searchType: n } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, P.IZ)({
                searchId: r,
                searchType: n
            })),
            !l.current && t && (l.current = !0));
    }, [t, r, n]);
}
function B(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = s.useMemo(() => ({ type: w.aib.DMS }), []),
        o = (0, u.e7)([x.Z], () => {
            let e = x.Z.getTotalCount(w.aib.DMS);
            return null != e && e > 0;
        }),
        i = (0, u.e7)([x.Z], () => x.Z.getIsFetching(w.aib.DMS)),
        c = i || o;
    H({
        isSearchActive: c,
        searchId: w.aib.DMS,
        searchType: w.aib.DMS
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: t } = e;
            N.Z.fetchCrossDMMessages({
                searchContext: a,
                selectedPageIndex: 0,
                queryString: t
            });
        },
        [a]
    );
    return (0, n.jsx)(D, {
        className: t,
        searchId: w.aib.DMS,
        searchType: w.aib.DMS,
        isSearching: i,
        editorState: l,
        hasResults: o,
        keyboardModeEnabled: r,
        onSearch: d,
        isSearchActive: c,
        placeholder: Z.intl.string(Z.t.m7OrlZ)
    });
}
function U(e) {
    let { className: t, keyboardModeEnabled: r, editorState: l } = e,
        a = (0, u.e7)([j.Z], () => j.Z.getCurrentSearchId()),
        o = (0, T.k)(a),
        i = (0, u.e7)([j.Z], () => j.Z.isActive(a)),
        c = (0, u.e7)([j.Z], () => j.Z.hasResults(a)),
        d = (0, u.e7)([j.Z], () => null != a && j.Z.isSearching(a));
    H({
        isSearchActive: i,
        searchId: a,
        searchType: o
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: r, searchEverywhere: n } = e;
            null != a && L(a, r, t, !!n);
        },
        [a]
    );
    return (0, n.jsx)(D, {
        className: t,
        searchId: a,
        searchType: o,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: r,
        onSearch: h,
        isSearchActive: i
    });
}
function G(e) {
    let { className: t } = e,
        r = (0, u.e7)([j.Z], () => j.Z.getCurrentSearchId()),
        l = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, u.e7)([j.Z], () => (null != r ? j.Z.getEditorState(r) : null)),
        o = s.useMemo(() => (null != a ? a : E.nR(I.Jl(f.ZP))), [a]),
        i = (0, S.U)({ location: 'Search' });
    return r === w.aib.DMS && i
        ? (0, n.jsx)(B, {
              className: t,
              keyboardModeEnabled: l,
              editorState: o
          })
        : (0, n.jsx)(U, {
              className: t,
              keyboardModeEnabled: l,
              editorState: o
          });
}
