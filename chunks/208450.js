n.d(t, { Z: () => D }), n(757143);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(5148),
    o = n(299608),
    c = n.n(o),
    d = n(442837),
    u = n(481060),
    m = n(603263),
    _ = n(461745),
    h = n(349033),
    p = n(999650),
    g = n(857595),
    f = n(607070),
    x = n(367907),
    C = n(313201),
    E = n(592125),
    v = n(984933),
    I = n(768119),
    N = n(944486),
    S = n(585483),
    T = n(72006),
    b = n(405656),
    A = n(181389),
    j = n(854709),
    y = n(778177),
    Z = n(981631),
    R = n(388032),
    L = n(972210);
function P(e, t, n) {
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
n(109135);
let k = (0, C.hQ)(),
    M = c()(m.yC, 500);
class O extends l.PureComponent {
    componentDidMount() {
        var e, t;
        S.S.subscribe(Z.CkL.PERFORM_SEARCH, this.search), S.S.subscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), S.S.subscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = b.kG(T.Sq(t)),
                i = A.g9(e, t);
            m.u$(n, e, i), null != this._editorRef && T.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        S.S.unsubscribe(Z.CkL.PERFORM_SEARCH, this.search), S.S.unsubscribe(Z.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), S.S.unsubscribe(Z.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = b.kG(T.Sq(e)).filter((e) => e.type !== h.ZP.NON_TOKEN_TYPE);
        return T.lv(t, e, p.ZP);
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
        return (0, i.jsx)(s.Editor, {
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
            placeholder: R.intl.string(R.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? k : void 0,
            ariaLabel: R.intl.string(R.t['5h0QOD']),
            ariaAutocomplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: l } = this.props,
            { focused: a } = this.state,
            s = T.Sq(t).length > 0;
        return null == e
            ? null
            : (0, i.jsx)(u.yRy, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: u.yRy.Animation.NONE,
                  shouldShow: a,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: d } = o;
                      return (0, i.jsx)('div', {
                          className: l,
                          children: (0, i.jsx)('div', {
                              className: r()(L.search, {
                                  [L.open]: s || a,
                                  [L.focused]: a
                              }),
                              children: (0, i.jsx)(u.tEY, {
                                  focusTarget: { current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, i.jsxs)(
                                      'div',
                                      {
                                          className: L.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(d),
                                              (0, i.jsx)(_.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: s || n,
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
            P(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            P(this, '_editorRef', void 0),
            P(this, '_searchBarRef', l.createRef()),
            P(this, '_searchPopoutRef', l.createRef()),
            P(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: i, performSearch: l, replace: a } = e,
                    { editorState: r } = this.props,
                    s = T.Sq(r);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== s.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), a ? ((r = T.c2(t, r)), (n = 0)) : (r = T.x0(t, r, n, i)), (r = T.Hl(r, 512)), (r = this.tokenize(r));
                let o = Number(n) + t.length;
                (r = T.iK(o, r)), this.setEditorState(r), l && this.search({ queryString: T.Sq(r) });
            }),
            P(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(k, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            P(this, 'renderPopout', () =>
                (0, i.jsx)(y.ZP, {
                    ref: this._searchPopoutRef,
                    navId: k,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            P(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: i, searchEverywhere: l } = null != e ? e : {};
                if (null == i || '' === i) {
                    let { editorState: e } = this.props;
                    i = T.Sq(e);
                }
                if (null != t && !n) {
                    let e = b.kG(i),
                        n = b.$G(e);
                    for (let t = 0; t < e.length; t++) b.Fr(e[t], e[t + 1]) || (i = i.substring(0, e[t].start) + i.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    M(t, n, i, !!l), u.uvj.announce(R.intl.string(R.t.pKCxWF)), this.onBlur();
                }
                return !0;
            }),
            P(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === T.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = T.Hl(t, 0)), this.setEditorState(t), n || Promise.resolve().then(() => this.blurEditor());
            }),
            P(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = N.Z.getChannelId(),
                    i = E.Z.getChannel(n);
                if (((null == i ? void 0 : i.isThread()) && (i = E.Z.getChannel(null == i ? void 0 : i.parent_id)), null == i || i.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let l = v.ZP.getTextChannelNameDisambiguations(i.getGuildId())[i.id],
                    a = null != l ? l.name : i.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: p.ZP[Z.dCx.FILTER_IN].key + '#'.concat(a, ' '),
                            replace: !0
                        });
                });
            }),
            P(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            P(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            P(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            P(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                x.ZP.trackWithMetadata(Z.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            P(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    T.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            P(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (null != n && n.selectOption()) || ((0, j.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            P(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return T.Sq(t).length >= 512 || ((t = T.x0(e, t)), (t = T.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), !0);
            }),
            P(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return (t = T.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), !0;
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = T.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !0;
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return !0;
                }
            }),
            P(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = T.x0(e, t)), (t = T.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            P(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                m.j8(t, e);
            }),
            P(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: i } = e,
                    { editorState: l, searchId: a, keyboardModeEnabled: r } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), T.xb(l))) this.blurEditor();
                    else {
                        let e = T.FZ(l);
                        m.j8(a, e), this.setState({ focused: !0 });
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
                    if (r) return;
                    return (0, g.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (l = i ? T.R8(l) : T.eE(l)), this.setEditorState(l), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (l = i ? T.Wg(l) : T.NJ(l)), this.setEditorState(l), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = T.FZ(l);
                    return this.setEditorState(e), !0;
                }
                return T.q0(e);
            }),
            b.WU();
    }
}
let D = d.ZP.connectStores([f.Z, I.Z], () => {
    var e;
    let t = I.Z.getCurrentSearchId(),
        n = I.Z.getSearchType(),
        i = null != t && I.Z.isSearching(t),
        l = null != t && null !== (e = I.Z.getEditorState(t)) && void 0 !== e ? e : T.nR(A.Jl(p.ZP)),
        a = f.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: i,
        editorState: l,
        hasResults: I.Z.hasResults(t),
        keyboardModeEnabled: a
    };
})(O);
