n.d(t, { Z: () => D }), n(301563), n(757143);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(5148),
    s = n(299608),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    p = n(603263),
    m = n(461745),
    f = n(349033),
    h = n(999650),
    g = n(857595),
    _ = n(607070),
    b = n(367907),
    v = n(313201),
    y = n(592125),
    x = n(984933),
    O = n(768119),
    E = n(944486),
    j = n(585483),
    N = n(72006),
    C = n(405656),
    I = n(181389),
    S = n(854709),
    P = n(778177),
    T = n(981631),
    A = n(388032),
    w = n(533404);
function Z(e, t, n) {
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
n(505789);
let k = (0, v.hQ)(),
    R = c()(p.yC, 500);
class L extends i.PureComponent {
    componentDidMount() {
        var e, t;
        j.S.subscribe(T.CkL.PERFORM_SEARCH, this.search), j.S.subscribe(T.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), j.S.subscribe(T.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = C.kG(N.Sq(t)),
                r = I.g9(e, t);
            p.u$(n, e, r), null != this._editorRef && N.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        j.S.unsubscribe(T.CkL.PERFORM_SEARCH, this.search), j.S.unsubscribe(T.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), j.S.unsubscribe(T.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = C.kG(N.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return N.lv(t, e, h.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && p.qt(e);
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
        return (0, r.jsx)(l.Editor, {
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
            placeholder: A.NW.string(A.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? k : void 0,
            ariaLabel: A.NW.string(A.t['5h0QOD']),
            ariaAutocomplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: a } = this.state,
            l = N.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(u.yRy, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: u.yRy.Animation.NONE,
                  shouldShow: a,
                  autoInvert: !1,
                  children: (t, s) => {
                      var c;
                      let { isShown: d } = s;
                      return (0, r.jsx)('div', {
                          className: i,
                          children: (0, r.jsx)('div', {
                              className: o()(w.search, {
                                  [w.open]: l || a,
                                  [w.focused]: a
                              }),
                              children: (0, r.jsx)(u.tEY, {
                                  focusTarget: { current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: w.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(d),
                                              (0, r.jsx)(m.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: l || n,
                                                  className: w.icon
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
            Z(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            Z(this, '_editorRef', void 0),
            Z(this, '_searchBarRef', i.createRef()),
            Z(this, '_searchPopoutRef', i.createRef()),
            Z(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a } = e,
                    { editorState: o } = this.props,
                    l = N.Sq(o);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== l.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), a ? ((o = N.c2(t, o)), (n = 0)) : (o = N.x0(t, o, n, r)), (o = N.Hl(o, 512)), (o = this.tokenize(o));
                let s = Number(n) + t.length;
                (o = N.iK(s, o)), this.setEditorState(o), i && this.search({ queryString: N.Sq(o) });
            }),
            Z(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(k, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            Z(this, 'renderPopout', () =>
                (0, r.jsx)(P.ZP, {
                    ref: this._searchPopoutRef,
                    navId: k,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            Z(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: i } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = N.Sq(e);
                }
                if (null != t && !n) {
                    let e = C.kG(r),
                        n = C.$G(e);
                    for (let t = 0; t < e.length; t++) C.Fr(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    R(t, n, r, !!i), u.uvj.announce(A.NW.string(A.t.pKCxWF)), this.onBlur();
                }
                return !0;
            }),
            Z(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === N.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = N.Hl(t, 0)), this.setEditorState(t), n || Promise.resolve().then(() => this.blurEditor());
            }),
            Z(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = E.Z.getChannelId(),
                    r = y.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = y.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let i = x.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
                    a = null != i ? i.name : r.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: h.ZP[T.dCx.FILTER_IN].key + '#'.concat(a, ' '),
                            replace: !0
                        });
                });
            }),
            Z(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            Z(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            Z(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            Z(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                b.ZP.trackWithMetadata(T.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            Z(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    N.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            Z(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (null != n && n.selectOption()) || ((0, S.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            Z(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return N.Sq(t).length >= 512 || ((t = N.x0(e, t)), (t = N.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), !0);
            }),
            Z(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return (t = N.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), !0;
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = N.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !0;
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return !0;
                }
            }),
            Z(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = N.x0(e, t)), (t = N.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            Z(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                p.j8(t, e);
            }),
            Z(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchId: a, keyboardModeEnabled: o } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), N.xb(i))) this.blurEditor();
                    else {
                        let e = N.FZ(i);
                        p.j8(a, e), this.setState({ focused: !0 });
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
                    if (o) return;
                    return (0, g.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (i = r ? N.R8(i) : N.eE(i)), this.setEditorState(i), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (i = r ? N.Wg(i) : N.NJ(i)), this.setEditorState(i), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = N.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return N.q0(e);
            }),
            C.WU();
    }
}
let D = d.ZP.connectStores([_.Z, O.Z], () => {
    var e;
    let t = O.Z.getCurrentSearchId(),
        n = O.Z.getSearchType(),
        r = null != t && O.Z.isSearching(t),
        i = null != t && null !== (e = O.Z.getEditorState(t)) && void 0 !== e ? e : N.nR(I.Jl(h.ZP)),
        a = _.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: r,
        editorState: i,
        hasResults: O.Z.hasResults(t),
        keyboardModeEnabled: a
    };
})(L);
