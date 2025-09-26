n.d(t, {
    ZP: () => R,
    wD: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(786920),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(666188),
    p = n(340541),
    f = n(159300),
    h = n(553984),
    g = n(695346),
    m = n(496675),
    b = n(768581),
    _ = n(598056),
    O = n(358555),
    y = n(981631),
    v = n(647086),
    j = n(388032),
    x = n(869786);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    var t;
    let { guild: n, controller: i, guildBanner: l, animate: c } = e,
        { value: u } = i.springs;
    return (0, r.jsx)(a.animated.div, {
        className: x.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(x.bannerImage, { [x.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => "translateY(".concat((1 - e) * 90, "px)")) },
            children: (0, r.jsx)("img", {
                className: o()(x.bannerImg, { [x.bannerImgFullWidth]: s.tq }),
                src:
                    null !=
                    (t = b.ZP.getGuildBannerURL(
                        {
                            id: n.id,
                            banner: l,
                        },
                        c,
                    ))
                        ? t
                        : "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function P(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        c = t.features.has(y.oNc.DISCOVERABLE),
        d = (0, r.jsx)("div", {
            className: x.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: j.intl.string(j.t.O8lDIy),
                    position: "right",
                    children: (e) =>
                        (0, r.jsxs)(
                            "div",
                            E(C({ className: x.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(u.enf, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 12,
                                        height: 12,
                                        className: x.communityIcon,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: j.intl.string(j.t["B/vjCg"]),
                                    }),
                                ],
                            }),
                        ),
                }),
        });
    return l
        ? (0, r.jsx)("div", {
              className: o()(x.communityInfoContainer, x.hasSubheader),
              children: d,
          })
        : (0, r.jsx)(a.animated.div, {
              className: x.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => "".concat(20 * e, "px")) },
              children: d,
          });
}
function I() {
    return (0, r.jsx)(u.r7p, {
        size: "custom",
        color: "currentColor",
        className: x.favoritesIcon,
        height: 20,
        width: 20,
    });
}
let N = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: "xs",
        color: "currentColor",
    });
};
function w(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: x.name,
        children: t.name,
    });
}
function Z(e) {
    var t;
    let {
        bannerVisible: n,
        guild: i,
        onClick: l,
        onContextMenu: o,
        ariaControls: a,
        ariaExpanded: s,
        guildHeaderRef: c,
        children: d,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.Z, {
                guild: i,
                isBannerVisible: n,
            }),
            i.id === v._ && (0, r.jsx)(I, {}),
            (0, r.jsx)(w, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: x.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    "aria-controls": a,
                    "aria-expanded": s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4,
                    },
                    "aria-label": j.intl.formatToPlainString(j.t.xMXpl5, {
                        guildName: null != (t = null == i ? void 0 : i.name) ? t : "",
                    }),
                }),
            (0, r.jsx)("div", {
                className: x.headerChildren,
                children: d,
            }),
        ],
    });
}
let T = [v._, y.STv];
function A(e) {
    var t;
    let { bannerVisible: l, guild: o, onClick: a, onContextMenu: s, ariaControls: d, ariaExpanded: p, children: g } = e,
        b = (0, c.e7)([m.Z], () => (0, f.b)(m.Z, o)),
        _ = i.useCallback(() => {
            b
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("7654"), n.e("54833")]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              E(C({}, t), {
                                  guild: o,
                                  source: y.t4x.GUILD_HEADER_INVITE_BUTTON,
                              }),
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("88358").then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, C({}, t));
                  });
        }, [b, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.P3F, {
                className: x.guildDropdown,
                "aria-label": j.intl.formatToPlainString(j.t.xMXpl5, {
                    guildName: null != (t = null == o ? void 0 : o.name) ? t : "",
                }),
                "aria-controls": d,
                "aria-expanded": p,
                onContextMenu: s,
                onClick: a,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.guildBadgeAndName,
                        children: [
                            (0, r.jsx)(O.Z, {
                                guild: o,
                                isBannerVisible: l,
                            }),
                            o.id === v._ && (0, r.jsx)(I, {}),
                            (0, r.jsx)(w, { guild: o }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.headerChildren,
                        children: g,
                    }),
                ],
            }),
            !T.includes(o.id) &&
                (0, r.jsx)(u.ua7, {
                    text: j.intl.string(j.t.Sd8Ix8),
                    position: "bottom",
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            E(C({ className: x.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), _();
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
            o.id === y.STv && (0, r.jsx)(h.p, {}),
        ],
    });
}
let R = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: a,
            onClick: c,
            onContextMenu: f,
            onMouseDown: h,
            disableBannerAnimation: m,
            "aria-expanded": O,
            "aria-controls": v,
            guild: j,
            guildBanner: I,
            animationOverlayHeight: N,
            children: w,
            headerClassName: T,
            communityInfoVisible: R,
            hasSubheader: M,
        } = e,
        L = j.features.has(y.oNc.ANIMATED_BANNER),
        k = (0, d.Z)(j),
        U = !k && (0, _.Z)(j),
        G = !k && R,
        B = (0, b.xR)(I) && L && !m,
        [F, V] = i.useState(!1),
        H = i.useRef(!1),
        z = i.useRef(null),
        W = null != t ? t : z,
        K = i.useRef(void 0),
        Y = g.QK.getSetting();
    i.useEffect(() => {
        if (B && n && !H.current && Y)
            return (
                V(!0),
                (K.current = setTimeout(() => {
                    V(!1);
                }, 5000)),
                () => {
                    clearTimeout(K.current);
                }
            );
    }, [B, n, Y]),
        i.useEffect(() => {
            H.current = n;
        }, [n]);
    let q = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        X = (0, p._k)({ location: "guild_header" }),
        Q = {
            bannerVisible: n,
            guild: j,
            onClick: c,
            onContextMenu: f,
            ariaControls: v,
            ariaExpanded: O,
            guildHeaderRef: W,
        };
    return (0, r.jsx)(u.f6W, {
        theme: n ? y.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        "data-has-banner": q(),
                        "data-banner-visible": n,
                        ref: W,
                        className: o()(a, {
                            [x.container]: !0,
                            [x.clickable]: !X.isGuildEntrypointEnabled && null != c,
                            [x.selected]: !X.isGuildEntrypointEnabled && null != c && O,
                            [x.hasBanner]: q(),
                            [x.bannerVisible]: n,
                            [e]: !1,
                            [x.communityInfoVisible]: G || (M && U),
                            [x.invitesRefresh]: X.isGuildEntrypointEnabled,
                        }),
                        onMouseDown: h,
                        onClick: X.isGuildEntrypointEnabled ? void 0 : c,
                        onContextMenu: f,
                        children: [
                            (0, r.jsxs)("header", {
                                className: o()(x.header, T, { [x.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: o()(x.headerContent, x.primaryInfo),
                                        children: X.isGuildEntrypointEnabled
                                            ? (0, r.jsx)(A, E(C({}, Q), { children: w }))
                                            : (0, r.jsx)(Z, E(C({}, Q), { children: w })),
                                    }),
                                    U &&
                                        (0, r.jsx)(P, {
                                            guild: j,
                                            controller: l,
                                            hasBanner: null != I,
                                            hasSubheader: null != M && M,
                                        }),
                                ],
                            }),
                            null != I
                                ? (0, r.jsx)(S, {
                                      guild: j,
                                      controller: l,
                                      guildBanner: I,
                                      animate: F,
                                  })
                                : null,
                            (0, r.jsx)(D, { controller: l }),
                        ],
                    }),
                    B && q()
                        ? (0, r.jsx)("div", {
                              className: x.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  V(!0), clearTimeout(K.current);
                              },
                              onMouseLeave: () => V(!1),
                              style: { height: N },
                          })
                        : null,
                ],
            }),
    });
});
function D(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.TCT)(),
        i = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: x.headerEllipseBackdrop,
                style: { opacity: i.to((e) => 0.5 * e) },
            }),
            (0, r.jsx)(a.animated.div, {
                className: x.headerEllipseForeground,
                style: { opacity: i.to((e) => e) },
            }),
            (0, r.jsx)(a.animated.div, {
                className: x.headerGlass,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(n) ? i.to((e) => "brightness(".concat(0.75 + 0.25 * e, ")")) : void 0,
                },
            }),
        ],
    });
}
