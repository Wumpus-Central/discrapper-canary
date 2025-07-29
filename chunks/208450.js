(r.d(t, { Z: () => Q }), r(35282), r(704826));
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
    y = r(944486),
    _ = r(585483),
    S = r(72006),
    x = r(181389),
    b = r(748610),
    C = r(171900),
    j = r(518944),
    v = r(607802),
    O = r(612806),
    E = r(945577),
    R = r(532428),
    I = r(611004),
    P = r(778177),
    T = r(165017),
    N = r(315322),
    A = r(723642),
    k = r(981631),
    Z = r(388032),
    M = r(665333);
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
let D = (0, g.hQ)(),
    L = c()(I.Z.fetchMessages, 500);
class F extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (_.S.subscribe(k.CkL.PERFORM_SEARCH, this.search), _.S.subscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.subscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = (0, v.kG)(S.Sq(t)),
                n = x.g9(e, t);
            (b.Z.updateAutocompleteQuery(r, e, n), null != this._editorRef && S.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (_.S.unsubscribe(k.CkL.PERFORM_SEARCH, this.search), _.S.unsubscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.unsubscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, v.kG)(S.Sq(e)).filter((e) => e.type !== d.ZP.NON_TOKEN_TYPE);
        return S.lv(t, e, R.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props,
            t = (0, v.WJ)(e);
        I.Z.cleanUpSearchState(t);
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
        let { searchContext: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            i = S.Sq(t).length > 0;
        return (0, n.jsx)(h.yRy, {
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
                        className: a()(M.search, {
                            [M.open]: i || l,
                            [M.focused]: l
                        }),
                        children: (0, n.jsx)(h.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, n.jsxs)(
                                'div',
                                {
                                    className: M.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, n.jsx)(h.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || r,
                                            className: M.icon,
                                            isLoading: !1
                                        })
                                    ]
                                },
                                (0, v.WJ)(e)
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
                    i = S.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != r && 0 !== r && ' ' !== i.charAt(r - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = S.c2(t, a)), (r = 0)) : (a = S.x0(t, a, r, n)), (a = S.Hl(a, 512)), (a = this.tokenize(a)));
                let o = Number(r) + t.length;
                ((a = S.iK(o, a)), this.setEditorState(a), s && this.search({ queryString: S.Sq(a) }));
            }),
            w(this, 'handleSelectedIndexChanged', (e) => {
                var t, r;
                (null == (r = this._editorRef) || null == (t = r.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(D, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            w(this, 'renderPopout', () =>
                (0, n.jsx)(P.ZP, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: D,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            w(this, 'search', (e) => {
                let { isSearching: t } = this.props,
                    { queryString: r, searchEverywhere: n } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = S.Sq(e);
                }
                if (!t) {
                    let e = (0, v.kG)(r),
                        t = (0, v.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, v.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != n && n
                    }),
                        h.uvj.announce(Z.intl.string(Z.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            w(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchContext: r } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === S.Sq(t))) return void this.focusEditor();
                ((t = S.Hl(t, 0)), this.setEditorState(t));
                let s = (0, v.WJ)(r);
                ((0, N.cy)({
                    searchId: s,
                    searchType: r.type
                }),
                    n || Promise.resolve().then(() => this.blurEditor()));
            }),
            w(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let r = y.Z.getChannelId(),
                    n = m.Z.getChannel(r),
                    s = O.Z.getCurrentConfig({ location: 'handleFocusSearch' }).enabled;
                if (((null == n ? void 0 : n.isThread()) && !s && (n = m.Z.getChannel(null == n ? void 0 : n.parent_id)), null == n)) return void this.focusEditor();
                let { searchContext: l } = this.props,
                    a = (0, E.a)({ location: 'SearchBar_handleFocusSearch' }),
                    i = l.type === k.aib.DMS && a;
                if (n.isPrivate() && !i) return void this.focusEditor();
                let o = (0, v.X3)(n);
                if (null == o) return void this.focusEditor();
                let c = (0, v.WJ)(l);
                ((0, N.PJ)({
                    searchType: l.type,
                    searchId: c
                }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: R.ZP[k.dCx.FILTER_IN].key + ''.concat(o, ' '),
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
                let { searchContext: e, isSearchActive: t } = this.props,
                    r = (0, v.WJ)(e);
                (this.setState({ focused: !0 }),
                    null == r ||
                        t ||
                        (0, N.I1)({
                            searchId: r,
                            searchType: e.type
                        }));
            }),
            w(this, 'handleBlur', (e) => {
                let { searchContext: t, isSearchActive: r } = this.props,
                    n = (0, v.WJ)(t);
                this.setState({ focused: !1 }, () => {
                    (null == n ||
                        r ||
                        e ||
                        (0, N.IZ)({
                            searchId: n,
                            searchType: t.type
                        }),
                        S.xb(this.props.editorState) && this.clearSearch());
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
                return (S.Sq(t).length >= 512 || ((t = S.x0(e, t)), (t = S.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 })), 'handled');
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
                        return ((t = S.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), r || this.setState({ focused: !0 }), 'handled');
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
            w(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = S.x0(e, t)), (t = S.Hl(t, 512)), (t = this.tokenize(t)), r || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            w(this, 'setEditorState', (e) => {
                let { searchContext: t } = this.props,
                    r = (0, v.WJ)(t);
                b.Z.setSearchState(r, e);
            }),
            w(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: r, shiftKey: n } = e,
                    { editorState: s, searchContext: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), S.xb(s))) this.blurEditor();
                    else {
                        let e = S.FZ(s),
                            t = (0, v.WJ)(l);
                        (b.Z.setSearchState(t, e), this.setState({ focused: !0 }));
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
                if ('Home' === t || ('ArrowLeft' === t && r)) return (e.preventDefault(), (s = n ? S.R8(s) : S.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && r)) return (e.preventDefault(), (s = n ? S.Wg(s) : S.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && r) {
                    let e = S.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return S.q0(e);
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
    let { searchContext: t, className: r, keyboardModeEnabled: l, editorState: a } = e,
        i = (0, v.WJ)(t),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([C.Z], () => {
            let e = C.Z.getTotalCount(i);
            return {
                hasResults: null != e && e > 0,
                isSearching: C.Z.getIsFetching(i),
                isSearchActive: C.Z.hasSearchState(i)
            };
        });
    H({
        isSearchActive: c,
        searchId: i,
        searchType: t.type
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: r, query: n } = e;
            ((0, N.LQ)(i),
                (0, N.tI)({
                    searchType: t.type,
                    searchId: (0, v.WJ)(t),
                    query: n,
                    queryString: r
                }),
                I.Z.fetchCrossDMMessages({
                    searchContext: t,
                    selectedPageIndex: 0,
                    queryString: r
                }));
        },
        [t, i]
    );
    return (0, n.jsx)(F, {
        className: r,
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
function B(e) {
    let { searchContext: t, className: r, keyboardModeEnabled: l, editorState: a } = e,
        i = (0, v.WJ)(t),
        {
            isSearching: o,
            isSearchActive: c,
            hasResults: h
        } = (0, u.cj)([C.Z], () => {
            if (null == i)
                return {
                    isSearching: !1,
                    isSearchActive: !1,
                    hasResults: !1
                };
            let e = C.Z.getTotalCount(i);
            return {
                hasResults: null != e && e > 0,
                isSearching: C.Z.getIsFetching(i),
                isSearchActive: C.Z.hasSearchState(i)
            };
        });
    H({
        isSearchActive: c,
        searchId: i,
        searchType: t.type
    });
    let d = s.useCallback(
        (e) => {
            let { queryString: r, query: n, searchEverywhere: s } = e;
            null != i &&
                ((0, N.LQ)(i),
                (0, N.tI)({
                    searchType: t.type,
                    searchId: i,
                    query: n,
                    queryString: r
                }),
                L({
                    searchId: i,
                    searchQuery: n,
                    queryString: r,
                    searchEverywhere: s,
                    offset: 0,
                    searchMode: k.QIO.NEWEST
                }));
        },
        [t.type, i]
    );
    return (0, n.jsx)(F, {
        className: r,
        searchContext: t,
        isSearching: o,
        editorState: a,
        hasResults: h,
        keyboardModeEnabled: l,
        onSearch: d,
        isSearchActive: c
    });
}
function U(e) {
    let { className: t, searchContext: r } = e,
        l = (0, v.WJ)(r),
        a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        i = (0, u.e7)([j.Z], () => (null != l ? j.Z.getEditorState(l) : null)),
        o = s.useMemo(() => (null != i ? i : S.nR(x.Jl(R.ZP))), [i]);
    return r.type === k.aib.DMS
        ? (0, n.jsx)(W, {
              searchContext: r,
              className: t,
              keyboardModeEnabled: a,
              editorState: o
          })
        : (0, n.jsx)(B, {
              searchContext: r,
              className: t,
              keyboardModeEnabled: a,
              editorState: o
          });
}
function Q(e) {
    let { className: t, guildId: r, channelId: s } = e,
        l = (0, T.H)({
            guildId: r,
            channelId: s
        });
    return null == l
        ? null
        : (0, n.jsx)(U, {
              className: t,
              searchContext: l
          });
}
