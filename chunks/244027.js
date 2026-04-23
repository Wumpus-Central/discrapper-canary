"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(569794),
    o = n(930607),
    l = n(647848),
    u = n(534514),
    c = n(104510),
    d = n(834730),
    _ = n(210273),
    f = n(508155),
    p = n(652215),
    h = n(985018),
    E = n(853513),
    m = n(111674);
function g(e) {
    let { tier: t, isActive: n } = e,
        i = t === p.TVA.TIER_1,
        u = t === p.TVA.TIER_3,
        c = t === p.TVA.TIER_1 ? a.v : t === p.TVA.TIER_2 ? o.w : l.H;
    return (0, r.jsxs)("div", {
        className: m.MY,
        children: [
            (0, r.jsx)("div", { className: s()(m.hr, { [m.ti]: n, [m.YO]: !n, [m.JQ]: i, [m.Uz]: u }) }),
            (0, r.jsx)("div", {
                className: s()(m.Zj, {
                    [m.jv]: n,
                    [m.ip]: t === p.TVA.TIER_1,
                    [m.p3]: t === p.TVA.TIER_2,
                    [m.wF]: t === p.TVA.TIER_3,
                }),
                children: (0, r.jsx)(c, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function A(e) {
    let { guild: t, definition: n } = e,
        { tier: i, perks: a } = n,
        o = t.premiumTier >= i,
        l = p.M2T[i];
    return (0, r.jsxs)("div", {
        className: s()(m.Nr, { [m.Bm]: o, [m.c]: !o }),
        children: [
            (0, r.jsx)(g, { tier: i, isActive: o }),
            (0, r.jsxs)("div", {
                className: m.zI,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.$h,
                        children: [
                            (0, r.jsx)(u.D, {
                                className: s()(m.JJ, { [m.eX]: !o }),
                                variant: "heading-xl/semibold",
                                color: o ? "text-strong" : void 0,
                                children: h.intl.string(
                                    i === p.TVA.TIER_1 ? h.t.nzXtaS : i === p.TVA.TIER_2 ? h.t["h33/uW"] : h.t.BfF6ED,
                                ),
                            }),
                            (0, r.jsxs)("div", {
                                className: m.yC,
                                children: [
                                    (0, r.jsx)(c._, { size: "xs", color: "currentColor" }),
                                    (0, r.jsx)(d.E, {
                                        variant: "text-md/medium",
                                        children: h.intl.format(h.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: m.PJ,
                        children: [
                            a.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, _.X)(e.perkIcon);
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        className: s()(m.bK, { [m.o]: !o }),
                                        children: [
                                            (0, r.jsx)(n, {
                                                className: m.kf,
                                                color: o ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, r.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: o ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, r.jsx)(d.E, {
                                className: m.wx,
                                variant: "text-md/medium",
                                children: h.intl.string(E.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { guild: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: s()(m.iE, n),
        children: f.t.map((e) => (0, r.jsx)(A, { guild: t, definition: e }, e.tier)),
    });
}
