e.d(i, { A: () => y });
var l = e(477900),
    t = e(582128),
    n = e(503698),
    s = e.n(n),
    r = e(540185),
    c = e(173936),
    d = e(245604),
    o = e(939249),
    p = e(508770),
    u = e(834730),
    m = e(793574),
    A = e(688810),
    x = e(206828);
let I = (0, e(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var E = e(587895),
    N = e(429913),
    L = e(403362);
let v = {
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
Object.values(v);
var g = e(735321),
    j = e(384377),
    h = e(492280),
    R = e(794248),
    _ = e(598748),
    f = e(141628),
    P = e(17928),
    T = e(531913),
    D = e(287809),
    C = e(183555),
    G = e(375708),
    S = e(656192);
function b(a) {
    let i = (0, P.bG)([D.default], () => D.default.getCurrentUser());
    return null == i ? null : (0, l.jsx)(O, { ...a, userId: i.id });
}
function O(a) {
    let { applicationId: i, size: e = "default", userId: t } = a,
        n = (0, T.A)(t, i),
        s = n.surfaceConfigs[_.m.ADD_WIDGET_PREVIEW];
    return null == s
        ? null
        : (0, l.jsx)("div", {
              className: S.kL,
              children: (0, l.jsx)(R.kH, {
                  ...n,
                  surface: _.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: s,
                  layoutProps: { small: "small" === e },
              }),
          });
}
function k(a) {
    let { applicationId: i, size: e = "default" } = a,
        { trackUserProfileAction: n } = (0, C.NJ)(),
        s = (0, N.h)(i),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, x.RD)(s),
        { analyticsLocations: p } = (0, A.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
        I = t.useCallback(() => {
            c &&
                (n({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: i }),
                d({ analyticsLocations: p }));
        }, [c, n, i, d, p]);
    return "default" !== e || null == s
        ? null
        : (0, l.jsxs)("div", {
              className: S.qr,
              children: [
                  (0, l.jsx)(f.A, { size: "xs" }),
                  (0, l.jsx)(u.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? G.intl.format(G.t.wiyuG9, { applicationName: s.name })
                              : c
                                ? G.intl.format(G.t.RNWFOQ, { onConnect: I })
                                : G.intl.string(G.t["9TX4UT"])
                          : (0, l.jsx)("div", { className: S.bg }),
                  }),
              ],
          });
}
function F(a) {
    let { applicationId: i } = a,
        e = (0, N.h)(i),
        { hasAlreadyLinked: t, fetched: n } = (0, x.RD)(e);
    return null == e
        ? null
        : (0, l.jsx)(u.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: n
                  ? t
                      ? G.intl.format(G.t.wiyuG9, { applicationName: e.name })
                      : G.intl.string(G.t["9TX4UT"])
                  : (0, l.jsx)("div", { className: S.bg }),
          });
}
var U = e(518477),
    W = e(600705);
let w = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => G.intl.string(G.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.VALORANT }),
        getAriaLabel: () => G.intl.string(G.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [v.PEAK, v.BATTLEFIELD_6, v.REPO, v.BALDURS_GATE_3] }),
        getAriaLabel: () => G.intl.string(G.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [v.MARVEL_RIVALS, v.WORLD_OF_WARCRAFT, v.RUST, v.SILKSONG],
        }),
        getAriaLabel: () => G.intl.string(G.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        icon: (a) => E.A.getApplication(a.applicationId)?.getIconURL(16),
        getAriaLabel: (a) =>
            G.intl.formatToPlainString(G.t.KfGahB, {
                applicationName: E.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "grid", applicationIds: [] }),
        icon: () => null,
        getAriaLabel: () => "",
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "grid", applicationIds: [] }),
        icon: () => null,
        getAriaLabel: () => "",
    },
};
function y(a) {
    let i,
        {
            widget: e,
            onAddWidget: n,
            size: E = "default",
            loading: v = !1,
            trackUserProfileEditAction: R,
            isHighlighted: _ = !1,
            hideApplicationWidgetStatus: f = !1,
        } = a,
        { placeholder: P, getAriaLabel: T, icon: D } = w[e.type],
        C = I.useConfig({ location: m.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        S = e.type === r.x.APPLICATION,
        O = S ? e.applicationId : void 0,
        y = (0, N.h)(O),
        { hasAlreadyLinked: V, canStartAuthorization: B, startAuthorization: M } = (0, x.RD)(y),
        K = S && !V && B,
        { analyticsLocations: Y } = (0, A.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
        H = t.useCallback(() => {
            !v &&
                ((0, g.Y5)(e),
                R({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, j.XA)(U.jM.WIDGET_ADDED),
                n?.(),
                K && M({ analyticsLocations: Y }));
        }, [v, K, e, R, n, M, Y]),
        Q = t.useMemo(() => P(e), [e, P]),
        X = D?.(e),
        z = K && !C ? c.q : d.U;
    return (0, l.jsxs)("div", {
        className: W.LG,
        children: [
            (0, l.jsxs)(o.D, {
                className: s()(W.PH, "small" === E && W.PG, v && W.Lq),
                onClick: H,
                "aria-label":
                    K && null != y ? G.intl.formatToPlainString(G.t.ATS0FK, { applicationName: y.name }) : T(e),
                "aria-busy": v,
                children: [
                    (function () {
                        let a = P(e);
                        switch (a.variant) {
                            case "details":
                                return (0, l.jsx)(h.E, {
                                    className: W.l4,
                                    gridClassName: W.Qs,
                                    applicationId: a.applicationId,
                                });
                            case "grid":
                                return (0, l.jsx)(h.l, {
                                    className: W.l4,
                                    gridClassName: W.Qs,
                                    applicationIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, l.jsx)(b, { applicationId: a.applicationId, size: E });
                            default:
                                return (0, L.xb)(a);
                        }
                    })(),
                    C &&
                        _ &&
                        (0, l.jsx)("div", {
                            className: W.X4,
                            children: (0, l.jsx)(p.E, { type: "new", variant: "brand" }),
                        }),
                    (0, l.jsxs)("div", {
                        className: W.Lw,
                        children: [
                            (0, l.jsx)(z, { size: "md", color: "currentColor", className: W.c9 }),
                            (0, l.jsxs)("div", {
                                className: W.DD,
                                children: [
                                    null != X
                                        ? (0, l.jsx)("img", { src: X, alt: "", width: 16, height: 16, className: W.Kk })
                                        : null,
                                    (0, l.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, g.L)(e),
                                    }),
                                    !C && _ && (0, l.jsx)(p.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            C &&
                                !f &&
                                "application-widget" === Q.variant &&
                                (0, l.jsx)(F, { applicationId: Q.applicationId }),
                        ],
                    }),
                ],
            }),
            !C &&
                ("application-widget" === (i = P(e)).variant
                    ? (0, l.jsx)(k, { applicationId: i.applicationId, size: E })
                    : null),
        ],
    });
}
