n.d(t, {
    k: () => h,
    u: () => p
}),
    n(388685);
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(600164),
    u = n(153066),
    d = n(388032),
    _ = n(159485);
function f(e, t, n) {
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
let p = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class h extends (r = a.PureComponent) {
    select() {
        var e;
        null == (e = this.inputRef.current) || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r, autoFocus: a, spellCheck: o, inputClassName: l, placeholder: c } = this.props,
            d = null == (t = this.context) ? void 0 : t.titleId;
        return (0, i.jsx)('input', {
            className: s()((0, u.l)(_, 'input', r), l, { [_.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': d,
            autoFocus: a,
            spellCheck: o,
            placeholder: c
        });
    }
    render() {
        let e,
            { text: t = d.intl.string(d.t.OpuAlJ), mode: n, hideMessage: r, className: a, buttonLook: o, supportsCopy: f, disabled: h } = this.props,
            m = null != r;
        switch (n) {
            case p.SUCCESS:
                e = l.Ttl.GREEN;
                break;
            case p.ERROR:
                e = l.Ttl.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(l.tEY, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)('div', {
                className: s()((0, u.l)(_, 'copyInput', n), a),
                ref: this.containerRef,
                children: (0, i.jsxs)(c.Z, {
                    className: _.layout,
                    children: [
                        (0, i.jsxs)(c.Z, {
                            className: _.inputWrapper,
                            children: [
                                this.renderInput(m),
                                m
                                    ? (0, i.jsx)('div', {
                                          className: _.hiddenMessage,
                                          children: r
                                      })
                                    : null
                            ]
                        }),
                        f
                            ? (0, i.jsx)(c.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(l.zxk, {
                                      className: _.button,
                                      onClick: this.handleButtonClick,
                                      size: l.PhG.MIN,
                                      color: e,
                                      look: o,
                                      disabled: h,
                                      children: t
                                  })
                              })
                            : null
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'inputRef', a.createRef()),
            f(this, 'containerRef', a.createRef()),
            f(this, 'handleButtonClick', () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            f(this, 'handleInputClick', () => {
                this.select();
            });
    }
}
f(h, 'contextType', l.q3N),
    f(h, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: l.Ttl.PRIMARY,
        buttonLook: l.iLD.FILLED,
        mode: p.DEFAULT
    }),
    f(h, 'Modes', p),
    f(h, 'ButtonColors', l.Ttl),
    f(h, 'ButtonLooks', l.iLD);
