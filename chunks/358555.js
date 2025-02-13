n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(442837),
    l = n(481060),
    s = n(540059),
    c = n(666188),
    d = n(372769),
    u = n(523751),
    _ = n(623624),
    g = n(290034),
    h = n(271383),
    m = n(594174),
    p = n(267642),
    x = n(981631),
    f = n(388032),
    C = n(667529);
function E(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, a.e7)([m.default, h.ZP], () => {
            let e = m.default.getCurrentUser();
            return h.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: s, premiumSubscriberCount: c } = t;
    if (0 === c && s === x.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, _.f)({
                        guildId: t.id,
                        location: {
                            section: x.jXE.GUILD_HEADER,
                            object: x.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = s === x.Eu4.NONE ? f.intl.string(f.t.c2wsn5) : p.nW(s),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: C.tierTooltipTitle,
                    children: u
                }),
                (0, i.jsx)('div', { children: f.intl.format(f.t.If4iTU, { subscriberCount: c }) })
            ]
        });
    return (0, i.jsx)('div', {
        className: C.guildIconContainer,
        children: (0, i.jsx)(l.ua7, {
            text: E,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) =>
                (0, i.jsx)(l.P3F, {
                    ...e,
                    className: C.__invalid_premiumGuildIcon,
                    onClick: d,
                    children: (0, i.jsx)(g.Z, {
                        premiumTier: s,
                        iconBackgroundClassName: n ? C.boostedGuildTierIconBackgroundWithVisibleBanner : C.guildBadgeIcon,
                        iconClassName: n && s !== x.Eu4.TIER_3 ? C.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function b(e) {
    let { guild: t, disableColor: n, disableBoostClick: o } = e;
    return (0, c.Z)(t)
        ? (0, i.jsx)('div', {
              className: C.guildIconV2Container,
              children: (0, i.jsx)(u.Z, {
                  guild: t,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(C.guildBadge, { [C.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, i.jsx)('div', {
              className: C.guildIconContainer,
              children: (0, i.jsx)(d.Z, {
                  guild: t,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(C.guildBadge, { [C.disableColor]: n })
              })
          });
}
function N(e) {
    let { guild: t, disableBoostClick: n, ...o } = e,
        r = !(0, s.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, c.Z)(t)
        ? (0, i.jsx)(b, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n
          })
        : t.hasFeature(x.oNc.VERIFIED) || t.hasFeature(x.oNc.PARTNERED)
          ? (0, i.jsx)(b, {
                guild: t,
                disableColor: !r
            })
          : (0, i.jsx)(E, {
                guild: t,
                isBannerVisible: r,
                disableBoostClick: n
            });
}
