"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(235986),
    o = n(165172);
class c extends s.PureComponent {
    static defaultProps = { autoFocus: !1 };
    _codeBlockRef;
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: l()(o.h, e),
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
        let t = 8 === e.which || 37 === e.which || 39 === e.which,
            n = (e.which >= 48 && e.which <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
        t || n || e.preventDefault();
        let { onKeyDown: i } = this.props;
        i?.(e);
    };
    handleChange = (e) => {
        let { onChange: t } = this.props;
        t?.(e.currentTarget.value);
    };
}
class d extends s.PureComponent {
    _codeBlockRefs = Array(this.props.count);
    static defaultProps = { count: 6 };
    constructor(e) {
        super(e), (this.state = { codes: Array(e.count) });
    }
    render() {
        let { className: e, inputClassName: t } = this.props,
            { codes: n } = this.state,
            s = [];
        for (let e = 0; e < n.length; e++)
            e === n.length / 2 && s.push((0, i.jsx)("div", { className: o.j }, "spacer")),
                s.push(
                    (0, i.jsx)(
                        c,
                        {
                            ref: (t) => this.setCodeBlockRef(e, t),
                            code: n[e],
                            autoFocus: 0 === e,
                            onChange: (t) => this.handleChange(e, t),
                            onKeyDown: (t) => this.handleKeyDown(e, t),
                            className: t,
                        },
                        e,
                    ),
                );
        return (0, i.jsx)(a.A, { align: a.A.Align.CENTER, justify: a.A.Justify.CENTER, className: e, children: s });
    }
    setCodeBlockRef(e, t) {
        this._codeBlockRefs[e] = t;
    }
    handleChange(e, t) {
        this.state.codes[e] = t;
        let n = this.getCodeOrFirstEmptyIndex();
        if ("string" == typeof n) this.submit(n);
        else {
            let e = this._codeBlockRefs[n];
            e?.focus();
        }
    }
    handleKeyDown(e, t) {
        let { codes: n } = this.state;
        if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
            let t = e - 1;
            n[t] = "";
            let i = this._codeBlockRefs[t];
            i?.focus();
        }
    }
    getCodeOrFirstEmptyIndex() {
        let { codes: e } = this.state,
            t = "";
        for (let n = 0; n < e.length; n++) {
            if (isNaN(parseInt(e[n]))) return n;
            t += e[n];
        }
        return t;
    }
    submit(e) {
        let { onSubmit: t } = this.props;
        t?.(e);
    }
}
let u = d;
