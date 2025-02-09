n.d(t, {
    k: () => h,
    u: () => p
}),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(600164),
    c = n(153066),
    d = n(388032),
    f = n(713002);
function _(e, t, n) {
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
class h extends (i = a.PureComponent) {
    select() {
        var e;
        null === (e = this.inputRef.current) || void 0 === e || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: i, autoFocus: a, spellCheck: s, inputClassName: l, placeholder: u } = this.props,
            d = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
        return (0, r.jsx)('input', {
            className: o()((0, c.l)(f, 'input', i), l, { [f.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': d,
            autoFocus: a,
            spellCheck: s,
            placeholder: u
        });
    }
    render() {
        let e;
        let { text: t = d.intl.string(d.t.OpuAlJ), mode: n, hideMessage: i, className: a, buttonLook: s, supportsCopy: _, disabled: h } = this.props,
            m = null != i;
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
        return (0, r.jsx)(l.tEY, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, r.jsx)('div', {
                className: o()((0, c.l)(f, 'copyInput', n), a),
                ref: this.containerRef,
                children: (0, r.jsxs)(u.Z, {
                    className: f.layout,
                    children: [
                        (0, r.jsxs)(u.Z, {
                            className: f.inputWrapper,
                            children: [
                                this.renderInput(m),
                                m
                                    ? (0, r.jsx)('div', {
                                          className: f.hiddenMessage,
                                          children: i
                                      })
                                    : null
                            ]
                        }),
                        _
                            ? (0, r.jsx)(u.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, r.jsx)(l.zxk, {
                                      className: f.button,
                                      onClick: this.handleButtonClick,
                                      size: l.PhG.MIN,
                                      color: e,
                                      look: s,
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
            _(this, 'inputRef', a.createRef()),
            _(this, 'containerRef', a.createRef()),
            _(this, 'handleButtonClick', () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            _(this, 'handleInputClick', () => {
                this.select();
            });
    }
}
_(h, 'contextType', l.q3N),
    _(h, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: l.Ttl.PRIMARY,
        buttonLook: l.iLD.FILLED,
        mode: p.DEFAULT
    }),
    _(h, 'Modes', p),
    _(h, 'ButtonColors', l.Ttl),
    _(h, 'ButtonLooks', l.iLD);
