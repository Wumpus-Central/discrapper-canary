n.d(t, { Z: () => v });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(681715),
    l = n(481060),
    c = n(666188),
    u = n(372769),
    d = n(523751),
    f = n(623624),
    p = n(290034),
    _ = n(271383),
    m = n(594174),
    h = n(267642),
    g = n(981631),
    E = n(388032),
    b = n(453301);
function y(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        a = (0, o.e7)([m.default, _.ZP], () => {
            let e = m.default.getCurrentUser();
            return _.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: u } = t;
    if (0 === u && c === g.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                a &&
                    !i &&
                    (0, f.f)({
                        guildId: t.id,
                        location: {
                            section: g.jXE.GUILD_HEADER,
                            object: g.qAy.BOOST_GEM_ICON,
                        },
                    });
        },
        y = c === g.Eu4.NONE ? E.intl.string(E.t.c2wsn6) : h.nW(c);
    return (0, r.jsx)("div", {
        className: b.guildIconContainer,
        children: (0, r.jsx)(s.i_, {
            title: y,
            body: E.intl.format(E.t.If4iTS, { subscriberCount: u }),
            position: "bottom",
            children: (0, r.jsx)(l.P3F, {
                className: b.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, r.jsx)(p.Z, {
                    size: 18,
                    premiumTier: c,
                    iconBackgroundClassName: n ? b.boostedGuildTierIconBackgroundWithVisibleBanner : void 0,
                    iconClassName: n && c !== g.Eu4.TIER_3 ? b.boostedGuildTierMutedIconWithVisibleBanner : null,
                }),
            }),
        }),
    });
}
function O(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e;
    return (0, c.Z)(t)
        ? (0, r.jsx)("div", {
              className: b.guildIconV2Container,
              children: (0, r.jsx)(d.Z, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: l.aML.Colors.PRIMARY,
                  className: a()(b.guildBadge, { [b.disableColor]: n }),
                  disableBoostClick: i,
              }),
          })
        : (0, r.jsx)("div", {
              className: b.guildIconContainer,
              children: (0, r.jsx)(u.Z, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: l.aML.Colors.PRIMARY,
                  className: a()(b.guildBadge, { [b.disableColor]: n }),
              }),
          });
}
function v(e) {
    let { guild: t, disableBoostClick: n } = e,
        i = !1;
    return (0, c.Z)(t)
        ? (0, r.jsx)(O, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n,
          })
        : t.features.has(g.GuildFeatures.VERIFIED) || t.features.has(g.GuildFeatures.PARTNERED)
          ? (0, r.jsx)(O, {
                guild: t,
                disableColor: !i,
            })
          : (0, r.jsx)(y, {
                guild: t,
                isBannerVisible: i,
                disableBoostClick: n,
            });
}
