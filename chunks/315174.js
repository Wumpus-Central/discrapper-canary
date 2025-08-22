n.d(t, {
    ZP: () => D,
    wD: () => w,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(202841),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(666188),
    p = n(340541),
    h = n(159300),
    f = n(553984),
    g = n(210887),
    m = n(695346),
    b = n(496675),
    O = n(768581),
    y = n(598056),
    _ = n(358555),
    j = n(981631),
    v = n(647086),
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
function P(e) {
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
                    (t = O.ZP.getGuildBannerURL(
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
        c = t.features.has(j.oNc.DISCOVERABLE),
        d = (0, r.jsx)("div", {
            className: C.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: x.intl.string(x.t.O8lDIy),
                    position: "right",
                    children: (e) =>
                        (0, r.jsxs)(
                            "div",
                            S(E({ className: C.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(u.enf, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 12,
                                        height: 12,
                                        className: C.communityIcon,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: x.intl.string(x.t["B/vjCg"]),
                                    }),
                                ],
                            }),
                        ),
                }),
        });
    return l
        ? (0, r.jsx)("div", {
              className: o()(C.communityInfoContainer, C.hasSubheader),
              children: d,
          })
        : (0, r.jsx)(a.animated.div, {
              className: C.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => "".concat(20 * e, "px")) },
              children: d,
          });
}
function N() {
    return (0, r.jsx)(u.r7p, {
        size: "custom",
        color: "currentColor",
        className: C.favoritesIcon,
        height: 20,
        width: 20,
    });
}
let w = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: "xs",
        color: "currentColor",
    });
};
function Z(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
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
        children: d,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Z, {
                guild: i,
                isBannerVisible: n,
            }),
            i.id === v._ && (0, r.jsx)(N, {}),
            (0, r.jsx)(Z, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: C.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    "aria-controls": a,
                    "aria-expanded": s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4,
                    },
                    "aria-label": x.intl.formatToPlainString(x.t.xMXpl5, {
                        guildName: null != (t = null == i ? void 0 : i.name) ? t : "",
                    }),
                }),
            (0, r.jsx)("div", {
                className: C.headerChildren,
                children: d,
            }),
        ],
    });
}
let A = [v._, j.STv];
function R(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: a, children: s } = e,
        d = i.useRef(null),
        p = (0, c.e7)([g.Z], () => g.Z.theme),
        m = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e("87154"), n.e("45141")]).then(n.bind(n, 859432));
            return (t) => {
                let { closePopout: n } = t;
                return (0, r.jsx)(u.f6W, {
                    theme: p,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: t,
                            children: (0, r.jsx)(e, {
                                onClose: n,
                                guild: l,
                            }),
                        }),
                });
            };
        }, [l, p]),
        O = (0, c.e7)([b.Z], () => (0, h.b)(b.Z, l)),
        y = i.useCallback(() => {
            O
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              S(E({}, t), {
                                  guild: l,
                                  source: j.t4x.GUILD_HEADER,
                              }),
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("88358").then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, E({}, t));
                  });
        }, [O, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                targetElementRef: d,
                renderPopout: m,
                position: "bottom",
                align: "left",
                animation: u.yRy.Animation.SCALE,
                spacing: 4,
                children: (e) => {
                    var n;
                    return (0, r.jsxs)(
                        u.P3F,
                        S(
                            E(
                                {
                                    innerRef: d,
                                    className: C.guildDropdown,
                                    "aria-label": x.intl.formatToPlainString(x.t.xMXpl5, {
                                        guildName: null != (n = null == l ? void 0 : l.name) ? n : "",
                                    }),
                                    onContextMenu: a,
                                },
                                e,
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null == (n = e.onClick) || n.call(e, t), null == o || o(t);
                                },
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: C.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(_.Z, {
                                                guild: l,
                                                isBannerVisible: t,
                                            }),
                                            l.id === v._ && (0, r.jsx)(N, {}),
                                            (0, r.jsx)(Z, { guild: l }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: C.headerChildren,
                                        children: s,
                                    }),
                                ],
                            },
                        ),
                    );
                },
            }),
            !A.includes(l.id) &&
                (0, r.jsx)(u.ua7, {
                    text: x.intl.string(x.t.Sd8Ix8),
                    position: "bottom",
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            S(E({ className: C.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), y();
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
            l.id === j.STv && (0, r.jsx)(f.p, {}),
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
            onContextMenu: h,
            onMouseDown: f,
            disableBannerAnimation: g,
            "aria-expanded": b,
            "aria-controls": _,
            guild: v,
            guildBanner: x,
            animationOverlayHeight: N,
            children: w,
            headerClassName: Z,
            communityInfoVisible: A,
            hasSubheader: D,
        } = e,
        L = v.features.has(j.oNc.ANIMATED_BANNER),
        k = (0, d.Z)(v),
        U = !k && (0, y.Z)(v),
        G = !k && A,
        B = (0, O.xR)(x) && L && !g,
        [F, V] = i.useState(!1),
        H = i.useRef(!1),
        z = i.useRef(null),
        W = null != t ? t : z,
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
        { entrypoints: X } = (0, p._k)({ location: "guild_header" }),
        Q = {
            bannerVisible: n,
            guild: v,
            onClick: c,
            onContextMenu: h,
            ariaControls: _,
            ariaExpanded: b,
            guildHeaderRef: W,
        };
    return (0, r.jsx)(u.f6W, {
        theme: n ? j.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        "data-has-banner": q(),
                        "data-banner-visible": n,
                        ref: W,
                        className: o()(a, {
                            [C.container]: !0,
                            [C.clickable]: !X && null != c,
                            [C.selected]: !X && null != c && b,
                            [C.hasBanner]: q(),
                            [C.bannerVisible]: n,
                            [e]: !1,
                            [C.communityInfoVisible]: G || (D && U),
                            [C.invitesRefresh]: X,
                        }),
                        onMouseDown: f,
                        onClick: X ? void 0 : c,
                        onContextMenu: h,
                        children: [
                            (0, r.jsxs)("header", {
                                className: o()(C.header, Z, { [C.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: o()(C.headerContent, C.primaryInfo),
                                        children: X
                                            ? (0, r.jsx)(R, S(E({}, Q), { children: w }))
                                            : (0, r.jsx)(T, S(E({}, Q), { children: w })),
                                    }),
                                    U &&
                                        (0, r.jsx)(I, {
                                            guild: v,
                                            controller: l,
                                            hasBanner: null != x,
                                            hasSubheader: null != D && D,
                                        }),
                                ],
                            }),
                            null != x
                                ? (0, r.jsx)(P, {
                                      guild: v,
                                      controller: l,
                                      guildBanner: x,
                                      animate: F,
                                  })
                                : null,
                            (0, r.jsx)(M, { controller: l }),
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
function M(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.TCT)(),
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
                    filter: (0, u.apv)(n) ? i.to((e) => "brightness(".concat(0.75 + 0.25 * e, ")")) : void 0,
                },
            }),
        ],
    });
}
