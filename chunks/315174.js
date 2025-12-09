n.d(t, {
    ZP: () => D,
    wD: () => Z,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(205120),
    s = n(873546),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    f = n(666188),
    h = n(340541),
    p = n(159300),
    g = n(553984),
    m = n(695346),
    b = n(496675),
    _ = n(768581),
    y = n(598056),
    O = n(358555),
    v = n(981631),
    j = n(647086),
    x = n(388032),
    C = n(869786);
function E(e) {
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
function S(e, t) {
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
function I(e) {
    var t;
    let { guild: n, controller: i, guildBanner: l, animate: c } = e,
        { value: u } = i.springs;
    return (0, r.jsx)(a.animated.div, {
        className: C.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => "translateY(".concat((1 - e) * 90, "px)")) },
            children: (0, r.jsx)("img", {
                className: o()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
                src:
                    null !=
                    (t = _.ZP.getGuildBannerURL(
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
        c = t.features.has(v.GuildFeatures.DISCOVERABLE),
        f = (0, r.jsx)("div", {
            className: C.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.u, {
                    text: x.intl.string(x.t.O8lDI2),
                    position: "right",
                    children: (0, r.jsxs)("div", {
                        className: C.communityInfoPill,
                        children: [
                            (0, r.jsx)(d.enf, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: C.communityIcon,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: x.intl.string(x.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return l
        ? (0, r.jsx)("div", {
              className: o()(C.communityInfoContainer, C.hasSubheader),
              children: f,
          })
        : (0, r.jsx)(a.animated.div, {
              className: C.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => "".concat(20 * e, "px")) },
              children: f,
          });
}
function N() {
    return (0, r.jsx)(d.r7p, {
        size: "custom",
        color: "currentColor",
        className: C.favoritesIcon,
        height: 20,
        width: 20,
    });
}
let Z = (e) => {
    let { open: t } = e,
        n = t ? d.u04 : d.CJ0;
    return (0, r.jsx)(n, {
        size: "xs",
        color: "currentColor",
    });
};
function w(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: C.name,
        children: t.name,
    });
}
function T(e) {
    var t;
    let {
        bannerVisible: n,
        guild: i,
        onClick: l,
        onContextMenu: o,
        ariaControls: a,
        ariaExpanded: s,
        guildHeaderRef: c,
        children: u,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.Z, {
                guild: i,
                isBannerVisible: n,
            }),
            i.id === j._ && (0, r.jsx)(N, {}),
            (0, r.jsx)(w, { guild: i }),
            null != l &&
                (0, r.jsx)(d.P3F, {
                    className: C.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    "aria-controls": a,
                    "aria-expanded": s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4,
                    },
                    "aria-label": x.intl.formatToPlainString(x.t.xMXpl3, {
                        guildName: null != (t = null == i ? void 0 : i.name) ? t : "",
                    }),
                }),
            (0, r.jsx)("div", {
                className: C.headerChildren,
                children: u,
            }),
        ],
    });
}
let A = [j._, v.STv];
function R(e) {
    var t;
    let { bannerVisible: l, guild: o, onClick: a, onContextMenu: s, ariaControls: f, ariaExpanded: h, children: m } = e,
        _ = (0, c.e7)([b.Z], () => (0, p.b)(b.Z, o)),
        y = i.useCallback(() => {
            _
                ? (0, d.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              S(E({}, t), {
                                  guild: o,
                                  source: v.t4x.GUILD_HEADER_INVITE_BUTTON,
                              }),
                          );
                  })
                : (0, d.ZDy)(async () => {
                      let { default: e } = await n.e("18332").then(n.bind(n, 633057));
                      return (t) => (0, r.jsx)(e, E({}, t));
                  });
        }, [_, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.P3F, {
                className: C.guildDropdown,
                "aria-label": x.intl.formatToPlainString(x.t.xMXpl3, {
                    guildName: null != (t = null == o ? void 0 : o.name) ? t : "",
                }),
                "aria-controls": f,
                "aria-expanded": h,
                onContextMenu: s,
                onClick: a,
                children: [
                    (0, r.jsxs)("div", {
                        className: C.guildBadgeAndName,
                        children: [
                            (0, r.jsx)(O.Z, {
                                guild: o,
                                isBannerVisible: l,
                            }),
                            o.id === j._ && (0, r.jsx)(N, {}),
                            (0, r.jsx)(w, { guild: o }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: C.headerChildren,
                        children: m,
                    }),
                ],
            }),
            !A.includes(o.id) &&
                (0, r.jsx)(u.u, {
                    text: x.intl.string(x.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, r.jsx)(d.P3F, {
                        className: C.inviteButton,
                        onClick: () => {
                            y();
                        },
                        children: (0, r.jsx)(d.ejJ, {
                            size: "refresh_sm",
                            color: "currentColor",
                        }),
                    }),
                }),
            o.id === v.STv && (0, r.jsx)(g.p, {}),
        ],
    });
}
let D = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: a,
            onClick: c,
            onContextMenu: u,
            onMouseDown: p,
            disableBannerAnimation: g,
            "aria-expanded": b,
            "aria-controls": O,
            guild: j,
            guildBanner: x,
            animationOverlayHeight: N,
            children: Z,
            headerClassName: w,
            communityInfoVisible: A,
            hasSubheader: D,
        } = e,
        M = j.features.has(v.GuildFeatures.ANIMATED_BANNER),
        k = (0, f.Z)(j),
        G = !k && (0, y.Z)(j),
        U = !k && A,
        B = (0, _.xR)(x) && M && !g,
        [F, V] = i.useState(!1),
        H = i.useRef(!1),
        W = i.useRef(null),
        z = null != t ? t : W,
        K = i.useRef(void 0),
        Y = m.QK.getSetting();
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
        Q = (0, h._k)({ location: "guild_header" }),
        X = {
            bannerVisible: n,
            guild: j,
            onClick: c,
            onContextMenu: u,
            ariaControls: O,
            ariaExpanded: b,
            guildHeaderRef: z,
        };
    return (0, r.jsx)(d.f6W, {
        theme: n ? v.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        "data-has-banner": q(),
                        "data-banner-visible": n,
                        ref: z,
                        className: o()(a, {
                            [C.container]: !0,
                            [C.clickable]: !Q.isGuildEntrypointEnabled && null != c,
                            [C.selected]: !Q.isGuildEntrypointEnabled && null != c && b,
                            [C.hasBanner]: q(),
                            [C.bannerVisible]: n,
                            [e]: !1,
                            [C.communityInfoVisible]: U || (D && G),
                            [C.invitesRefresh]: Q.isGuildEntrypointEnabled,
                        }),
                        onMouseDown: p,
                        onClick: Q.isGuildEntrypointEnabled ? void 0 : c,
                        onContextMenu: u,
                        children: [
                            (0, r.jsxs)("header", {
                                className: o()(C.header, w, { [C.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: o()(C.headerContent, C.primaryInfo),
                                        children: Q.isGuildEntrypointEnabled
                                            ? (0, r.jsx)(R, S(E({}, X), { children: Z }))
                                            : (0, r.jsx)(T, S(E({}, X), { children: Z })),
                                    }),
                                    G &&
                                        (0, r.jsx)(P, {
                                            guild: j,
                                            controller: l,
                                            hasBanner: null != x,
                                            hasSubheader: null != D && D,
                                        }),
                                ],
                            }),
                            null != x
                                ? (0, r.jsx)(I, {
                                      guild: j,
                                      controller: l,
                                      guildBanner: x,
                                      animate: F,
                                  })
                                : null,
                            (0, r.jsx)(L, { controller: l }),
                        ],
                    }),
                    B && q()
                        ? (0, r.jsx)("div", {
                              className: C.animatedBannerHoverLayer,
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
function L(e) {
    let { controller: t } = e,
        { theme: n } = (0, d.TCT)(),
        i = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: C.headerEllipseBackdrop,
                style: { opacity: i.to((e) => 0.5 * e) },
            }),
            (0, r.jsx)(a.animated.div, {
                className: C.headerEllipseForeground,
                style: { opacity: i.to((e) => e) },
            }),
            (0, r.jsx)(a.animated.div, {
                className: C.headerGlass,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, d.apv)(n) ? i.to((e) => "brightness(".concat(0.75 + 0.25 * e, ")")) : void 0,
                },
            }),
        ],
    });
}
