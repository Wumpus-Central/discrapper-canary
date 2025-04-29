n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(600164),
    o = n(930223),
    c = n(20493);
function u(e, t, n) {
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
class d extends i.PureComponent {
    render() {
        let { focused: e } = this.state,
            { value: t, placeholder: n, error: i, className: l, maxLength: u, autoFocus: d, prefix: m, disabled: g } = this.props;
        return (0, r.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            justify: a.Z.Justify.START,
            className: s()(o.prefixInput, l, {
                [o.focused]: e,
                [o.error]: i
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, r.jsx)(a.Z.Child, {
                    grow: 0,
                    className: o.prefixInputPrefix,
                    children: m
                }),
                (0, r.jsx)(a.Z.Child, {
                    className: c.marginReset,
                    children: (0, r.jsx)('input', {
                        ref: this.setInputRef,
                        className: o.prefixInputInput,
                        value: t,
                        placeholder: n,
                        maxLength: u,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: d,
                        disabled: g
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            u(this, '_inputRef', void 0),
            u(this, 'setInputRef', (e) => {
                this._inputRef = e;
            }),
            u(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                t(e.currentTarget.value);
            }),
            u(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            u(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            }),
            u(this, 'handleFocusInput', () => {
                null != this._inputRef && this._inputRef.focus();
            });
        let { autoFocus: t } = this.props;
        this.state = { focused: null != t && t };
    }
}
let m = d;
