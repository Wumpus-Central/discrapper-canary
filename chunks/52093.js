l.d(s, { Ay: () => j, L5: () => u });
var t = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r);
l(17928);
var n = l(947641),
    c = l(661531),
    d = l(834730),
    o = l(534514);
(l(287809), l(3738), l(801365), l(105292));
var x = l(56999);
let h = i.createContext({ isCurrent: !1 });
function m(e) {
    let { children: s, isComplete: l, isCurrent: r, hasNextStep: d } = e,
        o = i.useMemo(() => ({ isCurrent: r }), [r]);
    return (0, t.jsxs)("li", {
        className: a()(x.gY, { [x.HP]: l }, { [x.fS]: r }, { [x.h4]: d }),
        children: [
            (0, t.jsxs)("div", {
                className: x.cJ,
                children: [
                    (0, t.jsx)("div", {
                        className: x.$P,
                        children: l && (0, t.jsx)(n.r, { className: x.ap, color: c.A.colors.WHITE }),
                    }),
                    d && (0, t.jsx)("div", { className: x.UK }),
                ],
            }),
            (0, t.jsx)("div", { className: x.M7, children: (0, t.jsx)(h.Provider, { value: o, children: s }) }),
        ],
    });
}
function u(e) {
    let { children: s } = e,
        { isCurrent: l } = i.useContext(h);
    return (0, t.jsx)(d.E, { color: l ? "text-default" : "text-muted", variant: "body-xs/medium", children: s });
}
let j = function (e) {
    let { children: s, heading: l, steps: i, className: r } = e,
        n = i.findIndex((e) => !e.isComplete);
    return (0, t.jsxs)("div", {
        className: a()(x.iE, r),
        children: [
            (0, t.jsx)("div", {
                className: x.Mj,
                children: (0, t.jsx)(o.D, {
                    className: x.R_,
                    color: "text-strong",
                    variant: "body-xs/semibold",
                    children: l,
                }),
            }),
            (0, t.jsx)("div", {
                className: x.lp,
                children: (0, t.jsx)("ul", {
                    children: i.map((e, s) =>
                        (0, t.jsx)(
                            m,
                            {
                                isComplete: e.isComplete,
                                isCurrent: s === n,
                                hasNextStep: s < i.length - 1,
                                children: e.renderContent(e.isComplete),
                            },
                            s,
                        ),
                    ),
                }),
            }),
            s,
        ],
    });
};
