"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(17928),
    a = n(459192),
    o = n(939249),
    c = n(781696),
    d = n(454938),
    u = n(714991),
    _ = n(57991),
    h = n(509536),
    p = n(496885),
    m = n(313375),
    g = n(652215),
    A = n(484840);
let f = { [g.TVA.NONE]: A.md, [g.TVA.TIER_1]: A.Yl, [g.TVA.TIER_2]: A.ut, [g.TVA.TIER_3]: A.UB },
    E = { [g.TVA.NONE]: A.W7, [g.TVA.TIER_1]: A.A1, [g.TVA.TIER_2]: A.kO, [g.TVA.TIER_3]: A.uq };
function x(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: s, size: r } = e;
    return (0, i.jsx)(p.A, {
        className: l()(n, f[t]),
        size: r,
        children: (0, i.jsx)(m.A, { tier: t, color: "currentColor", className: l()(s, A.AH, E[t]) }),
    });
}
var I = n(696451),
    v = n(287809),
    N = n(473145),
    C = n(985018),
    S = n(330243);
function j(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: s } = e,
        l = (0, r.bG)([v.default, I.Ay], () => {
            let e = v.default.getCurrentUser();
            return I.Ay.isMember(t.id, e?.id);
        }),
        { premiumTier: c, premiumSubscriberCount: d } = t;
    if (0 === d && c === g.TVA.NONE) return null;
    let u = c === g.TVA.NONE ? C.intl.string(C.t.c2wsn6) : N.gb(c);
    return (0, i.jsx)("div", {
        className: S._C,
        children: (0, i.jsx)(a.u, {
            title: u,
            body: C.intl.format(C.t.If4iTS, { subscriberCount: d }),
            position: "bottom",
            children: (0, i.jsx)(o.D, {
                className: S.__invalid_premiumGuildIcon,
                onClick: (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        l &&
                            !s &&
                            (0, h.K4)({
                                guildId: t.id,
                                location: { section: g.JJy.GUILD_HEADER, object: g.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, i.jsx)(x, {
                    size: 18,
                    premiumTier: c,
                    iconBackgroundClassName: n ? S.z_ : void 0,
                    iconClassName: n && c !== g.TVA.TIER_3 ? S.S1 : null,
                }),
            }),
        }),
    });
}
function b(e) {
    let { guild: t, disableColor: n, disableBoostClick: s } = e;
    return (0, d.A)(t)
        ? (0, i.jsx)("div", {
              className: S.Qv,
              children: (0, i.jsx)(_.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: c.ST.Colors.PRIMARY,
                  className: l()(S.n2, { [S.cE]: n }),
                  disableBoostClick: s,
              }),
          })
        : (0, i.jsx)("div", {
              className: S._C,
              children: (0, i.jsx)(u.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: c.ST.Colors.PRIMARY,
                  className: l()(S.n2, { [S.cE]: n }),
              }),
          });
}
function T(e) {
    let { guild: t, disableBoostClick: n } = e;
    return (0, d.A)(t)
        ? (0, i.jsx)(b, { guild: t, disableColor: !1, disableBoostClick: n })
        : t.features.has(g.GuildFeatures.VERIFIED) || t.features.has(g.GuildFeatures.PARTNERED)
          ? (0, i.jsx)(b, { guild: t, disableColor: !0 })
          : (0, i.jsx)(j, { guild: t, isBannerVisible: !1, disableBoostClick: n });
}
