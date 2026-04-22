n.d(t, { T: () => _, Y: () => N });
var r = n(627968);
n(64700);
var l = n(834730),
    i = n(359778),
    a = n(534514),
    o = n(695366),
    u = n(102876),
    s = n(906547),
    d = n(985018),
    c = n(463151);
function E(e) {
    return (0, r.jsx)(u.A, { application: e }, e.id);
}
function _(e) {
    let { userId: t, variant: n = "text-xs/normal", color: i = "text-default", ...a } = e,
        o = (0, s.P)({ userId: t, renderApplicationName: E });
    return (0, r.jsx)(l.E, { variant: n, color: i, ...a, children: o });
}
function N(e) {
    let { userId: t } = e;
    return (0, r.jsxs)(i.Z, {
        className: c.ZO,
        children: [
            (0, r.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, r.jsx)(a.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t.Iyka0U),
                    }),
                    (0, r.jsx)(o.E, { size: "xs", className: c.Kk }),
                ],
            }),
            (0, r.jsx)(_, { userId: t, variant: "text-md/normal" }),
        ],
    });
}
