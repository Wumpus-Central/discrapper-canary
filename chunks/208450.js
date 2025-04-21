n.d(t, { Z: () => L }), n(35282), n(704826);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(5148),
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
    b = n(367907),
    x = n(313201),
    y = n(592125),
    v = n(984933),
    E = n(768119),
    O = n(944486),
    j = n(585483),
    C = n(72006),
    S = n(405656),
    I = n(181389),
    N = n(854709),
    T = n(778177),
    P = n(981631),
    A = n(388032),
    w = n(665333);
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
n(852037);
let R = (0, x.hQ)(),
    k = c()(p.yC, 500);
class D extends i.PureComponent {
    componentDidMount() {
        var e, t;
        j.S.subscribe(P.CkL.PERFORM_SEARCH, this.search), j.S.subscribe(P.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), j.S.subscribe(P.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = S.kG(C.Sq(t)),
                r = I.g9(e, t);
            p.u$(n, e, r), null != this._editorRef && C.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        j.S.unsubscribe(P.CkL.PERFORM_SEARCH, this.search), j.S.unsubscribe(P.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), j.S.unsubscribe(P.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = S.kG(C.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return C.lv(t, e, h.ZP);
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
            placeholder: A.intl.string(A.t['5h0QOD']),
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? R : void 0,
            ariaLabel: A.intl.string(A.t['5h0QOD']),
            ariaAutoComplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: l } = this.state,
            o = C.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.yRy, {
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
                          children: (0, r.jsx)('div', {
                              className: a()(w.search, {
                                  [w.open]: o || l,
                                  [w.focused]: l
                              }),
                              children: (0, r.jsx)(d.tEY, {
                                  focusTarget: { current: null == (c = this._editorRef) ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: w.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, r.jsx)(m.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: o || n,
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
                let { query: t, anchor: n, focus: r, performSearch: i, replace: l } = e,
                    { editorState: a } = this.props,
                    o = C.Sq(a);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== o.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((a = C.c2(t, a)), (n = 0)) : (a = C.x0(t, a, n, r)), (a = C.Hl(a, 512)), (a = this.tokenize(a));
                let s = Number(n) + t.length;
                (a = C.iK(s, a)), this.setEditorState(a), i && this.search({ queryString: C.Sq(a) });
            }),
            Z(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute('aria-activedescendant', null != e ? ''.concat(R, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            Z(this, 'renderPopout', () =>
                (0, r.jsx)(T.ZP, {
                    ref: this._searchPopoutRef,
                    navId: R,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            Z(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: i } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = C.Sq(e);
                }
                if (null != t && !n) {
                    let e = S.kG(r),
                        n = S.$G(e);
                    for (let t = 0; t < e.length; t++) S.Fr(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    k(t, n, r, !!i), d.uvj.announce(A.intl.string(A.t.pKCxWF)), this.onBlur();
                }
                return !0;
            }),
            Z(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === C.Sq(t))) return void this.focusEditor();
                (t = C.Hl(t, 0)), this.setEditorState(t), n || Promise.resolve().then(() => this.blurEditor());
            }),
            Z(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = O.Z.getChannelId(),
                    r = y.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = y.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) return void this.focusEditor();
                let i = v.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
                    l = null != i ? i.name : r.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: h.ZP[P.dCx.FILTER_IN].key + '#'.concat(l, ' '),
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
                b.ZP.trackWithMetadata(P.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            Z(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    C.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            Z(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return (null != n && n.selectOption()) || ((0, N.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), 'handled';
            }),
            Z(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return C.Sq(t).length >= 512 || ((t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 })), 'handled';
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
                        return (t = C.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), n || this.setState({ focused: !0 }), 'handled';
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = C.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), 'handled';
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return 'handled';
                }
                return 'not-handled';
            }),
            Z(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = C.x0(e, t)), (t = C.Hl(t, 512)), (t = this.tokenize(t)), n || this.setState({ focused: !0 }), this.setEditorState(t), 'handled';
            }),
            Z(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                p.j8(t, e);
            }),
            Z(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchId: l, keyboardModeEnabled: a } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), C.xb(i))) this.blurEditor();
                    else {
                        let e = C.FZ(i);
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (i = r ? C.R8(i) : C.eE(i)), this.setEditorState(i), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (i = r ? C.Wg(i) : C.NJ(i)), this.setEditorState(i), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = C.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return C.q0(e);
            }),
            S.WU();
    }
}
let L = u.ZP.connectStores([_.Z, E.Z], () => {
    var e;
    let t = E.Z.getCurrentSearchId(),
        n = E.Z.getSearchType(),
        r = null != t && E.Z.isSearching(t),
        i = null != t && null != (e = E.Z.getEditorState(t)) ? e : C.nR(I.Jl(h.ZP)),
        l = _.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: r,
        editorState: i,
        hasResults: E.Z.hasResults(t),
        keyboardModeEnabled: l
    };
})(D);
