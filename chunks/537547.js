e.d(s, { A: () => k });
var t = e(477900);
e(582128);
var o = e(503698),
    l = e.n(o),
    r = e(17928),
    n = e(683063),
    a = e(939249),
    u = e(900002),
    c = e(454938),
    d = e(714991),
    A = e(107773),
    T = e(878678),
    m = e(814925),
    C = e(313375),
    E = e(652215),
    N = e(632243);
let p = { [E.TVA.NONE]: N.md, [E.TVA.TIER_1]: N.Yl, [E.TVA.TIER_2]: N.ut, [E.TVA.TIER_3]: N.UB },
    b = { [E.TVA.NONE]: N.W7, [E.TVA.TIER_1]: N.A1, [E.TVA.TIER_2]: N.kO, [E.TVA.TIER_3]: N.uq };
function _(i) {
    let { premiumTier: s, iconBackgroundClassName: e, iconClassName: o, size: r } = i;
    return (0, t.jsx)(m.A, {
        className: l()(e, p[s]),
        size: r,
        children: (0, t.jsx)(C.A, { tier: s, color: "currentColor", className: l()(o, N.AH, b[s]) }),
    });
}
var I = e(696451),
    R = e(287809),
    f = e(473145),
    j = e(375708),
    h = e(840724);
function x(i) {
    i.stopPropagation();
}
function V(i) {
    let { guild: s, isBannerVisible: e, disableBoostClick: o } = i,
        l = (0, r.bG)([R.default, I.Ay], () => {
            let i = R.default.getCurrentUser();
            return I.Ay.isMember(s.id, i?.id);
        }),
        { premiumTier: u, premiumSubscriberCount: c } = s;
    if (0 === c && u === E.TVA.NONE) return null;
    let d = u === E.TVA.NONE ? j.intl.string(j.t.c2wsn6) : f.gb(u);
    return (0, t.jsx)("div", {
        className: h._C,
        onKeyPress: x,
        children: (0, t.jsx)(n.u, {
            title: d,
            body: j.intl.format(j.t.If4iTS, { subscriberCount: c }),
            position: "bottom",
            children: (0, t.jsx)(a.D, {
                className: h.__invalid_premiumGuildIcon,
                onClick: function (i) {
                    i.stopPropagation(),
                        i.preventDefault(),
                        l &&
                            !o &&
                            (0, T.K4)({
                                guildId: s.id,
                                location: { section: E.JJy.GUILD_HEADER, object: E.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, t.jsx)(_, {
                    size: 18,
                    premiumTier: u,
                    iconBackgroundClassName: e ? h.z_ : void 0,
                    iconClassName: e && u !== E.TVA.TIER_3 ? h.S1 : null,
                }),
            }),
        }),
    });
}
function g(i) {
    let { guild: s, disableColor: e, disableBoostClick: o } = i;
    return (0, c.A)(s)
        ? (0, t.jsx)("div", {
              className: h.Qv,
              onKeyPress: x,
              children: (0, t.jsx)(A.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: u.ST.Colors.PRIMARY,
                  className: l()(h.n2, { [h.cE]: e }),
                  disableBoostClick: o,
              }),
          })
        : (0, t.jsx)("div", {
              className: h._C,
              children: (0, t.jsx)(d.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: u.ST.Colors.PRIMARY,
                  className: l()(h.n2, { [h.cE]: e }),
              }),
          });
}
function k(i) {
    let { guild: s, disableBoostClick: e } = i;
    return (0, c.A)(s)
        ? (0, t.jsx)(g, { guild: s, disableColor: !1, disableBoostClick: e })
        : s.features.has(E.GuildFeatures.VERIFIED) || s.features.has(E.GuildFeatures.PARTNERED)
          ? (0, t.jsx)(g, { guild: s, disableColor: !0 })
          : (0, t.jsx)(V, { guild: s, isBannerVisible: !1, disableBoostClick: e });
}
