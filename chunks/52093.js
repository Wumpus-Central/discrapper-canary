t.d(s, { Ay: () => j, L5: () => u });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r);
t(17928);
var n = t(947641),
    c = t(661531),
    d = t(834730),
    x = t(534514);
t(287809), t(629455), t(801365), t(375708);
var o = t(629436);
let h = i.createContext({ isCurrent: !1 });
function m(e) {
    let { children: s, isComplete: t, isCurrent: i, hasNextStep: r } = e;
    return (0, l.jsxs)("li", {
        className: a()(o.gY, { [o.HP]: t }, { [o.fS]: i }, { [o.h4]: r }),
        children: [
            (0, l.jsxs)("div", {
                className: o.cJ,
                children: [
                    (0, l.jsx)("div", {
                        className: o.$P,
                        children: t && (0, l.jsx)(n.r, { className: o.ap, color: c.A.colors.WHITE }),
                    }),
                    r && (0, l.jsx)("div", { className: o.UK }),
                ],
            }),
            (0, l.jsx)("div", {
                className: o.M7,
                children: (0, l.jsx)(h.Provider, { value: { isCurrent: i }, children: s }),
            }),
        ],
    });
}
function u(e) {
    let { children: s } = e,
        { isCurrent: t } = i.useContext(h);
    return (0, l.jsx)(d.E, { color: t ? "text-default" : "text-muted", variant: "text-xs/medium", children: s });
}
let j = function (e) {
    let { children: s, heading: t, steps: i, className: r } = e,
        n = i.findIndex((e) => !e.isComplete);
    return (0, l.jsxs)("div", {
        className: a()(o.iE, r),
        children: [
            (0, l.jsx)("div", {
                className: o.Mj,
                children: (0, l.jsx)(x.D, {
                    className: o.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: t,
                }),
            }),
            (0, l.jsx)("div", {
                className: o.lp,
                children: (0, l.jsx)("ul", {
                    children: i.map((e, s) =>
                        (0, l.jsx)(
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
