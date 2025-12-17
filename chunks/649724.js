n.d(t, {
    k: () => h,
    u: () => m,
}),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(755721),
    c = n(481060),
    u = n(600164),
    d = n(153066),
    f = n(388032),
    p = n(802869);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = {
    DEFAULT: "default",
    SUCCESS: "success",
    ERROR: "error",
};
class h extends (r = a.PureComponent) {
    select() {
        var e;
        null == (e = this.inputRef.current) || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r, autoFocus: a, spellCheck: o, inputClassName: l, placeholder: c } = this.props,
            u = null == (t = this.context) ? void 0 : t.titleId;
        return (0, i.jsx)("input", {
            className: s()((0, d.l)(p, "input", r), l, { [p.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": u,
            autoFocus: a,
            spellCheck: o,
            placeholder: c,
        });
    }
    render() {
        let e,
            {
                text: t = f.intl.string(f.t.OpuAlK),
                mode: n,
                hideMessage: r,
                className: a,
                buttonLook: o,
                supportsCopy: _,
                disabled: h,
            } = this.props,
            g = null != r;
        switch (n) {
            case m.SUCCESS:
                e = l.Tt.GREEN;
                break;
            case m.ERROR:
                e = l.Tt.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(c.tEY, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)("div", {
                className: s()((0, d.l)(p, "copyInput", n), a),
                ref: this.containerRef,
                children: (0, i.jsxs)(u.Z, {
                    className: p.layout,
                    children: [
                        (0, i.jsxs)(u.Z, {
                            className: p.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g
                                    ? (0, i.jsx)("div", {
                                          className: p.hiddenMessage,
                                          children: r,
                                      })
                                    : null,
                            ],
                        }),
                        _
                            ? (0, i.jsx)(u.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(l.zx, {
                                      "data-migration-pending": !0,
                                      className: p.button,
                                      onClick: this.handleButtonClick,
                                      size: l.Ph.MIN,
                                      color: e,
                                      look: o,
                                      disabled: h,
                                      children: t,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "inputRef", a.createRef()),
            _(this, "containerRef", a.createRef()),
            _(this, "handleButtonClick", () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            _(this, "handleInputClick", () => {
                this.select();
            });
    }
}
_(h, "contextType", c.q3N),
    _(h, "defaultProps", {
        supportsCopy: !0,
        buttonColor: l.Tt.PRIMARY,
        buttonLook: l.iL.FILLED,
        mode: m.DEFAULT,
    }),
    _(h, "Modes", m),
    _(h, "ButtonColors", l.Tt),
    _(h, "ButtonLooks", l.iL);
