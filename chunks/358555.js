n.d(i, {
    Z: function () {
        return E;
    }
});
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
    g = n(623624),
    b = n(290034),
    h = n(271383),
    _ = n(594174),
    T = n(267642),
    m = n(981631),
    f = n(388032),
    N = n(70172);
function B(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, a.e7)([_.default, h.ZP], () => {
            let e = _.default.getCurrentUser();
            return h.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: d, premiumSubscriberCount: c } = i;
    if (0 === c && d === m.Eu4.NONE) return null;
    let s = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, g.f)({
                        guildId: i.id,
                        location: {
                            section: m.jXE.GUILD_HEADER,
                            object: m.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = d === m.Eu4.NONE ? f.intl.string(f.t.c2wsn5) : T.nW(d),
        B = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: N.tierTooltipTitle,
                    children: u
                }),
                (0, t.jsx)('div', { children: f.intl.format(f.t.If4iTU, { subscriberCount: c }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: N.guildIconContainer,
        children: (0, t.jsx)(l.Tooltip, {
            text: B,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) =>
                (0, t.jsx)(l.Clickable, {
                    ...e,
                    className: N.__invalid_premiumGuildIcon,
                    onClick: s,
                    children: (0, t.jsx)(b.Z, {
                        premiumTier: d,
                        iconBackgroundClassName: n ? N.boostedGuildTierIconBackgroundWithVisibleBanner : N.guildBadgeIcon,
                        iconClassName: n && d !== m.Eu4.TIER_3 ? N.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function p(e) {
    let { guild: i, disableColor: n, disableBoostClick: o } = e;
    return (0, c.Z)(i)
        ? (0, t.jsx)('div', {
              className: N.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.Tooltip.Colors.PRIMARY,
                  className: r()(N.guildBadge, { [N.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: N.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.Tooltip.Colors.PRIMARY,
                  className: r()(N.guildBadge, { [N.disableColor]: n })
              })
          });
}
function E(e) {
    let { guild: i, disableBoostClick: n, ...o } = e,
        r = !(0, d.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, c.Z)(i)
        ? (0, t.jsx)(p, {
              guild: i,
              disableColor: !1,
              disableBoostClick: n
          })
        : i.hasFeature(m.oNc.VERIFIED) || i.hasFeature(m.oNc.PARTNERED)
          ? (0, t.jsx)(p, {
                guild: i,
                disableColor: !r
            })
          : (0, t.jsx)(B, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n
            });
}
