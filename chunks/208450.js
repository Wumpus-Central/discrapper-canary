(n.d(t, { Z: () => q }), n(35282), n(704826));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(399834),
    i = n(299608),
    c = n.n(i),
    u = n(442837),
    h = n(481060),
    d = n(349033),
    p = n(857595),
    f = n(607070),
    g = n(313201),
    m = n(592125),
    y = n(944486),
    x = n(585483),
    b = n(72006),
    S = n(181389),
    v = n(748610),
    j = n(171900),
    C = n(518944),
    O = n(607802),
    _ = n(612806),
    P = n(945577),
    R = n(971128),
    E = n(532428),
    I = n(611004),
    T = n(778177),
    N = n(165017),
    k = n(315322),
    w = n(723642),
    Z = n(981631),
    A = n(388032),
    D = n(665333);
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
let F = (0, g.hQ)(),
    L = c()(I.Z.fetchMessages, 500);
class B extends s.PureComponent {
    componentDidMount() {
        var e, t;
        (x.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search), x.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), x.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox'));
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if (t !== e.editorState) {
            let e = (0, O.kG)(b.Sq(t)),
                r = S.g9(e, t);
            (v.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && b.iE(this._editorRef.editor));
        }
    }
    componentWillUnmount() {
        (x.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search), x.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), x.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch));
    }
    tokenize(e) {
        let t = (0, O.kG)(b.Sq(e)).filter((e) => e.type !== d.ZP.NON_TOKEN_TYPE);
        return b.lv(t, e, E.ZP);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        I.Z.cleanUpSearchState(e);
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
            placeholder: null != n ? n : A.intl.string(A.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? F : void 0,
            ariaLabel: A.intl.string(A.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: l } = this.state,
            o = b.Sq(t).length > 0;
        return (0, r.jsx)(h.yRy, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: 'bottom',
            animation: h.yRy.Animation.NONE,
            shouldShow: l,
            autoInvert: !1,
            children: (t, i) => {
                var c;
                let { isShown: u } = i;
                return (0, r.jsx)('div', {
                    className: s,
                    ref: this._containerRef,
                    children: (0, r.jsx)('div', {
                        className: a()(D.search, {
                            [D.open]: o || l,
                            [D.focused]: l
                        }),
                        children: (0, r.jsx)(h.tEY, {
                            focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                'div',
                                {
                                    className: D.searchBar,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(h.BK9, {
                                            onClear: this.handleClearSearch,
                                            hasContent: o || n,
                                            className: D.icon,
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
                    o = b.Sq(a);
                (' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== o.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = b.c2(t, a)), (n = 0)) : (a = b.x0(t, a, n, r)), (a = b.Hl(a, 512)), (a = this.tokenize(a)));
                let i = Number(n) + t.length;
                ((a = b.iK(i, a)), this.setEditorState(a), s && this.search({ queryString: b.Sq(a) }));
            }),
            M(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                (null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(F, '-').concat(e) : void 0), this.setState({ selectedIndex: e }));
            }),
            M(this, 'renderPopout', () =>
                (0, r.jsx)(T.ZP, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: F,
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
                    let e = (0, O.kG)(n),
                        t = (0, O.$G)(e);
                    for (let t = 0; t < e.length; t++) (0, O.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    (this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r
                    }),
                        h.uvj.announce(A.intl.string(A.t.pKCxWF)),
                        this.handleBlur(!0));
                }
                return !0;
            }),
            M(this, 'handleClearSearch', (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === b.Sq(t))) return void this.focusEditor();
                ((t = b.Hl(t, 0)), this.setEditorState(t), (0, k.cy)({ searchContext: n }), r || Promise.resolve().then(() => this.blurEditor()));
            }),
            M(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = y.Z.getChannelId(),
                    r = m.Z.getChannel(n),
                    s = _.Z.getCurrentConfig({ location: 'handleFocusSearch' }).enabled;
                if (((null == r ? void 0 : r.isThread()) && !s && (r = m.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r)) return void this.focusEditor();
                let { searchContext: l } = this.props,
                    a = (0, P.a)({ location: 'SearchBar_handleFocusSearch' }),
                    o = l.type === Z.aib.DMS && a;
                if (r.isPrivate() && !o) return void this.focusEditor();
                let i = (0, O.X3)(r);
                if (null == i) return void this.focusEditor();
                ((0, k.PJ)({ searchContext: l }),
                    Promise.resolve().then(() => {
                        let { _editorRef: e } = this;
                        (null == e || e.focus(),
                            this.handleSetSearchQuery({
                                query: E.ZP[Z.dCx.FILTER_IN].key + ''.concat(i, ' '),
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
                (this.setState({ focused: !0 }), t || (0, k.I1)({ searchContext: e }));
            }),
            M(this, 'handleBlur', (e) => {
                let { searchContext: t, isSearchActive: n } = this.props;
                this.setState({ focused: !1 }, () => {
                    (n || e || (0, k.IZ)({ searchContext: t }), b.xb(this.props.editorState) && this.clearSearch());
                });
            }),
            M(this, 'onBlur', (e) => {
                this.handleBlur();
            }),
            M(this, 'handleOption', (e) => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({ searchAutocompleteSelectAction: w.ZW.KEY_PRESS }) : e.selectOption({ searchAutocompleteSelectAction: w.ZW.KEY_PRESS }))),
            M(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (this.handleOption(n) || ((0, O.X$)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled');
            }),
            M(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (b.Sq(t).length >= 512 || ((t = b.x0(e, t)), (t = b.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled');
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
                return ((e = null != e ? e.replace(/\n/g, '') : ''), (t = b.x0(e, t)), (t = b.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled');
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
                    if ((e.preventDefault(), b.xb(s))) this.blurEditor();
                    else {
                        let e = b.FZ(s),
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return (e.preventDefault(), (s = r ? b.R8(s) : b.eE(s)), this.setEditorState(s), !0);
                if ('End' === t || ('ArrowRight' === t && n)) return (e.preventDefault(), (s = r ? b.Wg(s) : b.NJ(s)), this.setEditorState(s), !0);
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = b.FZ(s);
                    return (this.setEditorState(e), !0);
                }
                return b.q0(e);
            }),
            (0, O.WU)());
    }
}
function H(e) {
    let { isSearchActive: t, searchContext: n } = e,
        r = s.useRef(t);
    s.useEffect(() => {
        (r.current && !t && ((r.current = !1), (0, k.IZ)({ searchContext: n })), !r.current && t && (r.current = !0));
    }, [t, n]);
}
function Q(e) {
    let { searchContext: t, className: n, keyboardModeEnabled: l, editorState: a } = e,
        {
            isSearching: o,
            isSearchActive: i,
            hasResults: c
        } = (0, u.cj)([j.Z], () => {
            let e = (0, O.WJ)(t),
                n = j.Z.getTotalCount(e);
            return {
                hasResults: null != n && n > 0,
                isSearching: j.Z.getIsFetching(e),
                isSearchActive: j.Z.hasSearchState(e)
            };
        });
    H({
        searchContext: t,
        isSearchActive: i
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: n, query: r } = e;
            (R.Z.refreshSearchQueryAnalyticsId(t),
                (0, k.tI)({
                    searchContext: t,
                    query: r,
                    queryString: n
                }),
                I.Z.fetchCrossDMMessages({
                    searchContext: t,
                    selectedPageIndex: 0,
                    queryString: n
                }));
        },
        [t]
    );
    return (0, r.jsx)(B, {
        className: n,
        searchContext: t,
        isSearching: o,
        editorState: a,
        hasResults: c,
        keyboardModeEnabled: l,
        onSearch: h,
        isSearchActive: i,
        placeholder: A.intl.string(A.t.m7OrlZ)
    });
}
function U(e) {
    let { searchContext: t, className: n, keyboardModeEnabled: l, editorState: a } = e,
        {
            isSearching: o,
            isSearchActive: i,
            hasResults: c
        } = (0, u.cj)([j.Z], () => {
            let e = (0, O.WJ)(t),
                n = j.Z.getTotalCount(e);
            return {
                hasResults: null != n && n > 0,
                isSearching: j.Z.getIsFetching(e),
                isSearchActive: j.Z.hasSearchState(e)
            };
        });
    H({
        searchContext: t,
        isSearchActive: i
    });
    let h = s.useCallback(
        (e) => {
            let { queryString: n, query: r, searchEverywhere: s } = e;
            (R.Z.refreshSearchQueryAnalyticsId(t),
                (0, k.tI)({
                    searchContext: t,
                    query: r,
                    queryString: n
                }),
                L({
                    searchContext: t,
                    searchQuery: r,
                    queryString: n,
                    searchEverywhere: s,
                    offset: 0,
                    searchMode: Z.QIO.NEWEST
                }));
        },
        [t]
    );
    return (0, r.jsx)(B, {
        className: n,
        searchContext: t,
        isSearching: o,
        editorState: a,
        hasResults: c,
        keyboardModeEnabled: l,
        onSearch: h,
        isSearchActive: i
    });
}
function W(e) {
    let { className: t, searchContext: n } = e,
        l = (0, O.WJ)(n),
        a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        o = (0, u.e7)([C.Z], () => (null != l ? C.Z.getEditorState(l) : null)),
        i = s.useMemo(() => (null != o ? o : b.nR(S.Jl(E.ZP))), [o]);
    return n.type === Z.aib.DMS
        ? (0, r.jsx)(Q, {
              searchContext: n,
              className: t,
              keyboardModeEnabled: a,
              editorState: i
          })
        : (0, r.jsx)(U, {
              searchContext: n,
              className: t,
              keyboardModeEnabled: a,
              editorState: i
          });
}
function q(e) {
    let { className: t, guildId: n, channelId: s } = e,
        l = (0, N.H)({
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
