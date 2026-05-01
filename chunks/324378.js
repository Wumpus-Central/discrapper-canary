n.d(t, { K: () => el }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(554146),
    r = n(990078),
    o = n(922016),
    c = n(155718),
    u = n(933958),
    d = n(404522),
    A = n(782091),
    E = n(641703);
n(938796);
var m = n(132500),
    h = n(724002),
    C = n(287174),
    g = n(487899),
    I = n(939249),
    p = n(305866),
    x = n(707554),
    T = n(140735),
    _ = n(323384),
    v = n(834730),
    N = n(320448),
    f = n(793574),
    j = n(688810),
    S = n(735991),
    b = n(786115),
    O = n(975412),
    y = n(392054),
    L = n(354138),
    M = n(111042),
    R = n(767599),
    D = n(267102),
    P = n(246356),
    G = n(111162),
    k = n(954571),
    U = n(795816),
    V = n(648027),
    B = n(855446),
    H = n(652215),
    w = n(985018),
    K = n(976524);
let F = C.K.APP_LAUNCHER_IN_VOICE_BANNER,
    Y = `vc-activities-${(0, m.A)()}`;
function X(e) {
    let t,
        n,
        { channel: a, openInPopout: r, onClick: o } = e,
        { fetchState: c, voiceBannerCollection: u } =
            ((t = (0, s.bG)([G.default], () => G.default.onlyShowPreviewAppCollections) ? h.W.PREVIEW : h.W.ACTIVE),
            i.useEffect(() => {
                (0, L.An)({ surface: F, activeState: t });
            }, [t]),
            {
                fetchState: (0, s.bG)([M.A], () => M.A.getFetchState({ surface: F, activeState: t })),
                voiceBannerCollection: (0, s.bG)([M.A], () => M.A.getCollections({ surface: F, activeState: t }))[0],
            }),
        d = c === M.e.FETCHING,
        A = i.useMemo(() => {
            let e = u?.application_directory_collection_items[0];
            return null == e ? null : e.type === g.L.APPLICATION_BANNER ? e : null;
        }, [u?.application_directory_collection_items]),
        { trackItemImpressionRef: E } = (0, b.A)({
            applicationId: A?.application.id ?? "",
            applicationFlags: A?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: A?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != A ? (0, S.Ii)(A.application) : void 0,
        });
    return null == A || null == u || d
        ? null
        : (null != A.id &&
              null != A.image_hash &&
              (n = (0, R.DH)({ itemId: A.id, hash: A.image_hash, containerWidth: 584 })),
          (0, l.jsxs)(I.D, {
              className: K.V8,
              innerRef: E,
              onClick: () => {
                  o(),
                      (0, O.A)({
                          context: { type: "channel", channel: a },
                          openInPopout: r,
                          analyticsLocation: f.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: A.application.id },
                      });
              },
              children: [
                  (0, l.jsx)("img", { alt: A.description, src: n, className: K.W_ }),
                  (0, l.jsx)("div", { className: K.LV }),
              ],
          }));
}
let z = i.forwardRef(function (e, t) {
    var n;
    let { channel: s, isHovered: a, closePopout: r, onMouseEnter: o, onMouseLeave: c, onClick: u, className: d } = e,
        { id: A, guild_id: E } = s;
    i.useEffect(() => {
        k.default.track(H.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: A, guild_id: E });
    }, [A, E]),
        i.useEffect(() => {
            a || r();
        }, [r, a]);
    let m = (0, D.Us)(),
        { analyticsLocations: h, newestAnalyticsLocation: C } = (0, j.Ay)(f.A.ACTIVITIES_MINI_SHELF),
        g = m === H.BRT.POPOUT,
        S = ((n = s.getGuildId()), (0, V.A)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => U.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let b = i.useCallback(() => {
            (0, O.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: g,
                analyticsLocation: C,
            }),
                c(),
                u();
        }, [s, C, u, c, g]),
        L = i.useCallback(
            (e) => {
                o(),
                    k.default.track(H.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    });
            },
            [o, s],
        );
    return (0, l.jsx)(j.f5, {
        value: h,
        children: (0, l.jsx)(P.A, {
            children: (0, l.jsxs)(p.l, {
                ref: t,
                "aria-labelledby": Y,
                className: d,
                children: [
                    (0, l.jsx)(x.F, {
                        forceLevel: 2,
                        children: (0, l.jsx)(T.A, {
                            children: (0, l.jsx)(x.H, { id: Y, children: w.intl.string(w.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: K.kL,
                        onMouseEnter: L,
                        onMouseLeave: c,
                        children: [
                            (0, l.jsxs)("div", {
                                className: K.gn,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: K.gH,
                                        children: [
                                            (0, l.jsx)(_.k, {
                                                size: "md",
                                                className: K.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, l.jsx)(v.E, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(I.D, {
                                        className: K.hc,
                                        onClick: b,
                                        children: [
                                            (0, l.jsx)(v.E, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t["K8+z4S"]),
                                            }),
                                            (0, l.jsx)(N._, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: K.O6,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsx)(X, {
                                openInPopout: g,
                                channel: s,
                                onClick: () => {
                                    u(), r();
                                },
                            }),
                            (0, l.jsx)("div", {
                                className: K.ht,
                                children: S.map((e) =>
                                    (0, l.jsx)(
                                        B.C,
                                        {
                                            context: { channel: s, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                r(), u();
                                            },
                                            aspectRatio: B.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: K.KU,
                                            commandOrigin: y.iw.MINI_SHELF,
                                        },
                                        e.application.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var W = n(521588),
    J = n(384059),
    q = n(379848),
    $ = n(421773),
    Q = n(697744),
    Z = n(709562);
function ee(e) {
    let { isActivityActive: t, onMouseEnter: n, onMouseLeave: i, onClick: s, ...a } = e,
        { Component: r, events: o, play: c } = (0, Q.c)();
    return (0, l.jsx)(Z.l, {
        isTrayButton: !0,
        isActive: t,
        color: t ? "green" : void 0,
        iconComponent: r,
        onMouseEnter: (e) => {
            n?.(e), o.onMouseEnter();
        },
        onMouseLeave: (e) => {
            i?.(e), o.onMouseLeave();
        },
        onClick: (e) => {
            s?.(e), c();
        },
        ...a,
    });
}
var et = n(376086),
    en = n(49999);
function el(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: m, setWhichPopoutIsOpen: h } = e,
        C = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        g = (0, A.et)(t.id),
        I = (0, A.dL)(g),
        p = g !== A.xy.CAN_LAUNCH || C,
        { isHovered: x, setIsHovered: T, onMouseEnter: _, onMouseLeave: v } = (0, $.A)(200, 300),
        N = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        f = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        S = !p,
        b = i.useCallback(
            (e) => {
                "focus" !== e.type && _();
            },
            [_],
        ),
        y = (0, D.Us)() === H.BRT.POPOUT,
        { parentAnalyticsLocation: L, newestAnalyticsLocation: M } = (0, j.Ay)(),
        R = i.useCallback(() => {
            (0, J.X)(L, J.O.ACTIVITY),
                (0, O.A)({
                    context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                    openInPopout: y,
                    analyticsLocation: M,
                });
        }, [t, y, M, L]),
        P = [];
    p || P.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, E.A)(t.id) && !p && P.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        p || P.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let G = i.useRef(!1),
        k = i.useRef(null);
    return (0, l.jsx)(q.Ay, {
        contentTypes: P,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: s } = e,
                c = i === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !x;
            return (
                G.current && !c && s(en.i.AUTO_DISMISS),
                G.current !== c && (G.current = c),
                (0, l.jsx)(o.Y, {
                    targetElementRef: k,
                    fixed: !0,
                    shouldShow: x && (m === et.P.ACTIVITY || null == m),
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        T(!1), h?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return S
                            ? (0, l.jsx)(z, {
                                  ref: (e) => {
                                      i?.(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: _,
                                  onMouseLeave: v,
                                  isHovered: x,
                                  onClick: () => s(en.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(q.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: N,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(r.m, {
                                            text: w.intl.string(w.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, l.jsx)("div", {
                                                ref: k,
                                                children: (0, l.jsx)(ee, {
                                                    disabled: p,
                                                    "aria-label": I,
                                                    label: S ? void 0 : I,
                                                    isActivityActive: f,
                                                    onClick: () => {
                                                        R(),
                                                            (i === a.M.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                i === a.M.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                i ===
                                                                    a.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                i ===
                                                                    a.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                i ===
                                                                    a.M
                                                                        .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                s(en.i.TAKE_ACTION),
                                                            t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                n(en.i.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: b,
                                                    onMouseLeave: v,
                                                }),
                                            }),
                                        }),
                                        t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, l.jsx)(W.a, { top: 2, right: 2, size: 6 })
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
