n.d(t, { A: () => S });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(540185),
    o = n(173936),
    c = n(245604),
    d = n(939249),
    u = n(834730),
    g = n(793574),
    m = n(688810),
    _ = n(362490),
    f = n(587895),
    x = n(429913),
    p = n(403362),
    I = n(635344),
    A = n(735321),
    h = n(606758),
    E = n(492280),
    v = n(939899),
    j = n(518477),
    N = n(985018),
    b = n(563929);
let C = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: I.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => N.intl.string(N.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: I.n.VALORANT }),
        getAriaLabel: () => N.intl.string(N.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [I.n.PEAK, I.n.BATTLEFIELD_6, I.n.REPO, I.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => N.intl.string(N.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [I.n.MARVEL_RIVALS, I.n.WORLD_OF_WARCRAFT, I.n.RUST, I.n.SILKSONG],
        }),
        getAriaLabel: () => N.intl.string(N.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => f.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            N.intl.formatToPlainString(N.t.KfGahB, {
                applicationName: f.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function S(e) {
    let t,
        { widget: n, onAddWidget: l, size: f = "default", loading: I = !1, trackUserProfileEditAction: S } = e,
        { placeholder: T, getAriaLabel: O, icon: k } = C[n.type],
        P = n.type === r.x.APPLICATION,
        L = P ? n.applicationId : void 0,
        R = (0, x.h)(L),
        { hasAlreadyLinked: D, canStartAuthorization: G, startAuthorization: y } = (0, _.RD)(R),
        w = P && !D && G,
        { analyticsLocations: M } = (0, m.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET),
        U = a.useCallback(() => {
            !I &&
                ((0, A.Y5)(n),
                S({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                (0, h.XA)(j.jM.WIDGET_ADDED),
                l?.(),
                w && y({ analyticsLocations: M }));
        }, [I, w, n, S, l, y, M]),
        F = k?.(n),
        W = w ? o.q : c.U;
    return (0, i.jsxs)("div", {
        className: b.LG,
        children: [
            (0, i.jsxs)(d.D, {
                className: s()(b.PH, "small" === f && b.PG, I && b.Lq),
                onClick: U,
                "aria-label":
                    w && null != R ? N.intl.formatToPlainString(N.t.ATS0FK, { applicationName: R.name }) : O(n),
                "aria-busy": I,
                children: [
                    (() => {
                        let e = T(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(E.E, {
                                    className: b.l4,
                                    gridClassName: b.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(E.l, {
                                    className: b.l4,
                                    gridClassName: b.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(v.A, { applicationId: e.applicationId, size: f });
                            default:
                                return (0, p.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: b.Lw,
                        children: [
                            (0, i.jsx)(W, { size: "md", color: "currentColor", className: b.c9 }),
                            (0, i.jsxs)("div", {
                                className: b.DD,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, A.L)(n),
                                    }),
                                    null != F
                                        ? (0, i.jsx)("img", { src: F, alt: "", width: 16, height: 16, className: b.Kk })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = T(n)).variant
                ? (0, i.jsx)(v.R, { applicationId: t.applicationId, size: f })
                : null,
        ],
    });
}
