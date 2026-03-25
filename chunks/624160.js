n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(540185),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(362490),
    g = n(701613),
    m = n(587895),
    x = n(429913),
    p = n(403362),
    f = n(635344),
    h = n(735321),
    _ = n(606758),
    A = n(492280),
    I = n(939899),
    j = n(518477),
    v = n(985018),
    T = n(369134);
let E = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: f.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => v.intl.string(v.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: f.n.VALORANT }),
        getAriaLabel: () => v.intl.string(v.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [f.n.PEAK, f.n.BATTLEFIELD_6, f.n.REPO, f.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => v.intl.string(v.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [f.n.MARVEL_RIVALS, f.n.WORLD_OF_WARCRAFT, f.n.RUST, f.n.SILKSONG],
        }),
        getAriaLabel: () => v.intl.string(v.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => m.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            v.intl.formatToPlainString(v.t.KfGahB, {
                applicationName: m.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function b(e) {
    let t,
        { widget: n, onAddWidget: a, size: m = "default", loading: f = !1, trackUserProfileEditAction: b } = e,
        { placeholder: N, getAriaLabel: S, icon: y } = E[n.type],
        C = n.type === r.x.APPLICATION,
        R = C ? n.applicationId : void 0,
        k = (0, x.h)(R),
        { hasAlreadyLinked: O, canStartAuthorization: L, startAuthorization: w } = (0, u.RD)(k),
        { analyticsLocations: D } = (0, c.Ay)(d.A.USER_PROFILE_APPLICATION_WIDGET),
        P = g.G.useConfig({ location: "UserProfileWidgetOptionAddButton" }),
        G = C && !O && L && P.enabled,
        M = l.useCallback(() => {
            if (!f) {
                if (G) {
                    P.autoAdd &&
                        ((0, h.Y5)(n),
                        b({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                        (0, _.XA)(j.jM.WIDGET_ADDED),
                        a?.()),
                        w({ analyticsLocations: D });
                    return;
                }
                (0, h.Y5)(n),
                    b({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                    (0, _.XA)(j.jM.WIDGET_ADDED),
                    a?.();
            }
        }, [f, G, P, n, b, a, w, D]),
        U = y?.(n),
        F = G ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: T.LG,
        children: [
            (0, i.jsxs)(o.DUT, {
                className: s()(T.PH, "small" === m && T.PG, f && T.Lq),
                onClick: M,
                "aria-label":
                    G && null != k ? v.intl.formatToPlainString(v.t.ATS0FK, { applicationName: k.name }) : S(n),
                "aria-busy": f,
                children: [
                    (() => {
                        let e = N(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(A.E, {
                                    className: T.l4,
                                    gridClassName: T.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(A.l, {
                                    className: T.l4,
                                    gridClassName: T.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(I.A, { applicationId: e.applicationId, size: m });
                            default:
                                return (0, p.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: T.Lw,
                        children: [
                            (0, i.jsx)(F, { size: "md", color: "currentColor", className: T.c9 }),
                            (0, i.jsxs)("div", {
                                className: T.DD,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, h.L)(n),
                                    }),
                                    null != U
                                        ? (0, i.jsx)("img", { src: U, alt: "", width: 16, height: 16, className: T.Kk })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = N(n)).variant
                ? (0, i.jsx)(I.R, { applicationId: t.applicationId, size: m })
                : null,
        ],
    });
}
