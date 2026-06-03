i.d(t, { A: () => W });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(540185),
    c = i(173936),
    o = i(245604),
    u = i(939249),
    d = i(834730),
    m = i(508770),
    g = i(793574),
    f = i(688810),
    x = i(46225),
    I = i(587895),
    p = i(429913),
    A = i(403362),
    E = i(635344),
    h = i(735321),
    j = i(606758),
    N = i(492280),
    T = i(127382),
    v = i(598748),
    S = i(141628),
    _ = i(17928),
    C = i(369374),
    O = i(531913),
    b = i(287809),
    k = i(183555),
    R = i(841595),
    D = i(375708),
    L = i(923608);
function G(e) {
    let { applicationId: t, size: i = "default" } = e,
        l = (0, _.bG)([R.A], () => R.A.getApplicationWidgetConfig(t));
    return (0, n.jsxs)("div", {
        className: a()(L.kL, { [L.PG]: "small" === i }),
        children: [
            (0, n.jsxs)("div", {
                className: L.Qs,
                children: [
                    (0, n.jsx)("div", { className: L.wx }),
                    (0, n.jsx)("div", { className: L.yF }),
                    (0, n.jsxs)("div", {
                        className: L.M1,
                        children: [
                            (0, n.jsx)("div", { className: L.dJ }),
                            (0, n.jsx)("div", { className: L.dJ }),
                            (0, n.jsx)("div", { className: L.dJ }),
                            (0, n.jsx)("div", { className: L.dJ }),
                            (0, n.jsx)("div", { className: L.dJ }),
                            (0, n.jsx)("div", { className: L.dJ }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: L.ZS,
                children:
                    l?.miniPreviewImage != null
                        ? (0, n.jsx)("img", { src: l.miniPreviewImage, alt: "", className: L.oz })
                        : (0, n.jsx)("div", { className: L.FQ }),
            }),
        ],
    });
}
function P(e) {
    let { applicationId: t, size: i = "default", userId: l } = e,
        s = (0, O.A)(l, t),
        r = s.surfaceConfigs[v.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, n.jsx)("div", {
              className: a()(L.iW, { [L.PG]: "small" === i }),
              children: (0, n.jsx)(T.kH, {
                  ...s,
                  surface: v.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function w(e) {
    let t = (0, _.bG)([b.default], () => b.default.getCurrentUser()),
        { enabled: i } = C.A.useConfig({ location: "PlaceholderApplicationWidget" });
    return i ? (null == t ? null : (0, n.jsx)(P, { ...e, userId: t.id })) : (0, n.jsx)(G, { ...e });
}
function y(e) {
    let { applicationId: t, size: i = "default" } = e,
        { trackUserProfileAction: s } = (0, k.NJ)(),
        a = (0, p.h)(t),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: o, fetched: u } = (0, x.RD)(a),
        { analyticsLocations: m } = (0, f.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET),
        I = l.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                o({ analyticsLocations: m }));
        }, [c, s, t, o, m]);
    return "default" !== i || null == a
        ? null
        : (0, n.jsxs)("div", {
              className: L.qr,
              children: [
                  (0, n.jsx)(S.A, { size: "xs" }),
                  (0, n.jsx)(d.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: u
                          ? r
                              ? D.intl.format(D.t.wiyuG9, { applicationName: a.name })
                              : c
                                ? D.intl.format(D.t.RNWFOQ, { onConnect: I })
                                : D.intl.string(D.t["9TX4UT"])
                          : (0, n.jsx)("div", { className: L.bg }),
                  }),
              ],
          });
}
var M = i(518477),
    U = i(563929);
let F = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: E.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => D.intl.string(D.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: E.n.VALORANT }),
        getAriaLabel: () => D.intl.string(D.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [E.n.PEAK, E.n.BATTLEFIELD_6, E.n.REPO, E.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => D.intl.string(D.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [E.n.MARVEL_RIVALS, E.n.WORLD_OF_WARCRAFT, E.n.RUST, E.n.SILKSONG],
        }),
        getAriaLabel: () => D.intl.string(D.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => I.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            D.intl.formatToPlainString(D.t.KfGahB, {
                applicationName: I.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function W(e) {
    let t,
        {
            widget: i,
            onAddWidget: s,
            size: I = "default",
            loading: E = !1,
            trackUserProfileEditAction: T,
            isHighlighted: v = !1,
        } = e,
        { placeholder: S, getAriaLabel: _, icon: C } = F[i.type],
        O = i.type === r.x.APPLICATION,
        b = O ? i.applicationId : void 0,
        k = (0, p.h)(b),
        { hasAlreadyLinked: R, canStartAuthorization: L, startAuthorization: G } = (0, x.RD)(k),
        P = O && !R && L,
        { analyticsLocations: W } = (0, f.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET),
        H = l.useCallback(() => {
            !E &&
                ((0, h.Y5)(i),
                T({ action: "WIDGET_ADDED", ...i.getProfileEditAnalyticsOptions() }),
                (0, j.XA)(M.jM.WIDGET_ADDED),
                s?.(),
                P && G({ analyticsLocations: W }));
        }, [E, P, i, T, s, G, W]),
        B = C?.(i),
        V = P ? c.q : o.U;
    return (0, n.jsxs)("div", {
        className: U.LG,
        children: [
            (0, n.jsxs)(u.D, {
                className: a()(U.PH, "small" === I && U.PG, E && U.Lq),
                onClick: H,
                "aria-label":
                    P && null != k ? D.intl.formatToPlainString(D.t.ATS0FK, { applicationName: k.name }) : _(i),
                "aria-busy": E,
                children: [
                    (() => {
                        let e = S(i);
                        switch (e.variant) {
                            case "details":
                                return (0, n.jsx)(N.E, {
                                    className: U.l4,
                                    gridClassName: U.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, n.jsx)(N.l, {
                                    className: U.l4,
                                    gridClassName: U.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, n.jsx)(w, { applicationId: e.applicationId, size: I });
                            default:
                                return (0, A.xb)(e);
                        }
                    })(),
                    (0, n.jsxs)("div", {
                        className: U.Lw,
                        children: [
                            (0, n.jsx)(V, { size: "md", color: "currentColor", className: U.c9 }),
                            (0, n.jsxs)("div", {
                                className: U.DD,
                                children: [
                                    null != B
                                        ? (0, n.jsx)("img", { src: B, alt: "", width: 16, height: 16, className: U.Kk })
                                        : null,
                                    (0, n.jsx)(d.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, h.L)(i),
                                    }),
                                    v && (0, n.jsx)(m.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = S(i)).variant
                ? (0, n.jsx)(y, { applicationId: t.applicationId, size: I })
                : null,
        ],
    });
}
