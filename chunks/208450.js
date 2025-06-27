n.d(t, { Z: () => W }), n(35282), n(704826);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(399834),
    s = n(299608),
    c = n.n(s),
    u = n(442837),
    d = n(481060),
    p = n(603263),
    m = n(461745),
    f = n(349033),
    h = n(999650),
    g = n(857595),
    _ = n(607070),
    b = n(313201),
    x = n(977885),
    y = n(778877),
    E = n(903488),
    v = n(416638),
    C = n(592125),
    O = n(984933),
    j = n(768119),
    S = n(944486),
    I = n(585483),
    T = n(72006),
    N = n(405656),
    P = n(181389),
    A = n(854709),
    w = n(652399),
    Z = n(861262),
    R = n(778177),
    k = n(981631),
    L = n(862825),
    D = n(388032),
    M = n(665333);
function U(e, t, n) {
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
let F = (0, b.hQ)(),
    B = c()(p.yC, 500);
class G extends i.PureComponent {
    componentDidMount() {
        var e, t;
        I.S.subscribe(k.CkL.PERFORM_SEARCH, this.search), I.S.subscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), I.S.subscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, N.kG)(T.Sq(t)),
                r = P.g9(e, t);
            p.u$(n, e, r), null != this._editorRef && T.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        I.S.unsubscribe(k.CkL.PERFORM_SEARCH, this.search), I.S.unsubscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), I.S.unsubscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = (0, N.kG)(T.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return T.lv(t, e, h.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && p.qt(e);
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
            placeholder: D.intl.string(D.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? F : void 0,
            ariaLabel: D.intl.string(D.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: l } = this.state,
            o = T.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.yRy, {
                  targetElementRef: this._containerRef,
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.yRy.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, s) => {
                      var c;
                      let { isShown: u } = s;
                      return (0, r.jsx)('div', {
                          className: i,
                          ref: this._containerRef,
                          children: (0, r.jsx)('div', {
                              className: a()(M.search, {
                                  [M.open]: o || l,
                                  [M.focused]: l
                              }),
                              children: (0, r.jsx)(d.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: M.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, r.jsx)(m.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: o || n,
                                                  className: M.icon
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
        super(e),
            U(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            U(this, '_editorRef', void 0),
            U(this, '_containerRef', i.createRef()),
            U(this, '_searchBarRef', i.createRef()),
            U(this, '_searchPopoutRef', i.createRef()),
            U(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: l } = e,
                    { editorState: a } = this.props,
                    o = T.Sq(a);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== o.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = T.c2(t, a)), (n = 0)) : (a = T.x0(t, a, n, r)), (a = T.Hl(a, 512)), (a = this.tokenize(a));
                let s = Number(n) + t.length;
                (a = T.iK(s, a)), this.setEditorState(a), i && this.search({ queryString: T.Sq(a) });
            }),
            U(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(F, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            U(this, 'renderPopout', () =>
                (0, r.jsx)(R.ZP, {
                    ref: this._searchPopoutRef,
                    navId: F,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            U(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: i } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = T.Sq(e);
                }
                if (null != t && !n) {
                    let e = (0, N.kG)(r),
                        t = (0, N.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, N.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != i && i
                    }),
                        d.uvj.announce(D.intl.string(D.t.pKCxWF)),
                        this.handleBlur(!0);
                }
                return !0;
            }),
            U(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchId: n, searchType: r } = this.props,
                    { focused: i } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === T.Sq(t))) return void this.focusEditor();
                (t = T.Hl(t, 0)),
                    this.setEditorState(t),
                    null != n &&
                        (0, w.cy)({
                            searchType: r,
                            searchId: n
                        }),
                    i || Promise.resolve().then(() => this.blurEditor());
            }),
            U(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = S.Z.getChannelId(),
                    r = C.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = C.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) return void this.focusEditor();
                let i = O.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
                    l = null != i ? i.name : r.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: h.ZP[k.dCx.FILTER_IN].key + '#'.concat(l, ' '),
                            replace: !0
                        });
                });
            }),
            U(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            U(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            U(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            U(this, 'onFocus', () => {
                let { searchId: e, searchType: t, isSearchActive: n } = this.props;
                this.setState({ focused: !0 }),
                    null == e ||
                        n ||
                        (0, w.I1)({
                            searchId: e,
                            searchType: t
                        });
            }),
            U(this, 'handleBlur', (e) => {
                let { searchId: t, searchType: n, isSearchActive: r } = this.props;
                this.setState({ focused: !1 }, () => {
                    null == t ||
                        r ||
                        e ||
                        (0, w.IZ)({
                            searchId: t,
                            searchType: n
                        }),
                        T.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            U(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            U(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (null != n && n.selectOption()) || ((0, A.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled';
            }),
            U(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return T.Sq(t).length >= 512 || ((t = T.x0(e, t)), (t = T.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled';
            }),
            U(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return (t = T.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled';
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = T.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled';
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return 'handled';
                }
                return 'not-handled';
            }),
            U(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = T.x0(e, t)), (t = T.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled';
            }),
            U(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                p.j8(t, e);
            }),
            U(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), T.xb(i))) this.blurEditor();
                    else {
                        let e = T.FZ(i);
                        p.j8(l, e), this.setState({ focused: !0 });
                    }
                    return !0;
                }
                if ('ArrowUp' === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return null != t && t.focusPreviousOption(), !0;
                }
                if ('ArrowDown' === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return null != t && t.focusNextOption(), !0;
                }
                if ('Tab' === t) {
                    if (a) return;
                    return (0, g.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (i = r ? T.R8(i) : T.eE(i)), this.setEditorState(i), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (i = r ? T.Wg(i) : T.NJ(i)), this.setEditorState(i), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = T.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return T.q0(e);
            }),
            (0, N.WU)();
    }
}
function H(e) {
    let { isSearchActive: t, searchId: n, searchType: r } = e,
        l = i.useRef(t);
    i.useEffect(() => {
        l.current &&
            !t &&
            ((l.current = !1),
            (0, w.IZ)({
                searchId: n,
                searchType: r
            })),
            !l.current && t && (l.current = !0);
    }, [t, n, r]);
}
function V(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = i.useMemo(() => ({ type: k.aib.DMS }), []),
        o = (0, u.e7)([j.Z], () => j.Z.getSearchResultsQueryString(k.aib.DMS)),
        s = (0, v.jj)(a, L.sR.MESSAGES, o),
        c = (0, u.e7)([E.Z], () => {
            let e = E.Z.getTotalCount(s);
            return null != e && e > 0;
        }),
        d = (0, u.e7)([E.Z], () => E.Z.getIsFetching(s)),
        m = d || c;
    H({
        isSearchActive: m,
        searchId: k.aib.DMS,
        searchType: k.aib.DMS
    });
    let f = i.useCallback(
        (e) => {
            let { queryString: t } = e;
            x.Z.fetchMessages({
                searchContext: a,
                searchTabs: [L.sR.MESSAGES],
                searchQueryString: t,
                getLimit: () => k.vpv,
                onFetchStart: (e) => {
                    let { searchContext: t, searchQueryString: n, searchQuery: r } = e,
                        i = (0, v.WJ)(t);
                    p.Vs(i, n, r);
                },
                pagination: { offset: 0 },
                trackExactTotalHits: !0
            });
        },
        [a]
    );
    return (0, r.jsx)(G, {
        className: t,
        searchId: k.aib.DMS,
        searchType: k.aib.DMS,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: f,
        isSearchActive: m
    });
}
function z(e) {
    let { className: t, keyboardModeEnabled: n, editorState: l } = e,
        a = (0, u.e7)([j.Z], () => j.Z.getCurrentSearchId()),
        o = (0, Z.k)(a),
        s = (0, u.e7)([j.Z], () => j.Z.isActive(a)),
        c = (0, u.e7)([j.Z], () => j.Z.hasResults(a)),
        d = (0, u.e7)([j.Z], () => null != a && j.Z.isSearching(a));
    H({
        isSearchActive: s,
        searchId: a,
        searchType: o
    });
    let p = i.useCallback(
        (e) => {
            let { queryString: t, query: n, searchEverywhere: r } = e;
            null != a && B(a, n, t, !!r);
        },
        [a]
    );
    return (0, r.jsx)(G, {
        className: t,
        searchId: a,
        searchType: o,
        isSearching: d,
        editorState: l,
        hasResults: c,
        keyboardModeEnabled: n,
        onSearch: p,
        isSearchActive: s
    });
}
function W(e) {
    let { className: t } = e,
        n = (0, u.e7)([j.Z], () => j.Z.getCurrentSearchId()),
        l = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        a = (0, u.e7)([j.Z], () => (null != n ? j.Z.getEditorState(n) : null)),
        o = i.useMemo(() => (null != a ? a : T.nR(P.Jl(h.ZP))), [a]),
        s = (0, y.U)({ location: 'Search' });
    return n === k.aib.DMS && s
        ? (0, r.jsx)(V, {
              className: t,
              keyboardModeEnabled: l,
              editorState: o
          })
        : (0, r.jsx)(z, {
              className: t,
              keyboardModeEnabled: l,
              editorState: o
          });
}
