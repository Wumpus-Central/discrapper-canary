"use strict";
n.d(t, { e: () => h, q: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(862482),
    l = n(504345),
    u = n(187322),
    c = n(235986),
    d = n(821589),
    _ = n(985018),
    f = n(797525);
let p = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class h extends i.PureComponent {
    inputRef = i.createRef();
    containerRef = i.createRef();
    static contextType = l.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: o.XD.PRIMARY, buttonLook: o.pR.FILLED, mode: p.DEFAULT };
    static Modes = p;
    static ButtonColors = o.XD;
    static ButtonLooks = o.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: n, autoFocus: i, spellCheck: s, inputClassName: o, placeholder: l } = this.props,
            u = this.context?.titleId;
        return (0, r.jsx)("input", {
            className: a()((0, d.t)(f, "input", n), o, { [f.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": u,
            autoFocus: i,
            spellCheck: s,
            placeholder: l,
        });
    }
    render() {
        let e,
            {
                text: t = _.intl.string(_.t.OpuAlK),
                mode: n,
                hideMessage: i,
                className: s,
                buttonLook: l,
                supportsCopy: h,
                disabled: E,
            } = this.props,
            m = null != i;
        switch (n) {
            case p.SUCCESS:
                e = o.XD.GREEN;
                break;
            case p.ERROR:
                e = o.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, r.jsx)(u.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, r.jsx)("div", {
                className: a()((0, d.t)(f, "copyInput", n), s),
                ref: this.containerRef,
                "data-disabled": E,
                children: (0, r.jsxs)(c.A, {
                    className: f.layout,
                    children: [
                        (0, r.jsxs)(c.A, {
                            className: f.inputWrapper,
                            children: [
                                this.renderInput(m),
                                m ? (0, r.jsx)("div", { className: f.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        h
                            ? (0, r.jsx)(c.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, r.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      className: f.button,
                                      onClick: this.handleButtonClick,
                                      size: o.lO.MIN,
                                      color: e,
                                      look: l,
                                      disabled: E,
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
