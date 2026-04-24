"use strict";
n.d(t, { e: () => h, q: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(862482),
    o = n(504345),
    c = n(187322),
    u = n(235986),
    d = n(821589),
    _ = n(985018),
    p = n(797525);
let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class h extends i.PureComponent {
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
        let { value: t, mode: n, autoFocus: i, spellCheck: a, inputClassName: s, placeholder: o } = this.props,
            c = this.context?.titleId;
        return (0, r.jsx)("input", {
            className: l()((0, d.t)(p, "input", n), s, { [p.inputHidden]: e }),
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
                mode: n,
                hideMessage: i,
                className: a,
                buttonLook: o,
                supportsCopy: h,
                disabled: m,
            } = this.props,
            g = null != i;
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
                className: l()((0, d.t)(p, "copyInput", n), a),
                ref: this.containerRef,
                "data-disabled": m,
                children: (0, r.jsxs)(u.A, {
                    className: p.layout,
                    children: [
                        (0, r.jsxs)(u.A, {
                            className: p.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g ? (0, r.jsx)("div", { className: p.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        h
                            ? (0, r.jsx)(u.A, {
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
    handleButtonClick = () => {
        this.select();
        let { onCopy: e, value: t } = this.props;
        e(t);
    };
    handleInputClick = () => {
        this.select();
    };
}
