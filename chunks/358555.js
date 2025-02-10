n.d(i, { Z: () => I });
var o = n(200651);
n(192379);
var t = n(120356),
    a = n.n(t),
    l = n(442837),
    r = n(481060),
    c = n(540059),
    s = n(666188),
    d = n(372769),
    u = n(523751),
    _ = n(623624),
    g = n(290034),
    N = n(271383),
    T = n(594174),
    f = n(267642),
    m = n(981631),
    p = n(388032),
    x = n(350714);
function E(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: t } = e,
        a = (0, l.e7)([T.default, N.ZP], () => {
            let e = T.default.getCurrentUser();
            return N.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: s } = i;
    if (0 === s && c === m.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                a &&
                    !t &&
                    (0, _.f)({
                        guildId: i.id,
                        location: {
                            section: m.jXE.GUILD_HEADER,
                            object: m.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = c === m.Eu4.NONE ? p.intl.string(p.t.c2wsn5) : f.nW(c),
        E = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)('div', {
                    className: x.tierTooltipTitle,
                    children: u
                }),
                (0, o.jsx)('div', { children: p.intl.format(p.t.If4iTU, { subscriberCount: s }) })
            ]
        });
    return (0, o.jsx)('div', {
        className: x.guildIconContainer,
        children: (0, o.jsx)(r.ua7, {
            text: E,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) =>
                (0, o.jsx)(r.P3F, {
                    ...e,
                    className: x.__invalid_premiumGuildIcon,
                    onClick: d,
                    children: (0, o.jsx)(g.Z, {
                        premiumTier: c,
                        iconBackgroundClassName: n ? x.boostedGuildTierIconBackgroundWithVisibleBanner : x.guildBadgeIcon,
                        iconClassName: n && c !== m.Eu4.TIER_3 ? x.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function h(e) {
    let { guild: i, disableColor: n, disableBoostClick: t } = e;
    return (0, s.Z)(i)
        ? (0, o.jsx)('div', {
              className: x.guildIconV2Container,
              children: (0, o.jsx)(u.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: r.ua7.Colors.PRIMARY,
                  className: a()(x.guildBadge, { [x.disableColor]: n }),
                  disableBoostClick: t
              })
          })
        : (0, o.jsx)('div', {
              className: x.guildIconContainer,
              children: (0, o.jsx)(d.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: r.ua7.Colors.PRIMARY,
                  className: a()(x.guildBadge, { [x.disableColor]: n })
              })
          });
}
function I(e) {
    let { guild: i, disableBoostClick: n, ...t } = e,
        a = !(0, c.Q3)('GuildHeaderGuildBadge') && t.isBannerVisible;
    return (0, s.Z)(i)
        ? (0, o.jsx)(h, {
              guild: i,
              disableColor: !1,
              disableBoostClick: n
          })
        : i.hasFeature(m.oNc.VERIFIED) || i.hasFeature(m.oNc.PARTNERED)
          ? (0, o.jsx)(h, {
                guild: i,
                disableColor: !a
            })
          : (0, o.jsx)(E, {
                guild: i,
                isBannerVisible: a,
                disableBoostClick: n
            });
}
