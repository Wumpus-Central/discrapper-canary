"use strict";
n.d(t, { e: () => p, q: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(421380),
    l = n(397927),
    u = n(235986),
    c = n(821589),
    d = n(985018),
    _ = n(705848);
let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
class p extends i.PureComponent {
    inputRef = i.createRef();
    containerRef = i.createRef();
    static contextType = l.cKB;
    static defaultProps = { supportsCopy: !0, buttonColor: o.XD.PRIMARY, buttonLook: o.pR.FILLED, mode: f.DEFAULT };
    static Modes = f;
    static ButtonColors = o.XD;
    static ButtonLooks = o.pR;
    select() {
        this.inputRef.current?.select();
    }
    renderInput(e) {
        let { value: t, mode: n, autoFocus: i, spellCheck: a, inputClassName: o, placeholder: l } = this.props,
            u = this.context?.titleId;
        return (0, r.jsx)("input", {
            className: s()((0, c.t)(_, "input", n), o, { [_.inputHidden]: e }),
            ref: this.inputRef,
            type: "text",
            value: t,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": u,
            autoFocus: i,
            spellCheck: a,
            placeholder: l,
        });
    }
    render() {
        let e,
            {
                text: t = d.intl.string(d.t.OpuAlK),
                mode: n,
                hideMessage: i,
                className: a,
                buttonLook: p,
                supportsCopy: h,
                disabled: m,
            } = this.props,
            g = null != i;
        switch (n) {
            case f.SUCCESS:
                e = o.XD.GREEN;
                break;
            case f.ERROR:
                e = o.XD.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, r.jsx)(l.vN3, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, r.jsx)("div", {
                className: s()((0, c.t)(_, "copyInput", n), a),
                ref: this.containerRef,
                children: (0, r.jsxs)(u.A, {
                    className: _.layout,
                    children: [
                        (0, r.jsxs)(u.A, {
                            className: _.inputWrapper,
                            children: [
                                this.renderInput(g),
                                g ? (0, r.jsx)("div", { className: _.hiddenMessage, children: i }) : null,
                            ],
                        }),
                        h
                            ? (0, r.jsx)(u.A, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, r.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      className: _.button,
                                      onClick: this.handleButtonClick,
                                      size: o.lO.MIN,
                                      color: e,
                                      look: p,
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
