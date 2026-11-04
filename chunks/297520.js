i.d(l, { A: () => Z });
var e = i(477900),
    t = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(540185),
    c = i(403581),
    d = i(646514),
    o = i(173936),
    p = i(245604),
    A = i(805251),
    u = i(939249),
    m = i(834730),
    E = i(793574),
    x = i(688810),
    L = i(724302),
    I = i(587895),
    N = i(429913),
    g = i(611371),
    j = i(403362);
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
var _ = i(229231),
    h = i(792996);
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
                applicationName: I.A.getApplication(a.applicationId)?.name ?? "",
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
var T = i(210598),
    P = i(735321),
    D = i(384377),
    O = i(492280),
    b = i(886100),
    y = i(598748),
    S = i(855986),
    C = i(141628),
    G = i(531913),
    k = i(287809),
    W = i(183555),
    F = i(378145);
function U(a) {
    let l = (0, S.bG)([k.default], () => k.default.getCurrentUser());
    return null == l ? null : (0, e.jsx)(w, { ...a, userId: l.id });
}
function w(a) {
    let { applicationId: l, size: i = "default", userId: t } = a,
        s = (0, G.A)(t, l),
        n = s.surfaceConfigs[y.m.ADD_WIDGET_PREVIEW];
    return null == n
        ? null
        : (0, e.jsx)("div", {
              className: F.kL,
              children: (0, e.jsx)(b.kH, {
                  ...s,
                  surface: y.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: n,
                  layoutProps: { small: "small" === i },
              }),
          });
}
function V(a) {
    let { applicationId: l, size: i = "default" } = a,
        { trackUserProfileAction: s } = (0, W.NJ)(),
        n = (0, N.h)(l),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: d, fetched: o } = (0, L.RD)(n),
        { analyticsLocations: p } = (0, x.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        A = t.useCallback(() => {
            c &&
                (s({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: l }),
                d({ analyticsLocations: p }));
        }, [c, s, l, d, p]);
    return "default" !== i || null == n
        ? null
        : (0, e.jsxs)("div", {
              className: F.qr,
              children: [
                  (0, e.jsx)(C.A, { size: "xs" }),
                  (0, e.jsx)(m.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: o
                          ? r
                              ? h.intl.format(h.t.wiyuG9, { applicationName: n.name })
                              : c
                                ? h.intl.format(h.t.RNWFOQ, { onConnect: A })
                                : h.intl.string(h.t["9TX4UT"])
                          : (0, e.jsx)("div", { className: F.bg }),
                  }),
              ],
          });
}
i(600253);
var B = i(307897);
function z(a) {
    let { className: l, size: i } = a;
    return (0, e.jsx)("div", {
        className: n()(B.kL, l),
        "aria-hidden": !0,
        children: (0, e.jsxs)("div", {
            className: B.CX,
            children: [
                (0, e.jsx)("div", { className: n()(B.$Q, { [B.EX]: "small" === i }) }),
                (0, e.jsx)("div", {
                    className: B._A,
                    children: Array.from({ length: 4 }, (a, l) =>
                        (0, e.jsx)("div", { className: n()(B.Tc, { [B.EX]: "small" === i }) }, l),
                    ),
                }),
            ],
        }),
    });
}
var K = i(553790);
function M() {
    return (0, e.jsxs)("div", {
        className: K.yL,
        children: [
            (0, e.jsx)("div", { className: K.si }),
            (0, e.jsx)("div", { className: K.bk }),
            (0, e.jsx)("div", { className: K.bk }),
        ],
    });
}
function X(a) {
    let { className: l, size: i } = a;
    return (0, e.jsxs)("div", {
        className: n()(K.kL, l, { [K.EX]: "small" === i }),
        "aria-hidden": !0,
        children: [(0, e.jsx)("div", { className: K.Iv }), (0, e.jsx)(M, {}), (0, e.jsx)(M, {})],
    });
}
var Q = i(315629),
    Y = i(706933);
function H(a) {
    let { size: l } = a;
    return "default" !== l
        ? null
        : (0, e.jsxs)(Q.h, {
              color: "nitro-pink",
              className: Y.k,
              offsetBottom: -2.5,
              children: [
                  (0, e.jsx)(g.A, { variant: "secondary" }),
                  (0, e.jsx)(m.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: h.intl.string(h.t.xIJpoK),
                  }),
              ],
          });
}
var J = i(518477),
    q = i(866680);
let $ = {
    [r.x.APPLICATION]: { icon: (a) => I.A.getApplication(a.applicationId)?.getIconURL(16) },
    [r.x.PERSONAL]: { icon: () => (0, e.jsx)(c.t, { size: "xs", color: d.A.colors.ICON_DEFAULT }), isNew: T.t0 },
};
function Z(a) {
    let {
            widget: l,
            onAddWidget: i,
            listItemProps: s,
            size: c = "default",
            compact: d = !1,
            loading: I = !1,
            trackUserProfileEditAction: v,
            isHighlighted: T = !1,
        } = a,
        { icon: b, isNew: y } = $[l.type] ?? {},
        S = "small" === c,
        C = l.type === r.x.APPLICATION,
        G = C ? l.applicationId : void 0,
        k = (0, N.h)(G),
        { hasAlreadyLinked: W, canStartAuthorization: F, startAuthorization: w } = (0, L.RD)(k),
        B = C && !W && F,
        { analyticsLocations: K } = (0, x.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        M = t.useCallback(() => {
            !I &&
                ((0, P.Y5)(l),
                v({ action: "WIDGET_ADDED", ...l.getProfileEditAnalyticsOptions() }),
                (0, D.XA)(J.jM.WIDGET_ADDED),
                i?.(),
                B && w({ analyticsLocations: K }));
        }, [I, B, l, v, i, w, K]),
        Q = b?.(l),
        Y =
            null == Q
                ? null
                : "string" == typeof Q
                  ? (0, e.jsx)("img", { src: Q, alt: "", width: 16, height: 16, className: q.Kk })
                  : Q,
        Z = d && C,
        aa = B ? o.LinkIcon : p.U,
        al = T || (y?.() ?? !1),
        ai = !C,
        ae =
            l.type === r.x.PERSONAL && "default" !== c
                ? (0, e.jsx)(g.A, {})
                : al
                  ? (0, e.jsx)(A.E, { type: "new", variant: "primary" })
                  : null;
    return (0, e.jsxs)("div", {
        className: n()(q.LG, d && q.oE),
        children: [
            (0, e.jsxs)(u.D, {
                className: n()(q.PH, S && q.PG, I && q.Lq),
                ...s,
                onClick: M,
                "aria-label":
                    B && null != k
                        ? h.intl.formatToPlainString(h.t.ATS0FK, { applicationName: k.name })
                        : f[l.type].getAriaLabel(l),
                "aria-busy": I,
                children: [
                    (function () {
                        let a = R(l);
                        switch (a.variant) {
                            case "details":
                                return (0, e.jsx)(O.E, {
                                    className: q.l4,
                                    gridClassName: q.Qs,
                                    gameId: a.applicationId,
                                });
                            case "grid":
                                return (0, e.jsx)(O.l, {
                                    className: q.l4,
                                    gridClassName: q.Qs,
                                    gameIds: a.applicationIds,
                                });
                            case "application-widget":
                                return (0, e.jsx)(U, { applicationId: a.applicationId, size: c });
                            case "clips-gallery":
                                return (0, e.jsx)(z, { className: q.l4, size: c });
                            case "personal":
                                return (0, e.jsx)(X, { className: q.l4, size: c });
                            default:
                                return (0, j.xb)(a);
                        }
                    })(),
                    ai && null != ae && (0, e.jsx)("div", { className: q.X4, children: ae }),
                    (0, e.jsxs)("div", {
                        className: q.Lw,
                        children: [
                            (0, e.jsx)(aa, { size: "md", color: "currentColor", className: q.c9 }),
                            (0, e.jsxs)("div", {
                                className: q.DD,
                                children: [
                                    !Z && Y,
                                    (0, e.jsx)(m.E, {
                                        variant: Z ? "body-sm/semibold" : "body-md/medium",
                                        color: d ? "text-default" : "text-strong",
                                        children: (function (a) {
                                            let { getTitle: l } = f[a.type];
                                            return null != l ? l(a) : _.Ok[a.type](a);
                                        })(l),
                                    }),
                                    Z && Y,
                                    al && !ai && (0, e.jsx)(A.E, { type: "new", variant: "primary" }),
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
                        return (0, e.jsx)(V, { applicationId: a.applicationId, size: c });
                    case "personal":
                        return (0, e.jsx)(H, { size: c });
                    default:
                        return null;
                }
            })(),
        ],
    });
}
