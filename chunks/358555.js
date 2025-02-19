i.d(n, { Z: () => x });
var t = i(200651);
i(192379);
var o = i(120356),
    r = i.n(o),
    a = i(442837),
    l = i(481060),
    c = i(540059),
    s = i(666188),
    d = i(372769),
    u = i(523751),
    g = i(623624),
    _ = i(290034),
    f = i(271383),
    b = i(594174),
    p = i(267642),
    N = i(981631),
    m = i(388032),
    T = i(417897);
function h(e) {
    let { guild: n, isBannerVisible: i, disableBoostClick: o } = e,
        r = (0, a.e7)([b.default, f.ZP], () => {
            let e = b.default.getCurrentUser();
            return f.ZP.isMember(n.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: s } = n;
    if (0 === s && c === N.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, g.f)({
                        guildId: n.id,
                        location: {
                            section: N.jXE.GUILD_HEADER,
                            object: N.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        u = c === N.Eu4.NONE ? m.NW.string(m.t.c2wsn5) : p.nW(c),
        h = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: T.tierTooltipTitle,
                    children: u
                }),
                (0, t.jsx)('div', { children: m.NW.format(m.t.If4iTU, { subscriberCount: s }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: T.guildIconContainer,
        children: (0, t.jsx)(l.ua7, {
            text: h,
            position: 'bottom',
            'aria-label': null != u ? u : '',
            children: (e) => {
                var n, o;
                return (0, t.jsx)(
                    l.P3F,
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var i = null != arguments[n] ? arguments[n] : {},
                                t = Object.keys(i);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (t = t.concat(
                                    Object.getOwnPropertySymbols(i).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                    })
                                )),
                                t.forEach(function (n) {
                                    var t;
                                    (t = i[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: t,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = t);
                                });
                        }
                        return e;
                    })({}, e)),
                    (o = o =
                        {
                            className: T.__invalid_premiumGuildIcon,
                            onClick: d,
                            children: (0, t.jsx)(_.Z, {
                                premiumTier: c,
                                iconBackgroundClassName: i ? T.boostedGuildTierIconBackgroundWithVisibleBanner : T.guildBadgeIcon,
                                iconClassName: i && c !== N.Eu4.TIER_3 ? T.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                        : (function (e, n) {
                              var i = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var t = Object.getOwnPropertySymbols(e);
                                  i.push.apply(i, t);
                              }
                              return i;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    n)
                );
            }
        })
    });
}
function E(e) {
    let { guild: n, disableColor: i, disableBoostClick: o } = e;
    return (0, s.Z)(n)
        ? (0, t.jsx)('div', {
              className: T.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                  guild: n,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(T.guildBadge, { [T.disableColor]: i }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: T.guildIconContainer,
              children: (0, t.jsx)(d.Z, {
                  guild: n,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(T.guildBadge, { [T.disableColor]: i })
              })
          });
}
function x(e) {
    var { guild: n, disableBoostClick: i } = e,
        o = (function (e, n) {
            if (null == e) return {};
            var i,
                t,
                o = (function (e, n) {
                    if (null == e) return {};
                    var i,
                        t,
                        o = {},
                        r = Object.keys(e);
                    for (t = 0; t < r.length; t++) (i = r[t]), n.indexOf(i) >= 0 || (o[i] = e[i]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (t = 0; t < r.length; t++) (i = r[t]), !(n.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
            }
            return o;
        })(e, ['guild', 'disableBoostClick']);
    let r = !(0, c.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, s.Z)(n)
        ? (0, t.jsx)(E, {
              guild: n,
              disableColor: !1,
              disableBoostClick: i
          })
        : n.hasFeature(N.oNc.VERIFIED) || n.hasFeature(N.oNc.PARTNERED)
          ? (0, t.jsx)(E, {
                guild: n,
                disableColor: !r
            })
          : (0, t.jsx)(h, {
                guild: n,
                isBannerVisible: r,
                disableBoostClick: i
            });
}
