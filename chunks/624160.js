n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(540185),
    o = n(397927),
    d = n(587895),
    c = n(403362),
    u = n(635344),
    A = n(735321),
    h = n(384377),
    _ = n(492280),
    m = n(939899),
    p = n(518477),
    g = n(985018),
    E = n(369134);
let f = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: u.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => g.intl.string(g.t.xJtdIm),
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: u.n.VALORANT }),
        getAriaLabel: () => g.intl.string(g.t.Ae8tRi),
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [u.n.PEAK, u.n.BATTLEFIELD_6, u.n.REPO, u.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => g.intl.string(g.t["pBR+4j"]),
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [u.n.MARVEL_RIVALS, u.n.WORLD_OF_WARCRAFT, u.n.RUST, u.n.SILKSONG],
        }),
        getAriaLabel: () => g.intl.string(g.t.NtoBi1),
    },
    [s.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => d.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            g.intl.formatToPlainString(g.t.KfGahB, {
                applicationName: d.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function I(e) {
    let t,
        { widget: n, onAddWidget: a, size: s = "default", loading: d = !1, trackUserProfileEditAction: u } = e,
        { placeholder: g, getAriaLabel: I, icon: C } = f[n.type],
        N = "small" === s,
        T = r.useCallback(() => {
            d ||
                ((0, A.Y5)(n),
                u({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                (0, h.XA)(p.jM.WIDGET_ADDED),
                a?.());
        }, [d, n, u, a]),
        S = C?.(n);
    return (0, i.jsxs)("div", {
        className: E.LG,
        children: [
            (0, i.jsxs)(o.DUT, {
                className: l()(E.PH, N && E.PG, d && E.Lq),
                onClick: T,
                "aria-label": I(n),
                "aria-busy": d,
                children: [
                    (() => {
                        let e = g(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(_.E, { className: E.xR, applicationId: e.applicationId, size: s });
                            case "grid":
                                return (0, i.jsx)(_.l, { className: E.xR, applicationIds: e.applicationIds, size: s });
                            case "application-widget":
                                return (0, i.jsx)(m.A, { applicationId: e.applicationId, size: s });
                            default:
                                return (0, c.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: E.Lw,
                        children: [
                            (0, i.jsx)(o.U1e, { size: "md", color: "currentColor", className: E.c9 }),
                            (0, i.jsxs)("div", {
                                className: E.DD,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, A.L)(n),
                                    }),
                                    null != S
                                        ? (0, i.jsx)("img", { src: S, alt: "", width: 16, height: 16, className: E.Kk })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = g(n)).variant
                ? (0, i.jsx)(m.R, { applicationId: t.applicationId, size: s })
                : null,
        ],
    });
}
