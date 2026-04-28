"use strict";
n.d(t, { e: () => m, q: () => f });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(862482),
    o = n(504345),
    c = n(187322),
    d = n(235986),
    u = n(821589),
    _ = n(985018),
    p = n(797525);
let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class m extends a.PureComponent {
    inputRef = a.createRef();
    containerRef = a.createRef();
    static contextType = o.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: s.XD.PRIMARY, buttonLook: s.pR.FILLED, mode: f.DEFAULT };
    static Modes = f;
    static ButtonColors = s.XD;
    static ButtonLooks = s.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: n, autoFocus: a, spellCheck: i, inputClassName: s, placeholder: o } = this.props,
            c = this.context?.titleId;
        return (0, r.jsx)("input", {
            className: l()((0, u.t)(p, "input", n), s, { [p.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": c,
            autoFocus: a,
            spellCheck: i,
            placeholder: o,
        });
    }
    render() {
        let e,
            {
                text: t = _.intl.string(_.t.OpuAlK),
                mode: n,
                hideMessage: a,
                className: i,
                buttonLook: o,
                supportsCopy: m,
                disabled: h,
            } = this.props,
            g = null != a;
        switch (n) {
            case f.SUCCESS:
                e = s.XD.GREEN;
                break;
            case f.ERROR:
                e = s.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, r.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, r.jsx)("div", {
                className: l()((0, u.t)(p, "copyInput", n), i),
                ref: this.containerRef,
                "data-disabled": h,
                children: (0, r.jsxs)(d.A, {
                    className: p.layout,
                    children: [
                        (0, r.jsxs)(d.A, {
                            className: p.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g ? (0, r.jsx)("div", { className: p.hiddenMessage, children: a }) : null,
                            ],
                        }),
                        m
                            ? (0, r.jsx)(d.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, r.jsx)(s.$n, {
                                      "data-migration-pending": !0,
                                      className: p.button,
                                      onClick: this.handleButtonClick,
                                      size: s.lO.MIN,
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
    handleButtonClick = () => {
        this.select();
        let { onCopy: e, value: t } = this.props;
        e(t);
    };
    handleInputClick = () => {
        this.select();
    };
}
