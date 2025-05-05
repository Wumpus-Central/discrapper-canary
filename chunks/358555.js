n.d(t, { Z: () => R });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(540059),
    c = n(666188),
    u = n(372769),
    d = n(523751),
    f = n(623624),
    _ = n(290034),
    p = n(340541),
    h = n(271383),
    m = n(594174),
    g = n(267642),
    E = n(981631),
    b = n(388032),
    y = n(285533);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        a = (0, l.Q3)('PremiumGuildBadge'),
        c = (0, o.e7)([m.default, h.ZP], () => {
            let e = m.default.getCurrentUser();
            return h.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: u, premiumSubscriberCount: d } = t;
    if (0 === d && u === E.Eu4.NONE) return null;
    let p = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                c &&
                    !i &&
                    (0, f.f)({
                        guildId: t.id,
                        location: {
                            section: E.jXE.GUILD_HEADER,
                            object: E.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        O = u === E.Eu4.NONE ? b.intl.string(b.t.c2wsn5) : g.nW(u),
        I = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: y.tierTooltipTitle,
                    children: O
                }),
                (0, r.jsx)('div', { children: b.intl.format(b.t.If4iTU, { subscriberCount: d }) })
            ]
        });
    return (0, r.jsx)('div', {
        className: y.guildIconContainer,
        children: (0, r.jsx)(s.ua7, {
            text: I,
            position: 'bottom',
            'aria-label': null != O ? O : '',
            children: (e) =>
                (0, r.jsx)(
                    s.P3F,
                    S(v({}, e), {
                        className: y.__invalid_premiumGuildIcon,
                        onClick: p,
                        children: (0, r.jsx)(_.Z, {
                            size: a ? 18 : 16,
                            premiumTier: u,
                            iconBackgroundClassName: n ? y.boostedGuildTierIconBackgroundWithVisibleBanner : void 0,
                            iconClassName: n && u !== E.Eu4.TIER_3 ? y.boostedGuildTierMutedIconWithVisibleBanner : null
                        })
                    })
                )
        })
    });
}
function C(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e,
        o = (0, c.Z)(t),
        f = (0, l.Q3)('GuildStatusBadge'),
        { entrypoints: _ } = (0, p._k)({ location: 'guild_status_badge' });
    return o
        ? (0, r.jsx)('div', {
              className: a()(y.guildIconV2Container, { [y.invitesRefresh]: _ }),
              children: (0, r.jsx)(d.Z, {
                  guild: t,
                  size: f ? 18 : 16,
                  tooltipPosition: 'bottom',
                  tooltipColor: s.ua7.Colors.PRIMARY,
                  className: a()(y.guildBadge, { [y.disableColor]: n }),
                  disableBoostClick: i
              })
          })
        : (0, r.jsx)('div', {
              className: a()(y.guildIconContainer, { [y.invitesRefresh]: _ }),
              children: (0, r.jsx)(u.Z, {
                  guild: t,
                  size: f ? 18 : 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: s.ua7.Colors.PRIMARY,
                  className: a()(y.guildBadge, { [y.disableColor]: n })
              })
          });
}
function R(e) {
    var { guild: t, disableBoostClick: n } = e,
        i = T(e, ['guild', 'disableBoostClick']);
    let a = !(0, l.Q3)('GuildHeaderGuildBadge') && i.isBannerVisible;
    return (0, c.Z)(t)
        ? (0, r.jsx)(C, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n
          })
        : t.hasFeature(E.oNc.VERIFIED) || t.hasFeature(E.oNc.PARTNERED)
          ? (0, r.jsx)(C, {
                guild: t,
                disableColor: !a
            })
          : (0, r.jsx)(N, {
                guild: t,
                isBannerVisible: a,
                disableBoostClick: n
            });
}
