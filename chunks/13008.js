s.d(t, { A: () => p }), s(321073);
var r = s(627968),
    n = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(235986),
    o = s(953051),
    c = s(650583),
    h = s(579767);
class d extends n.PureComponent {
    static defaultProps = { autoFocus: !1 };
    _codeBlockRef;
    render() {
        let { className: e } = this.props;
        return (0, r.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: a()(h.h, e),
            maxLength: 1,
            value: null != this.props.code ? this.props.code : void 0,
            autoFocus: this.props.autoFocus,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange,
        });
    }
    setCodeBlockRef = (e) => {
        this._codeBlockRef = e;
    };
    focus() {
        this._codeBlockRef?.focus();
    }
    blur() {
        this._codeBlockRef?.blur();
    }
    handleKeyDown = (e) => {
        let t = e.key === c.dh.BACKSPACE || e.key === c.dh.ARROW_LEFT || e.key === c.dh.ARROW_RIGHT,
            s = (0, o.A)(e.key);
        t || s || e.preventDefault();
        let { onKeyDown: r } = this.props;
        r?.(e);
    };
    handleChange = (e) => {
        let { onChange: t } = this.props;
        t?.(e.currentTarget.value);
    };
}
class u extends n.PureComponent {
    _codeBlockRefs = Array(this.props.count);
    static defaultProps = { count: 6 };
    constructor(e) {
        super(e), (this.state = { codes: Array(e.count) });
    }
    render() {
        let { className: e, inputClassName: t } = this.props,
            { codes: s } = this.state,
            n = [];
        for (let e = 0; e < s.length; e++)
            e === s.length / 2 && n.push((0, r.jsx)("div", { className: h.j }, "spacer")),
                n.push(
                    (0, r.jsx)(
                        d,
                        {
                            ref: (t) => this.setCodeBlockRef(e, t),
                            code: s[e],
                            autoFocus: 0 === e,
                            onChange: (t) => this.handleChange(e, t),
                            onKeyDown: (t) => this.handleKeyDown(e, t),
                            className: t,
                        },
                        e,
                    ),
                );
        return (0, r.jsx)(i.A, { align: i.A.Align.CENTER, justify: i.A.Justify.CENTER, className: e, children: n });
    }
    setCodeBlockRef(e, t) {
        this._codeBlockRefs[e] = t;
    }
    handleChange(e, t) {
        this.state.codes[e] = t;
        let s = this.getCodeOrFirstEmptyIndex();
        if ("string" == typeof s) this.submit(s);
        else {
            let e = this._codeBlockRefs[s];
            e?.focus();
        }
    }
    handleKeyDown(e, t) {
        let { codes: s } = this.state;
        if (t.key === c.dh.BACKSPACE && e > 0 && (null == s[e] || 0 === s[e].length)) {
            let t = e - 1;
            s[t] = "";
            let r = this._codeBlockRefs[t];
            r?.focus();
        }
    }
    getCodeOrFirstEmptyIndex() {
        let { codes: e } = this.state,
            t = "";
        for (let s = 0; s < e.length; s++) {
            if (isNaN(parseInt(e[s]))) return s;
            t += e[s];
        }
        return t;
    }
    submit(e) {
        let { onSubmit: t } = this.props;
        t?.(e);
    }
}
let p = u;
