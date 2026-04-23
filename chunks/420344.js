n.d(t, { Ay: () => el });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(419354),
    o = n(607399),
    d = n(17928),
    c = n(990078),
    u = n(998445),
    h = n(834730),
    A = n(27232),
    _ = n(534514),
    g = n(192308),
    m = n(939249),
    p = n(241541),
    f = n(43990),
    E = n(38021),
    C = n(366010),
    x = n(5180),
    I = n(922016),
    b = n(499373),
    S = n(789645),
    N = n(976860),
    T = n(313281),
    v = n(652215),
    y = n(335993),
    R = n(985018);
let j = l.lazy(() => n.e("60497").then(n.bind(n, 908424)));
function L(e) {
    let { className: t } = e,
        { hasAccess: n } = (0, T.TW)("FavoriteGuildHeaderActionButton"),
        s = l.useRef(null),
        r = n ? R.intl.string(y.default.G9fGlP) : R.intl.string(R.t.ojM1xJ),
        a = l.useCallback(() => {
            (0, N.pX)(v.BVt.ME);
        }, []),
        o = l.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(l.Suspense, {
                fallback: null,
                children: (0, i.jsx)(j, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return n
        ? (0, i.jsx)(I.Y, {
              targetElementRef: s,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, n) => {
                  let { isShown: l } = n;
                  return (0, i.jsx)(c.m, {
                      text: r,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !l,
                      children: (0, i.jsx)(m.D, {
                          innerRef: s,
                          className: t,
                          "aria-label": r,
                          ...e,
                          children: (0, i.jsx)(b.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          })
        : (0, i.jsx)(c.m, {
              text: r,
              position: "bottom",
              asContainer: !0,
              children: (0, i.jsx)(m.D, {
                  className: t,
                  "aria-label": r,
                  onClick: a,
                  children: (0, i.jsx)(S.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          });
}
var O = n(454938),
    G = n(855687),
    M = n(661531),
    D = n(606096),
    U = n(997146),
    P = n(932883),
    w = n(599486),
    k = n(394953),
    V = n(628325),
    B = n(849077),
    H = n(337376);
function F(e) {
    let { className: t } = e,
        n = (0, P.op)(),
        l = (0, k.i3)(),
        { selectedFilter: s, setSelectedFilter: a } = (0, w.A)(),
        o = (0, V.S)((e) => e.setInboxReadState);
    if (!l) return null;
    let d = s === B.Io.ALL ? R.intl.string(R.t["2pAkDA"]) : R.intl.string(R.t.HcoRu0);
    return (0, i.jsx)(c.m, {
        position: "bottom",
        text: d,
        children: (0, i.jsx)(m.D, {
            className: r()(t, H.a, { [H.S]: s === B.Io.BOOKMARKS }),
            "aria-label": d,
            onClick: () => {
                let e = s === B.Io.ALL ? B.Io.BOOKMARKS : B.Io.ALL;
                a(e), e === B.Io.ALL && o(!1), (0, P.Ut)({ section: e, enabled: !0, viewId: n });
            },
            children:
                s === B.Io.BOOKMARKS
                    ? (0, i.jsx)(D.c, { size: "xs", color: M.A.colors.ICON_DEFAULT.css })
                    : (0, i.jsx)(U.c, { size: "xs", color: M.A.colors.ICON_MUTED.css }),
        }),
    });
}
var W = n(363195),
    K = n(253932),
    Y = n(576705),
    z = n(486020),
    q = n(885631),
    X = n(986268),
    Q = n(349828),
    J = n(765529);
function Z(e) {
    let { guild: t, controller: n, guildBanner: l, animate: s } = e,
        { value: d } = n.springs;
    return (0, i.jsx)(a.animated.div, {
        className: J.nI,
        style: { opacity: d, transform: d.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(a.animated.div, {
            className: r()(J._e, { [J.fr]: o.Fr }),
            style: { transform: d.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: r()(J.Q, { [J.fr]: o.Fr }),
                src: z.Ay.getGuildBannerURL({ id: t.id, banner: l }, s) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function $(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: s } = e,
        { value: o } = n.springs,
        d = t.features.has(v.GuildFeatures.DISCOVERABLE),
        A = (0, i.jsx)("div", {
            className: J.WV,
            children:
                d &&
                (0, i.jsx)(c.m, {
                    text: R.intl.string(R.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: J.Pl,
                        children: [
                            (0, i.jsx)(u.L, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: J.ju,
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: R.intl.string(R.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return s
        ? (0, i.jsx)("div", { className: r()(J.pS, J.W$), children: A })
        : (0, i.jsx)(a.animated.div, {
              className: J.pS,
              style: l ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: A,
          });
}
function ee() {
    return (0, i.jsx)(A.G, { size: "custom", color: "currentColor", className: J.PA, height: 20, width: 20 });
}
function et(e) {
    let { guild: t } = e;
    return (0, i.jsx)(_.D, { variant: "text-md/semibold", lineClamp: 1, className: J.UU, children: (0, x.YC)(t) });
}
let en = [Q.Vc, v.gNP];
function ei(e) {
    let { bannerVisible: t, guild: s, onClick: r, onContextMenu: a, ariaControls: o, ariaExpanded: u, children: h } = e,
        A = (0, x.YC)(s),
        _ = (0, d.bG)([Y.A], () => (0, G.K)(Y.A, s)),
        f = l.useCallback(() => {
            _
                ? (0, g.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                          n.bind(n, 1310),
                      );
                      return (t) => (0, i.jsx)(e, { ...t, guild: s, source: v.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, g.openModalLazy)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [_, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(m.D, {
                className: J.Vm,
                "aria-label": R.intl.formatToPlainString(R.t.xMXpl3, { guildName: A }),
                "aria-controls": o,
                "aria-expanded": u,
                onContextMenu: a,
                onClick: r,
                children: [
                    (0, i.jsxs)("div", {
                        className: J.LO,
                        children: [
                            (0, i.jsx)(X.A, { guild: s, isBannerVisible: t }),
                            s.id === Q.Vc && (0, i.jsx)(ee, {}),
                            (0, i.jsx)(et, { guild: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: J.dx, children: h }),
                ],
            }),
            s.id === Q.Vc && (0, i.jsx)(L, { className: J.sq }),
            !en.includes(s.id) &&
                (0, i.jsx)(c.m, {
                    text: R.intl.string(R.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(m.D, {
                        className: J.ak,
                        onClick: () => {
                            f();
                        },
                        children: (0, i.jsx)(p.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            s.id === v.gNP && (0, i.jsx)(F, {}),
        ],
    });
}
let el = l.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: s,
            className: a,
            onClick: c,
            onContextMenu: u,
            onMouseDown: h,
            disableBannerAnimation: A,
            "aria-expanded": _,
            "aria-controls": g,
            guild: m,
            guildBanner: p,
            animationOverlayHeight: E,
            children: C,
            headerClassName: x,
            communityInfoVisible: I,
            hasSubheader: b,
        } = e,
        S = m.features.has(v.GuildFeatures.ANIMATED_BANNER),
        N = (0, O.A)(m),
        T = !N && (0, q.A)(m),
        y = !N && I,
        R = (0, z.VI)(p) && S && !A,
        [j, L] = l.useState(!1),
        G = l.useRef(!1),
        M = l.useRef(null),
        D = t ?? M,
        U = l.useRef(void 0),
        P = K.kt.getSetting(),
        w = (0, d.bG)([W.A], () => W.A.theme);
    l.useEffect(() => {
        if (R && n && !G.current && P)
            return (
                L(!0),
                (U.current = setTimeout(() => {
                    L(!1);
                }, 5e3)),
                () => {
                    clearTimeout(U.current);
                }
            );
    }, [R, n, P]),
        l.useEffect(() => {
            G.current = n;
        }, [n]);
    let k = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, i.jsx)(f.N, {
        theme: w,
        children: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        "data-has-banner": k(),
                        "data-banner-visible": n,
                        ref: D,
                        className: r()(a, { [J.kL]: !0, [J.r9]: k(), [J.Pi]: n, [e]: !1, [J.Iv]: y || (b && T) }),
                        onMouseDown: h,
                        onContextMenu: u,
                        children: [
                            (0, i.jsxs)("header", {
                                className: r()(J.wx, x, { [J.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(J.VW, J.Nk),
                                        children: (0, i.jsx)(ei, {
                                            bannerVisible: n,
                                            guild: m,
                                            onClick: c,
                                            onContextMenu: u,
                                            ariaControls: g,
                                            ariaExpanded: _,
                                            children: C,
                                        }),
                                    }),
                                    T &&
                                        (0, i.jsx)($, {
                                            guild: m,
                                            controller: s,
                                            hasBanner: null != p,
                                            hasSubheader: b ?? !1,
                                        }),
                                ],
                            }),
                            null != p ? (0, i.jsx)(Z, { guild: m, controller: s, guildBanner: p, animate: j }) : null,
                            (0, i.jsx)(es, { controller: s }),
                        ],
                    }),
                    R && k()
                        ? (0, i.jsx)("div", {
                              className: J.rt,
                              onMouseEnter: () => {
                                  L(!0), clearTimeout(U.current);
                              },
                              onMouseLeave: () => L(!1),
                              style: { height: E },
                          })
                        : null,
                ],
            }),
    });
});
function es(e) {
    let { controller: t } = e,
        { theme: n } = (0, E.wR)(),
        l = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.animated.div, { className: J.UL, style: { opacity: l.to((e) => 0.5 * e) } }),
            (0, i.jsx)(a.animated.div, { className: J.ze, style: { opacity: l.to((e) => e) } }),
            (0, i.jsx)(a.animated.div, {
                className: J.iI,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, C.q)(n) ? l.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
