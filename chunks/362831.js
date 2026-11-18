a.d(e, { A: () => H });
var i = a(477900),
    l = a(582128),
    n = a(503698),
    r = a.n(n),
    s = a(540185),
    c = a(173936),
    o = a(245604),
    d = a(805251),
    u = a(939249),
    p = a(834730),
    E = a(793574),
    A = a(688810),
    I = a(660298),
    f = a(587895),
    _ = a(429913),
    g = a(403362);
let R = {
    LEAGUE_OF_LEGENDS: "1402418696126992445",
    VALORANT: "700136079562375258",
    PEAK: "1384276457596911676",
    REPO: "1344368447928401961",
    BALDURS_GATE_3: "1137125502985961543",
    MARVEL_RIVALS: "1314395942253756416",
    WORLD_OF_WARCRAFT: "356875762940379136",
    RUST: "1402418594532298837",
    BATTLEFIELD_6: "1402692356343599254",
    SILKSONG: "1413176957381771337",
};
Object.values(R);
var L = a(229231),
    h = a(792996);
let m = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: R.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => h.intl.string(h.t.xJtdIm),
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: R.VALORANT }),
        getAriaLabel: () => h.intl.string(h.t.Ae8tRi),
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [R.PEAK, R.BATTLEFIELD_6, R.REPO, R.BALDURS_GATE_3] }),
        getAriaLabel: () => h.intl.string(h.t["pBR+4j"]),
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [R.MARVEL_RIVALS, R.WORLD_OF_WARCRAFT, R.RUST, R.SILKSONG],
        }),
        getAriaLabel: () => h.intl.string(h.t.NtoBi1),
    },
    [s.x.APPLICATION]: {
        placeholder: (t) => ({ variant: "application-widget", applicationId: t.applicationId }),
        getAriaLabel: (t) =>
            h.intl.formatToPlainString(h.t.KfGahB, {
                applicationName: f.A.getApplication(t.applicationId)?.name ?? "",
            }),
    },
    [s.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => h.intl.string(h.t["7AVpta"]),
    },
};
function T(t) {
    return m[t.type].placeholder(t);
}
var S = a(735321),
    N = a(384377),
    P = a(492280),
    y = a(886100),
    C = a(598748),
    O = a(855986),
    D = a(141628),
    x = a(531913),
    G = a(287809),
    j = a(183555),
    v = a(378145);
function F(t) {
    let e = (0, O.bG)([G.default], () => G.default.getCurrentUser());
    return null == e ? null : (0, i.jsx)(w, { ...t, userId: e.id });
}
function w(t) {
    let { applicationId: e, size: a = "default", userId: l } = t,
        n = (0, x.A)(l, e),
        r = n.surfaceConfigs[C.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: v.kL,
              children: (0, i.jsx)(y.kH, {
                  ...n,
                  surface: C.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === a },
              }),
          });
}
function b(t) {
    let { applicationId: e, size: a = "default" } = t,
        { trackUserProfileAction: n } = (0, j.NJ)(),
        r = (0, _.h)(e),
        { hasAlreadyLinked: s, canStartAuthorization: c, startAuthorization: o, fetched: d } = (0, I.RD)(r),
        { analyticsLocations: u } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        f = l.useCallback(() => {
            c &&
                (n({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                o({ analyticsLocations: u }));
        }, [c, n, e, o, u]);
    return "default" !== a || null == r
        ? null
        : (0, i.jsxs)("div", {
              className: v.qr,
              children: [
                  (0, i.jsx)(D.ExperimentalGameControllerLinkIcon, { size: "xs" }),
                  (0, i.jsx)(p.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: d
                          ? s
                              ? h.intl.format(h.t.wiyuG9, { applicationName: r.name })
                              : c
                                ? h.intl.format(h.t.RNWFOQ, { onConnect: f })
                                : h.intl.string(h.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: v.bg }),
                  }),
              ],
          });
}
a(600253);
var U = a(307897);
function W(t) {
    let { className: e, size: a } = t;
    return (0, i.jsx)("div", {
        className: r()(U.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: U.CX,
            children: [
                (0, i.jsx)("div", { className: r()(U.$Q, { [U.EX]: "small" === a }) }),
                (0, i.jsx)("div", {
                    className: U._A,
                    children: Array.from({ length: 4 }, (t, e) =>
                        (0, i.jsx)("div", { className: r()(U.Tc, { [U.EX]: "small" === a }) }, e),
                    ),
                }),
            ],
        }),
    });
}
var V = a(518477),
    k = a(866680);
let B = { [s.x.APPLICATION]: { icon: (t) => f.A.getApplication(t.applicationId)?.getIconURL(16) } };
function H(t) {
    let e,
        {
            widget: a,
            onAddWidget: n,
            listItemProps: f,
            size: R = "default",
            compact: y = !1,
            loading: C = !1,
            trackUserProfileEditAction: O,
            isHighlighted: D = !1,
            onSelect: x,
        } = t,
        { icon: G } = B[a.type] ?? {},
        j = "small" === R,
        v = a.type === s.x.APPLICATION,
        w = v ? a.applicationId : void 0,
        U = (0, _.h)(w),
        { hasAlreadyLinked: H, canStartAuthorization: J, startAuthorization: M } = (0, I.RD)(U),
        K = null == x && v && !H && J,
        { analyticsLocations: q } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        X = l.useCallback(() => {
            if (!C) {
                if (null != x) return void x();
                ((0, S.Y5)(a),
                    O({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                    (0, N.XA)(V.jM.WIDGET_ADDED),
                    n?.(),
                    K && M({ analyticsLocations: q }));
            }
        }, [C, x, K, a, O, n, M, q]),
        Y = G?.(a),
        z =
            null == Y
                ? null
                : "string" == typeof Y
                  ? (0, i.jsx)("img", { src: Y, alt: "", width: 16, height: 16, className: k.Kk })
                  : Y,
        Q = y && v,
        $ = K ? c.LinkIcon : o.CirclePlusIcon,
        Z = !v,
        tt = D ? (0, i.jsx)(d.E, { type: "new", variant: "primary" }) : null;
    return (0, i.jsxs)("div", {
        className: r()(k.LG, y && k.oE),
        children: [
            (0, i.jsxs)(u.D, {
                className: r()(k.PH, j && k.PG, C && k.Lq),
                ...f,
                onClick: X,
                "aria-label":
                    K && null != U
                        ? h.intl.formatToPlainString(h.t.ATS0FK, { applicationName: U.name })
                        : m[a.type].getAriaLabel(a),
                "aria-busy": C,
                children: [
                    (function () {
                        let t = T(a);
                        switch (t.variant) {
                            case "details":
                                return (0, i.jsx)(P.E, {
                                    className: k.l4,
                                    gridClassName: k.Qs,
                                    gameId: t.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(P.l, {
                                    className: k.l4,
                                    gridClassName: k.Qs,
                                    gameIds: t.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(F, { applicationId: t.applicationId, size: R });
                            case "clips-gallery":
                                return (0, i.jsx)(W, { className: k.l4, size: R });
                            default:
                                return (0, g.xb)(t);
                        }
                    })(),
                    Z && null != tt && (0, i.jsx)("div", { className: k.X4, children: tt }),
                    (0, i.jsxs)("div", {
                        className: k.Lw,
                        children: [
                            (0, i.jsx)($, { size: "md", color: "currentColor", className: k.c9 }),
                            (0, i.jsxs)("div", {
                                className: k.DD,
                                children: [
                                    !Q && z,
                                    (0, i.jsx)(p.E, {
                                        variant: Q ? "body-sm/semibold" : "body-md/medium",
                                        color: y ? "text-default" : "text-strong",
                                        children: (function (t) {
                                            let { getTitle: e } = m[t.type];
                                            return null != e ? e(t) : L.Ok[t.type](t);
                                        })(a),
                                    }),
                                    Q && z,
                                    D && !Z && (0, i.jsx)(d.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (e = T(a)).variant
                ? (0, i.jsx)(b, { applicationId: e.applicationId, size: R })
                : null,
        ],
    });
}
