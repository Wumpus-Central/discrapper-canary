t.d(r, { Z: () => m });
var n = t(255367),
    i = t(73800),
    a = t(120356),
    s = t.n(a),
    l = t(600164),
    o = t(930223),
    c = t(20493);
function d(e, r, t) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[r] = t),
        e
    );
}
class u extends i.PureComponent {
    render() {
        let { focused: e } = this.state,
            { value: r, placeholder: t, error: i, className: a, maxLength: d, autoFocus: u, prefix: m, disabled: p } = this.props;
        return (0, n.jsxs)(l.Z, {
            align: l.Z.Align.CENTER,
            justify: l.Z.Justify.START,
            className: s()(o.prefixInput, a, {
                [o.focused]: e,
                [o.error]: i
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, n.jsx)(l.Z.Child, {
                    grow: 0,
                    className: o.prefixInputPrefix,
                    children: (0, n.jsx)('span', { children: m })
                }),
                (0, n.jsx)(l.Z.Child, {
                    className: c.marginReset,
                    children: (0, n.jsx)('input', {
                        ref: this.setInputRef,
                        className: o.prefixInputInput,
                        value: r,
                        placeholder: t,
                        maxLength: d,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: u,
                        disabled: p
                    })
                })
            ]
        });
    }
    constructor(e) {
        (super(e),
            d(this, '_inputRef', void 0),
            d(this, 'setInputRef', (e) => {
                this._inputRef = e;
            }),
            d(this, 'handleChange', (e) => {
                let { onChange: r } = this.props;
                r(e.currentTarget.value);
            }),
            d(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            d(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            }),
            d(this, 'handleFocusInput', () => {
                null != this._inputRef && this._inputRef.focus();
            }));
        let { autoFocus: r } = this.props;
        this.state = { focused: null != r && r };
    }
}
let m = u;
