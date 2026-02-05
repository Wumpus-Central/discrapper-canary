"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(569794),
    o = n(930607),
    l = n(647848),
    u = n(397927),
    c = n(210273),
    d = n(508155),
    _ = n(652215),
    f = n(985018),
    p = n(333354),
    h = n(251983);
function m(e) {
    let { tier: t, isActive: n } = e,
        i = t === _.TVA.TIER_1,
        u = t === _.TVA.TIER_3,
        c = t === _.TVA.TIER_1 ? s.v : t === _.TVA.TIER_2 ? o.w : l.H;
    return (0, r.jsxs)("div", {
        className: h.MY,
        children: [
            (0, r.jsx)("div", { className: a()(h.hr, { [h.ti]: n, [h.YO]: !n, [h.JQ]: i, [h.Uz]: u }) }),
            (0, r.jsx)("div", {
                className: a()(h.Zj, {
                    [h.jv]: n,
                    [h.ip]: t === _.TVA.TIER_1,
                    [h.p3]: t === _.TVA.TIER_2,
                    [h.wF]: t === _.TVA.TIER_3,
                }),
                children: (0, r.jsx)(c, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function g(e) {
    let { guild: t, definition: n } = e,
        { tier: i, perks: s } = n,
        o = t.premiumTier >= i,
        l = _.M2T[i];
    return (0, r.jsxs)("div", {
        className: a()(h.Nr, { [h.Bm]: o, [h.c]: !o }),
        children: [
            (0, r.jsx)(m, { tier: i, isActive: o }),
            (0, r.jsxs)("div", {
                className: h.zI,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.$h,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: a()(h.JJ, { [h.eX]: !o }),
                                variant: "heading-xl/semibold",
                                color: o ? "text-strong" : void 0,
                                children: f.intl.string(
                                    i === _.TVA.TIER_1 ? f.t.nzXtaS : i === _.TVA.TIER_2 ? f.t["h33/uW"] : f.t.BfF6ED,
                                ),
                            }),
                            (0, r.jsxs)("div", {
                                className: h.yC,
                                children: [
                                    (0, r.jsx)(u._Jp, { size: "xs", color: "currentColor" }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-md/medium",
                                        children: f.intl.format(f.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: h.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, c.X)(e.perkIcon);
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        className: a()(h.bK, { [h.o]: !o }),
                                        children: [
                                            (0, r.jsx)(n, {
                                                className: h.kf,
                                                color: o ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-md/medium",
                                                color: o ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, r.jsx)(u.Text, {
                                className: h.wx,
                                variant: "text-md/medium",
                                children: f.intl.string(p.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { guild: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(h.iE, n),
        children: d.t.map((e) => (0, r.jsx)(g, { guild: t, definition: e }, e.tier)),
    });
}
