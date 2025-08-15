n.d(t, { Z: () => g });
var r = n(951288),
    s = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(600164),
    c = n(433028),
    u = n(197571);
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
class o extends s.PureComponent {
    render() {
        let { focused: e } = this.state,
            {
                value: t,
                placeholder: n,
                error: s,
                className: i,
                maxLength: d,
                autoFocus: o,
                prefix: g,
                disabled: h,
            } = this.props;
        return (0, r.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            justify: a.Z.Justify.START,
            className: l()(c.prefixInput, i, {
                [c.focused]: e,
                [c.error]: s,
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, r.jsx)(a.Z.Child, {
                    grow: 0,
                    className: c.prefixInputPrefix,
                    children: (0, r.jsx)("span", { children: g }),
                }),
                (0, r.jsx)(a.Z.Child, {
                    className: u.marginReset,
                    children: (0, r.jsx)("input", {
                        ref: this.setInputRef,
                        className: c.prefixInputInput,
                        value: t,
                        placeholder: n,
                        maxLength: d,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: o,
                        disabled: h,
                    }),
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            d(this, "_inputRef", void 0),
            d(this, "setInputRef", (e) => {
                this._inputRef = e;
            }),
            d(this, "handleChange", (e) => {
                let { onChange: t } = this.props;
                t(e.currentTarget.value);
            }),
            d(this, "handleFocus", () => {
                this.setState({ focused: !0 });
            }),
            d(this, "handleBlur", () => {
                this.setState({ focused: !1 });
            }),
            d(this, "handleFocusInput", () => {
                null != this._inputRef && this._inputRef.focus();
            });
        let { autoFocus: t } = this.props;
        this.state = { focused: null != t && t };
    }
}
let g = o;
