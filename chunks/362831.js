a.d(e, { A: () => V });
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
    A = a(793574),
    f = a(688810),
    E = a(660298),
    g = a(587895),
    I = a(429913),
    m = a(403362);
let h = {
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
Object.values(h);
var L = a(229231),
    y = a(792996);
let _ = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => y.intl.string(y.t.xJtdIm),
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.VALORANT }),
        getAriaLabel: () => y.intl.string(y.t.Ae8tRi),
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [h.PEAK, h.BATTLEFIELD_6, h.REPO, h.BALDURS_GATE_3] }),
        getAriaLabel: () => y.intl.string(y.t["pBR+4j"]),
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [h.MARVEL_RIVALS, h.WORLD_OF_WARCRAFT, h.RUST, h.SILKSONG],
        }),
        getAriaLabel: () => y.intl.string(y.t.NtoBi1),
    },
    [s.x.APPLICATION]: {
        placeholder: (t) => ({ variant: "application-widget", applicationId: t.applicationId }),
        getAriaLabel: (t) =>
            y.intl.formatToPlainString(y.t.KfGahB, {
                applicationName: g.A.getApplication(t.applicationId)?.name ?? "",
            }),
    },
    [s.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => y.intl.string(y.t["7AVpta"]),
    },
};
function N(t) {
    return _[t.type].placeholder(t);
}
var P = a(735321),
    T = a(384377),
    x = a(492280),
    R = a(886100),
    j = a(598748),
    S = a(855986),
    D = a(141628),
    v = a(531913),
    G = a(287809),
    O = a(183555),
    w = a(378145);
function b(t) {
    let e = (0, S.bG)([G.default], () => G.default.getCurrentUser());
    return null == e ? null : (0, i.jsx)(C, { ...t, userId: e.id });
}
function C(t) {
    let { applicationId: e, size: a = "default", userId: l } = t,
        n = (0, v.A)(l, e),
        r = n.surfaceConfigs[j.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: w.kL,
              children: (0, i.jsx)(R.kH, {
                  ...n,
                  surface: j.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === a },
              }),
          });
}
function F(t) {
    let { applicationId: e, size: a = "default" } = t,
        { trackUserProfileAction: n } = (0, O.NJ)(),
        r = (0, I.h)(e),
        { hasAlreadyLinked: s, canStartAuthorization: c, startAuthorization: o, fetched: d } = (0, E.RD)(r),
        { analyticsLocations: u } = (0, f.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        g = l.useCallback(() => {
            c &&
                (n({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                o({ analyticsLocations: u }));
        }, [c, n, e, o, u]);
    return "default" !== a || null == r
        ? null
        : (0, i.jsxs)("div", {
              className: w.qr,
              children: [
                  (0, i.jsx)(D.ExperimentalGameControllerLinkIcon, { size: "xs" }),
                  (0, i.jsx)(p.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: d
                          ? s
                              ? y.intl.format(y.t.wiyuG9, { applicationName: r.name })
                              : c
                                ? y.intl.format(y.t.RNWFOQ, { onConnect: g })
                                : y.intl.string(y.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: w.bg }),
                  }),
              ],
          });
}
a(600253);
var W = a(307897);
function U(t) {
    let { className: e, size: a } = t;
    return (0, i.jsx)("div", {
        className: r()(W.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: W.CX,
            children: [
                (0, i.jsx)("div", { className: r()(W.$Q, { [W.EX]: "small" === a }) }),
                (0, i.jsx)("div", {
                    className: W._A,
                    children: Array.from({ length: 4 }, (t, e) =>
                        (0, i.jsx)("div", { className: r()(W.Tc, { [W.EX]: "small" === a }) }, e),
                    ),
                }),
            ],
        }),
    });
}
var k = a(518477),
    B = a(866680);
let M = { [s.x.APPLICATION]: { icon: (t) => g.A.getApplication(t.applicationId)?.getIconURL(16) } };
function V(t) {
    let e,
        {
            widget: a,
            onAddWidget: n,
            listItemProps: g,
            size: h = "default",
            compact: R = !1,
            loading: j = !1,
            trackUserProfileEditAction: S,
            isHighlighted: D = !1,
            onSelect: v,
        } = t,
        { icon: G } = M[a.type] ?? {},
        O = "small" === h,
        w = a.type === s.x.APPLICATION,
        C = w ? a.applicationId : void 0,
        W = (0, I.h)(C),
        { hasAlreadyLinked: V, canStartAuthorization: K, startAuthorization: X } = (0, E.RD)(W),
        q = null == v && w && !V && K,
        { analyticsLocations: H } = (0, f.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
        Y = l.useCallback(() => {
            if (!j) {
                if (null != v) return void v();
                ((0, P.Y5)(a),
                    S({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                    (0, T.XA)(k.jM.WIDGET_ADDED),
                    n?.(),
                    q && X({ analyticsLocations: H }));
            }
        }, [j, v, q, a, S, n, X, H]),
        z = G?.(a),
        Q =
            null == z
                ? null
                : "string" == typeof z
                  ? (0, i.jsx)("img", { src: z, alt: "", width: 16, height: 16, className: B.Kk })
                  : z,
        J = R && w,
        $ = q ? c.LinkIcon : o.CirclePlusIcon,
        Z = !w,
        tt = D ? (0, i.jsx)(d.E, { type: "new", variant: "primary" }) : null;
    return (0, i.jsxs)("div", {
        className: r()(B.LG, R && B.oE),
        children: [
            (0, i.jsxs)(u.D, {
                className: r()(B.PH, O && B.PG, j && B.Lq),
                ...g,
                onClick: Y,
                "aria-label":
                    q && null != W
                        ? y.intl.formatToPlainString(y.t.ATS0FK, { applicationName: W.name })
                        : _[a.type].getAriaLabel(a),
                "aria-busy": j,
                children: [
                    (function () {
                        let t = N(a);
                        switch (t.variant) {
                            case "details":
                                return (0, i.jsx)(x.E, {
                                    className: B.l4,
                                    gridClassName: B.Qs,
                                    gameId: t.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(x.l, {
                                    className: B.l4,
                                    gridClassName: B.Qs,
                                    gameIds: t.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(b, { applicationId: t.applicationId, size: h });
                            case "clips-gallery":
                                return (0, i.jsx)(U, { className: B.l4, size: h });
                            default:
                                return (0, m.xb)(t);
                        }
                    })(),
                    Z && null != tt && (0, i.jsx)("div", { className: B.X4, children: tt }),
                    (0, i.jsxs)("div", {
                        className: B.Lw,
                        children: [
                            (0, i.jsx)($, { size: "md", color: "currentColor", className: B.c9 }),
                            (0, i.jsxs)("div", {
                                className: B.DD,
                                children: [
                                    !J && Q,
                                    (0, i.jsx)(p.E, {
                                        variant: J ? "body-sm/semibold" : "body-md/medium",
                                        color: R ? "text-default" : "text-strong",
                                        children: (function (t) {
                                            let { getTitle: e } = _[t.type];
                                            return null != e ? e(t) : L.Ok[t.type](t);
                                        })(a),
                                    }),
                                    J && Q,
                                    D && !Z && (0, i.jsx)(d.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (e = N(a)).variant
                ? (0, i.jsx)(F, { applicationId: e.applicationId, size: h })
                : null,
        ],
    });
}
