n.d(i, { Z: () => I });
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(442837),
    l = n(481060),
    d = n(540059),
    c = n(666188),
    s = n(372769),
    u = n(523751),
    _ = n(623624),
    g = n(290034),
    h = n(271383),
    m = n(594174),
    T = n(267642),
    N = n(981631),
    b = n(388032),
    f = n(70172);
function x(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, a.e7)([m.default, h.ZP], () => {
            let e = m.default.getCurrentUser();
            return h.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: d, premiumSubscriberCount: c } = i;
    if (0 === c && d === N.Eu4.NONE) return null;
    let s = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, _.f)({
                        guildId: i.id,
                        location: {
                            section: N.jXE.GUILD_HEADER,
                            object: N.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = d === N.Eu4.NONE ? b.intl.string(b.t.c2wsn5) : T.nW(d),
        x = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: f.tierTooltipTitle,
                    children: u
                }),
                (0, t.jsx)('div', { children: b.intl.format(b.t.If4iTU, { subscriberCount: c }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: f.guildIconContainer,
        children: (0, t.jsx)(l.ua7, {
            text: x,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) =>
                (0, t.jsx)(l.P3F, {
                    ...e,
                    className: f.__invalid_premiumGuildIcon,
                    onClick: s,
                    children: (0, t.jsx)(g.Z, {
                        premiumTier: d,
                        iconBackgroundClassName: n ? f.boostedGuildTierIconBackgroundWithVisibleBanner : f.guildBadgeIcon,
                        iconClassName: n && d !== N.Eu4.TIER_3 ? f.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function E(e) {
    let { guild: i, disableColor: n, disableBoostClick: o } = e;
    return (0, c.Z)(i)
        ? (0, t.jsx)('div', {
              className: f.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(f.guildBadge, { [f.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: f.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(f.guildBadge, { [f.disableColor]: n })
              })
          });
}
function I(e) {
    let { guild: i, disableBoostClick: n, ...o } = e,
        r = !(0, d.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, c.Z)(i)
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
