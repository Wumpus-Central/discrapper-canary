"use strict";
n.d(t, { e: () => E, q: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(765178),
    l = n(862482),
    u = n(504345),
    c = n(187322),
    d = n(235986),
    _ = n(821589),
    f = n(375708),
    h = n(797525);
let p = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class E extends r.PureComponent {
    inputRef = r.createRef();
    containerRef = r.createRef();
    static contextType = u.cK;
    static defaultProps = { supportsCopy: !0, buttonColor: l.XD.PRIMARY, buttonLook: l.pR.FILLED, mode: p.DEFAULT };
    static Modes = p;
    static ButtonColors = l.XD;
    static ButtonLooks = l.pR;
    componentDidUpdate(e) {
        e.mode !== this.props.mode && this.props.mode === p.SUCCESS && o.O.announce(f.intl.string(f.t.t5VZ88));
    }
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: n, autoFocus: r, spellCheck: s, inputClassName: o, placeholder: l } = this.props,
            u = this.context?.titleId;
        return (0, i.jsx)("input", {
            className: a()((0, _.t)(h, "input", n), o, { [h.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": u,
            autoFocus: r,
            spellCheck: s,
            placeholder: l,
        });
    }
    render() {
        let e,
            {
                text: t = f.intl.string(f.t.OpuAlK),
                mode: n,
                hideMessage: r,
                className: s,
                buttonLook: o,
                supportsCopy: u,
                disabled: E,
            } = this.props,
            m = null != r;
        switch (n) {
            case p.SUCCESS:
                e = l.XD.GREEN;
                break;
            case p.ERROR:
                e = l.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(c.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)("div", {
                className: a()((0, _.t)(h, "copyInput", n), s),
                ref: this.containerRef,
                "data-disabled": E,
                children: (0, i.jsxs)(d.A, {
                    className: h.layout,
                    children: [
                        (0, i.jsxs)(d.A, {
                            className: h.inputWrapper,
                            children: [
                                this.renderInput(m),
                                m ? (0, i.jsx)("div", { className: h.hiddenMessage, children: r }) : null,
                            ],
                        }),
                        u
                            ? (0, i.jsx)(d.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(l.$n, {
                                      "data-migration-pending": !0,
                                      className: h.button,
                                      onClick: this.handleButtonClick,
                                      size: l.lO.MIN,
                                      color: e,
                                      look: o,
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
