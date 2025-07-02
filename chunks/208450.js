(n.d(t, { Z: () => W }), n(35282), n(704826));
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
    y = n(313201),
    b = n(778877),
    x = n(903488),
    _ = n(416638),
    E = n(592125),
    v = n(984933),
    O = n(768119),
    j = n(944486),
    C = n(585483),
    I = n(72006),
    R = n(405656),
    P = n(181389),
    T = n(854709),
    N = n(652399),
    A = n(861262),
    k = n(611004),
    w = n(778177),
    M = n(981631),
    F = n(862825),
    Z = n(388032),
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
    U = c()(h.yC, 500);
class B extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (C.S.subscribe(M.CkL.PERFORM_SEARCH, this.search), C.S.subscribe(M.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.S.subscribe(M.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, R.kG)(I.Sq(t)),
                r = P.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && I.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (C.S.unsubscribe(M.CkL.PERFORM_SEARCH, this.search), C.S.unsubscribe(M.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.S.unsubscribe(M.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, R.kG)(I.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return I.lv(t, e, g.ZP);
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
        let { editorState: t } = this.props;
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
            placeholder: Z.intl.string(Z.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? H : void 0,
            ariaLabel: Z.intl.string(Z.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: l } = this.state,
            i = I.Sq(t).length > 0;
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
            D(this, '_containerRef', s.createRef()),
            D(this, '_searchBarRef', s.createRef()),
            D(this, '_searchPopoutRef', s.createRef()),
            D(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = I.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = I.c2(t, a)), (n = 0)) : (a = I.x0(t, a, n, r)), (a = I.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = I.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: I.Sq(a) }));
            }),
            D(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(H, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            D(this, 'renderPopout', () =>
                (0, r.jsx)(w.ZP, {
                    ref: this._searchPopoutRef,
                    navId: H,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            D(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: s } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = I.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, R.kG)(r),
                        t = (0, R.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, R.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != s && s
                    }),
                        d.uvj.announce(Z.intl.string(Z.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            D(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: s } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === I.Sq(t))) return void this.focusEditor();
                ((t = I.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, N.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            D(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = j.Z.getChannelId(),
                    r = E.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = E.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) return void this.focusEditor();
                let s = v.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
                    l = null != s ? s.name : r.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    (null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: g.ZP[M.dCx.FILTER_IN].key + '#'.concat(l, ' '),
                            replace: !0
                        }));
                });
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
                        I.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            D(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            D(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return ((null != n && n.selectOption()) || ((0, T.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            D(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (I.Sq(t).length >= 512 || ((t = I.x0(e, t)), (t = I.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
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
                        return ((t = I.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = I.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = I.x0(e, t)), (t = I.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            D(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            D(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), I.xb(s))) this.blurEditor();
                    else {
                        let e = I.FZ(s);
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? I.R8(s) : I.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? I.Wg(s) : I.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = I.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return I.q0(e);
            }),
            (0, R.WU)());
    }
}
function G(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, N.IZ)({
                searchId: n,
                searchType: r
            })),
            !l.current && t && (l.current = !0));
    }, [t, n, r]);
}
function z(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = s.useMemo(() => ({ type: M.aib.DMS }), []),
        i = (0, u.e7)([O.Z], () => O.Z.getSearchResultsQueryString(M.aib.DMS)),
        o = (0, _.jj)(a, F.sR.MESSAGES, i),
        c = (0, u.e7)([x.Z], () => {
            let e = x.Z.getTotalCount(o);
            return null != e && e > 0;
        }),
        d = (0, u.e7)([x.Z], () => x.Z.getIsFetching(o)),
        h = d || c;
    G({
        isSearchActive: h,
        searchId: M.aib.DMS,
        searchType: M.aib.DMS
    });
    let p = s.useCallback(
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
    return (0, r.jsx)(B, {
        className: t,
        searchId: M.aib.DMS,
        searchType: M.aib.DMS,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: p,
        isSearchActive: h
    });
}
function q(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()),
        i = (0, A.k)(a),
        o = (0, u.e7)([O.Z], () => O.Z.isActive(a)),
        c = (0, u.e7)([O.Z], () => O.Z.hasResults(a)),
        d = (0, u.e7)([O.Z], () => null != a && O.Z.isSearching(a));
    G({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && U(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(B, {
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
function W(e) {
    let { className: t } = e,
        n = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()),
        l = (0, u.e7)([S.Z], () => S.Z.keyboardModeEnabled),
        a = (0, u.e7)([O.Z], () => (null != n ? O.Z.getEditorState(n) : null)),
        i = s.useMemo(() => (null != a ? a : I.nR(P.Jl(g.ZP))), [a]),
        o = (0, b.U)({ location: 'Search' });
    return n === M.aib.DMS && o
        ? (0, r.jsx)(z, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          })
        : (0, r.jsx)(q, {
              className: t,
              keyboardModeEnabled: l,
              editorState: i
          });
}
