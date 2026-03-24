n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(540185),
    o = n(397927),
    d = n(587895),
    c = n(403362),
    u = n(635344),
    g = n(735321),
    m = n(606758),
    x = n(492280),
    p = n(939899),
    f = n(518477),
    h = n(985018),
    _ = n(369134);
let A = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: u.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => h.intl.string(h.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: u.n.VALORANT }),
        getAriaLabel: () => h.intl.string(h.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [u.n.PEAK, u.n.BATTLEFIELD_6, u.n.REPO, u.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => h.intl.string(h.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [u.n.MARVEL_RIVALS, u.n.WORLD_OF_WARCRAFT, u.n.RUST, u.n.SILKSONG],
        }),
        getAriaLabel: () => h.intl.string(h.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => d.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            h.intl.formatToPlainString(h.t.KfGahB, {
                applicationName: d.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function I(e) {
    let t,
        { widget: n, onAddWidget: a, size: r = "default", loading: d = !1, trackUserProfileEditAction: u } = e,
        { placeholder: h, getAriaLabel: I, icon: j } = A[n.type],
        v = l.useCallback(() => {
            d ||
                ((0, g.Y5)(n),
                u({ action: "WIDGET_ADDED", ...n.getProfileEditAnalyticsOptions() }),
                (0, m.XA)(f.jM.WIDGET_ADDED),
                a?.());
        }, [d, n, u, a]),
        E = j?.(n);
    return (0, i.jsxs)("div", {
        className: _.LG,
        children: [
            (0, i.jsxs)(o.DUT, {
                className: s()(_.PH, "small" === r && _.PG, d && _.Lq),
                onClick: v,
                "aria-label": I(n),
                "aria-busy": d,
                children: [
                    (() => {
                        let e = h(n);
                        switch (e.variant) {
                            case "details":
                                return (0, i.jsx)(x.E, {
                                    className: _.l4,
                                    gridClassName: _.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(x.l, {
                                    className: _.l4,
                                    gridClassName: _.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(p.A, { applicationId: e.applicationId, size: r });
                            default:
                                return (0, c.xb)(e);
                        }
                    })(),
                    (0, i.jsxs)("div", {
                        className: _.Lw,
                        children: [
                            (0, i.jsx)(o.U1e, { size: "md", color: "currentColor", className: _.c9 }),
                            (0, i.jsxs)("div", {
                                className: _.DD,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, g.L)(n),
                                    }),
                                    null != E
                                        ? (0, i.jsx)("img", { src: E, alt: "", width: 16, height: 16, className: _.Kk })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            "application-widget" === (t = h(n)).variant
                ? (0, i.jsx)(p.R, { applicationId: t.applicationId, size: r })
                : null,
        ],
    });
}
