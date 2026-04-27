"use strict";
r.d(t, { e: () => m, q: () => f });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    l = r.n(a),
    s = r(862482),
    o = r(504345),
    c = r(187322),
    u = r(235986),
    d = r(821589),
    _ = r(985018),
    p = r(797525);
let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class m extends i.PureComponent {
    inputRef = i.createRef();
    containerRef = i.createRef();
    static contextType = o.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: s.XD.PRIMARY, buttonLook: s.pR.FILLED, mode: f.DEFAULT };
    static Modes = f;
    static ButtonColors = s.XD;
    static ButtonLooks = s.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: r, autoFocus: i, spellCheck: a, inputClassName: s, placeholder: o } = this.props,
            c = this.context?.titleId;
        return (0, n.jsx)("input", {
            className: l()((0, d.t)(p, "input", r), s, { [p.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": c,
            autoFocus: i,
            spellCheck: a,
            placeholder: o,
        });
    }
    render() {
        let e,
            {
                text: t = _.intl.string(_.t.OpuAlK),
                mode: r,
                hideMessage: i,
                className: a,
                buttonLook: o,
                supportsCopy: m,
                disabled: h,
            } = this.props,
            g = null != i;
        switch (r) {
            case f.SUCCESS:
                e = s.XD.GREEN;
                break;
            case f.ERROR:
                e = s.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, n.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
                className: l()((0, d.t)(p, "copyInput", r), a),
                ref: this.containerRef,
                "data-disabled": h,
                children: (0, n.jsxs)(u.A, {
                    className: p.layout,
                    children: [
                        (0, n.jsxs)(u.A, {
                            className: p.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g ? (0, n.jsx)("div", { className: p.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        m
                            ? (0, n.jsx)(u.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, n.jsx)(s.$n, {
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
