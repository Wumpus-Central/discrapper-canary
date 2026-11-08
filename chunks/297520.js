a.d(e, { A: () => Z });
var i = a(477900),
    l = a(582128),
    n = a(503698),
    s = a.n(n),
    r = a(540185),
    c = a(403581),
    o = a(646514),
    d = a(173936),
    u = a(245604),
    p = a(805251),
    A = a(939249),
    f = a(834730),
    E = a(793574),
    m = a(688810),
    g = a(724302),
    I = a(587895),
    h = a(429913),
    L = a(611371),
    x = a(403362);
let N = {
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
Object.values(N);
var y = a(229231),
    j = a(792996);
let _ = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: N.LEAGUE_OF_LEGENDS }),
        getAriaLabel: () => j.intl.string(j.t.xJtdIm),
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({ variant: "details", applicationId: N.VALORANT }),
        getAriaLabel: () => j.intl.string(j.t.Ae8tRi),
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({ variant: "grid", applicationIds: [N.PEAK, N.BATTLEFIELD_6, N.REPO, N.BALDURS_GATE_3] }),
        getAriaLabel: () => j.intl.string(j.t["pBR+4j"]),
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [N.MARVEL_RIVALS, N.WORLD_OF_WARCRAFT, N.RUST, N.SILKSONG],
        }),
        getAriaLabel: () => j.intl.string(j.t.NtoBi1),
    },
    [r.x.APPLICATION]: {
        placeholder: (t) => ({ variant: "application-widget", applicationId: t.applicationId }),
        getAriaLabel: (t) =>
            j.intl.formatToPlainString(j.t.KfGahB, {
                applicationName: I.A.getApplication(t.applicationId)?.name ?? "",
            }),
    },
    [r.x.PERSONAL]: {
        placeholder: () => ({ variant: "personal" }),
        getAriaLabel: () => j.intl.string(j.t["1l30oB"]),
        getTitle: () => j.intl.string(j.t.f8kllL),
    },
    [r.x.CLIPS_GALLERY]: {
        placeholder: () => ({ variant: "clips-gallery" }),
        getAriaLabel: () => j.intl.string(j.t["7AVpta"]),
    },
};
function P(t) {
    return _[t.type].placeholder(t);
}
var T = a(210598),
    v = a(735321),
    R = a(384377),
    S = a(492280),
    D = a(886100),
    O = a(598748),
    b = a(855986),
    w = a(141628),
    G = a(531913),
    C = a(287809),
    F = a(183555),
    W = a(378145);
function k(t) {
    let e = (0, b.bG)([C.default], () => C.default.getCurrentUser());
    return null == e ? null : (0, i.jsx)(U, { ...t, userId: e.id });
}
function U(t) {
    let { applicationId: e, size: a = "default", userId: l } = t,
        n = (0, G.A)(l, e),
        s = n.surfaceConfigs[O.m.ADD_WIDGET_PREVIEW];
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: W.kL,
              children: (0, i.jsx)(D.kH, {
                  ...n,
                  surface: O.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: s,
                  layoutProps: { small: "small" === a },
              }),
          });
}
function B(t) {
    let { applicationId: e, size: a = "default" } = t,
        { trackUserProfileAction: n } = (0, F.NJ)(),
        s = (0, h.h)(e),
        { hasAlreadyLinked: r, canStartAuthorization: c, startAuthorization: o, fetched: d } = (0, g.RD)(s),
        { analyticsLocations: u } = (0, m.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        p = l.useCallback(() => {
            c &&
                (n({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                o({ analyticsLocations: u }));
        }, [c, n, e, o, u]);
    return "default" !== a || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: W.qr,
              children: [
                  (0, i.jsx)(w.ExperimentalGameControllerLinkIcon, { size: "xs" }),
                  (0, i.jsx)(f.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: d
                          ? r
                              ? j.intl.format(j.t.wiyuG9, { applicationName: s.name })
                              : c
                                ? j.intl.format(j.t.RNWFOQ, { onConnect: p })
                                : j.intl.string(j.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: W.bg }),
                  }),
              ],
          });
}
a(600253);
var M = a(307897);
function K(t) {
    let { className: e, size: a } = t;
    return (0, i.jsx)("div", {
        className: s()(M.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: M.CX,
            children: [
                (0, i.jsx)("div", { className: s()(M.$Q, { [M.EX]: "small" === a }) }),
                (0, i.jsx)("div", {
                    className: M._A,
                    children: Array.from({ length: 4 }, (t, e) =>
                        (0, i.jsx)("div", { className: s()(M.Tc, { [M.EX]: "small" === a }) }, e),
                    ),
                }),
            ],
        }),
    });
}
var V = a(553790);
function z() {
    return (0, i.jsxs)("div", {
        className: V.yL,
        children: [
            (0, i.jsx)("div", { className: V.si }),
            (0, i.jsx)("div", { className: V.bk }),
            (0, i.jsx)("div", { className: V.bk }),
        ],
    });
}
function X(t) {
    let { className: e, size: a } = t;
    return (0, i.jsxs)("div", {
        className: s()(V.kL, e, { [V.EX]: "small" === a }),
        "aria-hidden": !0,
        children: [(0, i.jsx)("div", { className: V.Iv }), (0, i.jsx)(z, {}), (0, i.jsx)(z, {})],
    });
}
var q = a(315629),
    H = a(706933);
function Y(t) {
    let { size: e } = t;
    return "default" !== e
        ? null
        : (0, i.jsxs)(q.h, {
              color: "nitro-pink",
              className: H.k,
              offsetBottom: -2.5,
              children: [
                  (0, i.jsx)(L.A, { variant: "secondary" }),
                  (0, i.jsx)(f.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: j.intl.string(j.t.xIJpoK),
                  }),
              ],
          });
}
var J = a(518477),
    Q = a(866680);
let $ = {
    [r.x.APPLICATION]: { icon: (t) => I.A.getApplication(t.applicationId)?.getIconURL(16) },
    [r.x.PERSONAL]: {
        icon: () => (0, i.jsx)(c.NitroWheelIcon, { size: "xs", color: o.A.colors.ICON_DEFAULT }),
        isNew: T.t0,
    },
};
function Z(t) {
    let {
            widget: e,
            onAddWidget: a,
            listItemProps: n,
            size: c = "default",
            compact: o = !1,
            loading: I = !1,
            trackUserProfileEditAction: N,
            isHighlighted: T = !1,
            onSelect: D,
        } = t,
        { icon: O, isNew: b } = $[e.type] ?? {},
        w = "small" === c,
        G = e.type === r.x.APPLICATION,
        C = G ? e.applicationId : void 0,
        F = (0, h.h)(C),
        { hasAlreadyLinked: W, canStartAuthorization: U, startAuthorization: M } = (0, g.RD)(F),
        V = null == D && G && !W && U,
        { analyticsLocations: z } = (0, m.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
        q = l.useCallback(() => {
            if (!I) {
                if (null != D) return void D();
                ((0, v.Y5)(e),
                    N({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                    (0, R.XA)(J.jM.WIDGET_ADDED),
                    a?.(),
                    V && M({ analyticsLocations: z }));
            }
        }, [I, D, V, e, N, a, M, z]),
        H = O?.(e),
        Z =
            null == H
                ? null
                : "string" == typeof H
                  ? (0, i.jsx)("img", { src: H, alt: "", width: 16, height: 16, className: Q.Kk })
                  : H,
        tt = o && G,
        te = V ? d.LinkIcon : u.CirclePlusIcon,
        ta = T || (b?.() ?? !1),
        ti = !G,
        tl =
            e.type === r.x.PERSONAL && "default" !== c
                ? (0, i.jsx)(L.A, {})
                : ta
                  ? (0, i.jsx)(p.E, { type: "new", variant: "primary" })
                  : null;
    return (0, i.jsxs)("div", {
        className: s()(Q.LG, o && Q.oE),
        children: [
            (0, i.jsxs)(A.D, {
                className: s()(Q.PH, w && Q.PG, I && Q.Lq),
                ...n,
                onClick: q,
                "aria-label":
                    V && null != F
                        ? j.intl.formatToPlainString(j.t.ATS0FK, { applicationName: F.name })
                        : _[e.type].getAriaLabel(e),
                "aria-busy": I,
                children: [
                    (function () {
                        let t = P(e);
                        switch (t.variant) {
                            case "details":
                                return (0, i.jsx)(S.E, {
                                    className: Q.l4,
                                    gridClassName: Q.Qs,
                                    gameId: t.applicationId,
                                });
                            case "grid":
                                return (0, i.jsx)(S.l, {
                                    className: Q.l4,
                                    gridClassName: Q.Qs,
                                    gameIds: t.applicationIds,
                                });
                            case "application-widget":
                                return (0, i.jsx)(k, { applicationId: t.applicationId, size: c });
                            case "clips-gallery":
                                return (0, i.jsx)(K, { className: Q.l4, size: c });
                            case "personal":
                                return (0, i.jsx)(X, { className: Q.l4, size: c });
                            default:
                                return (0, x.xb)(t);
                        }
                    })(),
                    ti && null != tl && (0, i.jsx)("div", { className: Q.X4, children: tl }),
                    (0, i.jsxs)("div", {
                        className: Q.Lw,
                        children: [
                            (0, i.jsx)(te, { size: "md", color: "currentColor", className: Q.c9 }),
                            (0, i.jsxs)("div", {
                                className: Q.DD,
                                children: [
                                    !tt && Z,
                                    (0, i.jsx)(f.E, {
                                        variant: tt ? "body-sm/semibold" : "body-md/medium",
                                        color: o ? "text-default" : "text-strong",
                                        children: (function (t) {
                                            let { getTitle: e } = _[t.type];
                                            return null != e ? e(t) : y.Ok[t.type](t);
                                        })(e),
                                    }),
                                    tt && Z,
                                    ta && !ti && (0, i.jsx)(p.E, { type: "new", variant: "primary" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (function () {
                let t = P(e);
                switch (t.variant) {
                    case "application-widget":
                        return (0, i.jsx)(B, { applicationId: t.applicationId, size: c });
                    case "personal":
                        return (0, i.jsx)(Y, { size: c });
                    default:
                        return null;
                }
            })(),
        ],
    });
}
