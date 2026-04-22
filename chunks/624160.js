n.d(t, { A: () => N });
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
    f = n(362490),
    m = n(587895),
    x = n(429913),
    p = n(403362),
    I = n(635344),
    A = n(735321),
    h = n(606758),
    E = n(492280),
    v = n(939899),
    C = n(518477),
    b = n(985018),
    j = n(563929);
let T = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: I.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => b.intl.string(b.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: I.n.VALORANT }),
        getAriaLabel: () => b.intl.string(b.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [I.n.PEAK, I.n.BATTLEFIELD_6, I.n.REPO, I.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => b.intl.string(b.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [I.n.MARVEL_RIVALS, I.n.WORLD_OF_WARCRAFT, I.n.RUST, I.n.SILKSONG],
        }),
        getAriaLabel: () => b.intl.string(b.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => m.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            b.intl.formatToPlainString(b.t.KfGahB, {
                applicationName: m.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function N(e) {
    let t,
        { widget: n, onAddWidget: l, size: m = "default", loading: I = !1, trackUserProfileEditAction: N } = e,
        { placeholder: S, getAriaLabel: k, icon: O } = T[n.type],
        L = n.type === r.x.APPLICATION,
        P = L ? n.applicationId : void 0,
        R = (0, x.h)(P),
        { hasAlreadyLinked: w, canStartAuthorization: D, startAuthorization: G } = (0, f.RD)(R),
        y = L && !w && D,
        { analyticsLocations: M } = (0, g.Ay)(_.A.USER_PROFILE_APPLICATION_WIDGET),
        U = a.useCallback(() => {
            !I &&
                ((0, A.Y5)(n),
                N({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                (0, h.XA)(C.jM.WIDGET_ADDED),
                l?.(),
                y && G({ analyticsLocations: M }));
        }, [I, y, n, N, l, G, M]),
        F = O?.(n),
        W = y ? o.q : c.U;
    return (0, i.jsxs)("div", {
        className: j.LG,
        children: [
            (0, i.jsxs)(d.D, {
                className: s()(j.PH, "small" === m && j.PG, I && j.Lq),
                onClick: U,
                "aria-label":
                    y && null != R ? b.intl.formatToPlainString(b.t.ATS0FK, { applicationName: R.name }) : k(n),
                "aria-busy": I,
                children: [
                    (() => {
                        let e = S(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(E.E, {
                                    className: j.l4,
                                    gridClassName: j.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(E.l, {
                                    className: j.l4,
                                    gridClassName: j.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(v.A, { applicationId: e.applicationId, size: m });
                            default:
                                return (0, p.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: j.Lw,
                        children: [
                            (0, i.jsx)(W, { size: "md", color: "currentColor", className: j.c9 }),
                            (0, i.jsxs)("div", {
                                className: j.DD,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, A.L)(n),
                                    }),
                                    null != F
                                        ? (0, i.jsx)("img", { src: F, alt: "", width: 16, height: 16, className: j.Kk })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = S(n)).variant
                ? (0, i.jsx)(v.R, { applicationId: t.applicationId, size: m })
                : null,
        ],
    });
}
