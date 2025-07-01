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
    b = n(977885),
    x = n(778877),
    _ = n(903488),
    E = n(416638),
    v = n(592125),
    O = n(984933),
    j = n(768119),
    C = n(944486),
    I = n(585483),
    R = n(72006),
    P = n(405656),
    T = n(181389),
    N = n(854709),
    A = n(652399),
    w = n(861262),
    k = n(778177),
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
    B = c()(h.yC, 500);
class U extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (I.S.subscribe(M.CkL.PERFORM_SEARCH, this.search), I.S.subscribe(M.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), I.S.subscribe(M.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, P.kG)(R.Sq(t)),
                r = T.g9(e, t);
            (h.u$(n, e, r), null != this._editorRef && R.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (I.S.unsubscribe(M.CkL.PERFORM_SEARCH, this.search), I.S.unsubscribe(M.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), I.S.unsubscribe(M.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, P.kG)(R.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return R.lv(t, e, g.ZP);
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
            i = R.Sq(t).length > 0;
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
                    i = R.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = R.c2(t, a)), (n = 0)) : (a = R.x0(t, a, n, r)), (a = R.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = R.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: R.Sq(a) }));
            }),
            D(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(H, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            D(this, 'renderPopout', () =>
                (0, r.jsx)(k.ZP, {
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
                    r = R.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, P.kG)(r),
                        t = (0, P.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, P.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
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
                if ((e.preventDefault(), e.stopPropagation(), '' === R.Sq(t))) return void this.focusEditor();
                ((t = R.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, A.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    s || Promise.resolve().then(() => this.blurEditor()));
            }),
            D(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = C.Z.getChannelId(),
                    r = v.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = v.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) return void this.focusEditor();
                let s = O.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
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
                        (0, A.I1)({
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
                        (0, A.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        R.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            D(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            D(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return ((null != n && n.selectOption()) || ((0, N.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            D(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (R.Sq(t).length >= 512 || ((t = R.x0(e, t)), (t = R.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
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
                        return ((t = R.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = R.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = R.x0(e, t)), (t = R.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            D(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            D(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: s, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), R.xb(s))) this.blurEditor();
                    else {
                        let e = R.FZ(s);
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? R.R8(s) : R.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? R.Wg(s) : R.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = R.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return R.q0(e);
            }),
            (0, P.WU)());
    }
}
function G(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        l = s.useRef(t);
    s.useEffect(() => {
        (l.current &&
            !t &&
            ((l.current = !1),
            (0, A.IZ)({
                searchId: n,
                searchType: r
            })),
            !l.current && t && (l.current = !0));
    }, [t, n, r]);
}
function z(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = s.useMemo(() => ({ type: M.aib.DMS }), []),
        i = (0, u.e7)([j.Z], () => j.Z.getSearchResultsQueryString(M.aib.DMS)),
        o = (0, E.jj)(a, F.sR.MESSAGES, i),
        c = (0, u.e7)([_.Z], () => {
            let e = _.Z.getTotalCount(o);
            return null != e && e > 0;
        }),
        d = (0, u.e7)([_.Z], () => _.Z.getIsFetching(o)),
        p = d || c;
    G({
        isSearchActive: p,
        searchId: M.aib.DMS,
        searchType: M.aib.DMS
    });
    let f = s.useCallback(
        (e) => {
            let { queryString: t } = e;
            b.Z.fetchMessages({
                searchContext: a,
                searchTabs: [F.sR.MESSAGES],
                searchQueryString: t,
                getLimit: () => M.vpv,
                onFetchStart: (e) => {
                    let { searchContext: t, searchQueryString: n, searchQuery: r } = e,
                        s = (0, E.WJ)(t);
                    h.Vs(s, n, r);
                },
                pagination: { offset: 0 },
                trackExactTotalHits: !0
            });
        },
        [a]
    );
    return (0, r.jsx)(U, {
        className: t,
        searchId: M.aib.DMS,
        searchType: M.aib.DMS,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: f,
        isSearchActive: p
    });
}
function q(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = (0, u.e7)([j.Z], () => j.Z.getCurrentSearchId()),
        i = (0, w.k)(a),
        o = (0, u.e7)([j.Z], () => j.Z.isActive(a)),
        c = (0, u.e7)([j.Z], () => j.Z.hasResults(a)),
        d = (0, u.e7)([j.Z], () => null != a && j.Z.isSearching(a));
    G({
        isSearchActive: o,
        searchId: a,
        searchType: i
    });
    let h = s.useCallback(
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
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: h,
        isSearchActive: o
    });
}
function W(e) {
    let { className: t } = e,
        n = (0, u.e7)([j.Z], () => j.Z.getCurrentSearchId()),
        l = (0, u.e7)([S.Z], () => S.Z.keyboardModeEnabled),
        a = (0, u.e7)([j.Z], () => (null != n ? j.Z.getEditorState(n) : null)),
        i = s.useMemo(() => (null != a ? a : R.nR(T.Jl(g.ZP))), [a]),
        o = (0, x.U)({ location: 'Search' });
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
