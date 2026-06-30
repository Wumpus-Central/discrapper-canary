i.d(t, { A: () => U });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(540185),
    c = i(173936),
    u = i(245604),
    o = i(939249),
    d = i(508770),
    g = i(834730),
    m = i(793574),
    f = i(688810),
    x = i(206828);
let I = (0, i(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = i(587895),
    E = i(429913),
    A = i(403362),
    h = i(635344),
    j = i(735321),
    T = i(606758),
    N = i(492280),
    v = i(432585),
    _ = i(598748),
    S = i(141628),
    O = i(17928),
    k = i(531913),
    C = i(287809),
    R = i(183555),
    b = i(375708),
    D = i(923608);
function L(e) {
    let t = (0, O.bG)([C.default], () => C.default.getCurrentUser());
    return null == t ? null : (0, n.jsx)(G, { ...e, userId: t.id });
}
function G(e) {
    let { applicationId: t, size: i = "default", userId: l } = e,
        s = (0, k.A)(l, t),
        r = s.surfaceConfigs[_.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, n.jsx)("div", {
              className: D.kL,
              children: (0, n.jsx)(v.kH, {
                  ...s,
                  surface: _.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function w(e) {
    let { applicationId: t, size: i = "default" } = e,
        { trackUserProfileAction: s } = (0, R.NJ)(),
        r = (0, E.h)(t),
        { hasAlreadyLinked: a, canStartAuthorization: c, startAuthorization: u, fetched: o } = (0, x.RD)(r),
        { analyticsLocations: d } = (0, f.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
        I = l.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                u({ analyticsLocations: d }));
        }, [c, s, t, u, d]);
    return "default" !== i || null == r
        ? null
        : (0, n.jsxs)("div", {
              className: D.qr,
              children: [
                  (0, n.jsx)(S.A, { size: "xs" }),
                  (0, n.jsx)(g.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? a
                              ? b.intl.format(b.t.wiyuG9, { applicationName: r.name })
                              : c
                                ? b.intl.format(b.t.RNWFOQ, { onConnect: I })
                                : b.intl.string(b.t["9TX4UT"])
                          : (0, n.jsx)("div", { className: D.bg }),
                  }),
              ],
          });
}
function P(e) {
    let { applicationId: t } = e,
        i = (0, E.h)(t),
        { hasAlreadyLinked: l, fetched: s } = (0, x.RD)(i);
    return null == i
        ? null
        : (0, n.jsx)(g.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: s
                  ? l
                      ? b.intl.format(b.t.wiyuG9, { applicationName: i.name })
                      : b.intl.string(b.t["9TX4UT"])
                  : (0, n.jsx)("div", { className: D.bg }),
          });
}
var y = i(518477),
    M = i(563929);
let F = {
    [a.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => b.intl.string(b.t.xJtdIm),
    },
    [a.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.n.VALORANT }),
        getAriaLabel: () => b.intl.string(b.t.Ae8tRi),
    },
    [a.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [h.n.PEAK, h.n.BATTLEFIELD_6, h.n.REPO, h.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => b.intl.string(b.t["pBR+4j"]),
    },
    [a.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [h.n.MARVEL_RIVALS, h.n.WORLD_OF_WARCRAFT, h.n.RUST, h.n.SILKSONG],
        }),
        getAriaLabel: () => b.intl.string(b.t.NtoBi1),
    },
    [a.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => p.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            b.intl.formatToPlainString(b.t.KfGahB, {
                applicationName: p.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function U(e) {
    let t,
        {
            widget: i,
            onAddWidget: s,
            size: p = "default",
            loading: h = !1,
            trackUserProfileEditAction: v,
            isHighlighted: _ = !1,
        } = e,
        { placeholder: S, getAriaLabel: O, icon: k } = F[i.type],
        C = I.useConfig({ location: m.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        R = i.type === a.x.APPLICATION,
        D = R ? i.applicationId : void 0,
        G = (0, E.h)(D),
        { hasAlreadyLinked: U, canStartAuthorization: W, startAuthorization: H } = (0, x.RD)(G),
        B = R && !U && W,
        { analyticsLocations: X } = (0, f.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
        V = l.useCallback(() => {
            !h &&
                ((0, j.Y5)(i),
                v({ action: "WIDGET_ADDED", ...i.getProfileEditAnalyticsOptions() }),
                (0, T.XA)(y.jM.WIDGET_ADDED),
                s?.(),
                B && H({ analyticsLocations: X }));
        }, [h, B, i, v, s, H, X]),
        z = l.useMemo(() => S(i), [i, S]),
        K = k?.(i),
        Y = B && !C ? c.q : u.U;
    return (0, n.jsxs)("div", {
        className: M.LG,
        children: [
            (0, n.jsxs)(o.D, {
                className: r()(M.PH, "small" === p && M.PG, h && M.Lq),
                onClick: V,
                "aria-label":
                    B && null != G ? b.intl.formatToPlainString(b.t.ATS0FK, { applicationName: G.name }) : O(i),
                "aria-busy": h,
                children: [
                    (function () {
                        let e = S(i);
                        switch (e.variant) {
                            case "details":
                                return (0, n.jsx)(N.E, {
                                    className: M.l4,
                                    gridClassName: M.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, n.jsx)(N.l, {
                                    className: M.l4,
                                    gridClassName: M.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, n.jsx)(L, { applicationId: e.applicationId, size: p });
                            default:
                                return (0, A.xb)(e);
                        }
                    })(),
                    C &&
                        _ &&
                        (0, n.jsx)("div", {
                            className: M.X4,
                            children: (0, n.jsx)(d.E, { type: "new", variant: "brand" }),
                        }),
                    (0, n.jsxs)("div", {
                        className: M.Lw,
                        children: [
                            (0, n.jsx)(Y, { size: "md", color: "currentColor", className: M.c9 }),
                            (0, n.jsxs)("div", {
                                className: M.DD,
                                children: [
                                    null != K
                                        ? (0, n.jsx)("img", { src: K, alt: "", width: 16, height: 16, className: M.Kk })
                                        : null,
                                    (0, n.jsx)(g.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, j.L)(i),
                                    }),
                                    !C && _ && (0, n.jsx)(d.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            C &&
                                "application-widget" === z.variant &&
                                (0, n.jsx)(P, { applicationId: z.applicationId }),
                        ],
                    }),
                ],
            }),
            !C &&
                ("application-widget" === (t = S(i)).variant
                    ? (0, n.jsx)(w, { applicationId: t.applicationId, size: p })
                    : null),
        ],
    });
}
