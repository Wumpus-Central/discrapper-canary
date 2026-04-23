n.d(t, { A: () => F });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(540185),
    o = n(173936),
    c = n(245604),
    d = n(939249),
    u = n(834730),
    _ = n(793574),
    g = n(688810),
    m = n(46225),
    f = n(587895),
    x = n(429913),
    p = n(403362),
    I = n(635344),
    A = n(735321),
    h = n(606758),
    E = n(492280),
    v = n(435428),
    j = n(598748),
    b = n(141628),
    N = n(17928),
    T = n(369374),
    C = n(531913),
    S = n(287809),
    k = n(183555),
    O = n(841595),
    L = n(985018),
    D = n(923608);
function R(e) {
    let { applicationId: t, size: n = "default" } = e,
        a = (0, N.bG)([O.A], () => O.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(D.kL, { [D.PG]: "small" === n }),
        children: [
            (0, i.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, i.jsx)("div", { className: D.wx }),
                    (0, i.jsx)("div", { className: D.yF }),
                    (0, i.jsxs)("div", {
                        className: D.M1,
                        children: [
                            (0, i.jsx)("div", { className: D.dJ }),
                            (0, i.jsx)("div", { className: D.dJ }),
                            (0, i.jsx)("div", { className: D.dJ }),
                            (0, i.jsx)("div", { className: D.dJ }),
                            (0, i.jsx)("div", { className: D.dJ }),
                            (0, i.jsx)("div", { className: D.dJ }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: D.ZS,
                children:
                    a?.miniPreviewImage != null
                        ? (0, i.jsx)("img", { src: a.miniPreviewImage, alt: "", className: D.oz })
                        : (0, i.jsx)("div", { className: D.FQ }),
            }),
        ],
    });
}
function P(e) {
    let { applicationId: t, size: n = "default", userId: a } = e,
        l = (0, C.A)(a, t),
        r = l.surfaceConfigs[j.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: s()(D.iW, { [D.PG]: "small" === n }),
              children: (0, i.jsx)(v.kH, {
                  ...l,
                  surface: j.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === n },
              }),
          });
}
function w(e) {
    let t = (0, N.bG)([S.default], () => S.default.getCurrentUser()),
        { enabled: n } = T.A.useConfig({ location: "PlaceholderApplicationWidget" });
    return n ? (null == t ? null : (0, i.jsx)(P, { ...e, userId: t.id })) : (0, i.jsx)(R, { ...e });
}
function G(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, k.NJ)(),
        s = (0, x.h)(t),
        { hasAlreadyLinked: r, canStartAuthorization: o, startAuthorization: c, fetched: d } = (0, m.RD)(s),
        { analyticsLocations: f } = (0, g.Ay)(_.A.USER_PROFILE_APPLICATION_WIDGET),
        p = a.useCallback(() => {
            o &&
                (l({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                c({ analyticsLocations: f }));
        }, [o, l, t, c, f]);
    return "default" !== n || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: D.qr,
              children: [
                  (0, i.jsx)(b.A, { size: "xs" }),
                  (0, i.jsx)(u.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: d
                          ? r
                              ? L.intl.format(L.t.wiyuG9, { applicationName: s.name })
                              : o
                                ? L.intl.format(L.t.RNWFOQ, { onConnect: p })
                                : L.intl.string(L.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: D.bg }),
                  }),
              ],
          });
}
var y = n(518477),
    M = n(563929);
let U = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: I.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => L.intl.string(L.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: I.n.VALORANT }),
        getAriaLabel: () => L.intl.string(L.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [I.n.PEAK, I.n.BATTLEFIELD_6, I.n.REPO, I.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => L.intl.string(L.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [I.n.MARVEL_RIVALS, I.n.WORLD_OF_WARCRAFT, I.n.RUST, I.n.SILKSONG],
        }),
        getAriaLabel: () => L.intl.string(L.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => f.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            L.intl.formatToPlainString(L.t.KfGahB, {
                applicationName: f.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function F(e) {
    let t,
        { widget: n, onAddWidget: l, size: f = "default", loading: I = !1, trackUserProfileEditAction: v } = e,
        { placeholder: j, getAriaLabel: b, icon: N } = U[n.type],
        T = n.type === r.x.APPLICATION,
        C = T ? n.applicationId : void 0,
        S = (0, x.h)(C),
        { hasAlreadyLinked: k, canStartAuthorization: O, startAuthorization: D } = (0, m.RD)(S),
        R = T && !k && O,
        { analyticsLocations: P } = (0, g.Ay)(_.A.USER_PROFILE_APPLICATION_WIDGET),
        F = a.useCallback(() => {
            !I &&
                ((0, A.Y5)(n),
                v({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                (0, h.XA)(y.jM.WIDGET_ADDED),
                l?.(),
                R && D({ analyticsLocations: P }));
        }, [I, R, n, v, l, D, P]),
        W = N?.(n),
        H = R ? o.q : c.U;
    return (0, i.jsxs)("div", {
        className: M.LG,
        children: [
            (0, i.jsxs)(d.D, {
                className: s()(M.PH, "small" === f && M.PG, I && M.Lq),
                onClick: F,
                "aria-label":
                    R && null != S ? L.intl.formatToPlainString(L.t.ATS0FK, { applicationName: S.name }) : b(n),
                "aria-busy": I,
                children: [
                    (() => {
                        let e = j(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(E.E, {
                                    className: M.l4,
                                    gridClassName: M.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(E.l, {
                                    className: M.l4,
                                    gridClassName: M.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(w, { applicationId: e.applicationId, size: f });
                            default:
                                return (0, p.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: M.Lw,
                        children: [
                            (0, i.jsx)(H, { size: "md", color: "currentColor", className: M.c9 }),
                            (0, i.jsxs)("div", {
                                className: M.DD,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, A.L)(n),
                                    }),
                                    null != W
                                        ? (0, i.jsx)("img", { src: W, alt: "", width: 16, height: 16, className: M.Kk })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = j(n)).variant
                ? (0, i.jsx)(G, { applicationId: t.applicationId, size: f })
                : null,
        ],
    });
}
