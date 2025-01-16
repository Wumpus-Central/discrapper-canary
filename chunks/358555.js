n.d(i, {
    Z: function () {
        return b;
    }
});
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(540059),
    s = n(666188),
    d = n(372769),
    u = n(523751),
    g = n(623624),
    f = n(290034),
    p = n(271383),
    _ = n(594174),
    h = n(267642),
    N = n(981631),
    T = n(388032),
    m = n(70172);
function x(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, l.e7)([_.default, p.ZP], () => {
            let e = _.default.getCurrentUser();
            return p.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: s } = i;
    if (0 === s && c === N.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, g.f)({
                        guildId: i.id,
                        location: {
                            section: N.jXE.GUILD_HEADER,
                            object: N.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = c === N.Eu4.NONE ? T.intl.string(T.t.c2wsn5) : h.nW(c),
        x = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: m.tierTooltipTitle,
                    children: u
                }),
                (0, t.jsx)('div', { children: T.intl.format(T.t.If4iTU, { subscriberCount: s }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: m.guildIconContainer,
        children: (0, t.jsx)(a.Tooltip, {
            text: x,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) =>
                (0, t.jsx)(a.Clickable, {
                    ...e,
                    className: m.__invalid_premiumGuildIcon,
                    onClick: d,
                    children: (0, t.jsx)(f.Z, {
                        premiumTier: c,
                        iconBackgroundClassName: n ? m.boostedGuildTierIconBackgroundWithVisibleBanner : m.guildBadgeIcon,
                        iconClassName: n && c !== N.Eu4.TIER_3 ? m.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function E(e) {
    let { guild: i, disableColor: n, disableBoostClick: o } = e;
    return (0, s.Z)(i)
        ? (0, t.jsx)('div', {
              className: m.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: a.Tooltip.Colors.PRIMARY,
                  className: r()(m.guildBadge, { [m.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: m.guildIconContainer,
              children: (0, t.jsx)(d.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: a.Tooltip.Colors.PRIMARY,
                  className: r()(m.guildBadge, { [m.disableColor]: n })
              })
          });
}
function b(e) {
    let { guild: i, disableBoostClick: n, ...o } = e,
        r = !(0, c.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, s.Z)(i)
        ? (0, t.jsx)(E, {
              guild: i,
              disableColor: !1,
              disableBoostClick: n
          })
        : i.hasFeature(N.oNc.VERIFIED) || i.hasFeature(N.oNc.PARTNERED)
          ? (0, t.jsx)(E, {
                guild: i,
                disableColor: !r
            })
          : (0, t.jsx)(x, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n
            });
}
