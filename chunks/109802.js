a.d(t, { e: () => f, q: () => m });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(862482),
    o = a(504345),
    c = a(187322),
    d = a(235986),
    u = a(821589),
    h = a(985018),
    p = a(797525);
let m = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class f extends r.PureComponent {
    inputRef = r.createRef();
    containerRef = r.createRef();
    static contextType = o.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: s.XD.PRIMARY, buttonLook: s.pR.FILLED, mode: m.DEFAULT };
    static Modes = m;
    static ButtonColors = s.XD;
    static ButtonLooks = s.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: a, autoFocus: r, spellCheck: l, inputClassName: s, placeholder: o } = this.props,
            c = this.context?.titleId;
        return (0, n.jsx)("input", {
            className: i()((0, u.t)(p, "input", a), s, { [p.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": c,
            autoFocus: r,
            spellCheck: l,
            placeholder: o,
        });
    }
    render() {
        let e,
            {
                text: t = h.intl.string(h.t.OpuAlK),
                mode: a,
                hideMessage: r,
                className: l,
                buttonLook: o,
                supportsCopy: f,
                disabled: b,
            } = this.props,
            _ = null != r;
        switch (a) {
            case m.SUCCESS:
                e = s.XD.GREEN;
                break;
            case m.ERROR:
                e = s.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, n.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
                className: i()((0, u.t)(p, "copyInput", a), l),
                ref: this.containerRef,
                "data-disabled": b,
                children: (0, n.jsxs)(d.A, {
                    className: p.layout,
                    children: [
                        (0, n.jsxs)(d.A, {
                            className: p.inputWrapper,
                            children: [
                                this.renderInput(_),
                                _ ? (0, n.jsx)("div", { className: p.hiddenMessage, children: r }) : null,
                            ],
                        }),
                        f
                            ? (0, n.jsx)(d.A, {
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
                                      disabled: b,
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
