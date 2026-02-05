"use strict";
n.d(t, { T: () => c, Y: () => d });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(102876),
    s = n(906547),
    o = n(985018),
    l = n(764152);
function u(e) {
    return (0, r.jsx)(a.A, { application: e }, e.id);
}
function c(e) {
    let { userId: t, variant: n = "text-xs/normal", color: a = "text-default", ...o } = e,
        l = (0, s.P)({ userId: t, renderApplicationName: u });
    return (0, r.jsx)(i.Text, { variant: n, color: a, ...o, children: l });
}
function d(e) {
    let { userId: t } = e;
    return (0, r.jsxs)(i.ZpM, {
        className: l.ZO,
        children: [
            (0, r.jsxs)("div", {
                className: l.wx,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: o.intl.string(o.t.Iyka0U),
                    }),
                    (0, r.jsx)(i.EpV, { size: "xs", className: l.Kk }),
                ],
            }),
            (0, r.jsx)(c, { userId: t, variant: "text-md/normal" }),
        ],
    });
}
