n.d(t, { Z: () => p }), n(388685), n(539854);
var r,
    i,
    a = n(54381),
    o = n(473749),
    s = n(120356),
    l = n.n(s),
    c = n(600164),
    u = n(367990);
function d(e, t, n) {
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
class f extends (r = o.PureComponent) {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: l()(u.input, e),
            maxLength: 1,
            value: null != this.props.code ? this.props.code : void 0,
            autoFocus: this.props.autoFocus,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange,
        });
    }
    focus() {
        var e;
        null == (e = this._codeBlockRef) || e.focus();
    }
    blur() {
        var e;
        null == (e = this._codeBlockRef) || e.blur();
    }
    constructor(...e) {
        super(...e),
            d(this, "_codeBlockRef", void 0),
            d(this, "setCodeBlockRef", (e) => {
                this._codeBlockRef = e;
            }),
            d(this, "handleKeyDown", (e) => {
                let t = 8 === e.which || 37 === e.which || 39 === e.which,
                    n = (e.which >= 48 && e.which <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
                t || n || e.preventDefault();
                let { onKeyDown: r } = this.props;
                null == r || r(e);
            }),
            d(this, "handleChange", (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
d(f, "defaultProps", { autoFocus: !1 });
class _ extends (i = o.PureComponent) {
    render() {
        let { className: e, inputClassName: t } = this.props,
            { codes: n } = this.state,
            r = [];
        for (let e = 0; e < n.length; e++)
            e === n.length / 2 && r.push((0, a.jsx)("div", { className: u.spacer }, "spacer")),
                r.push(
                    (0, a.jsx)(
                        f,
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
        return (0, a.jsx)(c.Z, {
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
            className: e,
            children: r,
        });
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
            null == e || e.focus();
        }
    }
    handleKeyDown(e, t) {
        let { codes: n } = this.state;
        if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
            let t = e - 1;
            n[t] = "";
            let r = this._codeBlockRefs[t];
            null == r || r.focus();
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
        null == t || t(e);
    }
    constructor(e) {
        super(e), d(this, "_codeBlockRefs", Array(this.props.count)), (this.state = { codes: Array(e.count) });
    }
}
d(_, "defaultProps", { count: 6 });
let p = _;
