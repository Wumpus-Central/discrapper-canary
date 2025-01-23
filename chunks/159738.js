n(757143);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(5148),
    s = n(299608),
    c = n.n(s),
    u = n(442837),
    d = n(481060),
    m = n(603263),
    h = n(461745),
    f = n(349033),
    p = n(999650),
    _ = n(857595),
    g = n(607070),
    E = n(367907),
    C = n(313201),
    I = n(592125),
    x = n(984933),
    N = n(768119),
    v = n(944486),
    T = n(585483),
    S = n(72006),
    A = n(405656),
    b = n(181389),
    j = n(854709),
    R = n(778177),
    Z = n(981631),
    P = n(388032),
    L = n(105993);
function y(e, t, n) {
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
n(978246);
let O = (0, C.hQ)(),
    M = c()(m.yC, 500);
class k extends r.PureComponent {
    componentDidMount() {
        var e, t;
        T.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search), T.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), T.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = A.kG(S.Sq(t)),
                i = b.g9(e, t);
            m.u$(n, e, i), null != this._editorRef && S.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        T.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search), T.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), T.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = A.kG(S.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return S.lv(t, e, p.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && m.qt(e);
    }
    handlePastedFiles() {
        return !0;
    }
    handleDroppedFiles() {
        return !0;
    }
    handleDrop() {
        return !0;
    }
    renderInput(e) {
        let { editorState: t } = this.props;
        return (0, i.jsx)(o.Editor, {
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
            placeholder: P.intl.string(P.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? O : void 0,
            ariaLabel: P.intl.string(P.t['5h0QOD']),
            ariaAutocomplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: r } = this.props,
            { focused: l } = this.state,
            o = S.Sq(t).length > 0;
        return null == e
            ? null
            : (0, i.jsx)(d.Popout, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.Popout.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, s) => {
                      var c;
                      let { isShown: u } = s;
                      return (0, i.jsx)('div', {
                          className: r,
                          children: (0, i.jsx)('div', {
                              className: a()(L.search, {
                                  [L.open]: o || l,
                                  [L.focused]: l
                              }),
                              children: (0, i.jsx)(d.FocusRing, {
                                  focusTarget: { current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, i.jsxs)(
                                      'div',
                                      {
                                          className: L.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, i.jsx)(h.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: o || n,
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
        super(e),
            y(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            y(this, '_editorRef', void 0),
            y(this, '_searchBarRef', r.createRef()),
            y(this, '_searchPopoutRef', r.createRef()),
            y(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: i, performSearch: r, replace: l } = e,
                    { editorState: a } = this.props,
                    o = S.Sq(a);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== o.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = S.c2(t, a)), (n = 0)) : (a = S.x0(t, a, n, i)), (a = S.Hl(a, 512)), (a = this.tokenize(a));
                let s = Number(n) + t.length;
                (a = S.iK(s, a)), this.setEditorState(a), r && this.search({ queryString: S.Sq(a) });
            }),
            y(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(O, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            y(this, 'renderPopout', () =>
                (0, i.jsx)(R.ZP, {
                    ref: this._searchPopoutRef,
                    navId: O,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            y(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: i, searchEverywhere: r } = null != e ? e : {};
                if (null == i || '' === i) {
                    let { editorState: e } = this.props;
                    i = S.Sq(e);
                }
                if (null != t && !n) {
                    let e = A.kG(i),
                        n = A.$G(e);
                    for (let t = 0; t < e.length; t++) !A.Fr(e[t], e[t + 1]) && (i = i.substring(0, e[t].start) + i.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    M(t, n, i, !!r), d.AccessibilityAnnouncer.announce(P.intl.string(P.t.pKCxWF)), this.onBlur();
                }
                return !0;
            }),
            y(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === S.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = S.Hl(t, 0)), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor());
            }),
            y(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = v.Z.getChannelId(),
                    i = I.Z.getChannel(n);
                if (((null == i ? void 0 : i.isThread()) && (i = I.Z.getChannel(null == i ? void 0 : i.parent_id)), null == i || i.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let r = x.ZP.getTextChannelNameDisambiguations(i.getGuildId())[i.id],
                    l = null != r ? r.name : i.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: p.ZP[Z.dCx.FILTER_IN].key + '#'.concat(l, ' '),
                            replace: !0
                        });
                });
            }),
            y(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            y(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            y(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            y(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                E.ZP.trackWithMetadata(Z.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            y(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    S.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            y(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return !(null != n && n.selectOption()) && ((0, j.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            y(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return !!(S.Sq(t).length >= 512) || ((t = S.x0(e, t)), (t = S.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0);
            }),
            y(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return (t = S.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0;
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = S.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !0;
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return !0;
                }
            }),
            y(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = S.x0(e, t)), (t = S.Hl(t, 512)), (t = this.tokenize(t)), !n && this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            y(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                m.j8(t, e);
            }),
            y(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: i } = e,
                    { editorState: r, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), S.xb(r))) this.blurEditor();
                    else {
                        let e = S.FZ(r);
                        m.j8(l, e), this.setState({ focused: !0 });
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
                    return (0, _.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (r = i ? S.R8(r) : S.eE(r)), this.setEditorState(r), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (r = i ? S.Wg(r) : S.NJ(r)), this.setEditorState(r), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = S.FZ(r);
                    return this.setEditorState(e), !0;
                }
                return S.q0(e);
            }),
            A.WU();
    }
}
t.Z = u.ZP.connectStores([g.Z, N.Z], () => {
    var e;
    let t = N.Z.getCurrentSearchId(),
        n = N.Z.getSearchType(),
        i = null != t && N.Z.isSearching(t),
        r = null != t && null !== (e = N.Z.getEditorState(t)) && void 0 !== e ? e : S.nR(b.Jl(p.ZP)),
        l = g.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: i,
        editorState: r,
        hasResults: N.Z.hasResults(t),
        keyboardModeEnabled: l
    };
})(k);
