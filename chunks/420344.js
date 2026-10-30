n.d(t, { Ay: () => ea });
var s = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(941143),
    o = n(607399),
    c = n(17928),
    d = n(661531),
    u = n(866665),
    x = n(682697),
    m = n(834730),
    h = n(27232),
    j = n(297264),
    f = n(192308),
    g = n(939249),
    p = n(241541),
    N = n(43990),
    b = n(38021),
    v = n(366010),
    A = n(5180),
    C = n(265872),
    I = n(499373),
    E = n(760658),
    k = n(105292);
let y = i.lazy(() => Promise.all([n.e("732100"), n.e("879948")]).then(n.bind(n, 329671)));
function D(e) {
    let { className: t } = e,
        n = k.intl.string(E.default.G9fGlP),
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
            return (0, s.jsx)(u.m, {
                text: n,
                position: "bottom",
                asContainer: !0,
                shouldShow: !l,
                children: (0, s.jsx)(g.D, {
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
    R = n(855687),
    S = n(876798),
    B = n(997146),
    L = n(606096),
    T = n(935063),
    F = n(408278),
    G = n(143838),
    O = n(334738),
    _ = n(573163),
    w = n(932883),
    P = n(599486),
    U = n(394953),
    V = n(849077);
function z() {
    let e = (0, w.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, P.A)(),
        i = t === V.Io.BOOKMARKS,
        a = i ? k.intl.string(k.t.HcoRu0) : k.intl.string(k.t["2pAkDA"]);
    return (0, s.jsx)(u.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(S.k, {
            icon: B.c,
            selectedIcon: L.BookmarkIcon,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? V.Io.ALL : V.Io.BOOKMARKS;
                (n(t), (0, w.Ut)({ section: t, enabled: !0, viewId: e }));
            },
        }),
    });
}
function Y() {
    let e = (0, w.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, P.A)(),
        i = t === V.Io.MENTIONS,
        a = i ? k.intl.string(k.t.HcoRu0) : k.intl.string(k.t.jbV6MM);
    return (0, s.jsx)(u.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(S.k, {
            icon: T.X,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? V.Io.ALL : V.Io.MENTIONS;
                (n(t), (0, w.Ut)({ section: t, enabled: !0, viewId: e }));
            },
        }),
    });
}
function K() {
    let { unreadChannelIds: e } = (0, U.U4)();
    return (0, s.jsx)(u.m, {
        position: "bottom",
        text: k.intl.string(k.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(F.K, {
            icon: G.i,
            variant: "icon-only",
            size: "sm",
            "aria-label": k.intl.string(k.t["8k+6QY"]),
            onClick: function () {
                let t = e
                    .map((e) => ({ channelId: e, messageId: _.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && O.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var $ = n(363195),
    H = n(253932),
    q = n(576705),
    Q = n(486020),
    W = n(885631),
    X = n(537547),
    Z = n(652215),
    J = n(486506);
function ee(e) {
    let { guild: t, controller: n, guildBanner: i, animate: a } = e,
        { value: c } = n.springs;
    return (0, s.jsx)(r.animated.div, {
        className: J.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(r.animated.div, {
            className: l()(J._e, { [J.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: l()(J.Q, { [J.fr]: o.Fr }),
                src: Q.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function et(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: a } = e,
        { value: o } = n.springs,
        c = t.features.has(Z.GuildFeatures.DISCOVERABLE),
        h = (0, s.jsx)("div", {
            className: J.WV,
            children:
                c &&
                (0, s.jsx)(u.m, {
                    text: k.intl.string(k.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: J.Pl,
                        children: [
                            (0, s.jsx)(x.f, {
                                size: "custom",
                                color: d.A.colors.BADGE_INVERTED_BACKGROUND,
                                secondaryColor: d.A.colors.BADGE_INVERTED_TEXT,
                                width: 16,
                                height: 16,
                                className: J.ju,
                            }),
                            (0, s.jsx)(m.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: k.intl.string(k.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return a
        ? (0, s.jsx)("div", { className: l()(J.pS, J.W$), children: h })
        : (0, s.jsx)(r.animated.div, {
              className: J.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function en() {
    return (0, s.jsx)(h.StarIcon, { size: "custom", color: "currentColor", className: J.PA, height: 20, width: 20 });
}
function es(e) {
    let { guild: t } = e;
    return (0, s.jsx)(j.D, { variant: "text-md/semibold", lineClamp: 1, className: J.UU, children: (0, A.YC)(t) });
}
function ei(e) {
    let { bannerVisible: t, guild: a, onClick: l, onContextMenu: r, ariaControls: o, ariaExpanded: d, children: x } = e,
        m = (0, A.YC)(a),
        h = (0, c.bG)([q.A], () => (0, R.K)(q.A, a)),
        j = i.useCallback(() => {
            h
                ? (0, f.openModalLazy)(async () => {
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
                      return (t) => (0, s.jsx)(e, { ...t, guild: a, source: Z.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, f.openModalLazy)(async () => {
                      let { default: e } = await n.e("962751").then(n.bind(n, 132610));
                      return (t) => (0, s.jsx)(e, { ...t });
                  });
        }, [h, a]),
        N = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: J.LO,
                    children: [
                        (0, s.jsx)(X.A, { guild: a, isBannerVisible: t }),
                        (0, A.ai)(a.id) && (0, s.jsx)(en, {}),
                        (0, s.jsx)(es, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: J.dx, children: x }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === Z.gNP
                ? (0, s.jsx)("div", { className: J.Bd, children: N })
                : (0, s.jsx)(g.D, {
                      className: J.Vm,
                      "aria-label": k.intl.formatToPlainString(k.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": d,
                      onContextMenu: r,
                      onClick: l,
                      children: N,
                  }),
            (0, A.ai)(a.id) && (0, s.jsx)(D, { className: J.sq }),
            !(0, A.ai)(a.id) &&
                a.id !== Z.gNP &&
                (0, s.jsx)(u.m, {
                    text: k.intl.string(k.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(g.D, {
                        "aria-label": k.intl.string(k.t.Sd8Ixw),
                        className: J.ak,
                        onClick: () => {
                            j();
                        },
                        children: (0, s.jsx)(p.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === Z.gNP &&
                (0, s.jsxs)("div", {
                    className: J.aZ,
                    children: [(0, s.jsx)(Y, {}), (0, s.jsx)(z, {}), (0, s.jsx)(K, {})],
                }),
        ],
    });
}
let ea = i.memo(function (e) {
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
            animationOverlayHeight: p,
            children: b,
            headerClassName: v,
            communityInfoVisible: A,
            hasSubheader: C,
        } = e,
        I = f.features.has(Z.GuildFeatures.ANIMATED_BANNER),
        E = (0, M.A)(f),
        k = !E && (0, W.A)(f),
        y = !E && A,
        D = (0, Q.VI)(g) && I && !m,
        [R, S] = i.useState(!1),
        B = i.useRef(!1),
        L = i.useRef(null),
        T = t ?? L,
        F = i.useRef(void 0),
        G = H.kt.getSetting(),
        O = (0, c.bG)([$.A], () => $.A.theme);
    function _() {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    }
    return (
        i.useEffect(() => {
            if (D && n && !B.current && G)
                return (
                    S(!0),
                    (F.current = setTimeout(() => {
                        S(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(F.current);
                    }
                );
        }, [D, n, G]),
        i.useEffect(() => {
            B.current = n;
        }, [n]),
        (0, s.jsx)(N.N, {
            theme: O,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": _(),
                            "data-banner-visible": n,
                            ref: T,
                            className: l()(r, { [J.kL]: !0, [J.r9]: _(), [J.Pi]: n, [e]: !1, [J.Iv]: y || (C && k) }),
                            onMouseDown: x,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: l()(J.wx, v, { [J.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: l()(J.VW, J.Nk),
                                            children: (0, s.jsx)(ei, {
                                                bannerVisible: n,
                                                guild: f,
                                                onClick: d,
                                                onContextMenu: u,
                                                ariaControls: j,
                                                ariaExpanded: h,
                                                children: b,
                                            }),
                                        }),
                                        k &&
                                            (0, s.jsx)(et, {
                                                guild: f,
                                                controller: a,
                                                hasBanner: null != g,
                                                hasSubheader: C ?? !1,
                                            }),
                                    ],
                                }),
                                null != g
                                    ? (0, s.jsx)(ee, { guild: f, controller: a, guildBanner: g, animate: R })
                                    : null,
                                (0, s.jsx)(el, { controller: a }),
                            ],
                        }),
                        D && _()
                            ? (0, s.jsx)("div", {
                                  className: J.rt,
                                  onMouseEnter: () => {
                                      (S(!0), clearTimeout(F.current));
                                  },
                                  onMouseLeave: () => S(!1),
                                  style: { height: p },
                              })
                            : null,
                    ],
                }),
        })
    );
});
function el(e) {
    let { controller: t } = e,
        { theme: n } = (0, b.wR)(),
        i = t.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.animated.div, { className: J.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(r.animated.div, { className: J.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(r.animated.div, {
                className: J.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, v.q)(n) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
