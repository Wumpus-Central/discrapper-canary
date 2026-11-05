e.d(l, { A: () => Z });
var i = e(477900),
    t = e(582128),
    s = e(503698),
    n = e.n(s),
    r = e(540185),
    c = e(403581),
    d = e(646514),
    o = e(173936),
    p = e(245604),
    A = e(805251),
    u = e(939249),
    m = e(834730),
    E = e(793574),
    x = e(688810),
    I = e(724302),
    L = e(587895),
    N = e(429913),
    g = e(611371),
    j = e(403362);
let v = {
    LEAGUE_OF_LEGENDS: "1402418696126992445",
    VALORANT: "700136079562375258",
    PEAK: "1384276457596911676",
    REPO: "1344368447928401961",
    BALDURS_GATE_3: "1137125502985961543",
    MARVEL_RIVALS: "1314395942253756416",
    WORLD_OF_WARCRAFT: "356875762940379136",
    RUST: "1402418594532298837",
    BATTLEFIELD_6: "1402692356343599254",
    SILKSONG: "1413176957381771337",
};
Object.values(v);
var _ = e(229231),
    h = e(792996);
let f = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => h.intl.string(h.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: v.VALORANT }),
        getAriaLabel: () => h.intl.string(h.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [v.PEAK, v.BATTLEFIELD_6, v.REPO, v.BALDURS_GATE_3] }),
        getAriaLabel: () => h.intl.string(h.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [v.MARVEL_RIVALS, v.WORLD_OF_WARCRAFT, v.RUST, v.SILKSONG],
        }),
        getAriaLabel: () => h.intl.string(h.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (a) => ({ variant: "application-widget", applicationId: a.applicationId }),
        getAriaLabel: (a) =>
            h.intl.formatToPlainString(h.t.KfGahB, {
                applicationName: L.A.getApplication(a.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => h.intl.string(h.t["1l30oB"]),
        getTitle: () => h.intl.string(h.t.f8kllL),
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => h.intl.string(h.t["7AVpta"]),
    },
};
function R(a) {
    return f[a.type].placeholder(a);
}
var T = e(210598),
    P = e(735321),
    D = e(384377),
    O = e(492280),
    C = e(886100),
    b = e(598748),
    y = e(855986),
    S = e(141628),
    G = e(531913),
    k = e(287809),
    W = e(183555),
    F = e(378145);
function w(a) {
    let l = (0, y.bG)([k.default], () => k.default.getCurrentUser());
    return null == l ? null : (0, i.jsx)(U, { ...a, userId: l.id });
}
function U(a) {
    let { applicationId: l, size: e = "default", userId: t } = a,
        s = (0, G.A)(t, l),
        n = s.surfaceConfigs[b.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: F.kL,
              children: (0, i.jsx)(C.kH, {
                  ...s,
                  surface: b.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === e },
              }),
          });
}
function V(a) {
    let { applicationId: l, size: e = "default" } = a,
        { trackUserProfileAction: s } = (0, W.NJ)(),
        n = (0, N.h)(l),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, I.RD)(n),
        { analyticsLocations: p } = (0, x.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        A = t.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: l }),
                d({ analyticsLocations: p }));
        }, [c, s, l, d, p]);
    return "default" !== e || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: F.qr,
              children: [
                  (0, i.jsx)(S.ExperimentalGameControllerLinkIcon, { size: "xs" }),
                  (0, i.jsx)(m.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? h.intl.format(h.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? h.intl.format(h.t.RNWFOQ, { onConnect: A })
                                : h.intl.string(h.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: F.bg }),
                  }),
              ],
          });
}
e(600253);
var B = e(307897);
function z(a) {
    let { className: l, size: e } = a;
    return (0, i.jsx)("div", {
        className: n()(B.kL, l),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: B.CX,
            children: [
                (0, i.jsx)("div", { className: n()(B.$Q, { [B.EX]: "small" === e }) }),
                (0, i.jsx)("div", {
                    className: B._A,
                    children: Array.from({ length: 4 }, (a, l) =>
                        (0, i.jsx)("div", { className: n()(B.Tc, { [B.EX]: "small" === e }) }, l),
                    ),
                }),
            ],
        }),
    });
}
var K = e(553790);
function M() {
    return (0, i.jsxs)("div", {
        className: K.yL,
        children: [
            (0, i.jsx)("div", { className: K.si }),
            (0, i.jsx)("div", { className: K.bk }),
            (0, i.jsx)("div", { className: K.bk }),
        ],
    });
}
function X(a) {
    let { className: l, size: e } = a;
    return (0, i.jsxs)("div", {
        className: n()(K.kL, l, { [K.EX]: "small" === e }),
        "aria-hidden": !0,
        children: [(0, i.jsx)("div", { className: K.Iv }), (0, i.jsx)(M, {}), (0, i.jsx)(M, {})],
    });
}
var Q = e(315629),
    Y = e(706933);
function H(a) {
    let { size: l } = a;
    return "default" !== l
        ? null
        : (0, i.jsxs)(Q.h, {
              color: "nitro-pink",
              className: Y.k,
              offsetBottom: -2.5,
              children: [
                  (0, i.jsx)(g.A, { variant: "secondary" }),
                  (0, i.jsx)(m.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: h.intl.string(h.t.xIJpoK),
                  }),
              ],
          });
}
var J = e(518477),
    q = e(866680);
let $ = {
    [r.x.APPLICATION]: { icon: (a) => L.A.getApplication(a.applicationId)?.getIconURL(16) },
    [r.x.PERSONAL]: {
        icon: () => (0, i.jsx)(c.NitroWheelIcon, { size: "xs", color: d.A.colors.ICON_DEFAULT }),
        isNew: T.t0,
    },
};
function Z(a) {
    let {
            widget: l,
            onAddWidget: e,
            listItemProps: s,
            size: c = "default",
            compact: d = !1,
            loading: L = !1,
            trackUserProfileEditAction: v,
            isHighlighted: T = !1,
        } = a,
        { icon: C, isNew: b } = $[l.type] ?? {},
        y = "small" === c,
        S = l.type === r.x.APPLICATION,
        G = S ? l.applicationId : void 0,
        k = (0, N.h)(G),
        { hasAlreadyLinked: W, canStartAuthorization: F, startAuthorization: U } = (0, I.RD)(k),
        B = S && !W && F,
        { analyticsLocations: K } = (0, x.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        M = t.useCallback(() => {
            !L &&
                ((0, P.Y5)(l),
                v({ action: "WIDGET_ADDED", ...l.getProfileEditAnalyticsOptions() }),
                (0, D.XA)(J.jM.WIDGET_ADDED),
                e?.(),
                B && U({ analyticsLocations: K }));
        }, [L, B, l, v, e, U, K]),
        Q = C?.(l),
        Y =
            null == Q
                ? null
                : "string" == typeof Q
                  ? (0, i.jsx)("img", { src: Q, alt: "", width: 16, height: 16, className: q.Kk })
                  : Q,
        Z = d && S,
        aa = B ? o.LinkIcon : p.CirclePlusIcon,
        al = T || (b?.() ?? !1),
        ae = !S,
        ai =
            l.type === r.x.PERSONAL && "default" !== c
                ? (0, i.jsx)(g.A, {})
                : al
                  ? (0, i.jsx)(A.E, { type: "new", variant: "primary" })
                  : null;
    return (0, i.jsxs)("div", {
        className: n()(q.LG, d && q.oE),
        children: [
            (0, i.jsxs)(u.D, {
                className: n()(q.PH, y && q.PG, L && q.Lq),
                ...s,
                onClick: M,
                "aria-label":
                    B && null != k
                        ? h.intl.formatToPlainString(h.t.ATS0FK, { applicationName: k.name })
                        : f[l.type].getAriaLabel(l),
                "aria-busy": L,
                children: [
                    (function () {
                        let a = R(l);
                        switch (a.variant) {
                            case "details":
                                return (0, i.jsx)(O.E, {
                                    className: q.l4,
                                    gridClassName: q.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(O.l, {
                                    className: q.l4,
                                    gridClassName: q.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(w, { applicationId: a.applicationId, size: c });
                            case "clips-gallery":
                                return (0, i.jsx)(z, { className: q.l4, size: c });
                            case "personal":
                                return (0, i.jsx)(X, { className: q.l4, size: c });
                            default:
                                return (0, j.xb)(a);
                        }
                    })(),
                    ae && null != ai && (0, i.jsx)("div", { className: q.X4, children: ai }),
                    (0, i.jsxs)("div", {
                        className: q.Lw,
                        children: [
                            (0, i.jsx)(aa, { size: "md", color: "currentColor", className: q.c9 }),
                            (0, i.jsxs)("div", {
                                className: q.DD,
                                children: [
                                    !Z && Y,
                                    (0, i.jsx)(m.E, {
                                        variant: Z ? "body-sm/semibold" : "body-md/medium",
                                        color: d ? "text-default" : "text-strong",
                                        children: (function (a) {
                                            let { getTitle: l } = f[a.type];
                                            return null != l ? l(a) : _.Ok[a.type](a);
                                        })(l),
                                    }),
                                    Z && Y,
                                    al && !ae && (0, i.jsx)(A.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (function () {
                let a = R(l);
                switch (a.variant) {
                    case "application-widget":
                        return (0, i.jsx)(V, { applicationId: a.applicationId, size: c });
                    case "personal":
                        return (0, i.jsx)(H, { size: c });
                    default:
                        return null;
                }
            })(),
        ],
    });
}
