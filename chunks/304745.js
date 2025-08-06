n.d(t, { M: () => D }), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    l = n(911969),
    c = n(40851),
    u = n(317381),
    d = n(314490),
    f = n(374065),
    _ = n(451576),
    p = n(526846),
    h = n(119315),
    m = n(906732),
    g = n(397698),
    E = n(522651),
    b = n(243778),
    y = n(579185),
    O = n(301076),
    v = n(127379),
    I = n(981631),
    T = n(921944),
    S = n(388032);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 300,
    w = 200;
function D(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: A, setWhichPopoutIsOpen: C } = e,
        D = (0, o.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        L = (0, f.KF)(t.id),
        x = (0, f.g5)(L),
        M = L !== f.jy.CAN_LAUNCH || D,
        { isHovered: k, setIsHovered: j, onMouseEnter: U, onMouseLeave: G } = (0, y.Z)(w, P),
        B = (0, d.p)({ surface: l.eR.VOICE_LAUNCHER }),
        Z = (0, o.e7)(
            [u.ZP],
            () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation()),
        ),
        F = !M,
        V = i.useCallback(
            (e) => {
                "focus" !== e.type && U();
            },
            [U],
        ),
        H = (0, c.bp)() === I.IlC.POPOUT,
        { parentAnalyticsLocation: Y, newestAnalyticsLocation: W } = (0, m.ZP)(),
        K = i.useCallback(() => {
            (0, E.v)(Y, E.d.ACTIVITY),
                (0, g.Z)({
                    context:
                        null != t
                            ? {
                                  type: "channel",
                                  channel: t,
                              }
                            : { type: "contextless" },
                    openInPopout: H,
                    analyticsLocation: W,
                });
        }, [t, H, W, Y]),
        z = [];
    M || z.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, _.Z)(t.id) && !M && z.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE),
        M || z.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let q = i.useRef(!1),
        X = i.useRef(null);
    return (0, r.jsx)(b.ZP, {
        contentTypes: z,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: o } = e,
                l = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
            return (
                q.current && !l && o(T.L.AUTO_DISMISS),
                q.current !== l && (q.current = l),
                (0, r.jsx)(s.yRy, {
                    targetElementRef: X,
                    fixed: !0,
                    shouldShow: k && (A === v.D.ACTIVITY || null == A),
                    animation: s.yRy.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        j(!1), null == C || C(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return F
                            ? (0, r.jsx)(p.m, {
                                  ref: (e) => {
                                      null == i || i(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: U,
                                  onMouseLeave: G,
                                  isHovered: k,
                                  onClick: () => o(T.L.UNKNOWN),
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsx)(b.Xf, {
                            contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: B,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.ua7, {
                                            text: S.intl.string(S.t.P8vmUl),
                                            color: s.FGA.BRAND,
                                            forceOpen: !0,
                                            shouldShow: l,
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    "div",
                                                    R(N({ ref: X }, e), {
                                                        children: (0, r.jsx)(O.Z, {
                                                            disabled: M,
                                                            "aria-label": x,
                                                            label: F ? void 0 : x,
                                                            isActivityActive: Z,
                                                            onClick: () => {
                                                                K(),
                                                                    (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                        i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                        i ===
                                                                            a.z
                                                                                .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                        i ===
                                                                            a.z
                                                                                .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                        i ===
                                                                            a.z
                                                                                .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                        o(T.L.TAKE_ACTION),
                                                                    t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                        n(T.L.TAKE_ACTION);
                                                            },
                                                            onMouseEnter: V,
                                                            onMouseLeave: G,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                        t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, r.jsx)(h.r, {
                                                  top: 2,
                                                  right: 2,
                                                  size: 6,
                                              })
                                            : null,
                                    ],
                                });
                            },
                        }),
                })
            );
        },
    });
}
