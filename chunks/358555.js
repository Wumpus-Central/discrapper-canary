n.d(t, { Z: () => T });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(666188),
    c = n(372769),
    u = n(523751),
    d = n(623624),
    f = n(290034),
    p = n(271383),
    _ = n(594174),
    m = n(267642),
    h = n(981631),
    g = n(388032),
    E = n(566588);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        a = (0, o.e7)([_.default, p.ZP], () => {
            let e = _.default.getCurrentUser();
            return p.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: l, premiumSubscriberCount: c } = t;
    if (0 === c && l === h.Eu4.NONE) return null;
    let u = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                a &&
                    !i &&
                    (0, d.f)({
                        guildId: t.id,
                        location: {
                            section: h.jXE.GUILD_HEADER,
                            object: h.qAy.BOOST_GEM_ICON,
                        },
                    });
        },
        b = l === h.Eu4.NONE ? g.intl.string(g.t.c2wsn6) : m.nW(l),
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: E.tierTooltipTitle,
                    children: b,
                }),
                (0, r.jsx)("div", { children: g.intl.format(g.t.If4iTS, { subscriberCount: c }) }),
            ],
        });
    return (0, r.jsx)("div", {
        className: E.guildIconContainer,
        children: (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: O,
            position: "bottom",
            "aria-label": null != b ? b : "",
            children: (e) =>
                (0, r.jsx)(
                    s.P3F,
                    v(y({}, e), {
                        className: E.__invalid_premiumGuildIcon,
                        onClick: u,
                        children: (0, r.jsx)(f.Z, {
                            size: 18,
                            premiumTier: l,
                            iconBackgroundClassName: n ? E.boostedGuildTierIconBackgroundWithVisibleBanner : void 0,
                            iconClassName:
                                n && l !== h.Eu4.TIER_3 ? E.boostedGuildTierMutedIconWithVisibleBanner : null,
                        }),
                    }),
                ),
        }),
    });
}
function I(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e;
    return (0, l.Z)(t)
        ? (0, r.jsx)("div", {
              className: E.guildIconV2Container,
              children: (0, r.jsx)(u.Z, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: s.aML.Colors.PRIMARY,
                  className: a()(E.guildBadge, { [E.disableColor]: n }),
                  disableBoostClick: i,
              }),
          })
        : (0, r.jsx)("div", {
              className: E.guildIconContainer,
              children: (0, r.jsx)(c.Z, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: s.aML.Colors.PRIMARY,
                  className: a()(E.guildBadge, { [E.disableColor]: n }),
              }),
          });
}
function T(e) {
    let { guild: t, disableBoostClick: n } = e,
        i = !1;
    return (0, l.Z)(t)
        ? (0, r.jsx)(I, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n,
          })
        : t.features.has(h.GuildFeatures.VERIFIED) || t.features.has(h.GuildFeatures.PARTNERED)
          ? (0, r.jsx)(I, {
                guild: t,
                disableColor: !i,
            })
          : (0, r.jsx)(S, {
                guild: t,
                isBannerVisible: i,
                disableBoostClick: n,
            });
}
