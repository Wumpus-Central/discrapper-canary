i.d(t, { A: () => B });
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
    x = i(46225);
let p = (0, i(945810).mj)({
    name: "2026-03-application-widget-v2-add-tweak",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = i(587895),
    A = i(429913),
    E = i(403362),
    h = i(635344),
    j = i(735321),
    N = i(606758),
    v = i(492280),
    T = i(127382),
    S = i(598748),
    _ = i(141628),
    C = i(17928),
    O = i(369374),
    b = i(531913),
    k = i(287809),
    R = i(183555),
    D = i(841595),
    L = i(375708),
    G = i(923608);
function P(e) {
    let { applicationId: t, size: i = "default" } = e,
        l = (0, C.bG)([D.A], () => D.A.getApplicationWidgetConfig(t));
    return (0, n.jsxs)("div", {
        className: a()(G.kL, { [G.PG]: "small" === i }),
        children: [
            (0, n.jsxs)("div", {
                className: G.Qs,
                children: [
                    (0, n.jsx)("div", { className: G.wx }),
                    (0, n.jsx)("div", { className: G.yF }),
                    (0, n.jsxs)("div", {
                        className: G.M1,
                        children: [
                            (0, n.jsx)("div", { className: G.dJ }),
                            (0, n.jsx)("div", { className: G.dJ }),
                            (0, n.jsx)("div", { className: G.dJ }),
                            (0, n.jsx)("div", { className: G.dJ }),
                            (0, n.jsx)("div", { className: G.dJ }),
                            (0, n.jsx)("div", { className: G.dJ }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: G.ZS,
                children:
                    l?.miniPreviewImage != null
                        ? (0, n.jsx)("img", { src: l.miniPreviewImage, alt: "", className: G.oz })
                        : (0, n.jsx)("div", { className: G.FQ }),
            }),
        ],
    });
}
function w(e) {
    let { applicationId: t, size: i = "default", userId: l } = e,
        s = (0, b.A)(l, t),
        r = s.surfaceConfigs[S.m.ADD_WIDGET_PREVIEW];
    return null == r
        ? null
        : (0, n.jsx)("div", {
              className: a()(G.iW, { [G.PG]: "small" === i }),
              children: (0, n.jsx)(T.kH, {
                  ...s,
                  surface: S.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: r,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function y(e) {
    let t = (0, C.bG)([k.default], () => k.default.getCurrentUser()),
        { enabled: i } = O.A.useConfig({ location: "PlaceholderApplicationWidget" });
    return i ? (null == t ? null : (0, n.jsx)(w, { ...e, userId: t.id })) : (0, n.jsx)(P, { ...e });
}
function M(e) {
    let { applicationId: t, size: i = "default" } = e,
        { trackUserProfileAction: s } = (0, R.NJ)(),
        a = (0, A.h)(t),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: o, fetched: u } = (0, x.RD)(a),
        { analyticsLocations: m } = (0, f.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET),
        p = l.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                o({ analyticsLocations: m }));
        }, [c, s, t, o, m]);
    return "default" !== i || null == a
        ? null
        : (0, n.jsxs)("div", {
              className: G.qr,
              children: [
                  (0, n.jsx)(_.A, { size: "xs" }),
                  (0, n.jsx)(d.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: u
                          ? r
                              ? L.intl.format(L.t.wiyuG9, { applicationName: a.name })
                              : c
                                ? L.intl.format(L.t.RNWFOQ, { onConnect: p })
                                : L.intl.string(L.t["9TX4UT"])
                          : (0, n.jsx)("div", { className: G.bg }),
                  }),
              ],
          });
}
function U(e) {
    let { applicationId: t } = e,
        i = (0, A.h)(t),
        { hasAlreadyLinked: l, fetched: s } = (0, x.RD)(i);
    return null == i
        ? null
        : (0, n.jsx)(d.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: s
                  ? l
                      ? L.intl.format(L.t.wiyuG9, { applicationName: i.name })
                      : L.intl.string(L.t["9TX4UT"])
                  : (0, n.jsx)("div", { className: G.bg }),
          });
}
var F = i(518477),
    W = i(563929);
let H = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.n.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => L.intl.string(L.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: h.n.VALORANT }),
        getAriaLabel: () => L.intl.string(L.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [h.n.PEAK, h.n.BATTLEFIELD_6, h.n.REPO, h.n.BALDURS_GATE_3],
        }),
        getAriaLabel: () => L.intl.string(L.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [h.n.MARVEL_RIVALS, h.n.WORLD_OF_WARCRAFT, h.n.RUST, h.n.SILKSONG],
        }),
        getAriaLabel: () => L.intl.string(L.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (e) => ({ variant: "application-widget", applicationId: e.applicationId }),
        icon: (e) => I.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: (e) =>
            L.intl.formatToPlainString(L.t.KfGahB, {
                applicationName: I.A.getApplication(e.applicationId)?.name ?? "",
            }),
    },
};
function B(e) {
    let t,
        {
            widget: i,
            onAddWidget: s,
            size: I = "default",
            loading: h = !1,
            trackUserProfileEditAction: T,
            isHighlighted: S = !1,
        } = e,
        { placeholder: _, getAriaLabel: C, icon: O } = H[i.type],
        b = p.useConfig({ location: g.A.USER_PROFILE_APPLICATION_WIDGET }).enabled,
        k = i.type === r.x.APPLICATION,
        R = k ? i.applicationId : void 0,
        D = (0, A.h)(R),
        { hasAlreadyLinked: G, canStartAuthorization: P, startAuthorization: w } = (0, x.RD)(D),
        B = k && !G && P,
        { analyticsLocations: V } = (0, f.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET),
        X = l.useCallback(() => {
            !h &&
                ((0, j.Y5)(i),
                T({ action: "WIDGET_ADDED", ...i.getProfileEditAnalyticsOptions() }),
                (0, N.XA)(F.jM.WIDGET_ADDED),
                s?.(),
                B && w({ analyticsLocations: V }));
        }, [h, B, i, T, s, w, V]),
        z = l.useMemo(() => _(i), [i, _]),
        K = O?.(i),
        Y = B && !b ? c.q : o.U;
    return (0, n.jsxs)("div", {
        className: W.LG,
        children: [
            (0, n.jsxs)(u.D, {
                className: a()(W.PH, "small" === I && W.PG, h && W.Lq),
                onClick: X,
                "aria-label":
                    B && null != D ? L.intl.formatToPlainString(L.t.ATS0FK, { applicationName: D.name }) : C(i),
                "aria-busy": h,
                children: [
                    (() => {
                        let e = _(i);
                        switch (e.variant) {
                            case "details":
                                return (0, n.jsx)(v.E, {
                                    className: W.l4,
                                    gridClassName: W.Qs,
                                    applicationId: e.applicationId,
                                });
                            case "grid":
                                return (0, n.jsx)(v.l, {
                                    className: W.l4,
                                    gridClassName: W.Qs,
                                    applicationIds: e.applicationIds,
                                });
                            case "application-widget":
                                return (0, n.jsx)(y, { applicationId: e.applicationId, size: I });
                            default:
                                return (0, E.xb)(e);
                        }
                    })(),
                    (0, n.jsxs)("div", {
                        className: W.Lw,
                        children: [
                            (0, n.jsx)(Y, { size: "md", color: "currentColor", className: W.c9 }),
                            (0, n.jsxs)("div", {
                                className: W.DD,
                                children: [
                                    null != K
                                        ? (0, n.jsx)("img", { src: K, alt: "", width: 16, height: 16, className: W.Kk })
                                        : null,
                                    (0, n.jsx)(d.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, j.L)(i),
                                    }),
                                    S && (0, n.jsx)(m.E, { type: "new", variant: "brand" }),
                                ],
                            }),
                            b &&
                                "application-widget" === z.variant &&
                                (0, n.jsx)(U, { applicationId: z.applicationId }),
                        ],
                    }),
                ],
            }),
            !b &&
                ("application-widget" === (t = _(i)).variant
                    ? (0, n.jsx)(M, { applicationId: t.applicationId, size: I })
                    : null),
        ],
    });
}
