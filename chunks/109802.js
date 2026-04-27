"use strict";
r.d(t, { e: () => m, q: () => f });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(862482),
    o = r(504345),
    c = r(187322),
    d = r(235986),
    u = r(821589),
    _ = r(985018),
    p = r(797525);
let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class m extends i.PureComponent {
    inputRef = i.createRef();
    containerRef = i.createRef();
    static contextType = o.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: l.XD.PRIMARY, buttonLook: l.pR.FILLED, mode: f.DEFAULT };
    static Modes = f;
    static ButtonColors = l.XD;
    static ButtonLooks = l.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: r, autoFocus: i, spellCheck: a, inputClassName: l, placeholder: o } = this.props,
            c = this.context?.titleId;
        return (0, n.jsx)("input", {
            className: s()((0, u.t)(p, "input", r), l, { [p.inputHidden]: e }),
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
                e = l.XD.GREEN;
                break;
            case f.ERROR:
                e = l.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, n.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
                className: s()((0, u.t)(p, "copyInput", r), a),
                ref: this.containerRef,
                "data-disabled": h,
                children: (0, n.jsxs)(d.A, {
                    className: p.layout,
                    children: [
                        (0, n.jsxs)(d.A, {
                            className: p.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g ? (0, n.jsx)("div", { className: p.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        m
                            ? (0, n.jsx)(d.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, n.jsx)(l.$n, {
                                      "data-migration-pending": !0,
                                      className: p.button,
                                      onClick: this.handleButtonClick,
                                      size: l.lO.MIN,
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
