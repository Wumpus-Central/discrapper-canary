s.d(t, { Ay: () => h, L5: () => g });
var i = s(477900),
    n = s(582128),
    l = s(503698),
    r = s.n(l);
s(17928);
var a = s(947641),
    o = s(661531),
    c = s(834730),
    d = s(534514);
(s(287809), s(3738), s(801365), s(105292));
var m = s(56999);
let u = n.createContext({ isCurrent: !1 });
function x(e) {
    let { children: t, isComplete: s, isCurrent: l, hasNextStep: c } = e,
        d = n.useMemo(() => ({ isCurrent: l }), [l]);
    return (0, i.jsxs)("li", {
        className: r()(m.gY, { [m.HP]: s }, { [m.fS]: l }, { [m.h4]: c }),
        children: [
            (0, i.jsxs)("div", {
                className: m.cJ,
                children: [
                    (0, i.jsx)("div", {
                        className: m.$P,
                        children: s && (0, i.jsx)(a.r, { className: m.ap, color: o.A.colors.WHITE }),
                    }),
                    c && (0, i.jsx)("div", { className: m.UK }),
                ],
            }),
            (0, i.jsx)("div", { className: m.M7, children: (0, i.jsx)(u.Provider, { value: d, children: t }) }),
        ],
    });
}
function g(e) {
    let { children: t } = e,
        { isCurrent: s } = n.useContext(u);
    return (0, i.jsx)(c.E, { color: s ? "text-default" : "text-muted", variant: "body-xs/medium", children: t });
}
let h = function (e) {
    let { children: t, heading: s, steps: n, className: l } = e,
        a = n.findIndex((e) => !e.isComplete);
    return (0, i.jsxs)("div", {
        className: r()(m.iE, l),
        children: [
            (0, i.jsx)("div", {
                className: m.Mj,
                children: (0, i.jsx)(d.D, {
                    className: m.R_,
                    color: "text-strong",
                    variant: "body-xs/semibold",
                    children: s,
                }),
            }),
            (0, i.jsx)("div", {
                className: m.lp,
                children: (0, i.jsx)("ul", {
                    children: n.map((e, t) =>
                        (0, i.jsx)(
                            x,
                            {
                                isComplete: e.isComplete,
                                isCurrent: t === a,
                                hasNextStep: t < n.length - 1,
                                children: e.renderContent(e.isComplete),
                            },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
