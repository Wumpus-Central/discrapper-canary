t.d(r, { Z: () => f });
var n = t(255367),
    a = t(73800),
    i = t(120356),
    s = t.n(i),
    l = t(600164),
    o = t(930223),
    d = t(20493);
function c(e, r, t) {
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
class u extends a.PureComponent {
    render() {
        let { focused: e } = this.state,
            { value: r, placeholder: t, error: a, className: i, maxLength: c, autoFocus: u, prefix: f, disabled: m } = this.props;
        return (0, n.jsxs)(l.Z, {
            align: l.Z.Align.CENTER,
            justify: l.Z.Justify.START,
            className: s()(o.prefixInput, i, {
                [o.focused]: e,
                [o.error]: a
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, n.jsx)(l.Z.Child, {
                    grow: 0,
                    className: o.prefixInputPrefix,
                    children: (0, n.jsx)('span', { children: f })
                }),
                (0, n.jsx)(l.Z.Child, {
                    className: d.marginReset,
                    children: (0, n.jsx)('input', {
                        ref: this.setInputRef,
                        className: o.prefixInputInput,
                        value: r,
                        placeholder: t,
                        maxLength: c,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: u,
                        disabled: m
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
                let { onChange: r } = this.props;
                r(e.currentTarget.value);
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
        let { autoFocus: r } = this.props;
        this.state = { focused: null != r && r };
    }
}
let f = u;
