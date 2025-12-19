n.d(t, { ZP: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(620792),
    s = n(873546),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    f = n(666188),
    h = n(159300),
    p = n(553984),
    g = n(695346),
    b = n(496675),
    m = n(768581),
    y = n(598056),
    O = n(358555),
    v = n(981631),
    j = n(647086),
    C = n(388032),
    x = n(371412);
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
function S(e) {
    var t;
    let { guild: n, controller: i, guildBanner: l, animate: c } = e,
        { value: u } = i.springs;
    return (0, r.jsx)(o.animated.div, {
        className: x.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
        },
        children: (0, r.jsx)(o.animated.div, {
            className: a()(x.bannerImage, { [x.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => "translateY(".concat((1 - e) * 90, "px)")) },
            children: (0, r.jsx)("img", {
                className: a()(x.bannerImg, { [x.bannerImgFullWidth]: s.tq }),
                src:
                    null !=
                    (t = m.ZP.getGuildBannerURL(
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
function I(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        c = t.features.has(v.GuildFeatures.DISCOVERABLE),
        f = (0, r.jsx)("div", {
            className: x.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.u, {
                    text: C.intl.string(C.t.O8lDI2),
                    position: "right",
                    children: (0, r.jsxs)("div", {
                        className: x.communityInfoPill,
                        children: [
                            (0, r.jsx)(d.enf, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: x.communityIcon,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: C.intl.string(C.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return l
        ? (0, r.jsx)("div", {
              className: a()(x.communityInfoContainer, x.hasSubheader),
              children: f,
          })
        : (0, r.jsx)(o.animated.div, {
              className: x.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => "".concat(20 * e, "px")) },
              children: f,
          });
}
function _() {
    return (0, r.jsx)(d.r7p, {
        size: "custom",
        color: "currentColor",
        className: x.favoritesIcon,
        height: 20,
        width: 20,
    });
}
function P(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: x.name,
        children: t.name,
    });
}
let N = [j._, v.STv];
function Z(e) {
    var t;
    let { bannerVisible: l, guild: a, onClick: o, onContextMenu: s, ariaControls: f, ariaExpanded: g, children: m } = e,
        y = (0, c.e7)([b.Z], () => (0, h.b)(b.Z, a)),
        S = i.useCallback(() => {
            y
                ? (0, d.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = E({}, t)),
                              (i = i =
                                  {
                                      guild: a,
                                      source: v.t4x.GUILD_HEADER_INVITE_BUTTON,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n),
                          );
                      };
                  })
                : (0, d.ZDy)(async () => {
                      let { default: e } = await n.e("18332").then(n.bind(n, 633057));
                      return (t) => (0, r.jsx)(e, E({}, t));
                  });
        }, [y, a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.P3F, {
                className: x.guildDropdown,
                "aria-label": C.intl.formatToPlainString(C.t.xMXpl3, {
                    guildName: null != (t = null == a ? void 0 : a.name) ? t : "",
                }),
                "aria-controls": f,
                "aria-expanded": g,
                onContextMenu: s,
                onClick: o,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.guildBadgeAndName,
                        children: [
                            (0, r.jsx)(O.Z, {
                                guild: a,
                                isBannerVisible: l,
                            }),
                            a.id === j._ && (0, r.jsx)(_, {}),
                            (0, r.jsx)(P, { guild: a }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.headerChildren,
                        children: m,
                    }),
                ],
            }),
            !N.includes(a.id) &&
                (0, r.jsx)(u.u, {
                    text: C.intl.string(C.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, r.jsx)(d.P3F, {
                        className: x.inviteButton,
                        onClick: () => {
                            S();
                        },
                        children: (0, r.jsx)(d.ejJ, {
                            size: "refresh_sm",
                            color: "currentColor",
                        }),
                    }),
                }),
            a.id === v.STv && (0, r.jsx)(p.p, {}),
        ],
    });
}
let w = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: o,
            onClick: c,
            onContextMenu: u,
            onMouseDown: h,
            disableBannerAnimation: p,
            "aria-expanded": b,
            "aria-controls": O,
            guild: j,
            guildBanner: C,
            animationOverlayHeight: E,
            children: _,
            headerClassName: P,
            communityInfoVisible: N,
            hasSubheader: w,
        } = e,
        A = j.features.has(v.GuildFeatures.ANIMATED_BANNER),
        R = (0, f.Z)(j),
        D = !R && (0, y.Z)(j),
        M = !R && N,
        L = (0, m.xR)(C) && A && !p,
        [k, G] = i.useState(!1),
        U = i.useRef(!1),
        B = i.useRef(null),
        F = null != t ? t : B,
        V = i.useRef(void 0),
        H = g.QK.getSetting();
    i.useEffect(() => {
        if (L && n && !U.current && H)
            return (
                G(!0),
                (V.current = setTimeout(() => {
                    G(!1);
                }, 5000)),
                () => {
                    clearTimeout(V.current);
                }
            );
    }, [L, n, H]),
        i.useEffect(() => {
            U.current = n;
        }, [n]);
    let W = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, r.jsx)(d.f6W, {
        theme: n ? v.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        "data-has-banner": W(),
                        "data-banner-visible": n,
                        ref: F,
                        className: a()(o, {
                            [x.container]: !0,
                            [x.hasBanner]: W(),
                            [x.bannerVisible]: n,
                            [e]: !1,
                            [x.communityInfoVisible]: M || (w && D),
                        }),
                        onMouseDown: h,
                        onContextMenu: u,
                        children: [
                            (0, r.jsxs)("header", {
                                className: a()(x.header, P, { [x.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(x.headerContent, x.primaryInfo),
                                        children: (0, r.jsx)(Z, {
                                            bannerVisible: n,
                                            guild: j,
                                            onClick: c,
                                            onContextMenu: u,
                                            ariaControls: O,
                                            ariaExpanded: b,
                                            children: _,
                                        }),
                                    }),
                                    D &&
                                        (0, r.jsx)(I, {
                                            guild: j,
                                            controller: l,
                                            hasBanner: null != C,
                                            hasSubheader: null != w && w,
                                        }),
                                ],
                            }),
                            null != C
                                ? (0, r.jsx)(S, {
                                      guild: j,
                                      controller: l,
                                      guildBanner: C,
                                      animate: k,
                                  })
                                : null,
                            (0, r.jsx)(T, { controller: l }),
                        ],
                    }),
                    L && W()
                        ? (0, r.jsx)("div", {
                              className: x.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  G(!0), clearTimeout(V.current);
                              },
                              onMouseLeave: () => G(!1),
                              style: { height: E },
                          })
                        : null,
                ],
            }),
    });
});
function T(e) {
    let { controller: t } = e,
        { theme: n } = (0, d.TCT)(),
        i = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.animated.div, {
                className: x.headerEllipseBackdrop,
                style: { opacity: i.to((e) => 0.5 * e) },
            }),
            (0, r.jsx)(o.animated.div, {
                className: x.headerEllipseForeground,
                style: { opacity: i.to((e) => e) },
            }),
            (0, r.jsx)(o.animated.div, {
                className: x.headerGlass,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, d.apv)(n) ? i.to((e) => "brightness(".concat(0.75 + 0.25 * e, ")")) : void 0,
                },
            }),
        ],
    });
}
