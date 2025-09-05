n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(600164),
    c = n(433028),
    d = n(197571);
function u(e, t, n) {
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
class o extends i.PureComponent {
    render() {
        let { focused: e } = this.state,
            {
                value: t,
                placeholder: n,
                error: i,
                className: s,
                maxLength: u,
                autoFocus: o,
                prefix: h,
                disabled: f,
            } = this.props;
        return (0, r.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            justify: a.Z.Justify.START,
            className: l()(c.prefixInput, s, {
                [c.focused]: e,
                [c.error]: i,
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, r.jsx)(a.Z.Child, {
                    grow: 0,
                    className: c.prefixInputPrefix,
                    children: (0, r.jsx)("span", { children: h }),
                }),
                (0, r.jsx)(a.Z.Child, {
                    className: d.marginReset,
                    children: (0, r.jsx)("input", {
                        ref: this.setInputRef,
                        className: c.prefixInputInput,
                        value: t,
                        placeholder: n,
                        maxLength: u,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: o,
                        disabled: f,
                    }),
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            u(this, "_inputRef", void 0),
            u(this, "setInputRef", (e) => {
                this._inputRef = e;
            }),
            u(this, "handleChange", (e) => {
                let { onChange: t } = this.props;
                t(e.currentTarget.value);
            }),
            u(this, "handleFocus", () => {
                this.setState({ focused: !0 });
            }),
            u(this, "handleBlur", () => {
                this.setState({ focused: !1 });
            }),
            u(this, "handleFocusInput", () => {
                null != this._inputRef && this._inputRef.focus();
            });
        let { autoFocus: t } = this.props;
        this.state = { focused: null != t && t };
    }
}
let h = o;
