t.d(n, { Ay: () => ea });
var s = t(477900),
    i = t(582128),
    a = t(503698),
    l = t.n(a),
    r = t(120692),
    o = t(607399),
    c = t(855986),
    d = t(646514),
    u = t(866665),
    m = t(682697),
    x = t(834730),
    h = t(27232),
    j = t(534514),
    g = t(192308),
    f = t(939249),
    p = t(241541),
    N = t(43990),
    b = t(38021),
    I = t(366010),
    v = t(5180),
    A = t(265872),
    C = t(499373),
    k = t(708526),
    E = t(792996);
let y = i.lazy(() => Promise.all([t.e(732100), t.e(387141), t.e(879948)]).then(t.bind(t, 329671)));
function M(e) {
    let { className: n } = e,
        t = E.intl.string(k.default.G9fGlP),
        a = i.useRef(null),
        l = i.useCallback((e) => {
            let { closePopout: n } = e;
            return (0, s.jsx)(i.Suspense, {
                fallback: null,
                children: (0, s.jsx)(y, { navId: "favorite-guild-header-add-context", onClose: n, onSelect: n }),
            });
        }, []);
    return (0, s.jsx)(A.Y, {
        targetElementRef: a,
        position: "bottom",
        align: "left",
        spacing: 4,
        renderPopout: l,
        children: (e, i) => {
            let { isShown: l } = i;
            return (0, s.jsx)(u.m, {
                text: t,
                position: "bottom",
                asContainer: !0,
                shouldShow: !l,
                children: (0, s.jsx)(f.D, {
                    innerRef: a,
                    className: n,
                    "aria-label": t,
                    ...e,
                    children: (0, s.jsx)(C.PlusMediumIcon, { color: "currentColor", size: "refresh_sm" }),
                }),
            });
        },
    });
}
var D = t(454938),
    R = t(855687),
    S = t(876798),
    B = t(997146),
    T = t(606096),
    G = t(935063),
    L = t(408278),
    O = t(143838),
    P = t(334738),
    F = t(218461),
    _ = t(932883),
    w = t(599486),
    U = t(394953),
    V = t(849077);
function z() {
    let e = (0, _.op)(),
        { selectedFilter: n, setSelectedFilter: t } = (0, w.A)(),
        i = n === V.Io.BOOKMARKS,
        a = i ? E.intl.string(E.t.HcoRu0) : E.intl.string(E.t["2pAkDA"]);
    return (0, s.jsx)(u.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(S.k, {
            icon: B.BookmarkOutlineIcon,
            selectedIcon: T.BookmarkIcon,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let n = i ? V.Io.ALL : V.Io.BOOKMARKS;
                (t(n), (0, _.Ut)({ section: n, enabled: !0, viewId: e }));
            },
        }),
    });
}
function Y() {
    let e = (0, _.op)(),
        { selectedFilter: n, setSelectedFilter: t } = (0, w.A)(),
        i = n === V.Io.MENTIONS,
        a = i ? E.intl.string(E.t.HcoRu0) : E.intl.string(E.t.jbV6MM);
    return (0, s.jsx)(u.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(S.k, {
            icon: G.AtIcon,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let n = i ? V.Io.ALL : V.Io.MENTIONS;
                (t(n), (0, _.Ut)({ section: n, enabled: !0, viewId: e }));
            },
        }),
    });
}
function K() {
    let { unreadChannelIds: e } = (0, U.U4)();
    return (0, s.jsx)(u.m, {
        position: "bottom",
        text: E.intl.string(E.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(L.K, {
            icon: O.DoubleCheckmarkIcon,
            variant: "icon-only",
            size: "sm",
            "aria-label": E.intl.string(E.t["8k+6QY"]),
            onClick: function () {
                let n = e
                    .map((e) => ({ channelId: e, messageId: F.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== n.length && P.Uq(n);
            },
            disabled: 0 === e.length,
        }),
    });
}
var $ = t(413599),
    H = t(253932),
    W = t(576705),
    q = t(486020),
    Q = t(885631),
    X = t(877126),
    Z = t(652215),
    J = t(486506);
function ee(e) {
    let { guild: n, controller: t, guildBanner: i, animate: a } = e,
        { value: c } = t.springs;
    return (0, s.jsx)(r.animated.div, {
        className: J.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(r.animated.div, {
            className: l()(J._e, { [J.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: l()(J.Q, { [J.fr]: o.Fr }),
                src: q.Ay.getGuildBannerURL({ id: n.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function en(e) {
    let { guild: n, controller: t, hasBanner: i, hasSubheader: a } = e,
        { value: o } = t.springs,
        c = n.features.has(Z.GuildFeatures.DISCOVERABLE),
        h = (0, s.jsx)("div", {
            className: J.WV,
            children:
                c &&
                (0, s.jsx)(u.m, {
                    text: E.intl.string(E.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: J.Pl,
                        children: [
                            (0, s.jsx)(m.ExperimentalWebBadgeIcon, {
                                size: "custom",
                                color: d.A.colors.BADGE_INVERTED_BACKGROUND,
                                secondaryColor: d.A.colors.BADGE_INVERTED_TEXT,
                                width: 16,
                                height: 16,
                                className: J.ju,
                            }),
                            (0, s.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "none",
                                children: E.intl.string(E.t["B/vjCu"]),
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
function et() {
    return (0, s.jsx)(h.StarIcon, { size: "custom", color: "currentColor", className: J.PA, height: 20, width: 20 });
}
function es(e) {
    let { guild: n } = e;
    return (0, s.jsx)(j.D, { variant: "body-md/semibold", lineClamp: 1, className: J.UU, children: (0, v.YC)(n) });
}
function ei(e) {
    let { bannerVisible: n, guild: a, onClick: l, onContextMenu: r, ariaControls: o, ariaExpanded: d, children: m } = e,
        x = (0, v.YC)(a),
        h = (0, c.bG)([W.A], () => (0, R.K)(W.A, a)),
        j = i.useCallback(() => {
            h
                ? (0, g.mM)(async () => {
                      let { default: e } = await Promise.all([
                          t.e(683621),
                          t.e(711162),
                          t.e(401425),
                          t.e(258398),
                          t.e(70833),
                          t.e(897073),
                          t.e(658216),
                          t.e(159957),
                          t.e(728136),
                          t.e(680029),
                          t.e(966623),
                      ]).then(t.bind(t, 660194));
                      return (n) => (0, s.jsx)(e, { ...n, guild: a, source: Z.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, g.mM)(async () => {
                      let { default: e } = await t.e(962751).then(t.bind(t, 132610));
                      return (n) => (0, s.jsx)(e, { ...n });
                  });
        }, [h, a]),
        N = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: J.LO,
                    children: [
                        (0, s.jsx)(X.A, { guild: a, isBannerVisible: n }),
                        (0, v.ai)(a.id) && (0, s.jsx)(et, {}),
                        (0, s.jsx)(es, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: J.dx, children: m }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === Z.gNP
                ? (0, s.jsx)("div", { className: J.Bd, children: N })
                : (0, s.jsx)(f.D, {
                      className: J.Vm,
                      "aria-label": E.intl.formatToPlainString(E.t.xMXpl3, { guildName: x }),
                      "aria-controls": o,
                      "aria-expanded": d,
                      onContextMenu: r,
                      onClick: l,
                      children: N,
                  }),
            (0, v.ai)(a.id) && (0, s.jsx)(M, { className: J.sq }),
            !(0, v.ai)(a.id) &&
                a.id !== Z.gNP &&
                (0, s.jsx)(u.m, {
                    text: E.intl.string(E.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(f.D, {
                        "aria-label": E.intl.string(E.t.Sd8Ixw),
                        className: J.ak,
                        onClick: () => {
                            j();
                        },
                        children: (0, s.jsx)(p.GroupPlusIcon, { size: "refresh_sm", color: "currentColor" }),
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
            ref: n,
            bannerVisible: t,
            controller: a,
            className: r,
            onClick: d,
            onContextMenu: u,
            onMouseDown: m,
            disableBannerAnimation: x,
            "aria-expanded": h,
            "aria-controls": j,
            guild: g,
            guildBanner: f,
            animationOverlayHeight: p,
            children: b,
            headerClassName: I,
            communityInfoVisible: v,
            hasSubheader: A,
        } = e,
        C = g.features.has(Z.GuildFeatures.ANIMATED_BANNER),
        k = (0, D.A)(g),
        E = !k && (0, Q.A)(g),
        y = !k && v,
        M = (0, q.VI)(f) && C && !x,
        [R, S] = i.useState(!1),
        B = i.useRef(!1),
        T = i.useRef(null),
        G = n ?? T,
        L = i.useRef(void 0),
        O = H.kt.getSetting(),
        P = (0, c.bG)([$.A], () => $.A.theme);
    function F() {
        let { renderBanner: n, guildBanner: t } = e;
        return null != t && !n;
    }
    return (
        i.useEffect(() => {
            if (M && t && !B.current && O)
                return (
                    S(!0),
                    (L.current = setTimeout(() => {
                        S(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(L.current);
                    }
                );
        }, [M, t, O]),
        i.useEffect(() => {
            B.current = t;
        }, [t]),
        (0, s.jsx)(N.N, {
            theme: P,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": F(),
                            "data-banner-visible": t,
                            ref: G,
                            className: l()(r, { [J.kL]: !0, [J.r9]: F(), [J.Pi]: t, [e]: !1, [J.Iv]: y || (A && E) }),
                            onMouseDown: m,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: l()(J.wx, I, { [J.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: l()(J.VW, J.Nk),
                                            children: (0, s.jsx)(ei, {
                                                bannerVisible: t,
                                                guild: g,
                                                onClick: d,
                                                onContextMenu: u,
                                                ariaControls: j,
                                                ariaExpanded: h,
                                                children: b,
                                            }),
                                        }),
                                        E &&
                                            (0, s.jsx)(en, {
                                                guild: g,
                                                controller: a,
                                                hasBanner: null != f,
                                                hasSubheader: A ?? !1,
                                            }),
                                    ],
                                }),
                                null != f
                                    ? (0, s.jsx)(ee, { guild: g, controller: a, guildBanner: f, animate: R })
                                    : null,
                                (0, s.jsx)(el, { controller: a }),
                            ],
                        }),
                        M && F()
                            ? (0, s.jsx)("div", {
                                  className: J.rt,
                                  onMouseEnter: () => {
                                      (S(!0), clearTimeout(L.current));
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
    let { controller: n } = e,
        { theme: t } = (0, b.wR)(),
        i = n.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.animated.div, { className: J.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(r.animated.div, { className: J.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(r.animated.div, {
                className: J.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, I.q)(t) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
