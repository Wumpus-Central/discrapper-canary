i.d(t, { A: () => p });
var s = i(627968);
i(64700);
var l = i(503698),
    a = i.n(l),
    n = i(569794),
    r = i(930607),
    c = i(647848),
    o = i(534514),
    d = i(104510),
    u = i(834730),
    m = i(210273),
    g = i(508155),
    T = i(652215),
    x = i(985018),
    A = i(853513),
    f = i(111674);
function h(e) {
    let { tier: t, isActive: i } = e,
        l = t === T.TVA.TIER_1,
        o = t === T.TVA.TIER_3,
        d = t === T.TVA.TIER_1 ? n.v : t === T.TVA.TIER_2 ? r.w : c.H;
    return (0, s.jsxs)("div", {
        className: f.MY,
        children: [
            (0, s.jsx)("div", { className: a()(f.hr, { [f.ti]: i, [f.YO]: !i, [f.JQ]: l, [f.Uz]: o }) }),
            (0, s.jsx)("div", {
                className: a()(f.Zj, {
                    [f.jv]: i,
                    [f.ip]: t === T.TVA.TIER_1,
                    [f.p3]: t === T.TVA.TIER_2,
                    [f.wF]: t === T.TVA.TIER_3,
                }),
                children: (0, s.jsx)(d, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function j(e) {
    let { guild: t, definition: i } = e,
        { tier: l, perks: n } = i,
        r = t.premiumTier >= l,
        c = T.M2T[l];
    return (0, s.jsxs)("div", {
        className: a()(f.Nr, { [f.Bm]: r, [f.c]: !r }),
        children: [
            (0, s.jsx)(h, { tier: l, isActive: r }),
            (0, s.jsxs)("div", {
                className: f.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: f.$h,
                        children: [
                            (0, s.jsx)(o.D, {
                                className: a()(f.JJ, { [f.eX]: !r }),
                                variant: "heading-xl/semibold",
                                color: r ? "text-strong" : void 0,
                                children: x.intl.string(
                                    l === T.TVA.TIER_1 ? x.t.nzXtaS : l === T.TVA.TIER_2 ? x.t["h33/uW"] : x.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: f.yC,
                                children: [
                                    (0, s.jsx)(d._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        children: x.intl.format(x.t["pob/cL"], { subscriptions: c }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: f.PJ,
                        children: [
                            n.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, m.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: a()(f.bK, { [f.o]: !r }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: f.kf,
                                                color: r ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: r ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, s.jsx)(u.E, {
                                className: f.wx,
                                variant: "text-md/medium",
                                children: x.intl.string(A.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function p(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: a()(f.iE, i),
        children: g.t.map((e) => (0, s.jsx)(j, { guild: t, definition: e }, e.tier)),
    });
}
