i.d(l, { I: () => v });
var t = i(477900),
    a = i(582128),
    s = i(503698),
    r = i.n(s),
    n = i(837381),
    o = i(887129),
    c = i(741918),
    u = i(939249),
    d = i(834730),
    p = i(866665),
    m = i(537512);
let b = () => Promise.resolve();
function h(e) {
    let {
            role: l,
            option: i,
            selected: s,
            onClick: o,
            look: c,
            className: b,
            disabled: h = !1,
            tooltip: v,
            tooltipAriaLabel: x,
        } = e,
        k = (0, n.rm)(String(i.value)),
        f = a.useCallback((e) => o(i, e), [o, i]);
    function N() {
        return (0, t.jsx)("div", {
            role: "listitem" === l ? "listitem" : void 0,
            className: r()(m.xp, { [m.iK]: "pill" === c }),
            children: (0, t.jsx)(u.D, {
                ...k,
                role: "listitem" === l ? "button" : l,
                className: r()(
                    (function (e) {
                        switch (e) {
                            case "tab":
                            default:
                                return m.V3;
                            case "pill":
                                return m.RW;
                        }
                    })(c),
                    b,
                    {
                        [(function (e) {
                            switch (e) {
                                case "tab":
                                default:
                                    return m.u7;
                                case "pill":
                                    return m.EN;
                            }
                        })(c)]: s,
                        [m.r9]: h,
                    },
                ),
                "aria-disabled": h,
                "aria-label": null != v ? x : void 0,
                "aria-selected": "tab" === l ? s : void 0,
                "aria-pressed": "listitem" === l ? s : void 0,
                "aria-controls": i["aria-controls"] ?? void 0,
                onClick: h ? void 0 : f,
                children: (0, t.jsxs)(d.E, {
                    className: r()(m.JU, "pill" === c ? m.up : void 0),
                    variant: "text-sm/medium",
                    color: "none",
                    children: [null != i.icon ? (0, t.jsx)(i.icon, { className: m.Kk }) : null, i.name],
                }),
            }),
        });
    }
    return null == v ? N() : (0, t.jsx)(p.m, { shouldShow: !h, __unsupportedReactNodeAsText: v, children: N() });
}
function v(e) {
    let {
            options: l,
            value: i,
            onChange: s,
            role: u = "list",
            look: d = "tab",
            className: p,
            optionClassName: v,
            disabled: x = !1,
        } = e,
        k = a.useId(),
        f = (0, o.Ay)({ id: k, isEnabled: !x, orientation: c.Gl.HORIZONTAL, scrollToStart: b, scrollToEnd: b }),
        N = a.useCallback(
            (e) => {
                let l = i === e.value;
                return (0, t.jsx)(
                    h,
                    {
                        role: "tablist" === u ? "tab" : "listitem",
                        selected: l,
                        option: e,
                        look: d,
                        onClick: s,
                        disabled: x,
                        className: r()(v, e.className),
                        tooltip: e.tooltip,
                        tooltipAriaLabel: e.tooltipAriaLabel,
                    },
                    e.key ?? String(e.value),
                );
            },
            [i, u, d, s, v, x],
        );
    return (0, t.jsx)(n.hD, {
        navigator: f,
        children: (0, t.jsx)(n.PR, {
            children: (e) => {
                let { ref: i, ...a } = e;
                return (0, t.jsx)("div", {
                    ...a,
                    ref: i,
                    role: u,
                    className: r()(
                        (function (e) {
                            switch (e) {
                                case "tab":
                                default:
                                    return m.v_;
                                case "pill":
                                    return m.V_;
                            }
                        })(d),
                        p,
                        { [m.ii]: x },
                    ),
                    children: l.map(N),
                });
            },
        }),
    });
}
