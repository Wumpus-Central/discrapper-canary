n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(600164),
    d = n(930223),
    o = n(20493);
function c(e, t, n) {
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
class u extends i.PureComponent {
    render() {
        let { focused: e } = this.state,
            { value: t, placeholder: n, error: i, className: a, maxLength: c, autoFocus: u, prefix: h, disabled: f } = this.props;
        return (0, r.jsxs)(l.Z, {
            align: l.Z.Align.CENTER,
            justify: l.Z.Justify.START,
            className: s()(d.prefixInput, a, {
                [d.focused]: e,
                [d.error]: i
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, r.jsx)(l.Z.Child, {
                    grow: 0,
                    className: d.prefixInputPrefix,
                    children: (0, r.jsx)('span', { children: h })
                }),
                (0, r.jsx)(l.Z.Child, {
                    className: o.marginReset,
                    children: (0, r.jsx)('input', {
                        ref: this.setInputRef,
                        className: d.prefixInputInput,
                        value: t,
                        placeholder: n,
                        maxLength: c,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: u,
                        disabled: f
                    })
                })
            ]
        });
    }
    constructor(e) {
        (super(e),
            c(this, '_inputRef', void 0),
            c(this, 'setInputRef', (e) => {
                this._inputRef = e;
            }),
            c(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                t(e.currentTarget.value);
            }),
            c(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            c(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            }),
            c(this, 'handleFocusInput', () => {
                null != this._inputRef && this._inputRef.focus();
            }));
        let { autoFocus: t } = this.props;
        this.state = { focused: null != t && t };
    }
}
let h = u;
