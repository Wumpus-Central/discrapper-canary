s.d(e, { e: () => k, q: () => C });
var n = s(477900),
    i = s(582128),
    l = s(503698),
    r = s.n(l),
    a = s(668639),
    o = s(765178),
    c = s(259678),
    p = s(862482),
    d = s(235986),
    u = s(821589),
    h = s(375708),
    R = s(810333);
let C = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class k extends i.PureComponent {
    inputRef = i.createRef();
    containerRef = i.createRef();
    static contextType = a.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: p.XD.PRIMARY, buttonLook: p.pR.FILLED, mode: C.DEFAULT };
    static Modes = C;
    static ButtonColors = p.XD;
    static ButtonLooks = p.pR;
    componentDidUpdate(t) {
        t.mode !== this.props.mode && this.props.mode === C.SUCCESS && o.O.announce(h.intl.string(h.t.t5VZ88));
    }
    select() {
        this.inputRef.current?.select();
    }
    renderInput(t) {
        let { value: e, mode: s, autoFocus: i, spellCheck: l, inputClassName: a, placeholder: o } = this.props,
            c = this.context?.titleId;
        return (0, n.jsx)("input", {
            className: r()((0, u.t)(R, "input", s), a, { [R.inputHidden]: t }),
            ref: this.inputRef,
            type: "text",
            value: e,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": c,
            autoFocus: i,
            spellCheck: l,
            placeholder: o,
        });
    }
    render() {
        let t,
            {
                text: e = h.intl.string(h.t.OpuAlK),
                mode: s,
                hideMessage: i,
                className: l,
                buttonLook: a,
                supportsCopy: o,
                disabled: k,
            } = this.props,
            f = null != i;
        switch (s) {
            case C.SUCCESS:
                t = p.XD.GREEN;
                break;
            case C.ERROR:
                t = p.XD.RED;
                break;
            default:
                t = this.props.buttonColor;
        }
        return (0, n.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
                className: r()((0, u.t)(R, "copyInput", s), l),
                ref: this.containerRef,
                "data-disabled": k,
                children: (0, n.jsxs)(d.A, {
                    className: R.layout,
                    children: [
                        (0, n.jsxs)(d.A, {
                            className: R.inputWrapper,
                            children: [
                                this.renderInput(f),
                                f ? (0, n.jsx)("div", { className: R.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        o
                            ? (0, n.jsx)(d.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, n.jsx)(p.$n, {
                                      "data-migration-pending": !0,
                                      className: R.button,
                                      onClick: this.handleButtonClick,
                                      size: p.lO.MIN,
                                      color: t,
                                      look: a,
                                      disabled: k,
                                      children: e,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
    handleButtonClick = () => {
        let { onCopy: t, value: e } = this.props;
        t(e);
    };
    handleInputClick = () => {
        this.select();
    };
}
