n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    u = n(540059),
    s = n(666188),
    c = n(372769),
    d = n(523751),
    p = n(623624),
    f = n(290034),
    E = n(340541),
    _ = n(271383),
    O = n(594174),
    g = n(267642),
    S = n(981631),
    I = n(388032),
    b = n(285533);
function T(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        l = (0, u.Q3)('PremiumGuildBadge'),
        s = (0, o.e7)([O.default, _.ZP], () => {
            let e = O.default.getCurrentUser();
            return _.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: d } = t;
    if (0 === d && c === S.Eu4.NONE) return null;
    let E = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                s &&
                    !i &&
                    (0, p.f)({
                        guildId: t.id,
                        location: {
                            section: S.jXE.GUILD_HEADER,
                            object: S.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        T = c === S.Eu4.NONE ? I.NW.string(I.t.c2wsn5) : g.nW(c),
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: b.tierTooltipTitle,
                    children: T
                }),
                (0, r.jsx)('div', { children: I.NW.format(I.t.If4iTU, { subscriberCount: d }) })
            ]
        });
    return (0, r.jsx)('div', {
        className: b.guildIconContainer,
        children: (0, r.jsx)(a.ua7, {
            text: h,
            position: 'bottom',
            'aria-label': null != T ? T : '',
            children: (e) => {
                var t, i;
                return (0, r.jsx)(
                    a.P3F,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (i = i =
                        {
                            className: b.__invalid_premiumGuildIcon,
                            onClick: E,
                            children: (0, r.jsx)(f.Z, {
                                size: l ? 18 : 16,
                                premiumTier: c,
                                iconBackgroundClassName: n ? b.boostedGuildTierIconBackgroundWithVisibleBanner : void 0,
                                iconClassName: n && c !== S.Eu4.TIER_3 ? b.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t)
                );
            }
        })
    });
}
function h(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e,
        o = (0, s.Z)(t),
        p = (0, u.Q3)('GuildStatusBadge'),
        { enabled: f } = (0, E._k)({ location: 'guild_status_badge' });
    return o
        ? (0, r.jsx)('div', {
              className: l()(b.guildIconV2Container, { [b.invitesRefresh]: f }),
              children: (0, r.jsx)(d.Z, {
                  guild: t,
                  size: p ? 18 : 16,
                  tooltipPosition: 'bottom',
                  tooltipColor: a.ua7.Colors.PRIMARY,
                  className: l()(b.guildBadge, { [b.disableColor]: n }),
                  disableBoostClick: i
              })
          })
        : (0, r.jsx)('div', {
              className: l()(b.guildIconContainer, { [b.invitesRefresh]: f }),
              children: (0, r.jsx)(c.Z, {
                  guild: t,
                  size: p ? 18 : 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: a.ua7.Colors.PRIMARY,
                  className: l()(b.guildBadge, { [b.disableColor]: n })
              })
          });
}
function N(e) {
    var { guild: t, disableBoostClick: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guild', 'disableBoostClick']);
    let l = !(0, u.Q3)('GuildHeaderGuildBadge') && i.isBannerVisible;
    return (0, s.Z)(t)
        ? (0, r.jsx)(h, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n
          })
        : t.hasFeature(S.oNc.VERIFIED) || t.hasFeature(S.oNc.PARTNERED)
          ? (0, r.jsx)(h, {
                guild: t,
                disableColor: !l
            })
          : (0, r.jsx)(T, {
                guild: t,
                isBannerVisible: l,
                disableBoostClick: n
            });
}
