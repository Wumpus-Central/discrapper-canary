n.d(t, { Z: () => I }), n(566702), n(301563), n(47120), n(757143);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(239091),
    c = n(555573),
    u = n(998698),
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = ':',
    v = /(\t|\s)/;
class O extends i.PureComponent {
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                var e;
                let { value: t } = this.props;
                null == (e = this._ref) || e.setSelection(t.length, t.length);
            }),
            this.focus()),
            null != u.Z.getActiveCommand(this.props.channel.id) &&
                c.Po({
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
            r = e.selectionEnd;
        for (; n > 0 && !v.test(t[n - 1]); ) n--;
        return {
            word: t.slice(n, r),
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
            { word: r } = this.getCurrentWord();
        if (null == r) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let i = t.value.slice(0, t.selectionStart - r.length),
                o = t.value.slice(t.selectionEnd);
            this._insertText(e, i, o, n);
        }
    }
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._ref;
        if (null == r) return;
        let i = r.value.slice(0, r.selectionStart),
            o = r.value.slice(r.selectionEnd);
        this._insertText(e, i, o, n);
    }
    _insertText(e, t, n, r) {
        if (null == this._ref) return;
        r && (e += ' ');
        let i = t + e + n,
            { onChange: o } = this.props;
        null == o || o(null, i, (0, p.JM)(i));
        let a = t.length + e.length;
        this.setState({ nextSelection: a }, () => {
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
        let { value: e, disabled: t, placeholder: n, required: i, onResize: o, className: l, id: c, submitting: u, textAreaPaddingClassName: f, spellcheckEnabled: _, 'aria-controls': p, 'aria-expanded': m, 'aria-activedescendant': g } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.d9, {
                    event: h.CkL.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste
                }),
                (0, r.jsx)(s.lcI, {
                    ref: this.handleSetRef,
                    className: a()(l, f),
                    id: c,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || u,
                    required: i,
                    onChange: this.handleOnChange,
                    onResize: o,
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
        (e.which === h.yXg.TAB && this.props.onTab()) || (e.which === h.yXg.ENTER && this.props.onEnter(e)) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText('\t', void 0, !1));
    }
    insertEmoji(e, t) {
        this.insertText(''.concat(y).concat(e.name).concat(y), void 0, t);
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
                                (0, r.jsx)(
                                    e,
                                    b(g({}, t), {
                                        isChannelTextArea: !0,
                                        text: (0, _.getSelectionText)()
                                    })
                                );
                        },
                        {
                            align: 'bottom',
                            enableSpellCheck: !0
                        }
                    );
            }),
            m(this, 'handleOnChange', (e) => {
                let { onChange: t, allowNewLines: n } = this.props,
                    r = e.currentTarget.value,
                    i = n ? r : r.replace('\n', '');
                null == t || t(e, i, (0, p.JM)(i));
            });
    }
}
let I = O;
