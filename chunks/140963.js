var i = r(47120);
var a = r(757143);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(239091),
    f = r(555573),
    p = r(998698),
    h = r(459273),
    _ = r(358085),
    m = r(62883),
    g = r(752305),
    E = r(981631);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = ':',
    b = /(\t|\s)/;
class I extends s.PureComponent {
    componentDidMount() {
        !this.props.disableAutoFocus &&
            (Promise.resolve().then(() => {
                var e;
                let { value: n } = this.props;
                null === (e = this._ref) || void 0 === e || e.setSelection(n.length, n.length);
            }),
            this.focus()),
            null != p.Z.getActiveCommand(this.props.channel.id) &&
                f.Po({
                    channelId: this.props.channel.id,
                    command: null,
                    section: null
                });
    }
    componentDidUpdate(e, n) {
        this.state.nextSelection !== n.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e)
            return {
                word: null,
                isAtStart: !1
            };
        let { value: n } = this.props;
        if (0 === n.trim().length)
            return {
                word: null,
                isAtStart: !1
            };
        let r = e.selectionStart,
            i = e.selectionEnd;
        for (; r > 0 && !b.test(n[r - 1]); ) {
            r--;
        }
        return {
            word: n.slice(r, i),
            isAtStart: 0 === r
        };
    }
    blur() {
        let { _ref: e } = this;
        null != e && e.blur();
    }
    submit(e) {
        return e.preventDefault(), this.props.onSubmit(this.props.value);
    }
    insertAutocomplete(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            { word: i } = this.getCurrentWord();
        if (null == i) this.insertText(e, n, r);
        else {
            let n = this._ref;
            if (null == n) return;
            let a = n.value.slice(0, n.selectionStart - i.length),
                o = n.value.slice(n.selectionEnd);
            this._insertText(e, a, o, r);
        }
    }
    insertText(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._ref;
        if (null == i) return;
        let a = i.value.slice(0, i.selectionStart),
            o = i.value.slice(i.selectionEnd);
        this._insertText(e, a, o, r);
    }
    _insertText(e, n, r, i) {
        if (null == this._ref) return;
        i && (e += ' ');
        let a = n + e + r,
            { onChange: o } = this.props;
        null == o || o(null, a, (0, g.JM)(a));
        let s = n.length + e.length;
        this.setState({ nextSelection: s }, () => {
            this.props.maybeShowAutocomplete();
        });
    }
    hasOpenCodeBlock() {
        let e = this._ref;
        if (null == e) return !1;
        let n = this.props.value.slice(0, e.selectionStart).match(/```/g);
        return null != n && n.length > 0 && n.length % 2 != 0;
    }
    render() {
        let { value: e, disabled: n, placeholder: r, required: i, onResize: a, className: s, id: l, submitting: d, textAreaPaddingClassName: f, spellcheckEnabled: p, 'aria-controls': _, 'aria-expanded': m, 'aria-activedescendant': g } = this.props;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(h.d9, {
                    event: E.CkL.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste
                }),
                (0, o.jsx)(c.TextAreaAutosize, {
                    ref: this.handleSetRef,
                    className: u()(s, f),
                    id: l,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: r,
                    disabled: n || d,
                    required: i,
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
                    value: n ? '' : e,
                    tabIndex: 0,
                    spellCheck: p,
                    'aria-controls': _,
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
        e.which === E.yXg.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === E.yXg.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === E.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === E.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText('\t', void 0, !1));
    }
    insertEmoji(e, n) {
        this.insertText(''.concat(y).concat(e.name).concat(y), void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
    constructor(...e) {
        super(...e),
            v(this, '_ref', void 0),
            v(this, 'state', { nextSelection: -1 }),
            v(this, 'focus', () => {
                let { _ref: e } = this;
                null != e && e.focus();
            }),
            v(this, 'handleSetRef', (e) => {
                this._ref = e;
            }),
            v(this, 'handleKeyPress', (e) => {
                if (e.which === E.yXg.ENTER) {
                    if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value);
                }
            }),
            v(this, 'handleKeyDown', (e) => {
                switch (e.which) {
                    case E.yXg.ARROW_DOWN:
                        this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case E.yXg.N:
                        e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case E.yXg.ARROW_UP:
                        this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case E.yXg.P:
                        e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case E.yXg.TAB:
                    case E.yXg.ENTER:
                        this.handleTabOrEnterDown(e);
                }
                let { onKeyDown: n } = this.props;
                null == n || n(e);
            }),
            v(this, 'handleKeyUp', (e) => {
                switch (e.which) {
                    case E.yXg.ARROW_RIGHT:
                    case E.yXg.ARROW_LEFT:
                    case E.yXg.HOME:
                    case E.yXg.END:
                        this.props.maybeShowAutocomplete();
                }
                let { onKeyUp: n } = this.props;
                null == n || n(e);
            }),
            v(this, 'handleGlobalPaste', (e) => {
                let { event: n } = e;
                !this.handlePaste(n) && this.focus();
            }),
            v(this, 'handlePaste', (e) => {
                let n = this.props.onPaste(e);
                return n && e.preventDefault(), n;
            }),
            v(this, 'handleClick', () => {
                this.props.maybeShowAutocomplete();
            }),
            v(this, 'handleContextMenu', (e) => {
                _.isPlatformEmbedded &&
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await r.e('99989').then(r.bind(r, 889662));
                            return (n) =>
                                (0, o.jsx)(e, {
                                    ...n,
                                    isChannelTextArea: !0,
                                    text: (0, m.getSelectionText)()
                                });
                        },
                        {
                            align: 'bottom',
                            enableSpellCheck: !0
                        }
                    );
            }),
            v(this, 'handleOnChange', (e) => {
                let { onChange: n, allowNewLines: r } = this.props,
                    i = e.currentTarget.value,
                    a = r ? i : i.replace('\n', '');
                null == n || n(e, a, (0, g.JM)(a));
            });
    }
}
n.Z = I;
