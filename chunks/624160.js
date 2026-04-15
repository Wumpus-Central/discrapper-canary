n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(540185),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(362490),
    A = n(587895),
    h = n(429913),
    _ = n(403362),
    m = n(635344),
    g = n(735321),
    p = n(606758),
    E = n(492280),
    I = n(939899),
    f = n(518477),
    C = n(985018),
    T = n(360841);
let N = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: m.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => C.intl.string(C.t.xJtdIm),
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: m.n.VALORANT }),
        getAriaLabel: () => C.intl.string(C.t.Ae8tRi),
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [m.n.PEAK, m.n.BATTLEFIELD_6, m.n.REPO, m.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => C.intl.string(C.t["pBR+4j"]),
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [m.n.MARVEL_RIVALS, m.n.WORLD_OF_WARCRAFT, m.n.RUST, m.n.SILKSONG],
        }),
        getAriaLabel: () => C.intl.string(C.t.NtoBi1),
    },
    [s.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => A.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            C.intl.formatToPlainString(C.t.KfGahB, {
                applicationName: A.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function S(e) {
    let t,
        { widget: n, onAddWidget: a, size: A = "default", loading: m = !1, trackUserProfileEditAction: S } = e,
        { placeholder: x, getAriaLabel: v, icon: b } = N[n.type],
        y = n.type === s.x.APPLICATION,
        O = y ? n.applicationId : void 0,
        L = (0, h.h)(O),
        { hasAlreadyLinked: R, canStartAuthorization: P, startAuthorization: D } = (0, u.RD)(L),
        j = y && !R && P,
        { analyticsLocations: M } = (0, c.Ay)(d.A.USER_PROFILE_APPLICATION_WIDGET),
        w = l.useCallback(() => {
            !m &&
                ((0, g.Y5)(n),
                S({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                (0, p.XA)(f.jM.WIDGET_ADDED),
                a?.(),
                j && D({ analyticsLocations: M }));
        }, [m, j, n, S, a, D, M]),
        U = b?.(n),
        G = j ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: T.LG,
        children: [
            (0, i.jsxs)(o.DUT, {
                className: r()(T.PH, "small" === A && T.PG, m && T.Lq),
                onClick: w,
                "aria-label":
                    j && null != L ? C.intl.formatToPlainString(C.t.ATS0FK, { applicationName: L.name }) : v(n),
                "aria-busy": m,
                children: [
                    (() => {
                        let e = x(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(E.E, {
                                    className: T.l4,
                                    gridClassName: T.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(E.l, {
                                    className: T.l4,
                                    gridClassName: T.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(I.A, { applicationId: e.applicationId, size: A });
                            default:
                                return (0, _.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: T.Lw,
                        children: [
                            (0, i.jsx)(G, { size: "md", color: "currentColor", className: T.c9 }),
                            (0, i.jsxs)("div", {
                                className: T.DD,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, g.L)(n),
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
            "application-widget" === (t = x(n)).variant
                ? (0, i.jsx)(I.R, { applicationId: t.applicationId, size: A })
                : null,
        ],
    });
}
