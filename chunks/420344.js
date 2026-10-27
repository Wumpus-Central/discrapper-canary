n.d(t, { Ay: () => ei });
var s = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(399513),
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
    C = n(265872),
    I = n(499373),
    A = n(22277),
    k = n(105292);
let y = i.lazy(() => Promise.all([n.e("732100"), n.e("879948")]).then(n.bind(n, 329671)));
function E(e) {
    let { className: t } = e,
        n = k.intl.string(A.default.G9fGlP),
        a = i.useRef(null),
        l = i.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i.Suspense, {
                fallback: null,
                children: (0, s.jsx)(y, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return (0, s.jsx)(C.Y, {
        targetElementRef: a,
        position: "bottom",
        align: "left",
        spacing: 4,
        renderPopout: l,
        children: (e, i) => {
            let { isShown: l } = i;
            return (0, s.jsx)(d.m, {
                text: n,
                position: "bottom",
                asContainer: !0,
                shouldShow: !l,
                children: (0, s.jsx)(f.D, {
                    innerRef: a,
                    className: t,
                    "aria-label": n,
                    ...e,
                    children: (0, s.jsx)(I.T, { color: "currentColor", size: "refresh_sm" }),
                }),
            });
        },
    });
}
var M = n(454938),
    S = n(855687),
    L = n(876798),
    R = n(997146),
    D = n(606096),
    B = n(935063),
    F = n(408278),
    w = n(143838),
    O = n(334738),
    P = n(573163),
    T = n(932883),
    z = n(599486),
    G = n(394953),
    U = n(849077);
function V() {
    let e = (0, T.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, z.A)(),
        i = t === U.Io.BOOKMARKS,
        a = i ? k.intl.string(k.t.HcoRu0) : k.intl.string(k.t["2pAkDA"]);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(L.k, {
            icon: R.c,
            selectedIcon: D.BookmarkIcon,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? U.Io.ALL : U.Io.BOOKMARKS;
                (n(t), (0, T.Ut)({ section: t, enabled: !0, viewId: e }));
            },
        }),
    });
}
function _() {
    let e = (0, T.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, z.A)(),
        i = t === U.Io.MENTIONS,
        a = i ? k.intl.string(k.t.HcoRu0) : k.intl.string(k.t.jbV6MM);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(L.k, {
            icon: B.X,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? U.Io.ALL : U.Io.MENTIONS;
                (n(t), (0, T.Ut)({ section: t, enabled: !0, viewId: e }));
            },
        }),
    });
}
function Y() {
    let { unreadChannelIds: e } = (0, G.U4)();
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: k.intl.string(k.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(F.K, {
            icon: w.i,
            variant: "icon-only",
            size: "sm",
            "aria-label": k.intl.string(k.t["8k+6QY"]),
            onClick: function () {
                let t = e
                    .map((e) => ({ channelId: e, messageId: P.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && O.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var K = n(363195),
    $ = n(253932),
    H = n(576705),
    q = n(486020),
    Q = n(885631),
    W = n(537547),
    X = n(652215),
    Z = n(486506);
function J(e) {
    let { guild: t, controller: n, guildBanner: i, animate: a } = e,
        { value: c } = n.springs;
    return (0, s.jsx)(r.animated.div, {
        className: Z.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(r.animated.div, {
            className: l()(Z._e, { [Z.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: l()(Z.Q, { [Z.fr]: o.Fr }),
                src: q.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function ee(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: a } = e,
        { value: o } = n.springs,
        c = t.features.has(X.GuildFeatures.DISCOVERABLE),
        m = (0, s.jsx)("div", {
            className: Z.WV,
            children:
                c &&
                (0, s.jsx)(d.m, {
                    text: k.intl.string(k.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: Z.Pl,
                        children: [
                            (0, s.jsx)(u.GlobeEarthIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: Z.ju,
                            }),
                            (0, s.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: k.intl.string(k.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return a
        ? (0, s.jsx)("div", { className: l()(Z.pS, Z.W$), children: m })
        : (0, s.jsx)(r.animated.div, {
              className: Z.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: m,
          });
}
function et() {
    return (0, s.jsx)(m.StarIcon, { size: "custom", color: "currentColor", className: Z.PA, height: 20, width: 20 });
}
function en(e) {
    let { guild: t } = e;
    return (0, s.jsx)(h.D, { variant: "text-md/semibold", lineClamp: 1, className: Z.UU, children: (0, v.YC)(t) });
}
function es(e) {
    let { bannerVisible: t, guild: a, onClick: l, onContextMenu: r, ariaControls: o, ariaExpanded: u, children: x } = e,
        m = (0, v.YC)(a),
        h = (0, c.bG)([H.A], () => (0, S.K)(H.A, a)),
        p = i.useCallback(() => {
            h
                ? (0, j.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("683621"),
                          n.e("711162"),
                          n.e("401425"),
                          n.e("70833"),
                          n.e("897073"),
                          n.e("159957"),
                          n.e("728136"),
                          n.e("216084"),
                          n.e("284819"),
                      ]).then(n.bind(n, 405342));
                      return (t) => (0, s.jsx)(e, { ...t, guild: a, source: X.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await n.e("962751").then(n.bind(n, 132610));
                      return (t) => (0, s.jsx)(e, { ...t });
                  });
        }, [h, a]),
        N = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: Z.LO,
                    children: [
                        (0, s.jsx)(W.A, { guild: a, isBannerVisible: t }),
                        (0, v.ai)(a.id) && (0, s.jsx)(et, {}),
                        (0, s.jsx)(en, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: Z.dx, children: x }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === X.gNP
                ? (0, s.jsx)("div", { className: Z.Bd, children: N })
                : (0, s.jsx)(f.D, {
                      className: Z.Vm,
                      "aria-label": k.intl.formatToPlainString(k.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": u,
                      onContextMenu: r,
                      onClick: l,
                      children: N,
                  }),
            (0, v.ai)(a.id) && (0, s.jsx)(E, { className: Z.sq }),
            !(0, v.ai)(a.id) &&
                a.id !== X.gNP &&
                (0, s.jsx)(d.m, {
                    text: k.intl.string(k.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(f.D, {
                        "aria-label": k.intl.string(k.t.Sd8Ixw),
                        className: Z.ak,
                        onClick: () => {
                            p();
                        },
                        children: (0, s.jsx)(g.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === X.gNP &&
                (0, s.jsxs)("div", {
                    className: Z.aZ,
                    children: [(0, s.jsx)(_, {}), (0, s.jsx)(V, {}), (0, s.jsx)(Y, {})],
                }),
        ],
    });
}
let ei = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: a,
            className: r,
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
            hasSubheader: I,
        } = e,
        A = f.features.has(X.GuildFeatures.ANIMATED_BANNER),
        k = (0, M.A)(f),
        y = !k && (0, Q.A)(f),
        E = !k && C,
        S = (0, q.VI)(g) && A && !m,
        [L, R] = i.useState(!1),
        D = i.useRef(!1),
        B = i.useRef(null),
        F = t ?? B,
        w = i.useRef(void 0),
        O = $.kt.getSetting(),
        P = (0, c.bG)([K.A], () => K.A.theme);
    function T() {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    }
    return (
        i.useEffect(() => {
            if (S && n && !D.current && O)
                return (
                    R(!0),
                    (w.current = setTimeout(() => {
                        R(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(w.current);
                    }
                );
        }, [S, n, O]),
        i.useEffect(() => {
            D.current = n;
        }, [n]),
        (0, s.jsx)(p.N, {
            theme: P,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": T(),
                            "data-banner-visible": n,
                            ref: F,
                            className: l()(r, { [Z.kL]: !0, [Z.r9]: T(), [Z.Pi]: n, [e]: !1, [Z.Iv]: E || (I && y) }),
                            onMouseDown: x,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: l()(Z.wx, v, { [Z.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: l()(Z.VW, Z.Nk),
                                            children: (0, s.jsx)(es, {
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
                                            (0, s.jsx)(ee, {
                                                guild: f,
                                                controller: a,
                                                hasBanner: null != g,
                                                hasSubheader: I ?? !1,
                                            }),
                                    ],
                                }),
                                null != g
                                    ? (0, s.jsx)(J, { guild: f, controller: a, guildBanner: g, animate: L })
                                    : null,
                                (0, s.jsx)(ea, { controller: a }),
                            ],
                        }),
                        S && T()
                            ? (0, s.jsx)("div", {
                                  className: Z.rt,
                                  onMouseEnter: () => {
                                      (R(!0), clearTimeout(w.current));
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
function ea(e) {
    let { controller: t } = e,
        { theme: n } = (0, N.wR)(),
        i = t.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.animated.div, { className: Z.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(r.animated.div, { className: Z.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(r.animated.div, {
                className: Z.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, b.q)(n) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
