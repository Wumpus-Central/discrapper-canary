t.d(e, { I: () => v });
var i = t(477900),
    a = t(582128),
    s = t(503698),
    r = t.n(s),
    n = t(837381),
    o = t(887129),
    c = t(741918),
    u = t(939249),
    d = t(834730),
    p = t(866665),
    m = t(537512);
let h = () => Promise.resolve();
function b(l) {
    let {
            role: e,
            option: t,
            selected: s,
            onClick: o,
            look: c,
            className: h,
            disabled: b = !1,
            tooltip: v,
            tooltipAriaLabel: x,
        } = l,
        k = (0, n.rm)(String(t.value)),
        f = a.useCallback((l) => o(t, l), [o, t]);
    function N() {
        return (0, i.jsx)("div", {
            role: "listitem" === e ? "listitem" : void 0,
            className: r()(m.xp, { [m.iK]: "pill" === c }),
            children: (0, i.jsx)(u.D, {
                ...k,
                role: "listitem" === e ? "button" : e,
                className: r()(
                    (function (l) {
                        switch (l) {
                            case "tab":
                            default:
                                return m.V3;
                            case "pill":
                                return m.RW;
                        }
                    })(c),
                    h,
                    {
                        [(function (l) {
                            switch (l) {
                                case "tab":
                                default:
                                    return m.u7;
                                case "pill":
                                    return m.EN;
                            }
                        })(c)]: s,
                        [m.r9]: b,
                    },
                ),
                "aria-disabled": b,
                "aria-label": null != v ? x : void 0,
                "aria-selected": s,
                "aria-controls": t["aria-controls"] ?? void 0,
                onClick: b ? void 0 : f,
                children: (0, i.jsxs)(d.E, {
                    className: r()(m.JU, "pill" === c ? m.up : void 0),
                    variant: "text-sm/medium",
                    color: "none",
                    children: [null != t.icon ? (0, i.jsx)(t.icon, { className: m.Kk }) : null, t.name],
                }),
            }),
        });
    }
    return null == v ? N() : (0, i.jsx)(p.m, { shouldShow: !b, __unsupportedReactNodeAsText: v, children: N() });
}
function v(l) {
    let {
            options: e,
            value: t,
            onChange: s,
            role: u = "list",
            look: d = "tab",
            className: p,
            optionClassName: v,
            disabled: x = !1,
        } = l,
        k = a.useId(),
        f = (0, o.Ay)({ id: k, isEnabled: !x, orientation: c.Gl.HORIZONTAL, scrollToStart: h, scrollToEnd: h }),
        N = a.useCallback(
            (l) => {
                let e = t === l.value;
                return (0, i.jsx)(
                    b,
                    {
                        role: "tablist" === u ? "tab" : "listitem",
                        selected: e,
                        option: l,
                        look: d,
                        onClick: s,
                        disabled: x,
                        className: r()(v, l.className),
                        tooltip: l.tooltip,
                        tooltipAriaLabel: l.tooltipAriaLabel,
                    },
                    l.key ?? String(l.value),
                );
            },
            [t, u, d, s, v, x],
        );
    return (0, i.jsx)(n.hD, {
        navigator: f,
        children: (0, i.jsx)(n.PR, {
            children: (l) => {
                let { ref: t, ...a } = l;
                return (0, i.jsx)("div", {
                    ...a,
                    ref: t,
                    role: u,
                    className: r()(
                        (function (l) {
                            switch (l) {
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
                    children: e.map(N),
                });
            },
        }),
    });
}
