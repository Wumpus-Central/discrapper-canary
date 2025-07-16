(n.d(t, { Z: () => W }), n(35282), n(704826));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(399834),
    i = n(299608),
    c = n.n(i),
    u = n(442837),
    d = n(481060),
    h = n(603263),
    p = n(349033),
    f = n(999650),
    g = n(857595),
    m = n(607070),
    b = n(313201),
    y = n(977885),
    S = n(778877),
    x = n(903488),
    j = n(592125),
    O = n(768119),
    v = n(944486),
    _ = n(585483),
    E = n(72006),
    C = n(405656),
    I = n(181389),
    R = n(854709),
    P = n(652399),
    T = n(861262),
    N = n(611004),
    k = n(778177),
    A = n(723642),
    Z = n(981631),
    w = n(388032),
    L = n(665333);
function F(e, t, n) {
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
let M = (0, b.hQ)(),
    D = c()(h.yC, 500);
class H extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (_.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search), _.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, C.kG)(E.Sq(t)),
                r = I.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && E.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (_.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search), _.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch));
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
        let { editorState: t, placeholder: n } = this.props;
        return (0, r.jsx)(o.Editor, {
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
            placeholder: null != n ? n : w.intl.string(w.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? M : void 0,
            ariaLabel: w.intl.string(w.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: l } = this.state,
            o = E.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.yRy, {
                  targetElementRef: this._containerRef,
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.yRy.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, i) => {
                      var c;
                      let { isShown: u } = i;
                      return (0, r.jsx)('div', {
                          className: s,
                          ref: this._containerRef,
                          children: (0, r.jsx)('div', {
                              className: a()(L.search, {
                                  [L.open]: o || l,
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
                                                  hasContent: o || n,
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
            F(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            F(this, '_editorRef', void 0),
            F(this, '_containerRef', s.createRef()),
            F(this, '_searchBarRef', s.createRef()),
            F(this, '_searchPopoutRef', s.createRef()),
            F(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    o = E.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== o.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = E.c2(t, a)), (n = 0)) : (a = E.x0(t, a, n, r)), (a = E.Hl(a, 512)), (a = this.tokenize(a)));
                let i = Number(n) + t.length;
                ((a = E.iK(i, a)), this.setEditorState(a), s && this.search({ queryString: E.Sq(a) }));
            }),
            F(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(M, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            F(this, 'renderPopout', () =>
                (0, r.jsx)(k.ZP, {
                    ref: this._searchPopoutRef,
                    navId: M,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            F(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: s } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = E.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, C.kG)(r),
                        t = (0, C.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, C.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != s && s
                    }),
                        d.uvj.announce(w.intl.string(w.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            F(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === E.Sq(t))) return void this.focusEditor();
                ((t = E.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, P.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            F(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = v.Z.getChannelId(),
                    r = j.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = j.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchId: s, searchType: l } = this.props,
                    a = (0, S.a)({ location: 'SearchBar_handleFocusSearch' }),
                    o = this.props.searchId === Z.aib.DMS && a;
                if (r.isPrivate() && !o) return void this.focusEditor();
                let i = (0, C.X3)(r);
                if (null == i) return void this.focusEditor();
                ((0, P.PJ)({
                    searchType: l,
                    searchId: s
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: f.ZP[Z.dCx.FILTER_IN].key + ''.concat(i, ' '),
                                replace: !0
                            }));
                    }));
            }),
            F(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            F(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            F(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            F(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                (this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, P.I1)({
                            searchId: e,
                            searchType: t
                        }));
            }),
            F(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    (null == t ||
                        r ||
                        e ||
                        (0, P.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        E.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            F(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            F(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: A.Z.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: A.Z.KEY_PRESS }))),
            F(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, R.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            F(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (E.Sq(t).length >= 512 || ((t = E.x0(e, t)), (t = E.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
            }),
            F(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return ((t = E.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
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
            F(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = E.x0(e, t)), (t = E.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            F(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            F(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? E.R8(s) : E.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? E.Wg(s) : E.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = E.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return E.q0(e);
            }),
            (0, C.WU)());
    }
}
function B(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, P.IZ)({
                searchId: n,
                searchType: r
            })),
            !l.current && t && (l.current = !0));
    }, [t, n, r]);
}
function U(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = s.useMemo(() => ({ type: Z.aib.DMS }), []),
        o = (0, u.e7)([x.Z], () => {
            let e = x.Z.getTotalCount(Z.aib.DMS);
            return null != e && e > 0;
        }),
        i = (0, u.e7)([x.Z], () => x.Z.getIsFetching(Z.aib.DMS)),
        c = i || o;
    B({
        isSearchActive: c,
        searchId: Z.aib.DMS,
        searchType: Z.aib.DMS
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
    return (0, r.jsx)(H, {
        className: t,
        searchId: Z.aib.DMS,
        searchType: Z.aib.DMS,
        isSearching: i,
        editorState: l,
        hasResults: o,
        keyboardModeEnabled: n,
        onSearch: d,
        isSearchActive: c,
        placeholder: w.intl.string(w.t.m7OrlZ)
    });
}
function G(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()),
        o = (0, T.k)(a),
        i = (0, u.e7)([O.Z], () => O.Z.isActive(a)),
        c = (0, u.e7)([O.Z], () => O.Z.hasResults(a)),
        d = (0, u.e7)([O.Z], () => null != a && O.Z.isSearching(a));
    B({
        isSearchActive: i,
        searchId: a,
        searchType: o
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && D(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(H, {
        className: t,
        searchId: a,
        searchType: o,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: h,
        isSearchActive: i
    });
}
function W(e) {
    let { className: t } = e,
        n = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()),
        l = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, u.e7)([O.Z], () => (null != n ? O.Z.getEditorState(n) : null)),
        o = s.useMemo(() => (null != a ? a : E.nR(I.Jl(f.ZP))), [a]),
        i = (0, S.U)({ location: 'Search' });
    return n === Z.aib.DMS && i
        ? (0, r.jsx)(U, {
              className: t,
              keyboardModeEnabled: l,
              editorState: o
          })
        : (0, r.jsx)(G, {
              className: t,
              keyboardModeEnabled: l,
              editorState: o
          });
}
