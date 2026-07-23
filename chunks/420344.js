n.d(t, { Ay: () => eo });
var s = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(617498),
    o = n(607399),
    c = n(17928),
    d = n(866665),
    u = n(998445),
    x = n(834730),
    m = n(27232),
    h = n(297264),
    j = n(192308),
    f = n(939249),
    g = n(241541),
    p = n(43990),
    N = n(38021),
    b = n(366010),
    v = n(5180),
    C = n(922016),
    A = n(499373),
    I = n(789645),
    k = n(976860),
    y = n(298358),
    M = n(652215),
    E = n(335993),
    S = n(375708);
let L = i.lazy(() => n.e("60497").then(n.bind(n, 908424)));
function R(e) {
    let { className: t } = e,
        { hasAccess: n } = (0, y.TW)("FavoriteGuildHeaderActionButton"),
        a = i.useRef(null),
        r = n ? S.intl.string(E.default.G9fGlP) : S.intl.string(S.t.ojM1xJ),
        l = i.useCallback(() => {
            (0, k.pX)(M.BVt.ME);
        }, []),
        o = i.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i.Suspense, {
                fallback: null,
                children: (0, s.jsx)(L, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return n
        ? (0, s.jsx)(C.Y, {
              targetElementRef: a,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, n) => {
                  let { isShown: i } = n;
                  return (0, s.jsx)(d.m, {
                      text: r,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !i,
                      children: (0, s.jsx)(f.D, {
                          innerRef: a,
                          className: t,
                          "aria-label": r,
                          ...e,
                          children: (0, s.jsx)(A.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          })
        : (0, s.jsx)(d.m, {
              text: r,
              position: "bottom",
              asContainer: !0,
              children: (0, s.jsx)(f.D, {
                  className: t,
                  "aria-label": r,
                  onClick: l,
                  children: (0, s.jsx)(I.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          });
}
var D = n(454938),
    B = n(855687),
    F = n(876798),
    V = n(606096),
    T = n(997146),
    w = n(935063),
    z = n(143838),
    G = n(334738),
    O = n(568548),
    P = n(932883),
    U = n(599486),
    _ = n(394953),
    Y = n(849077);
function H() {
    let e = (0, P.op)(),
        t = (0, _.i3)(),
        { selectedFilter: n, setSelectedFilter: i } = (0, U.A)();
    if (!t) return null;
    let a = n === Y.Io.BOOKMARKS,
        r = a ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t["2pAkDA"]);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: r,
        asContainer: !0,
        children: (0, s.jsx)(F.k, {
            icon: a ? V.c : T.c,
            pressed: a,
            variant: "tertiary",
            size: "sm",
            "aria-label": r,
            onClick: function () {
                let t = a ? Y.Io.ALL : Y.Io.BOOKMARKS;
                i(t), (0, P.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function K() {
    let e = (0, P.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, U.A)(),
        i = t === Y.Io.MENTIONS,
        a = i ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t.jbV6MM);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(F.k, {
            icon: w.X,
            pressed: i,
            variant: "tertiary",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? Y.Io.ALL : Y.Io.MENTIONS;
                n(t), (0, P.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function $() {
    let { unreadChannelIds: e } = (0, _.U4)();
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: S.intl.string(S.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(F.k, {
            icon: z.i,
            pressed: !1,
            variant: "tertiary",
            size: "sm",
            "aria-label": S.intl.string(S.t["8k+6QY"]),
            onClick: function () {
                let t = e
                    .map((e) => ({ channelId: e, messageId: O.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && G.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var W = n(363195),
    q = n(885386),
    Q = n(576705),
    X = n(486020),
    J = n(885631),
    Z = n(986268),
    ee = n(349828),
    et = n(368193);
function en(e) {
    let { guild: t, controller: n, guildBanner: i, animate: a } = e,
        { value: c } = n.springs;
    return (0, s.jsx)(l.animated.div, {
        className: et.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(l.animated.div, {
            className: r()(et._e, { [et.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: r()(et.Q, { [et.fr]: o.Fr }),
                src: X.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function es(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: a } = e,
        { value: o } = n.springs,
        c = t.features.has(M.GuildFeatures.DISCOVERABLE),
        m = (0, s.jsx)("div", {
            className: et.WV,
            children:
                c &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: et.Pl,
                        children: [
                            (0, s.jsx)(u.L, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: et.ju,
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
        ? (0, s.jsx)("div", { className: r()(et.pS, et.W$), children: m })
        : (0, s.jsx)(l.animated.div, {
              className: et.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: m,
          });
}
function ei() {
    return (0, s.jsx)(m.G, { size: "custom", color: "currentColor", className: et.PA, height: 20, width: 20 });
}
function ea(e) {
    let { guild: t } = e;
    return (0, s.jsx)(h.D, { variant: "text-md/semibold", lineClamp: 1, className: et.UU, children: (0, v.YC)(t) });
}
let er = [ee.Vc, M.gNP];
function el(e) {
    let { bannerVisible: t, guild: a, onClick: r, onContextMenu: l, ariaControls: o, ariaExpanded: u, children: x } = e,
        m = (0, v.YC)(a),
        h = (0, c.bG)([Q.A], () => (0, B.K)(Q.A, a)),
        p = i.useCallback(() => {
            h
                ? (0, j.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("27574"),
                          n.e("21149"),
                          n.e("80263"),
                          n.e("59957"),
                          n.e("19454"),
                          n.e("28136"),
                          n.e("16084"),
                          n.e("36624"),
                          n.e("22547"),
                      ]).then(n.bind(n, 1310));
                      return (t) => (0, s.jsx)(e, { ...t, guild: a, source: M.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, s.jsx)(e, { ...t });
                  });
        }, [h, a]),
        N = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: et.LO,
                    children: [
                        (0, s.jsx)(Z.A, { guild: a, isBannerVisible: t }),
                        a.id === ee.Vc && (0, s.jsx)(ei, {}),
                        (0, s.jsx)(ea, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: et.dx, children: x }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === M.gNP
                ? (0, s.jsx)("div", { className: et.Bd, children: N })
                : (0, s.jsx)(f.D, {
                      className: et.Vm,
                      "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": u,
                      onContextMenu: l,
                      onClick: r,
                      children: N,
                  }),
            a.id === ee.Vc && (0, s.jsx)(R, { className: et.sq }),
            !er.includes(a.id) &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(f.D, {
                        "aria-label": S.intl.string(S.t.Sd8Ixw),
                        className: et.ak,
                        onClick: () => {
                            p();
                        },
                        children: (0, s.jsx)(g.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === M.gNP &&
                (0, s.jsxs)("div", {
                    className: et.aZ,
                    children: [(0, s.jsx)(K, {}), (0, s.jsx)(H, {}), (0, s.jsx)($, {})],
                }),
        ],
    });
}
let eo = i.memo(function (e) {
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
            guildBanner: g,
            animationOverlayHeight: N,
            children: b,
            headerClassName: v,
            communityInfoVisible: C,
            hasSubheader: A,
        } = e,
        I = f.features.has(M.GuildFeatures.ANIMATED_BANNER),
        k = (0, D.A)(f),
        y = !k && (0, J.A)(f),
        E = !k && C,
        S = (0, X.VI)(g) && I && !m,
        [L, R] = i.useState(!1),
        B = i.useRef(!1),
        F = i.useRef(null),
        V = t ?? F,
        T = i.useRef(void 0),
        w = q.kt.getSetting(),
        z = (0, c.bG)([W.A], () => W.A.theme);
    function G() {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    }
    return (
        i.useEffect(() => {
            if (S && n && !B.current && w)
                return (
                    R(!0),
                    (T.current = setTimeout(() => {
                        R(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(T.current);
                    }
                );
        }, [S, n, w]),
        i.useEffect(() => {
            B.current = n;
        }, [n]),
        (0, s.jsx)(p.N, {
            theme: z,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": G(),
                            "data-banner-visible": n,
                            ref: V,
                            className: r()(l, {
                                [et.kL]: !0,
                                [et.r9]: G(),
                                [et.Pi]: n,
                                [e]: !1,
                                [et.Iv]: E || (A && y),
                            }),
                            onMouseDown: x,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: r()(et.wx, v, { [et.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: r()(et.VW, et.Nk),
                                            children: (0, s.jsx)(el, {
                                                bannerVisible: n,
                                                guild: f,
                                                onClick: d,
                                                onContextMenu: u,
                                                ariaControls: j,
                                                ariaExpanded: h,
                                                children: b,
                                            }),
                                        }),
                                        y &&
                                            (0, s.jsx)(es, {
                                                guild: f,
                                                controller: a,
                                                hasBanner: null != g,
                                                hasSubheader: A ?? !1,
                                            }),
                                    ],
                                }),
                                null != g
                                    ? (0, s.jsx)(en, { guild: f, controller: a, guildBanner: g, animate: L })
                                    : null,
                                (0, s.jsx)(ec, { controller: a }),
                            ],
                        }),
                        S && G()
                            ? (0, s.jsx)("div", {
                                  className: et.rt,
                                  onMouseEnter: () => {
                                      R(!0), clearTimeout(T.current);
                                  },
                                  onMouseLeave: () => R(!1),
                                  style: { height: N },
                              })
                            : null,
                    ],
                }),
        })
    );
});
function ec(e) {
    let { controller: t } = e,
        { theme: n } = (0, N.wR)(),
        i = t.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.animated.div, { className: et.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(l.animated.div, { className: et.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(l.animated.div, {
                className: et.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, b.q)(n) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
