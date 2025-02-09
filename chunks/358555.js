n.d(i, { Z: () => I });
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(442837),
    l = n(481060),
    c = n(540059),
    d = n(666188),
    s = n(372769),
    u = n(523751),
    _ = n(623624),
    g = n(290034),
    h = n(271383),
    m = n(594174),
    T = n(267642),
    x = n(981631),
    N = n(388032),
    b = n(350714);
function f(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, a.e7)([m.default, h.ZP], () => {
            let e = m.default.getCurrentUser();
            return h.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: d } = i;
    if (0 === d && c === x.Eu4.NONE) return null;
    let s = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, _.f)({
                        guildId: i.id,
                        location: {
                            section: x.jXE.GUILD_HEADER,
                            object: x.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = c === x.Eu4.NONE ? N.intl.string(N.t.c2wsn5) : T.nW(c),
        f = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: b.tierTooltipTitle,
                    children: u
                }),
                (0, t.jsx)('div', { children: N.intl.format(N.t.If4iTU, { subscriberCount: d }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: b.guildIconContainer,
        children: (0, t.jsx)(l.ua7, {
            text: f,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) =>
                (0, t.jsx)(l.P3F, {
                    ...e,
                    className: b.__invalid_premiumGuildIcon,
                    onClick: s,
                    children: (0, t.jsx)(g.Z, {
                        premiumTier: c,
                        iconBackgroundClassName: n ? b.boostedGuildTierIconBackgroundWithVisibleBanner : b.guildBadgeIcon,
                        iconClassName: n && c !== x.Eu4.TIER_3 ? b.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function E(e) {
    let { guild: i, disableColor: n, disableBoostClick: o } = e;
    return (0, d.Z)(i)
        ? (0, t.jsx)('div', {
              className: b.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(b.guildBadge, { [b.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: b.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(b.guildBadge, { [b.disableColor]: n })
              })
          });
}
function I(e) {
    let { guild: i, disableBoostClick: n, ...o } = e,
        r = !(0, c.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, d.Z)(i)
        ? (0, t.jsx)(E, {
              guild: i,
              disableColor: !1,
              disableBoostClick: n
          })
        : i.hasFeature(x.oNc.VERIFIED) || i.hasFeature(x.oNc.PARTNERED)
          ? (0, t.jsx)(E, {
                guild: i,
                disableColor: !r
            })
          : (0, t.jsx)(f, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n
            });
}
