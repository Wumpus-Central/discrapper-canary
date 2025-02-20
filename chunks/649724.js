n.d(t, {
    k: () => h,
    u: () => _
}),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(600164),
    u = n(153066),
    d = n(388032),
    f = n(567510);
function p(e, t, n) {
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
let _ = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class h extends (r = o.PureComponent) {
    select() {
        var e;
        null === (e = this.inputRef.current) || void 0 === e || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r, autoFocus: o, spellCheck: a, inputClassName: l, placeholder: c } = this.props,
            d = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
        return (0, i.jsx)('input', {
            className: s()((0, u.l)(f, 'input', r), l, { [f.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': d,
            autoFocus: o,
            spellCheck: a,
            placeholder: c
        });
    }
    render() {
        let e;
        let { text: t = d.NW.string(d.t.OpuAlJ), mode: n, hideMessage: r, className: o, buttonLook: a, supportsCopy: p, disabled: h } = this.props,
            m = null != r;
        switch (n) {
            case _.SUCCESS:
                e = l.Ttl.GREEN;
                break;
            case _.ERROR:
                e = l.Ttl.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(l.tEY, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)('div', {
                className: s()((0, u.l)(f, 'copyInput', n), o),
                ref: this.containerRef,
                children: (0, i.jsxs)(c.Z, {
                    className: f.layout,
                    children: [
                        (0, i.jsxs)(c.Z, {
                            className: f.inputWrapper,
                            children: [
                                this.renderInput(m),
                                m
                                    ? (0, i.jsx)('div', {
                                          className: f.hiddenMessage,
                                          children: r
                                      })
                                    : null
                            ]
                        }),
                        p
                            ? (0, i.jsx)(c.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(l.zxk, {
                                      className: f.button,
                                      onClick: this.handleButtonClick,
                                      size: l.PhG.MIN,
                                      color: e,
                                      look: a,
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
            p(this, 'inputRef', o.createRef()),
            p(this, 'containerRef', o.createRef()),
            p(this, 'handleButtonClick', () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            p(this, 'handleInputClick', () => {
                this.select();
            });
    }
}
p(h, 'contextType', l.q3N),
    p(h, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: l.Ttl.PRIMARY,
        buttonLook: l.iLD.FILLED,
        mode: _.DEFAULT
    }),
    p(h, 'Modes', _),
    p(h, 'ButtonColors', l.Ttl),
    p(h, 'ButtonLooks', l.iLD);
