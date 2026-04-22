"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(442433),
    u = n(721768),
    c = n(861382),
    d = n(234320),
    _ = n(723702),
    f = n(677134),
    p = n(408018),
    h = n(652215);
let m = ":",
    E = /(\t|\s)/;
class g extends i.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                let { value: e } = this.props;
                this._ref?.setSelection(e.length, e.length);
            }),
            this.focus()),
            null != c.A.getActiveCommand(this.props.channel.id) &&
                u.Gf({ channelId: this.props.channel.id, command: null, section: null });
    }
    componentDidUpdate(e, t) {
        this.state.nextSelection !== t.nextSelection &&
            null != this._ref &&
            this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e) return { word: null, fullWord: null, isAtStart: !1 };
        let { value: t } = this.props;
        if (0 === t.trim().length) return { word: null, fullWord: null, isAtStart: !1 };
        let n = e.selectionStart,
            r = e.selectionEnd;
        for (; n > 0 && !E.test(t[n - 1]); ) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !E.test(t[i]); ) i++;
        return { word: t.slice(n, r), fullWord: t.slice(n, i), isAtStart: 0 === n };
    }
    focus = () => {
        let { _ref: e } = this;
        null != e && e.focus();
    };
    blur() {
        let { _ref: e } = this;
        null != e && e.blur();
    }
    submit(e) {
        return e?.preventDefault(), this.props.onSubmit(this.props.value);
    }
    insertAutocomplete(e, t) {
        let { addSpace: n = !0, replaceFullWord: r = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { word: i, fullWord: s } = this.getCurrentWord();
        if (null == i) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let a = t.value.slice(0, t.selectionStart - i.length),
                o = r && null != s ? s.length - i.length : 0,
                l = t.value.slice(t.selectionEnd + o);
            this._insertText(e, a, l, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._ref;
        if (null == r) return;
        let i = r.value.slice(0, r.selectionStart),
            s = r.value.slice(r.selectionEnd);
        this._insertText(e, i, s, n);
    }
    _insertText(e, t, n, r) {
        if (null == this._ref) return;
        r && (e += " ");
        let i = t + e + n,
            { onChange: s } = this.props;
        s?.(null, i, (0, p.x7)(i));
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
        let {
            value: e,
            disabled: t,
            placeholder: n,
            required: i,
            onResize: s,
            className: l,
            id: u,
            submitting: c,
            textAreaPaddingClassName: _,
            spellcheckEnabled: f,
            "aria-controls": p,
            "aria-expanded": m,
            "aria-activedescendant": E,
        } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.EG, { event: h.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, r.jsx)(o.d4u, {
                    ref: this.handleSetRef,
                    className: a()(l, _),
                    id: u,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || c,
                    required: i,
                    onChange: this.handleOnChange,
                    onResize: s,
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
                    spellCheck: f,
                    "aria-controls": p,
                    "aria-expanded": m,
                    "aria-activedescendant": E,
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list",
                    "aria-multiline": !0,
                }),
            ],
        });
    }
    handleSetRef = (e) => {
        this._ref = e;
    };
    handleKeyPress = (e) => {
        if (
            e.which === h.Ks6.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return e.preventDefault(), this.props.onSubmit(this.props.value);
    };
    handleKeyDown = (e) => {
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
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.which === h.Ks6.TAB && this.props.onTab()) || (e.which === h.Ks6.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.which === h.Ks6.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.which === h.Ks6.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.which) {
            case h.Ks6.ARROW_RIGHT:
            case h.Ks6.ARROW_LEFT:
            case h.Ks6.HOME:
            case h.Ks6.END:
                this.props.maybeShowAutocomplete();
        }
        let { onKeyUp: t } = this.props;
        t?.(e);
    };
    handleGlobalPaste = (e) => {
        let { event: t } = e;
        this.handlePaste(t) || this.focus();
    };
    handlePaste = (e) => {
        let t = this.props.onPaste(e);
        return t && e.preventDefault(), t;
    };
    handleClick = () => {
        this.props.maybeShowAutocomplete();
    };
    handleContextMenu = (e) => {
        _.isPlatformEmbedded &&
            (0, l.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("42312").then(n.bind(n, 216603));
                    return (t) => (0, r.jsx)(e, { ...t, text: (0, f.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            r = e.currentTarget.value,
            i = n ? r : r.replace("\n", "");
        t?.(e, i, (0, p.x7)(i));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`${m}${t.name}${m}`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
let A = g;
