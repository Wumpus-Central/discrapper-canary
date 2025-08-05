(n.d(t, { Z: () => W }), n(35282), n(704826));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(399834),
    l = n(299608),
    c = n.n(l),
    u = n(442837),
    d = n(481060),
    f = n(349033),
    _ = n(857595),
    p = n(607070),
    h = n(313201),
    m = n(592125),
    g = n(944486),
    E = n(585483),
    b = n(72006),
    y = n(181389),
    O = n(748610),
    v = n(171900),
    I = n(518944),
    T = n(607802),
    S = n(612806),
    A = n(945577),
    N = n(971128),
    C = n(532428),
    w = n(611004),
    R = n(778177),
    P = n(165017),
    D = n(315322),
    L = n(723642),
    x = n(981631),
    k = n(388032),
    j = n(665333);
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
let U = 512,
    G = (0, h.hQ)(),
    B = c()(w.Z.fetchMessages, 500);
class Z extends i.PureComponent {
    componentDidMount() {
        var e, t;
        (E.S.subscribe(x.CkL.PERFORM_SEARCH, this.search), E.S.subscribe(x.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), E.S.subscribe(x.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, T.kG)(b.Sq(t)),
                r = y.g9(e, t);
            (O.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && b.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (E.S.unsubscribe(x.CkL.PERFORM_SEARCH, this.search), E.S.unsubscribe(x.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), E.S.unsubscribe(x.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, T.kG)(b.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return b.lv(t, e, C.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        w.Z.cleanUpSearchState(e);
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
        return (0, r.jsx)(s.Editor, {
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
            placeholder: null != n ? n : k.intl.string(k.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? G : void 0,
            ariaLabel: k.intl.string(k.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: a } = this.state,
            s = b.Sq(t).length > 0;
        return (0, r.jsx)(d.yRy, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: 'bottom',
            animation: d.yRy.Animation.NONE,
            shouldShow: a,
            autoInvert: !1,
            children: (t, l) => {
                var c;
                let { isShown: u } = l;
                return (0, r.jsx)('div', {
                    className: i,
                    ref: this._containerRef,
                    children: (0, r.jsx)('div', {
                        className: o()(j.search, {
                            [j.open]: s || a,
                            [j.focused]: a
                        }),
                        children: (0, r.jsx)(d.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                'div',
                                {
                                    className: j.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(d.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: s || n,
                                            className: j.icon,
                                            isLoading: !1
                                        })
                                    ]
                                },
                                (0, T.WJ)(e)
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
            M(this, '_containerRef', i.createRef()),
            M(this, '_searchBarRef', i.createRef()),
            M(this, '_searchPopoutRef', i.createRef()),
            M(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a } = e,
                    { editorState: o } = this.props,
                    s = b.Sq(o);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== s.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), a ? ((o = b.c2(t, o)), (n = 0)) : (o = b.x0(t, o, n, r)), (o = b.Hl(o, U)), (o = this.tokenize(o)));
                let l = Number(n) + t.length;
                ((o = b.iK(l, o)), this.setEditorState(o), i && this.search({ queryString: b.Sq(o) }));
            }),
            M(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(G, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            M(this, 'renderPopout', () =>
                (0, r.jsx)(R.ZP, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: G,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            M(this, 'search', (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r } = null != e ? e : {};
                if (null == n || '' === n) {
                    let { editorState: e } = this.props;
                    n = b.Sq(e);
                }
                if (!t) {
                    let e = (0, T.kG)(n),
                        t = (0, T.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, T.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r
                    }),
                        d.uvj.announce(k.intl.string(k.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            M(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === b.Sq(t))) return void this.focusEditor();
                ((t = b.Hl(t, 0)), this.setEditorState(t), (0, D.cy)({ searchContext: n }), r || Promise.resolve().then(() => this.blurEditor()));
            }),
            M(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = g.Z.getChannelId(),
                    r = m.Z.getChannel(n),
                    i = S.Z.getCurrentConfig({ location: 'handleFocusSearch' }).enabled;
                if (((null == r ? void 0 : r.isThread()) && !i && (r = m.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchContext: a } = this.props,
                    o = (0, A.a)({ location: 'SearchBar_handleFocusSearch' }),
                    s = a.type === x.aib.DMS && o;
                if (r.isPrivate() && !s) return void this.focusEditor();
                let l = (0, T.X3)(r);
                if (null == l) return void this.focusEditor();
                ((0, D.PJ)({ searchContext: a }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: C.ZP[x.dCx.FILTER_IN].key + ''.concat(l, ' '),
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
                let { searchContext: e, isSearchActive: t } = this.props;
                (this.setState({ focused: !0 }), t || (0, D.I1)({ searchContext: e }));
            }),
            M(this, 'handleBlur', (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    (n || e || (0, D.IZ)({ searchContext: t }), b.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            M(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            M(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: L.ZW.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: L.ZW.KEY_PRESS }))),
            M(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, T.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            M(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (b.Sq(t).length >= U || ((t = b.x0(e, t)), (t = b.Hl(t, U)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
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
                        return ((t = b.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled');
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return ((t = b.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled');
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
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = b.x0(e, t)), (t = b.Hl(t, U)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
            }),
            M(this, 'setEditorState', (e) => {
                let { searchContext: t } = this.props,
                    n = (0, T.WJ)(t);
                O.Z.setSearchState(n, e);
            }),
            M(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchContext: a, keyboardModeEnabled: o } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), b.xb(i))) this.blurEditor();
                    else {
                        let e = b.FZ(i),
                            t = (0, T.WJ)(a);
                        (O.Z.setSearchState(t, e), this.setState({ focused: !0 }));
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
                    if (o) return;
                    return ((0, _.Qj)(), !0);
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (i = r ? b.R8(i) : b.eE(i)), this.setEditorState(i), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (i = r ? b.Wg(i) : b.NJ(i)), this.setEditorState(i), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = b.FZ(i);
                    return (this.setEditorState(e), !0);
                }
                return b.q0(e);
            }),
            (0, T.WU)());
    }
}
function F(e) {
    let { isSearchActive: t, searchContext: n } = e,
        r = i.useRef(t);
    i.useEffect(() => {
        (r.current && !t && ((r.current = !1), (0, D.IZ)({ searchContext: n })), !r.current && t && (r.current = !0));
    }, [t, n]);
}
function V(e) {
    let { searchContext: t, className: n, keyboardModeEnabled: a, editorState: o } = e,
        {
            isSearching: s,
            isSearchActive: l,
            hasResults: c
        } = (0, u.cj)([v.Z], () => {
            let e = (0, T.WJ)(t),
                n = v.Z.getTotalCount(e);
            return {
                hasResults: null != n && n > 0,
                isSearching: v.Z.getIsFetching(e),
                isSearchActive: v.Z.hasSearchState(e)
            };
        });
    F({
        searchContext: t,
        isSearchActive: l
    });
    let d = i.useCallback(
        (e) => {
            let { queryString: n, query: r } = e;
            (N.ZP.refreshSearchQueryAnalyticsId(t),
                (0, D.tI)({
                    searchContext: t,
                    query: r,
                    queryString: n
                }),
                w.Z.fetchCrossDMMessages({
                    searchContext: t,
                    selectedPageIndex: 0,
                    queryString: n
                }));
        },
        [t]
    );
    return (0, r.jsx)(Z, {
        className: n,
        searchContext: t,
        isSearching: s,
        editorState: o,
        hasResults: c,
        keyboardModeEnabled: a,
        onSearch: d,
        isSearchActive: l,
        placeholder: k.intl.string(k.t.m7OrlZ)
    });
}
function H(e) {
    let { searchContext: t, className: n, keyboardModeEnabled: a, editorState: o } = e,
        {
            isSearching: s,
            isSearchActive: l,
            hasResults: c
        } = (0, u.cj)([v.Z], () => {
            let e = (0, T.WJ)(t),
                n = v.Z.getTotalCount(e);
            return {
                hasResults: null != n && n > 0,
                isSearching: v.Z.getIsFetching(e),
                isSearchActive: v.Z.hasSearchState(e)
            };
        });
    F({
        searchContext: t,
        isSearchActive: l
    });
    let d = i.useCallback(
        (e) => {
            let { queryString: n, query: r, searchEverywhere: i } = e;
            (N.ZP.refreshSearchQueryAnalyticsId(t),
                (0, D.tI)({
                    searchContext: t,
                    query: r,
                    queryString: n
                }),
                B({
                    searchContext: t,
                    searchQuery: r,
                    queryString: n,
                    searchEverywhere: i,
                    offset: 0,
                    searchMode: x.QIO.NEWEST
                }));
        },
        [t]
    );
    return (0, r.jsx)(Z, {
        className: n,
        searchContext: t,
        isSearching: s,
        editorState: o,
        hasResults: c,
        keyboardModeEnabled: a,
        onSearch: d,
        isSearchActive: l
    });
}
function Y(e) {
    let { className: t, searchContext: n } = e,
        a = (0, T.WJ)(n),
        o = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        s = (0, u.e7)([I.Z], () => (null != a ? I.Z.getEditorState(a) : null)),
        l = i.useMemo(() => (null != s ? s : b.nR(y.Jl(C.ZP))), [s]);
    return n.type === x.aib.DMS
        ? (0, r.jsx)(V, {
              searchContext: n,
              className: t,
              keyboardModeEnabled: o,
              editorState: l
          })
        : (0, r.jsx)(H, {
              searchContext: n,
              className: t,
              keyboardModeEnabled: o,
              editorState: l
          });
}
function W(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, P.H)({
            guildId: n,
            channelId: i
        });
    return null == a
        ? null
        : (0, r.jsx)(Y, {
              className: t,
              searchContext: a
          });
}
