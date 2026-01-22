n.d(t, {
    e: () => m,
    q: () => h,
}),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(421380),
    c = n(397927),
    u = n(235986),
    d = n(821589),
    f = n(985018),
    p = n(705848);

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
let h = {
    DEFAULT: "default",
    SUCCESS: "success",
    ERROR: "error",
};
class m extends (r = a.PureComponent) {
    select() {
        var e;
        null == (e = this.inputRef.current) || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r, autoFocus: a, spellCheck: s, inputClassName: l, placeholder: c } = this.props,
            u = null == (t = this.context) ? void 0 : t.titleId;
        return (0, i.jsx)("input", {
            className: o()((0, d.t)(p, "input", r), l, {
                [p.inputHidden]: e,
            }),
            ref: this.inputRef,
            type: "text",
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": u,
            autoFocus: a,
            spellCheck: s,
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
                buttonLook: s,
                supportsCopy: _,
                disabled: m,
            } = this.props,
            g = null != r;
        switch (n) {
            case h.SUCCESS:
                e = l.XD.GREEN;
                break;
            case h.ERROR:
                e = l.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(c.vN3, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)("div", {
                className: o()((0, d.t)(p, "copyInput", n), a),
                ref: this.containerRef,
                children: (0, i.jsxs)(u.A, {
                    className: p.layout,
                    children: [
                        (0, i.jsxs)(u.A, {
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
                            ? (0, i.jsx)(u.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: {
                                      margin: 0,
                                  },
                                  children: (0, i.jsx)(l.$n, {
                                      "data-migration-pending": !0,
                                      className: p.button,
                                      onClick: this.handleButtonClick,
                                      size: l.lO.MIN,
                                      color: e,
                                      look: s,
                                      disabled: m,
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
_(m, "contextType", c.cKB),
    _(m, "defaultProps", {
        supportsCopy: !0,
        buttonColor: l.XD.PRIMARY,
        buttonLook: l.pR.FILLED,
        mode: h.DEFAULT,
    }),
    _(m, "Modes", h),
    _(m, "ButtonColors", l.XD),
    _(m, "ButtonLooks", l.pR);
