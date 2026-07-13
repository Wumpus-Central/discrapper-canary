e.d(i, { A: () => y });
var l = e(627968),
    t = e(64700),
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
    v = e(403362);
let j = {
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
Object.values(j);
var L = e(735321),
    g = e(384377),
    h = e(492280),
    R = e(284513),
    f = e(598748),
    _ = e(141628),
    T = e(17928),
    P = e(531913),
    D = e(287809),
    C = e(183555),
    G = e(375708),
    S = e(923608);
function b(a) {
    let i = (0, T.bG)([D.default], () => D.default.getCurrentUser());
    return null == i ? null : (0, l.jsx)(O, { ...a, userId: i.id });
}
function O(a) {
    let { applicationId: i, size: e = "default", userId: t } = a,
        n = (0, P.A)(t, i),
        s = n.surfaceConfigs[f.m.ADD_WIDGET_PREVIEW];
    return null == s
        ? null
        : (0, l.jsx)("div", {
              className: S.kL,
              children: (0, l.jsx)(R.kH, {
                  ...n,
                  surface: f.m.ADD_WIDGET_PREVIEW,
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
                  (0, l.jsx)(_.A, { size: "xs" }),
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
    W = e(563929);
let w = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: j.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => G.intl.string(G.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: j.VALORANT }),
        getAriaLabel: () => G.intl.string(G.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [j.PEAK, j.BATTLEFIELD_6, j.REPO, j.BALDURS_GATE_3] }),
        getAriaLabel: () => G.intl.string(G.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [j.MARVEL_RIVALS, j.WORLD_OF_WARCRAFT, j.RUST, j.SILKSONG],
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
};
function y(a) {
    let i,
        {
            widget: e,
            onAddWidget: n,
            size: E = "default",
            loading: j = !1,
            trackUserProfileEditAction: R,
            isHighlighted: f = !1,
        } = a,
        { placeholder: _, getAriaLabel: T, icon: P } = w[e.type],
        D = I.useConfig({ location: m.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        C = e.type === r.x.APPLICATION,
        S = C ? e.applicationId : void 0,
        O = (0, N.h)(S),
        { hasAlreadyLinked: y, canStartAuthorization: V, startAuthorization: B } = (0, x.RD)(O),
        M = C && !y && V,
        { analyticsLocations: K } = (0, A.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
        H = t.useCallback(() => {
            !j &&
                ((0, L.Y5)(e),
                R({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, g.XA)(U.jM.WIDGET_ADDED),
                n?.(),
                M && B({ analyticsLocations: K }));
        }, [j, M, e, R, n, B, K]),
        Q = t.useMemo(() => _(e), [e, _]),
        Y = P?.(e),
        X = M && !D ? c.q : d.U;
    return (0, l.jsxs)("div", {
        className: W.LG,
        children: [
            (0, l.jsxs)(o.D, {
                className: s()(W.PH, "small" === E && W.PG, j && W.Lq),
                onClick: H,
                "aria-label":
                    M && null != O ? G.intl.formatToPlainString(G.t.ATS0FK, { applicationName: O.name }) : T(e),
                "aria-busy": j,
                children: [
                    (function () {
                        let a = _(e);
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
                                return (0, v.xb)(a);
                        }
                    })(),
                    D &&
                        f &&
                        (0, l.jsx)("div", {
                            className: W.X4,
                            children: (0, l.jsx)(p.E, { type: "new", variant: "brand" }),
                        }),
                    (0, l.jsxs)("div", {
                        className: W.Lw,
                        children: [
                            (0, l.jsx)(X, { size: "md", color: "currentColor", className: W.c9 }),
                            (0, l.jsxs)("div", {
                                className: W.DD,
                                children: [
                                    null != Y
                                        ? (0, l.jsx)("img", { src: Y, alt: "", width: 16, height: 16, className: W.Kk })
                                        : null,
                                    (0, l.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, L.L)(e),
                                    }),
                                    !D && f && (0, l.jsx)(p.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            D &&
                                "application-widget" === Q.variant &&
                                (0, l.jsx)(F, { applicationId: Q.applicationId }),
                        ],
                    }),
                ],
            }),
            !D &&
                ("application-widget" === (i = _(e)).variant
                    ? (0, l.jsx)(k, { applicationId: i.applicationId, size: E })
                    : null),
        ],
    });
}
