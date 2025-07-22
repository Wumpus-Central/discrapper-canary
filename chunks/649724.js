(n.d(t, {
    k: () => m,
    u: () => h
}),
    n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(755721),
    c = n(481060),
    u = n(600164),
    d = n(153066),
    _ = n(388032),
    f = n(159485);
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
let h = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class m extends (r = a.PureComponent) {
    select() {
        var e;
        null == (e = this.inputRef.current) || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r, autoFocus: a, spellCheck: o, inputClassName: l, placeholder: c } = this.props,
            u = null == (t = this.context) ? void 0 : t.titleId;
        return (0, i.jsx)('input', {
            className: s()((0, d.l)(f, 'input', r), l, { [f.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': u,
            autoFocus: a,
            spellCheck: o,
            placeholder: c
        });
    }
    render() {
        let e,
            { text: t = _.intl.string(_.t.OpuAlJ), mode: n, hideMessage: r, className: a, buttonLook: o, supportsCopy: p, disabled: m } = this.props,
            g = null != r;
        switch (n) {
            case h.SUCCESS:
                e = l.Tt.GREEN;
                break;
            case h.ERROR:
                e = l.Tt.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(c.tEY, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)('div', {
                className: s()((0, d.l)(f, 'copyInput', n), a),
                ref: this.containerRef,
                children: (0, i.jsxs)(u.Z, {
                    className: f.layout,
                    children: [
                        (0, i.jsxs)(u.Z, {
                            className: f.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g
                                    ? (0, i.jsx)('div', {
                                          className: f.hiddenMessage,
                                          children: r
                                      })
                                    : null
                            ]
                        }),
                        p
                            ? (0, i.jsx)(u.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(l.zx, {
                                      className: f.button,
                                      onClick: this.handleButtonClick,
                                      size: l.Ph.MIN,
                                      color: e,
                                      look: o,
                                      disabled: m,
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
        (super(...e),
            p(this, 'inputRef', a.createRef()),
            p(this, 'containerRef', a.createRef()),
            p(this, 'handleButtonClick', () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            p(this, 'handleInputClick', () => {
                this.select();
            }));
    }
}
(p(m, 'contextType', c.q3N),
    p(m, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: l.Tt.PRIMARY,
        buttonLook: l.iL.FILLED,
        mode: h.DEFAULT
    }),
    p(m, 'Modes', h),
    p(m, 'ButtonColors', l.Tt),
    p(m, 'ButtonLooks', l.iL));
