s.d(t, { Ay: () => j, L5: () => h });
var l = s(627968),
    i = s(64700),
    n = s(503698),
    r = s.n(n);
s(17928);
var a = s(947641),
    c = s(661531),
    o = s(834730),
    d = s(534514);
s(287809), s(629455), s(801365), s(375708);
var m = s(629436);
let x = i.createContext({ isCurrent: !1 });
function u(e) {
    let { children: t, isComplete: s, isCurrent: i, hasNextStep: n } = e;
    return (0, l.jsxs)("li", {
        className: r()(m.gY, { [m.HP]: s }, { [m.fS]: i }, { [m.h4]: n }),
        children: [
            (0, l.jsxs)("div", {
                className: m.cJ,
                children: [
                    (0, l.jsx)("div", {
                        className: m.$P,
                        children: s && (0, l.jsx)(a.r, { className: m.ap, color: c.A.colors.WHITE }),
                    }),
                    n && (0, l.jsx)("div", { className: m.UK }),
                ],
            }),
            (0, l.jsx)("div", {
                className: m.M7,
                children: (0, l.jsx)(x.Provider, { value: { isCurrent: i }, children: t }),
            }),
        ],
    });
}
function h(e) {
    let { children: t } = e,
        { isCurrent: s } = i.useContext(x);
    return (0, l.jsx)(o.E, { color: s ? "text-default" : "text-muted", variant: "text-xs/medium", children: t });
}
let j = function (e) {
    let { children: t, heading: s, steps: i } = e,
        n = i.findIndex((e) => !e.isComplete);
    return (0, l.jsxs)("div", {
        className: m.iE,
        children: [
            (0, l.jsx)("div", {
                className: m.Mj,
                children: (0, l.jsx)(d.D, {
                    className: m.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: s,
                }),
            }),
            (0, l.jsx)("div", {
                className: m.lp,
                children: (0, l.jsx)("ul", {
                    children: i.map((e, t) =>
                        (0, l.jsx)(
                            u,
                            {
                                isComplete: e.isComplete,
                                isCurrent: t === n,
                                hasNextStep: t < i.length - 1,
                                children: e.renderContent(),
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
