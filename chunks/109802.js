n.d(t, { e: () => A, q: () => h });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(862482),
    o = n(504345),
    u = n(187322),
    c = n(235986),
    d = n(821589),
    p = n(985018),
    m = n(797525);
let h = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class A extends i.PureComponent {
    inputRef = i.createRef();
    containerRef = i.createRef();
    static contextType = o.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: s.XD.PRIMARY, buttonLook: s.pR.FILLED, mode: h.DEFAULT };
    static Modes = h;
    static ButtonColors = s.XD;
    static ButtonLooks = s.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: n, autoFocus: i, spellCheck: a, inputClassName: s, placeholder: o } = this.props,
            u = this.context?.titleId;
        return (0, l.jsx)("input", {
            className: r()((0, d.t)(m, "input", n), s, { [m.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": u,
            autoFocus: i,
            spellCheck: a,
            placeholder: o,
        });
    }
    render() {
        let e,
            {
                text: t = p.intl.string(p.t.OpuAlK),
                mode: n,
                hideMessage: i,
                className: a,
                buttonLook: o,
                supportsCopy: A,
                disabled: _,
            } = this.props,
            C = null != i;
        switch (n) {
            case h.SUCCESS:
                e = s.XD.GREEN;
                break;
            case h.ERROR:
                e = s.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, l.jsx)(u.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, l.jsx)("div", {
                className: r()((0, d.t)(m, "copyInput", n), a),
                ref: this.containerRef,
                "data-disabled": _,
                children: (0, l.jsxs)(c.A, {
                    className: m.layout,
                    children: [
                        (0, l.jsxs)(c.A, {
                            className: m.inputWrapper,
                            children: [
                                this.renderInput(C),
                                C ? (0, l.jsx)("div", { className: m.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        A
                            ? (0, l.jsx)(c.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, l.jsx)(s.$n, {
                                      "data-migration-pending": !0,
                                      className: m.button,
                                      onClick: this.handleButtonClick,
                                      size: s.lO.MIN,
                                      color: e,
                                      look: o,
                                      disabled: _,
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
