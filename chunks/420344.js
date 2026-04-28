s.d(t, { Ay: () => ea });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(123924),
    o = s(607399),
    c = s(17928),
    d = s(990078),
    u = s(998445),
    x = s(834730),
    h = s(27232),
    m = s(534514),
    j = s(192308),
    f = s(939249),
    N = s(241541),
    p = s(43990),
    g = s(38021),
    v = s(366010),
    b = s(5180),
    A = s(922016),
    C = s(499373),
    I = s(789645),
    L = s(976860),
    S = s(313281),
    y = s(652215),
    E = s(335993),
    k = s(985018);
let D = a.lazy(() => Promise.all([s.e("87141"), s.e("60497")]).then(s.bind(s, 908424)));
function M(e) {
    let { className: t } = e,
        { hasAccess: s } = (0, S.TW)("FavoriteGuildHeaderActionButton"),
        r = a.useRef(null),
        l = s ? k.intl.string(E.default.G9fGlP) : k.intl.string(k.t.ojM1xJ),
        i = a.useCallback(() => {
            (0, L.pX)(y.BVt.ME);
        }, []),
        o = a.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(a.Suspense, {
                fallback: null,
                children: (0, n.jsx)(D, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return s
        ? (0, n.jsx)(A.Y, {
              targetElementRef: r,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, s) => {
                  let { isShown: a } = s;
                  return (0, n.jsx)(d.m, {
                      text: l,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !a,
                      children: (0, n.jsx)(f.D, {
                          innerRef: r,
                          className: t,
                          "aria-label": l,
                          ...e,
                          children: (0, n.jsx)(C.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          })
        : (0, n.jsx)(d.m, {
              text: l,
              position: "bottom",
              asContainer: !0,
              children: (0, n.jsx)(f.D, {
                  className: t,
                  "aria-label": l,
                  onClick: i,
                  children: (0, n.jsx)(I.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          });
}
var R = s(454938),
    B = s(855687),
    F = s(661531),
    O = s(606096),
    U = s(997146),
    T = s(932883),
    V = s(599486),
    G = s(394953),
    P = s(628325),
    _ = s(849077),
    w = s(337376);
function z(e) {
    let { className: t } = e,
        s = (0, T.op)(),
        a = (0, G.i3)(),
        { selectedFilter: r, setSelectedFilter: i } = (0, V.A)(),
        o = (0, P.S)((e) => e.setInboxReadState);
    if (!a) return null;
    let c = r === _.Io.ALL ? k.intl.string(k.t["2pAkDA"]) : k.intl.string(k.t.HcoRu0);
    return (0, n.jsx)(d.m, {
        position: "bottom",
        text: c,
        children: (0, n.jsx)(f.D, {
            className: l()(t, w.a, { [w.S]: r === _.Io.BOOKMARKS }),
            "aria-label": c,
            onClick: () => {
                let e = r === _.Io.ALL ? _.Io.BOOKMARKS : _.Io.ALL;
                i(e), e === _.Io.ALL && o(!1), (0, T.Ut)({ section: e, enabled: !0, viewId: s });
            },
            children:
                r === _.Io.BOOKMARKS
                    ? (0, n.jsx)(O.c, { size: "xs", color: F.A.colors.ICON_DEFAULT.css })
                    : (0, n.jsx)(U.c, { size: "xs", color: F.A.colors.ICON_MUTED.css }),
        }),
    });
}
var K = s(363195),
    Y = s(253932),
    $ = s(576705),
    H = s(486020),
    W = s(885631),
    q = s(986268),
    X = s(349828),
    J = s(765529);
function Q(e) {
    let { guild: t, controller: s, guildBanner: a, animate: r } = e,
        { value: c } = s.springs;
    return (0, n.jsx)(i.animated.div, {
        className: J.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, n.jsx)(i.animated.div, {
            className: l()(J._e, { [J.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, n.jsx)("img", {
                className: l()(J.Q, { [J.fr]: o.Fr }),
                src: H.Ay.getGuildBannerURL({ id: t.id, banner: a }, r) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function Z(e) {
    let { guild: t, controller: s, hasBanner: a, hasSubheader: r } = e,
        { value: o } = s.springs,
        c = t.features.has(y.GuildFeatures.DISCOVERABLE),
        h = (0, n.jsx)("div", {
            className: J.WV,
            children:
                c &&
                (0, n.jsx)(d.m, {
                    text: k.intl.string(k.t.O8lDI2),
                    position: "right",
                    children: (0, n.jsxs)("div", {
                        className: J.Pl,
                        children: [
                            (0, n.jsx)(u.L, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: J.ju,
                            }),
                            (0, n.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: k.intl.string(k.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return r
        ? (0, n.jsx)("div", { className: l()(J.pS, J.W$), children: h })
        : (0, n.jsx)(i.animated.div, {
              className: J.pS,
              style: a ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function ee() {
    return (0, n.jsx)(h.G, { size: "custom", color: "currentColor", className: J.PA, height: 20, width: 20 });
}
function et(e) {
    let { guild: t } = e;
    return (0, n.jsx)(m.D, { variant: "text-md/semibold", lineClamp: 1, className: J.UU, children: (0, b.YC)(t) });
}
let es = [X.Vc, y.gNP];
function en(e) {
    let { bannerVisible: t, guild: r, onClick: l, onContextMenu: i, ariaControls: o, ariaExpanded: u, children: x } = e,
        h = (0, b.YC)(r),
        m = (0, c.bG)([$.A], () => (0, B.K)($.A, r)),
        p = a.useCallback(() => {
            m
                ? (0, j.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          s.e("36685"),
                          s.e("32101"),
                          s.e("58216"),
                          s.e("59957"),
                          s.e("19454"),
                          s.e("28136"),
                          s.e("16084"),
                          s.e("87317"),
                          s.e("22547"),
                      ]).then(s.bind(s, 1310));
                      return (t) => (0, n.jsx)(e, { ...t, guild: r, source: y.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await s.e("62751").then(s.bind(s, 132610));
                      return (t) => (0, n.jsx)(e, { ...t });
                  });
        }, [m, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(f.D, {
                className: J.Vm,
                "aria-label": k.intl.formatToPlainString(k.t.xMXpl3, { guildName: h }),
                "aria-controls": o,
                "aria-expanded": u,
                onContextMenu: i,
                onClick: l,
                children: [
                    (0, n.jsxs)("div", {
                        className: J.LO,
                        children: [
                            (0, n.jsx)(q.A, { guild: r, isBannerVisible: t }),
                            r.id === X.Vc && (0, n.jsx)(ee, {}),
                            (0, n.jsx)(et, { guild: r }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: J.dx, children: x }),
                ],
            }),
            r.id === X.Vc && (0, n.jsx)(M, { className: J.sq }),
            !es.includes(r.id) &&
                (0, n.jsx)(d.m, {
                    text: k.intl.string(k.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, n.jsx)(f.D, {
                        className: J.ak,
                        onClick: () => {
                            p();
                        },
                        children: (0, n.jsx)(N.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            r.id === y.gNP && (0, n.jsx)(z, {}),
        ],
    });
}
let ea = a.memo(function (e) {
    let {
            ref: t,
            bannerVisible: s,
            controller: r,
            className: i,
            onClick: d,
            onContextMenu: u,
            onMouseDown: x,
            disableBannerAnimation: h,
            "aria-expanded": m,
            "aria-controls": j,
            guild: f,
            guildBanner: N,
            animationOverlayHeight: g,
            children: v,
            headerClassName: b,
            communityInfoVisible: A,
            hasSubheader: C,
        } = e,
        I = f.features.has(y.GuildFeatures.ANIMATED_BANNER),
        L = (0, R.A)(f),
        S = !L && (0, W.A)(f),
        E = !L && A,
        k = (0, H.VI)(N) && I && !h,
        [D, M] = a.useState(!1),
        B = a.useRef(!1),
        F = a.useRef(null),
        O = t ?? F,
        U = a.useRef(void 0),
        T = Y.kt.getSetting(),
        V = (0, c.bG)([K.A], () => K.A.theme);
    a.useEffect(() => {
        if (k && s && !B.current && T)
            return (
                M(!0),
                (U.current = setTimeout(() => {
                    M(!1);
                }, 5e3)),
                () => {
                    clearTimeout(U.current);
                }
            );
    }, [k, s, T]),
        a.useEffect(() => {
            B.current = s;
        }, [s]);
    let G = () => {
        let { renderBanner: t, guildBanner: s } = e;
        return null != s && !t;
    };
    return (0, n.jsx)(p.N, {
        theme: V,
        children: (e) =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        "data-has-banner": G(),
                        "data-banner-visible": s,
                        ref: O,
                        className: l()(i, { [J.kL]: !0, [J.r9]: G(), [J.Pi]: s, [e]: !1, [J.Iv]: E || (C && S) }),
                        onMouseDown: x,
                        onContextMenu: u,
                        children: [
                            (0, n.jsxs)("header", {
                                className: l()(J.wx, b, { [J.jD]: o.Fr }),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: l()(J.VW, J.Nk),
                                        children: (0, n.jsx)(en, {
                                            bannerVisible: s,
                                            guild: f,
                                            onClick: d,
                                            onContextMenu: u,
                                            ariaControls: j,
                                            ariaExpanded: m,
                                            children: v,
                                        }),
                                    }),
                                    S &&
                                        (0, n.jsx)(Z, {
                                            guild: f,
                                            controller: r,
                                            hasBanner: null != N,
                                            hasSubheader: C ?? !1,
                                        }),
                                ],
                            }),
                            null != N ? (0, n.jsx)(Q, { guild: f, controller: r, guildBanner: N, animate: D }) : null,
                            (0, n.jsx)(er, { controller: r }),
                        ],
                    }),
                    k && G()
                        ? (0, n.jsx)("div", {
                              className: J.rt,
                              onMouseEnter: () => {
                                  M(!0), clearTimeout(U.current);
                              },
                              onMouseLeave: () => M(!1),
                              style: { height: g },
                          })
                        : null,
                ],
            }),
    });
});
function er(e) {
    let { controller: t } = e,
        { theme: s } = (0, g.wR)(),
        a = t.springs.value;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.animated.div, { className: J.UL, style: { opacity: a.to((e) => 0.5 * e) } }),
            (0, n.jsx)(i.animated.div, { className: J.ze, style: { opacity: a.to((e) => e) } }),
            (0, n.jsx)(i.animated.div, {
                className: J.iI,
                style: {
                    opacity: a.to((e) => (1 - e) * 6),
                    filter: (0, v.q)(s) ? a.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
