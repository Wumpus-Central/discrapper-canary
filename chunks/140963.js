n.d(t, { Z: () => y }), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(239091),
    u = n(555573),
    c = n(998698),
    d = n(459273),
    f = n(358085),
    _ = n(62883),
    p = n(752305),
    h = n(981631);
function m(e, t, n) {
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
let g = ':',
    E = /(\t|\s)/;
class v extends r.PureComponent {
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                var e;
                let { value: t } = this.props;
                null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length);
            }),
            this.focus()),
            null != c.Z.getActiveCommand(this.props.channel.id) &&
                u.Po({
                    channelId: this.props.channel.id,
                    command: null,
                    section: null
                });
    }
    componentDidUpdate(e, t) {
        this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e)
            return {
                word: null,
                isAtStart: !1
            };
        let { value: t } = this.props;
        if (0 === t.trim().length)
            return {
                word: null,
                isAtStart: !1
            };
        let n = e.selectionStart,
            i = e.selectionEnd;
        for (; n > 0 && !E.test(t[n - 1]); ) n--;
        return {
            word: t.slice(n, i),
            isAtStart: 0 === n
        };
    }
    blur() {
        let { _ref: e } = this;
        null != e && e.blur();
    }
    submit(e) {
        return e.preventDefault(), this.props.onSubmit(this.props.value);
    }
    insertAutocomplete(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            { word: i } = this.getCurrentWord();
        if (null == i) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let r = t.value.slice(0, t.selectionStart - i.length),
                a = t.value.slice(t.selectionEnd);
            this._insertText(e, r, a, n);
        }
    }
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._ref;
        if (null == i) return;
        let r = i.value.slice(0, i.selectionStart),
            a = i.value.slice(i.selectionEnd);
        this._insertText(e, r, a, n);
    }
    _insertText(e, t, n, i) {
        if (null == this._ref) return;
        i && (e += ' ');
        let r = t + e + n,
            { onChange: a } = this.props;
        null == a || a(null, r, (0, p.JM)(r));
        let s = t.length + e.length;
        this.setState({ nextSelection: s }, () => {
            this.props.maybeShowAutocomplete();
        });
    }
    hasOpenCodeBlock() {
        let e = this._ref;
        if (null == e) return !1;
        let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
        return null != t && t.length > 0 && t.length % 2 != 0;
    }
    render() {
        let { value: e, disabled: t, placeholder: n, required: r, onResize: a, className: l, id: u, submitting: c, textAreaPaddingClassName: f, spellcheckEnabled: _, 'aria-controls': p, 'aria-expanded': m, 'aria-activedescendant': g } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.d9, {
                    event: h.CkL.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste
                }),
                (0, i.jsx)(o.lcI, {
                    ref: this.handleSetRef,
                    className: s()(l, f),
                    id: u,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || c,
                    required: r,
                    onChange: this.handleOnChange,
                    onResize: a,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    onFocus: this.props.onFocus,
                    onBlur: this.props.onBlur,
                    onPaste: this.handlePaste,
                    onClick: this.handleClick,
                    onContextMenu: this.handleContextMenu,
                    value: t ? '' : e,
                    tabIndex: 0,
                    spellCheck: _,
                    'aria-controls': p,
                    'aria-expanded': m,
                    'aria-activedescendant': g,
                    'aria-haspopup': 'listbox',
                    'aria-autocomplete': 'list',
                    'aria-multiline': !0
                })
            ]
        });
    }
    handleTabOrEnterDown(e) {
        e.which === h.yXg.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === h.yXg.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText('\t', void 0, !1));
    }
    insertEmoji(e, t) {
        this.insertText(''.concat(g).concat(e.name).concat(g), void 0, t);
    }
    getFirstText() {
        return this.props.value;
    }
    constructor(...e) {
        super(...e),
            m(this, '_ref', void 0),
            m(this, 'state', { nextSelection: -1 }),
            m(this, 'focus', () => {
                let { _ref: e } = this;
                null != e && e.focus();
            }),
            m(this, 'handleSetRef', (e) => {
                this._ref = e;
            }),
            m(this, 'handleKeyPress', (e) => {
                if (e.which === h.yXg.ENTER && !e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value);
            }),
            m(this, 'handleKeyDown', (e) => {
                switch (e.which) {
                    case h.yXg.ARROW_DOWN:
                        this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case h.yXg.N:
                        e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case h.yXg.ARROW_UP:
                        this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case h.yXg.P:
                        e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case h.yXg.TAB:
                    case h.yXg.ENTER:
                        this.handleTabOrEnterDown(e);
                }
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            m(this, 'handleKeyUp', (e) => {
                switch (e.which) {
                    case h.yXg.ARROW_RIGHT:
                    case h.yXg.ARROW_LEFT:
                    case h.yXg.HOME:
                    case h.yXg.END:
                        this.props.maybeShowAutocomplete();
                }
                let { onKeyUp: t } = this.props;
                null == t || t(e);
            }),
            m(this, 'handleGlobalPaste', (e) => {
                let { event: t } = e;
                this.handlePaste(t) || this.focus();
            }),
            m(this, 'handlePaste', (e) => {
                let t = this.props.onPaste(e);
                return t && e.preventDefault(), t;
            }),
            m(this, 'handleClick', () => {
                this.props.maybeShowAutocomplete();
            }),
            m(this, 'handleContextMenu', (e) => {
                f.isPlatformEmbedded &&
                    (0, l.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('99989').then(n.bind(n, 889662));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    isChannelTextArea: !0,
                                    text: (0, _.getSelectionText)()
                                });
                        },
                        {
                            align: 'bottom',
                            enableSpellCheck: !0
                        }
                    );
            }),
            m(this, 'handleOnChange', (e) => {
                let { onChange: t, allowNewLines: n } = this.props,
                    i = e.currentTarget.value,
                    r = n ? i : i.replace('\n', '');
                null == t || t(e, r, (0, p.JM)(r));
            });
    }
}
let y = v;
