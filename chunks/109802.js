"use strict";
n.d(t, { e: () => I, q: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(765178),
    o = n(862482),
    d = n(504345),
    c = n(187322),
    u = n(235986),
    _ = n(821589),
    E = n(375708),
    A = n(797525);
let h = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class I extends r.PureComponent {
    inputRef = r.createRef();
    containerRef = r.createRef();
    static contextType = d.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: o.XD.PRIMARY, buttonLook: o.pR.FILLED, mode: h.DEFAULT };
    static Modes = h;
    static ButtonColors = o.XD;
    static ButtonLooks = o.pR;
    componentDidUpdate(e) {
        e.mode !== this.props.mode && this.props.mode === h.SUCCESS && l.O.announce(E.intl.string(E.t.t5VZ88));
    }
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: n, autoFocus: r, spellCheck: a, inputClassName: l, placeholder: o } = this.props,
            d = this.context?.titleId;
        return (0, i.jsx)("input", {
            className: s()((0, _.t)(A, "input", n), l, { [A.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": d,
            autoFocus: r,
            spellCheck: a,
            placeholder: o,
        });
    }
    render() {
        let e,
            {
                text: t = E.intl.string(E.t.OpuAlK),
                mode: n,
                hideMessage: r,
                className: a,
                buttonLook: l,
                supportsCopy: d,
                disabled: I,
            } = this.props,
            f = null != r;
        switch (n) {
            case h.SUCCESS:
                e = o.XD.GREEN;
                break;
            case h.ERROR:
                e = o.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)("div", {
                className: s()((0, _.t)(A, "copyInput", n), a),
                ref: this.containerRef,
                "data-disabled": I,
                children: (0, i.jsxs)(u.A, {
                    className: A.layout,
                    children: [
                        (0, i.jsxs)(u.A, {
                            className: A.inputWrapper,
                            children: [
                                this.renderInput(f),
                                f ? (0, i.jsx)("div", { className: A.hiddenMessage, children: r }) : null,
                            ],
                        }),
                        d
                            ? (0, i.jsx)(u.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      className: A.button,
                                      onClick: this.handleButtonClick,
                                      size: o.lO.MIN,
                                      color: e,
                                      look: l,
                                      disabled: I,
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
        let { onCopy: e, value: t } = this.props;
        e(t);
    };
    handleInputClick = () => {
        this.select();
    };
}
