r.d(n, {
    k: function () {
        return g;
    },
    u: function () {
        return m;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(600164),
    f = r(153066),
    _ = r(388032),
    h = r(333438);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class g extends (i = o.PureComponent) {
    select() {
        var e;
        null === (e = this.inputRef.current) || void 0 === e || e.select();
    }
    renderInput(e) {
        var n;
        let { value: r, mode: i, autoFocus: a, spellCheck: o, inputClassName: l, placeholder: c } = this.props,
            d = null === (n = this.context) || void 0 === n ? void 0 : n.titleId;
        return (0, s.jsx)('input', {
            className: u()((0, f.l)(h, 'input', i), l, { [h.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: r,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': d,
            autoFocus: a,
            spellCheck: o,
            placeholder: c
        });
    }
    render() {
        let e;
        let { text: n = _.intl.string(_.t.OpuAlJ), mode: r, hideMessage: i, className: a, buttonLook: o, supportsCopy: l, disabled: p } = this.props,
            g = null != i;
        switch (r) {
            case m.SUCCESS:
                e = c.ButtonColors.GREEN;
                break;
            case m.ERROR:
                e = c.ButtonColors.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, s.jsx)(c.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, s.jsx)('div', {
                className: u()((0, f.l)(h, 'copyInput', r), a),
                ref: this.containerRef,
                children: (0, s.jsxs)(d.Z, {
                    className: h.layout,
                    children: [
                        (0, s.jsxs)(d.Z, {
                            className: h.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g
                                    ? (0, s.jsx)('div', {
                                          className: h.hiddenMessage,
                                          children: i
                                      })
                                    : null
                            ]
                        }),
                        l
                            ? (0, s.jsx)(d.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, s.jsx)(c.Button, {
                                      className: h.button,
                                      onClick: this.handleButtonClick,
                                      size: c.ButtonSizes.MIN,
                                      color: e,
                                      look: o,
                                      disabled: p,
                                      children: n
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
                let { onCopy: e, value: n } = this.props;
                e(n);
            }),
            p(this, 'handleInputClick', () => {
                this.select();
            });
    }
}
p(g, 'contextType', c.FormContext),
    p(g, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: c.ButtonColors.PRIMARY,
        buttonLook: c.ButtonLooks.FILLED,
        mode: m.DEFAULT
    }),
    p(g, 'Modes', m),
    p(g, 'ButtonColors', c.ButtonColors),
    p(g, 'ButtonLooks', c.ButtonLooks);
