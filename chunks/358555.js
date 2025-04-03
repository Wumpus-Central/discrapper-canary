n.d(i, { Z: () => j });
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(442837),
    l = n(481060),
    c = n(540059),
    s = n(666188),
    d = n(372769),
    u = n(523751),
    g = n(623624),
    f = n(290034),
    _ = n(340541),
    b = n(271383),
    p = n(594174),
    N = n(267642),
    m = n(981631),
    h = n(388032),
    T = n(285533);
function E(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, c.Q3)('PremiumGuildBadge'),
        s = (0, a.e7)([p.default, b.ZP], () => {
            let e = p.default.getCurrentUser();
            return b.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: d, premiumSubscriberCount: u } = i;
    if (0 === u && d === m.Eu4.NONE) return null;
    let _ = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                s &&
                    !o &&
                    (0, g.f)({
                        guildId: i.id,
                        location: {
                            section: m.jXE.GUILD_HEADER,
                            object: m.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        E = d === m.Eu4.NONE ? h.NW.string(h.t.c2wsn5) : N.nW(d),
        x = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: T.tierTooltipTitle,
                    children: E
                }),
                (0, t.jsx)('div', { children: h.NW.format(h.t.If4iTU, { subscriberCount: u }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: T.guildIconContainer,
        children: (0, t.jsx)(l.ua7, {
            text: x,
            position: 'bottom',
            'aria-label': null != E ? E : '',
            children: (e) => {
                var i, o;
                return (0, t.jsx)(
                    l.P3F,
                    ((i = (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var n = null != arguments[i] ? arguments[i] : {},
                                t = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (t = t.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                t.forEach(function (i) {
                                    var t;
                                    (t = n[i]),
                                        i in e
                                            ? Object.defineProperty(e, i, {
                                                  value: t,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[i] = t);
                                });
                        }
                        return e;
                    })({}, e)),
                    (o = o =
                        {
                            className: T.__invalid_premiumGuildIcon,
                            onClick: _,
                            children: (0, t.jsx)(f.Z, {
                                size: r ? 18 : 16,
                                premiumTier: d,
                                iconBackgroundClassName: n ? T.boostedGuildTierIconBackgroundWithVisibleBanner : void 0,
                                iconClassName: n && d !== m.Eu4.TIER_3 ? T.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : (function (e, i) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var t = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, t);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    i)
                );
            }
        })
    });
}
function x(e) {
    let { guild: i, disableColor: n, disableBoostClick: o } = e,
        a = (0, s.Z)(i),
        g = (0, c.Q3)('GuildStatusBadge'),
        { enabled: f } = (0, _._k)({ location: 'guild_status_badge' });
    return a
        ? (0, t.jsx)('div', {
              className: r()(T.guildIconV2Container, { [T.invitesRefresh]: f }),
              children: (0, t.jsx)(u.Z, {
                  guild: i,
                  size: g ? 18 : 16,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(T.guildBadge, { [T.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: r()(T.guildIconContainer, { [T.invitesRefresh]: f }),
              children: (0, t.jsx)(d.Z, {
                  guild: i,
                  size: g ? 18 : 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.ua7.Colors.PRIMARY,
                  className: r()(T.guildBadge, { [T.disableColor]: n })
              })
          });
}
function j(e) {
    var { guild: i, disableBoostClick: n } = e,
        o = (function (e, i) {
            if (null == e) return {};
            var n,
                t,
                o = (function (e, i) {
                    if (null == e) return {};
                    var n,
                        t,
                        o = {},
                        r = Object.keys(e);
                    for (t = 0; t < r.length; t++) (n = r[t]), i.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, i);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (t = 0; t < r.length; t++) (n = r[t]), !(i.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guild', 'disableBoostClick']);
    let r = !(0, c.Q3)('GuildHeaderGuildBadge') && o.isBannerVisible;
    return (0, s.Z)(i)
        ? (0, t.jsx)(x, {
              guild: i,
              disableColor: !1,
              disableBoostClick: n
          })
        : i.hasFeature(m.oNc.VERIFIED) || i.hasFeature(m.oNc.PARTNERED)
          ? (0, t.jsx)(x, {
                guild: i,
                disableColor: !r
            })
          : (0, t.jsx)(E, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n
            });
}
