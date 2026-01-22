n.d(t, { A: () => v }), n(733351), n(747238), n(896048), n(812715);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(442433),
    c = n(721768),
    u = n(861382),
    d = n(234320),
    f = n(723702),
    p = n(677134),
    _ = n(408018),
    h = n(652215);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let y = ":",
    O = /(\t|\s)/;
class A extends i.PureComponent {
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                var e;
                let { value: t } = this.props;
                null == (e = this._ref) || e.setSelection(t.length, t.length);
            }),
            this.focus()),
            null != u.A.getActiveCommand(this.props.channel.id) &&
                c.Gf({
                    channelId: this.props.channel.id,
                    command: null,
                    section: null,
                });
    }
    componentDidUpdate(e, t) {
        this.state.nextSelection !== t.nextSelection &&
            null != this._ref &&
            this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e)
            return {
                word: null,
                fullWord: null,
                isAtStart: !1,
            };
        let { value: t } = this.props;
        if (0 === t.trim().length)
            return {
                word: null,
                fullWord: null,
                isAtStart: !1,
            };
        let n = e.selectionStart,
            r = e.selectionEnd;
        for (; n > 0 && !O.test(t[n - 1]); ) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !O.test(t[i]); ) i++;
        return {
            word: t.slice(n, r),
            fullWord: t.slice(n, i),
            isAtStart: 0 === n,
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
        let { addSpace: n = !0, replaceFullWord: r = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { word: i, fullWord: a } = this.getCurrentWord();
        if (null == i) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let s = t.value.slice(0, t.selectionStart - i.length),
                o = r && null != a ? a.length - i.length : 0,
                l = t.value.slice(t.selectionEnd + o);
            this._insertText(e, s, l, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._ref;
        if (null == r) return;
        let i = r.value.slice(0, r.selectionStart),
            a = r.value.slice(r.selectionEnd);
        this._insertText(e, i, a, n);
    }
    _insertText(e, t, n, r) {
        if (null == this._ref) return;
        r && (e += " ");
        let i = t + e + n,
            { onChange: a } = this.props;
        null == a || a(null, i, (0, _.x7)(i));
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
        let {
            value: e,
            disabled: t,
            placeholder: n,
            required: i,
            onResize: a,
            className: l,
            id: c,
            submitting: u,
            textAreaPaddingClassName: f,
            spellcheckEnabled: p,
            "aria-controls": _,
            "aria-expanded": m,
            "aria-activedescendant": g,
        } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.EG, {
                    event: h.jej.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste,
                }),
                (0, r.jsx)(o.d4u, {
                    ref: this.handleSetRef,
                    className: s()(l, f),
                    id: c,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || u,
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
                    value: t ? "" : e,
                    tabIndex: 0,
                    spellCheck: p,
                    "aria-controls": _,
                    "aria-expanded": m,
                    "aria-activedescendant": g,
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list",
                    "aria-multiline": !0,
                }),
            ],
        });
    }
    handleTabOrEnterDown(e) {
        (e.which === h.Ks6.TAB && this.props.onTab()) || (e.which === h.Ks6.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.which === h.Ks6.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.which === h.Ks6.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("\t", void 0, !1));
    }
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText("".concat(y).concat(t.name).concat(y), void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
    constructor(...e) {
        super(...e),
            m(this, "_ref", void 0),
            m(this, "state", { nextSelection: -1 }),
            m(this, "focus", () => {
                let { _ref: e } = this;
                null != e && e.focus();
            }),
            m(this, "handleSetRef", (e) => {
                this._ref = e;
            }),
            m(this, "handleKeyPress", (e) => {
                if (
                    e.which === h.Ks6.ENTER &&
                    !e.shiftKey &&
                    !this.hasOpenCodeBlock() &&
                    (!this.props.disableEnterToSubmit || e.ctrlKey)
                )
                    return e.preventDefault(), this.props.onSubmit(this.props.value);
            }),
            m(this, "handleKeyDown", (e) => {
                switch (e.which) {
                    case h.Ks6.ARROW_DOWN:
                        this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case h.Ks6.N:
                        e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case h.Ks6.ARROW_UP:
                        this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case h.Ks6.P:
                        e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case h.Ks6.TAB:
                    case h.Ks6.ENTER:
                        this.handleTabOrEnterDown(e);
                }
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            m(this, "handleKeyUp", (e) => {
                switch (e.which) {
                    case h.Ks6.ARROW_RIGHT:
                    case h.Ks6.ARROW_LEFT:
                    case h.Ks6.HOME:
                    case h.Ks6.END:
                        this.props.maybeShowAutocomplete();
                }
                let { onKeyUp: t } = this.props;
                null == t || t(e);
            }),
            m(this, "handleGlobalPaste", (e) => {
                let { event: t } = e;
                this.handlePaste(t) || this.focus();
            }),
            m(this, "handlePaste", (e) => {
                let t = this.props.onPaste(e);
                return t && e.preventDefault(), t;
            }),
            m(this, "handleClick", () => {
                this.props.maybeShowAutocomplete();
            }),
            m(this, "handleContextMenu", (e) => {
                f.isPlatformEmbedded &&
                    (0, l.L3)(
                        e,
                        async () => {
                            let { default: e } = await n.e("42312").then(n.bind(n, 216603));
                            return (t) => (0, r.jsx)(e, b(g({}, t), { text: (0, p.u)() }));
                        },
                        {
                            align: "bottom",
                            enableSpellCheck: !0,
                        },
                    );
            }),
            m(this, "handleOnChange", (e) => {
                let { onChange: t, allowNewLines: n } = this.props,
                    r = e.currentTarget.value,
                    i = n ? r : r.replace("\n", "");
                null == t || t(e, i, (0, _.x7)(i));
            });
    }
}
let v = A;
