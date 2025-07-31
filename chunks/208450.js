(n.d(t, { Z: () => U }), n(35282), n(704826));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(399834),
    o = n(299608),
    c = n.n(o),
    u = n(442837),
    h = n(481060),
    d = n(349033),
    p = n(857595),
    f = n(607070),
    g = n(313201),
    m = n(592125),
    y = n(944486),
    x = n(585483),
    S = n(72006),
    b = n(181389),
    v = n(748610),
    j = n(171900),
    C = n(518944),
    O = n(607802),
    _ = n(612806),
    I = n(945577),
    P = n(532428),
    E = n(611004),
    R = n(778177),
    T = n(165017),
    N = n(315322),
    k = n(723642),
    w = n(981631),
    Z = n(388032),
    A = n(665333);
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
let D = (0, g.hQ)(),
    F = c()(E.Z.fetchMessages, 500);
class L extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (x.S.subscribe(w.CkL.PERFORM_SEARCH, this.search), x.S.subscribe(w.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), x.S.subscribe(w.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, O.kG)(S.Sq(t)),
                r = b.g9(e, t);
            (v.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && S.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (x.S.unsubscribe(w.CkL.PERFORM_SEARCH, this.search), x.S.unsubscribe(w.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), x.S.unsubscribe(w.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, O.kG)(S.Sq(e)).filter((e) => e.type !== d.ZP.NON_TOKEN_TYPE);
        return S.lv(t, e, P.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props,
            t = (0, O.WJ)(e);
        E.Z.cleanUpSearchState(t);
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
            ariaControls: e ? D : void 0,
            ariaLabel: Z.intl.string(Z.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: l } = this.state,
            i = S.Sq(t).length > 0;
        return (0, r.jsx)(h.yRy, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: 'bottom',
            animation: h.yRy.Animation.NONE,
            shouldShow: l,
            autoInvert: !1,
            children: (t, o) => {
                var c;
                let { isShown: u } = o;
                return (0, r.jsx)('div', {
                    className: s,
                    ref: this._containerRef,
                    children: (0, r.jsx)('div', {
                        className: a()(A.search, {
                            [A.open]: i || l,
                            [A.focused]: l
                        }),
                        children: (0, r.jsx)(h.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                'div',
                                {
                                    className: A.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(h.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || n,
                                            className: A.icon,
                                            isLoading: !1
                                        })
                                    ]
                                },
                                (0, O.WJ)(e)
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
                let { query: t, anchor: n, focus: r, performSearch: s, replace: l } = e,
                    { editorState: a } = this.props,
                    i = S.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== i.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = S.c2(t, a)), (n = 0)) : (a = S.x0(t, a, n, r)), (a = S.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(n) + t.length;
                ((a = S.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: S.Sq(a) }));
            }),
            M(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(D, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            M(this, 'renderPopout', () =>
                (0, r.jsx)(R.ZP, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: D,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            M(this, 'search', (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r } = null != e ? e : {};
                if (null == n || '' === n) {
                    let { editorState: e } = this.props;
                    n = S.Sq(e);
                }
                if (!t) {
                    let e = (0, O.kG)(n),
                        t = (0, O.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, O.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r
                    }),
                        h.uvj.announce(Z.intl.string(Z.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            M(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === S.Sq(t))) return void this.focusEditor();
                ((t = S.Hl(t, 0)), this.setEditorState(t));
                let s = (0, O.WJ)(n);
                ((0, N.cy)({
                    searchId: s,
                    searchType: n.type
                }),
                    r || Promise.resolve().then(() => this.blurEditor()));
            }),
            M(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = y.Z.getChannelId(),
                    r = m.Z.getChannel(n),
                    s = _.Z.getCurrentConfig({ location: 'handleFocusSearch' }).enabled;
                if (((null == r ? void 0 : r.isThread()) && !s && (r = m.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchContext: l } = this.props,
                    a = (0, I.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = l.type === w.aib.DMS && a;
                if (r.isPrivate() && !i) return void this.focusEditor();
                let o = (0, O.X3)(r);
                if (null == o) return void this.focusEditor();
                let c = (0, O.WJ)(l);
                ((0, N.PJ)({
                    searchType: l.type,
                    searchId: c
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: P.ZP[w.dCx.FILTER_IN].key + ''.concat(o, ' '),
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
                let { searchContext: e, isSearchActive: t } = this.props,
                    n = (0, O.WJ)(e);
                (this.setState({ focused: !0 }),
                    null == n ||
                        t ||
                        (0, N.I1)({
                            searchId: n,
                            searchType: e.type
                        }));
            }),
            M(this, 'handleBlur', (e) => {
                let { searchContext: t, isSearchActive: n } = this.props,
                    r = (0, O.WJ)(t);
                this.setState({ focused: !1 }, () => {
                    (null == r ||
                        n ||
                        e ||
                        (0, N.IZ)({
                            searchId: r,
                            searchType: t.type
                        }),
                        S.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            M(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            M(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: k.ZW.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: k.ZW.KEY_PRESS }))),
            M(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, O.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            M(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (S.Sq(t).length >= 512 || ((t = S.x0(e, t)), (t = S.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
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
                        return ((t = S.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = S.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = S.x0(e, t)), (t = S.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            M(this, 'setEditorState', (e) => {
                let { searchContext: t } = this.props,
                    n = (0, O.WJ)(t);
                v.Z.setSearchState(n, e);
            }),
            M(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: s, searchContext: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), S.xb(s))) this.blurEditor();
                    else {
                        let e = S.FZ(s),
                            t = (0, O.WJ)(l);
                        (v.Z.setSearchState(t, e), this.setState({ focused: !0 }));
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? S.R8(s) : S.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? S.Wg(s) : S.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = S.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return S.q0(e);
            }),
            (0, O.WU)());
    }
}
function B(e) {
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
function H(e) {
    let { searchContext: t, className: n, keyboardModeEnabled: l, editorState: a } = e,
        i = (0, O.WJ)(t),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([j.Z], () => {
            let e = j.Z.getTotalCount(i);
            return {
                hasResults: null != e && e > 0,
                isSearching: j.Z.getIsFetching(i),
                isSearchActive: j.Z.hasSearchState(i)
            };
        });
    B({
        isSearchActive: c,
        searchId: i,
        searchType: t.type
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: n, query: r } = e;
            ((0, N.LQ)(i),
                (0, N.tI)({
                    searchType: t.type,
                    searchId: (0, O.WJ)(t),
                    query: r,
                    queryString: n
                }),
                E.Z.fetchCrossDMMessages({
                    searchContext: t,
                    selectedPageIndex: 0,
                    queryString: n
                }));
        },
        [t, i]
    );
    return (0, r.jsx)(L, {
        className: n,
        searchContext: t,
        isSearching: o,
        editorState: a,
        hasResults: h,
        keyboardModeEnabled: l,
        onSearch: d,
        isSearchActive: c,
        placeholder: Z.intl.string(Z.t.m7OrlZ)
    });
}
function Q(e) {
    let { searchContext: t, className: n, keyboardModeEnabled: l, editorState: a } = e,
        i = (0, O.WJ)(t),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([j.Z], () => {
            if (null == i)
                return {
                    isSearching: !1,
                    isSearchActive: !1,
                    hasResults: !1
                };
            let e = j.Z.getTotalCount(i);
            return {
                hasResults: null != e && e > 0,
                isSearching: j.Z.getIsFetching(i),
                isSearchActive: j.Z.hasSearchState(i)
            };
        });
    B({
        isSearchActive: c,
        searchId: i,
        searchType: t.type
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: n, query: r, searchEverywhere: s } = e;
            null != i &&
                ((0, N.LQ)(i),
                (0, N.tI)({
                    searchType: t.type,
                    searchId: i,
                    query: r,
                    queryString: n
                }),
                F({
                    searchId: i,
                    searchQuery: r,
                    queryString: n,
                    searchEverywhere: s,
                    offset: 0,
                    searchMode: w.QIO.NEWEST
                }));
        },
        [t.type, i]
    );
    return (0, r.jsx)(L, {
        className: n,
        searchContext: t,
        isSearching: o,
        editorState: a,
        hasResults: h,
        keyboardModeEnabled: l,
        onSearch: d,
        isSearchActive: c
    });
}
function W(e) {
    let { className: t, searchContext: n } = e,
        l = (0, O.WJ)(n),
        a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        i = (0, u.e7)([C.Z], () => (null != l ? C.Z.getEditorState(l) : null)),
        o = s.useMemo(() => (null != i ? i : S.nR(b.Jl(P.ZP))), [i]);
    return n.type === w.aib.DMS
        ? (0, r.jsx)(H, {
              searchContext: n,
              className: t,
              keyboardModeEnabled: a,
              editorState: o
          })
        : (0, r.jsx)(Q, {
              searchContext: n,
              className: t,
              keyboardModeEnabled: a,
              editorState: o
          });
}
function U(e) {
    let { className: t, guildId: n, channelId: s } = e,
        l = (0, T.H)({
            guildId: n,
            channelId: s
        });
    return null == l
        ? null
        : (0, r.jsx)(W, {
              className: t,
              searchContext: l
          });
}
