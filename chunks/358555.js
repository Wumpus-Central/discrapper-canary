n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(442837),
    l = n(481060),
    c = n(540059),
    s = n(666188),
    d = n(372769),
    u = n(523751),
    _ = n(623624),
    g = n(290034),
    m = n(271383),
    b = n(594174),
    f = n(267642),
    p = n(981631),
    h = n(388032),
    N = n(169253);
function v(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, c.Q3)('PremiumGuildBadge'),
        s = (0, a.e7)([b.default, m.ZP], () => {
            let e = b.default.getCurrentUser();
            return m.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: d, premiumSubscriberCount: u } = t;
    if (0 === u && d === p.Eu4.NONE) return null;
    let v = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                s &&
                    !o &&
                    (0, _.f)({
                        guildId: t.id,
                        location: {
                            section: p.jXE.GUILD_HEADER,
                            object: p.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        y = d === p.Eu4.NONE ? h.NW.string(h.t.c2wsn5) : f.nW(d),
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: N.tierTooltipTitle,
                    children: y
                }),
                (0, i.jsx)('div', { children: h.NW.format(h.t.If4iTU, { subscriberCount: u }) })
            ]
        });
    return (0, i.jsx)('div', {
        className: N.guildIconContainer,
        children: (0, i.jsx)(l.ua7, {
            text: C,
            position: 'bottom',
            'aria-label': null != y ? y : '',
            children: (e) => {
                var t, o;
                return (0, i.jsx)(
                    l.P3F,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, e)),
                    (o = o =
                        {
                            className: N.__invalid_premiumGuildIcon,
                            onClick: v,
                            children: (0, i.jsx)(g.Z, {
                                size: r ? 18 : 16,
                                premiumTier: d,
                                iconBackgroundClassName: n ? N.boostedGuildTierIconBackgroundWithVisibleBanner : void 0,
                                iconClassName: n && d !== p.Eu4.TIER_3 ? N.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    t)
                );
            }
        })
    });
}
function y(e) {
    let { guild: t, disableColor: n, disableBoostClick: o } = e,
        a = (0, s.Z)(t),
        _ = (0, c.Q3)('GuildStatusBadge');
    return a
        ? (0, i.jsx)('div', {
              className: N.guildIconV2Container,
              children: (0, i.jsx)(u.Z, {
                  guild: t,
                  size: _ ? 18 : 16,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(N.guildBadge, { [N.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, i.jsx)('div', {
              className: N.guildIconContainer,
              children: (0, i.jsx)(d.Z, {
                  guild: t,
                  size: _ ? 18 : 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(N.guildBadge, { [N.disableColor]: n })
              })
          });
}
function C(e) {
    var { guild: t, disableBoostClick: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        o = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guild', 'disableBoostClick']);
    let r = !(0, c.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, s.Z)(t)
        ? (0, i.jsx)(y, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n
          })
        : t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED)
          ? (0, i.jsx)(y, {
                guild: t,
                disableColor: !r
            })
          : (0, i.jsx)(v, {
                guild: t,
                isBannerVisible: r,
                disableBoostClick: n
            });
}
