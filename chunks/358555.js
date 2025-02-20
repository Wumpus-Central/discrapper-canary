n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(442837),
    s = n(481060),
    a = n(540059),
    u = n(666188),
    d = n(372769),
    c = n(523751),
    h = n(623624),
    f = n(290034),
    p = n(271383),
    g = n(594174),
    v = n(267642),
    C = n(981631),
    E = n(388032),
    O = n(417897);
function m(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
        l = (0, o.e7)([g.default, p.ZP], () => {
            let e = g.default.getCurrentUser();
            return p.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: a, premiumSubscriberCount: u } = t;
    if (0 === u && a === C.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                l &&
                    !r &&
                    (0, h.f)({
                        guildId: t.id,
                        location: {
                            section: C.jXE.GUILD_HEADER,
                            object: C.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        c = a === C.Eu4.NONE ? E.NW.string(E.t.c2wsn5) : v.nW(a),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: O.tierTooltipTitle,
                    children: c
                }),
                (0, i.jsx)('div', { children: E.NW.format(E.t.If4iTU, { subscriberCount: u }) })
            ]
        });
    return (0, i.jsx)('div', {
        className: O.guildIconContainer,
        children: (0, i.jsx)(s.ua7, {
            text: m,
            position: 'bottom',
            'aria-label': null != c ? c : '',
            children: (e) => {
                var t, r;
                return (0, i.jsx)(
                    s.P3F,
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
                    (r = r =
                        {
                            className: O.__invalid_premiumGuildIcon,
                            onClick: d,
                            children: (0, i.jsx)(f.Z, {
                                premiumTier: a,
                                iconBackgroundClassName: n ? O.boostedGuildTierIconBackgroundWithVisibleBanner : O.guildBadgeIcon,
                                iconClassName: n && a !== C.Eu4.TIER_3 ? O.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
        })
    });
}
function S(e) {
    let { guild: t, disableColor: n, disableBoostClick: r } = e;
    return (0, u.Z)(t)
        ? (0, i.jsx)('div', {
              className: O.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                  guild: t,
                  tooltipPosition: 'bottom',
                  tooltipColor: s.ua7.Colors.PRIMARY,
                  className: l()(O.guildBadge, { [O.disableColor]: n }),
                  disableBoostClick: r
              })
          })
        : (0, i.jsx)('div', {
              className: O.guildIconContainer,
              children: (0, i.jsx)(d.Z, {
                  guild: t,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: s.ua7.Colors.PRIMARY,
                  className: l()(O.guildBadge, { [O.disableColor]: n })
              })
          });
}
function _(e) {
    var { guild: t, disableBoostClick: n } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['guild', 'disableBoostClick']);
    let l = !(0, a.Q3)('GuildHeaderGuildBadge') && r.isBannerVisible;
    return (0, u.Z)(t)
        ? (0, i.jsx)(S, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n
          })
        : t.hasFeature(C.oNc.VERIFIED) || t.hasFeature(C.oNc.PARTNERED)
          ? (0, i.jsx)(S, {
                guild: t,
                disableColor: !l
            })
          : (0, i.jsx)(m, {
                guild: t,
                isBannerVisible: l,
                disableBoostClick: n
            });
}
