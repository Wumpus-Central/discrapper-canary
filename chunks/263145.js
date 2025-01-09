var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(600164),
    o = n(585548),
    c = n(232186);
function d(e, t, n) {
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
class u extends r.PureComponent {
    render() {
        let { focused: e } = this.state,
            { value: t, placeholder: n, error: r, className: l, maxLength: d, autoFocus: u, prefix: m, disabled: h } = this.props;
        return (0, i.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            justify: a.Z.Justify.START,
            className: s()(o.prefixInput, l, {
                [o.focused]: e,
                [o.error]: r
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, i.jsx)(a.Z.Child, {
                    grow: 0,
                    className: o.prefixInputPrefix,
                    children: m
                }),
                (0, i.jsx)(a.Z.Child, {
                    className: c.marginReset,
                    children: (0, i.jsx)('input', {
                        ref: this.setInputRef,
                        className: o.prefixInputInput,
                        value: t,
                        placeholder: n,
                        maxLength: d,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: u,
                        disabled: h
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            d(this, '_inputRef', void 0),
            d(this, 'setInputRef', (e) => {
                this._inputRef = e;
            }),
            d(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                t(e.currentTarget.value);
            }),
            d(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            d(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            }),
            d(this, 'handleFocusInput', () => {
                null != this._inputRef && this._inputRef.focus();
            });
        let { autoFocus: t } = this.props;
        this.state = { focused: null != t && t };
    }
}
t.Z = u;
