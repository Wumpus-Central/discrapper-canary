n.d(t, { Ay: () => ed });
var s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    l = n(221877),
    o = n(607399),
    c = n(17928),
    d = n(866665),
    u = n(998445),
    x = n(834730),
    m = n(27232),
    h = n(297264),
    j = n(192308),
    f = n(939249),
    p = n(241541),
    b = n(43990),
    g = n(38021),
    N = n(366010),
    v = n(5180),
    C = n(789645),
    I = n(922016),
    A = n(499373),
    y = n(976860),
    k = n(93055),
    M = n(652215),
    E = n(266361),
    S = n(375708);
let R = i.lazy(() => Promise.all([n.e("732100"), n.e("879948")]).then(n.bind(n, 329671)));
function L(e) {
    let { className: t } = e,
        {
            isPreview: n,
            label: a,
            exitPreview: r,
        } = (function () {
            let { hasAccess: e } = (0, k.TW)(),
                t = i.useCallback(() => {
                    (0, y.pX)(M.BVt.ME);
                }, []);
            return { isPreview: !e, label: S.intl.string(e ? E.default.G9fGlP : S.t.ojM1xJ), exitPreview: t };
        })(),
        l = i.useRef(null),
        o = i.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i.Suspense, {
                fallback: null,
                children: (0, s.jsx)(R, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return n
        ? (0, s.jsx)(d.m, {
              text: a,
              position: "bottom",
              asContainer: !0,
              children: (0, s.jsx)(f.D, {
                  className: t,
                  "aria-label": a,
                  onClick: r,
                  children: (0, s.jsx)(C.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          })
        : (0, s.jsx)(I.Y, {
              targetElementRef: l,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, n) => {
                  let { isShown: i } = n;
                  return (0, s.jsx)(d.m, {
                      text: a,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !i,
                      children: (0, s.jsx)(f.D, {
                          innerRef: l,
                          className: t,
                          "aria-label": a,
                          ...e,
                          children: (0, s.jsx)(A.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          });
}
var D = n(454938),
    P = n(855687),
    B = n(259678),
    O = n(657718),
    w = n(65406),
    z = n(671678);
function F(e) {
    let {
            role: t = "button",
            type: n = "button",
            size: a = "md",
            variant: l = "secondary",
            icon: o,
            iconOpticalOffsetMargin: c = 0,
            focusProps: d,
            pressed: u = !1,
            "aria-label": x,
            buttonRef: m,
            disabled: h,
            className: j,
            style: f,
            ...p
        } = e,
        b = i.useRef(null),
        g = m ?? b,
        N = (0, s.jsx)(O.a, {
            icon: o,
            iconOpticalOffsetMargin: c,
            iconPosition: "start",
            size: a,
            ref: g,
            disabled: h,
        });
    return (0, s.jsx)(B.vN, {
        ...d,
        children: (0, s.jsx)("button", {
            role: t,
            type: n,
            "aria-pressed": u,
            className: r()(w.button, z.button, w[a], z[l], { [z.pressed]: u }),
            "aria-label": x,
            disabled: h,
            ref: g,
            ...p,
            children: (0, s.jsx)("div", { className: w.buttonChildrenWrapper, children: N }),
        }),
    });
}
var T = n(606096),
    G = n(997146),
    U = n(935063),
    V = n(143838),
    _ = n(334738),
    Y = n(573163),
    K = n(932883),
    W = n(599486),
    $ = n(394953),
    H = n(849077);
function q() {
    let e = (0, K.op)(),
        t = (0, $.i3)(),
        { selectedFilter: n, setSelectedFilter: i } = (0, W.A)();
    if (!t) return null;
    let a = n === H.Io.BOOKMARKS,
        r = a ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t["2pAkDA"]);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: r,
        asContainer: !0,
        children: (0, s.jsx)(F, {
            icon: a ? T.BookmarkIcon : G.c,
            pressed: a,
            variant: "tertiary",
            size: "sm",
            "aria-label": r,
            onClick: function () {
                let t = a ? H.Io.ALL : H.Io.BOOKMARKS;
                i(t), (0, K.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function Q() {
    let e = (0, K.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, W.A)(),
        i = t === H.Io.MENTIONS,
        a = i ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t.jbV6MM);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(F, {
            icon: U.X,
            pressed: i,
            variant: "tertiary",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? H.Io.ALL : H.Io.MENTIONS;
                n(t), (0, K.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function X() {
    let { unreadChannelIds: e } = (0, $.U4)();
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: S.intl.string(S.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(F, {
            icon: V.i,
            pressed: !1,
            variant: "tertiary",
            size: "sm",
            "aria-label": S.intl.string(S.t["8k+6QY"]),
            onClick: function () {
                let t = e
                    .map((e) => ({ channelId: e, messageId: Y.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && _.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var J = n(363195),
    Z = n(885386),
    ee = n(576705),
    et = n(486020),
    en = n(885631),
    es = n(986268),
    ei = n(486506);
function ea(e) {
    let { guild: t, controller: n, guildBanner: i, animate: a } = e,
        { value: c } = n.springs;
    return (0, s.jsx)(l.animated.div, {
        className: ei.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(l.animated.div, {
            className: r()(ei._e, { [ei.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: r()(ei.Q, { [ei.fr]: o.Fr }),
                src: et.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function er(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: a } = e,
        { value: o } = n.springs,
        c = t.features.has(M.GuildFeatures.DISCOVERABLE),
        m = (0, s.jsx)("div", {
            className: ei.WV,
            children:
                c &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: ei.Pl,
                        children: [
                            (0, s.jsx)(u.GlobeEarthIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: ei.ju,
                            }),
                            (0, s.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: S.intl.string(S.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return a
        ? (0, s.jsx)("div", { className: r()(ei.pS, ei.W$), children: m })
        : (0, s.jsx)(l.animated.div, {
              className: ei.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: m,
          });
}
function el() {
    return (0, s.jsx)(m.StarIcon, { size: "custom", color: "currentColor", className: ei.PA, height: 20, width: 20 });
}
function eo(e) {
    let { guild: t } = e;
    return (0, s.jsx)(h.D, { variant: "text-md/semibold", lineClamp: 1, className: ei.UU, children: (0, v.YC)(t) });
}
function ec(e) {
    let { bannerVisible: t, guild: a, onClick: r, onContextMenu: l, ariaControls: o, ariaExpanded: u, children: x } = e,
        m = (0, v.YC)(a),
        h = (0, c.bG)([ee.A], () => (0, P.K)(ee.A, a)),
        b = i.useCallback(() => {
            h
                ? (0, j.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("683621"),
                          n.e("711162"),
                          n.e("401425"),
                          n.e("159957"),
                          n.e("119454"),
                          n.e("728136"),
                          n.e("216084"),
                          n.e("36624"),
                          n.e("22547"),
                      ]).then(n.bind(n, 1310));
                      return (t) => (0, s.jsx)(e, { ...t, guild: a, source: M.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await n.e("962751").then(n.bind(n, 132610));
                      return (t) => (0, s.jsx)(e, { ...t });
                  });
        }, [h, a]),
        g = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: ei.LO,
                    children: [
                        (0, s.jsx)(es.A, { guild: a, isBannerVisible: t }),
                        (0, v.ai)(a.id) && (0, s.jsx)(el, {}),
                        (0, s.jsx)(eo, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: ei.dx, children: x }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === M.gNP
                ? (0, s.jsx)("div", { className: ei.Bd, children: g })
                : (0, s.jsx)(f.D, {
                      className: ei.Vm,
                      "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": u,
                      onContextMenu: l,
                      onClick: r,
                      children: g,
                  }),
            (0, v.ai)(a.id) && (0, s.jsx)(L, { className: ei.sq }),
            !(0, v.ai)(a.id) &&
                a.id !== M.gNP &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(f.D, {
                        "aria-label": S.intl.string(S.t.Sd8Ixw),
                        className: ei.ak,
                        onClick: () => {
                            b();
                        },
                        children: (0, s.jsx)(p.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === M.gNP &&
                (0, s.jsxs)("div", {
                    className: ei.aZ,
                    children: [(0, s.jsx)(Q, {}), (0, s.jsx)(q, {}), (0, s.jsx)(X, {})],
                }),
        ],
    });
}
let ed = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: a,
            className: l,
            onClick: d,
            onContextMenu: u,
            onMouseDown: x,
            disableBannerAnimation: m,
            "aria-expanded": h,
            "aria-controls": j,
            guild: f,
            guildBanner: p,
            animationOverlayHeight: g,
            children: N,
            headerClassName: v,
            communityInfoVisible: C,
            hasSubheader: I,
        } = e,
        A = f.features.has(M.GuildFeatures.ANIMATED_BANNER),
        y = (0, D.A)(f),
        k = !y && (0, en.A)(f),
        E = !y && C,
        S = (0, et.VI)(p) && A && !m,
        [R, L] = i.useState(!1),
        P = i.useRef(!1),
        B = i.useRef(null),
        O = t ?? B,
        w = i.useRef(void 0),
        z = Z.kt.getSetting(),
        F = (0, c.bG)([J.A], () => J.A.theme);
    function T() {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    }
    return (
        i.useEffect(() => {
            if (S && n && !P.current && z)
                return (
                    L(!0),
                    (w.current = setTimeout(() => {
                        L(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(w.current);
                    }
                );
        }, [S, n, z]),
        i.useEffect(() => {
            P.current = n;
        }, [n]),
        (0, s.jsx)(b.N, {
            theme: F,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": T(),
                            "data-banner-visible": n,
                            ref: O,
                            className: r()(l, {
                                [ei.kL]: !0,
                                [ei.r9]: T(),
                                [ei.Pi]: n,
                                [e]: !1,
                                [ei.Iv]: E || (I && k),
                            }),
                            onMouseDown: x,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: r()(ei.wx, v, { [ei.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: r()(ei.VW, ei.Nk),
                                            children: (0, s.jsx)(ec, {
                                                bannerVisible: n,
                                                guild: f,
                                                onClick: d,
                                                onContextMenu: u,
                                                ariaControls: j,
                                                ariaExpanded: h,
                                                children: N,
                                            }),
                                        }),
                                        k &&
                                            (0, s.jsx)(er, {
                                                guild: f,
                                                controller: a,
                                                hasBanner: null != p,
                                                hasSubheader: I ?? !1,
                                            }),
                                    ],
                                }),
                                null != p
                                    ? (0, s.jsx)(ea, { guild: f, controller: a, guildBanner: p, animate: R })
                                    : null,
                                (0, s.jsx)(eu, { controller: a }),
                            ],
                        }),
                        S && T()
                            ? (0, s.jsx)("div", {
                                  className: ei.rt,
                                  onMouseEnter: () => {
                                      L(!0), clearTimeout(w.current);
                                  },
                                  onMouseLeave: () => L(!1),
                                  style: { height: g },
                              })
                            : null,
                    ],
                }),
        })
    );
});
function eu(e) {
    let { controller: t } = e,
        { theme: n } = (0, g.wR)(),
        i = t.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.animated.div, { className: ei.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(l.animated.div, { className: ei.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(l.animated.div, {
                className: ei.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, N.q)(n) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
