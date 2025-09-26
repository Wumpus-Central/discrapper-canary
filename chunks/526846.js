n.d(t, { m: () => D }), n(997841), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(535655),
    c = n(973693),
    u = n(706527),
    d = n(442837),
    p = n(481060),
    h = n(607070),
    f = n(100527),
    m = n(906732),
    g = n(783097),
    b = n(226026),
    y = n(397698),
    C = n(895924),
    _ = n(471518),
    v = n(425986),
    x = n(216780),
    O = n(728285),
    j = n(390322),
    E = n(857192),
    S = n(626135),
    P = n(456100),
    I = n(566620),
    Z = n(127255),
    T = n(5200),
    N = n(558317),
    A = n(981631),
    w = n(388032),
    M = n(201512);
let R = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    k = "vc-activities-".concat((0, o.Z)());
function L(e) {
    var t;
    let n,
        { channel: l, openInPopout: a, onClick: o } = e,
        { fetchState: c, voiceBannerCollection: h } = (function () {
            let e = (0, d.e7)([E.default], () => E.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, _.XK)({
                        surface: R,
                        activeState: e,
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([v.Z], () =>
                        v.Z.getFetchState({
                            surface: R,
                            activeState: e,
                        }),
                    ),
                    voiceBannerCollection: (0, d.e7)([v.Z], () =>
                        v.Z.getCollections({
                            surface: R,
                            activeState: e,
                        }),
                    )[0],
                }
            );
        })(),
        m = c === v.M.FETCHING,
        C = i.useMemo(() => {
            let e = null == h ? void 0 : h.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == h ? void 0 : h.application_directory_collection_items]),
        { trackItemImpressionRef: O } = (0, b.Z)({
            applicationId: null != (t = null == C ? void 0 : C.application.id) ? t : "",
            applicationFlags: null == C ? void 0 : C.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: null == C ? void 0 : C.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != C ? (0, g.dF)(C.application) : void 0,
        });
    return null == C || null == h || m
        ? null
        : (null != C.id &&
              null != C.image_hash &&
              (n = (0, x.$_)({
                  itemId: C.id,
                  hash: C.image_hash,
                  containerWidth: 584,
              })),
          (0, r.jsxs)(p.P3F, {
              className: M.clickableBanner,
              innerRef: O,
              onClick: () => {
                  o(),
                      (0, y.Z)({
                          context: {
                              type: "channel",
                              channel: l,
                          },
                          openInPopout: a,
                          analyticsLocation: f.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: C.application.id },
                      });
              },
              children: [
                  (0, r.jsx)("img", {
                      alt: C.description,
                      src: n,
                      className: M.poster,
                  }),
                  (0, r.jsx)("div", { className: M.posterDivider }),
              ],
          }));
}
let D = i.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: o, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: g, className: b } = e,
        _ = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        { id: v, guild_id: x } = l;
    i.useEffect(() => {
        S.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: v,
            guild_id: x,
        });
    }, [v, x]),
        i.useEffect(() => {
            o || s();
        }, [s, o]);
    let E = (0, O.bp)(),
        { analyticsLocations: R, newestAnalyticsLocation: D } = (0, m.ZP)(f.Z.ACTIVITIES_MINI_SHELF),
        U = E === A.IlC.POPOUT,
        B = ((n = l.getGuildId()), (0, Z.Z)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => I.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: F } = P.c.useExperiment({ location: "ActivitiesMiniShelf" }, { autoTrackExposure: !0 }),
        H = i.useCallback(() => {
            (0, y.Z)({
                context:
                    null != l
                        ? {
                              type: "channel",
                              channel: l,
                          }
                        : { type: "contextless" },
                openInPopout: U,
                analyticsLocation: D,
            }),
                u(),
                g();
        }, [l, D, g, u, U]),
        V = i.useCallback(
            (e) => {
                c(),
                    S.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                    });
            },
            [c, l],
        ),
        G = F ? p.iWm : p.nG3;
    return (0, r.jsx)(m.Gt, {
        value: R,
        children: (0, r.jsx)(j.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                "aria-labelledby": k,
                className: b,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: k,
                                children: w.intl.string(w.t["2lnYtL"]),
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: M.container,
                        onMouseEnter: V,
                        onMouseLeave: u,
                        children: [
                            (0, r.jsxs)("div", {
                                className: M.titleContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: M.titleLeft,
                                        children: [
                                            (0, r.jsx)(G, {
                                                size: "md",
                                                className: M.titleLeftIcon,
                                                color: "var(--interactive-active)",
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t.f3Cz29),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: M.titleRight,
                                        onClick: H,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t["K8+z4e"]),
                                            }),
                                            (0, r.jsx)(p.Fbu, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-active)",
                                                className: M.titleRightIcon,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(L, {
                                openInPopout: U,
                                channel: l,
                                onClick: () => {
                                    g(), s();
                                },
                            }),
                            (0, r.jsxs)("div", {
                                className: M.activityContainer,
                                children: [
                                    B.map((e) =>
                                        (0, r.jsx)(
                                            T.Y,
                                            {
                                                context: {
                                                    channel: l,
                                                    type: "channel",
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    s(), g();
                                                },
                                                aspectRatio: T.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: M.activitySuggestion,
                                                commandOrigin: C.bB.MINI_SHELF,
                                            },
                                            e.application.id,
                                        ),
                                    ),
                                    (0, r.jsx)("div", {
                                        className: a()(M.wumpusRocketOuterContainer, { [M.wumpusReducedMotion]: _ }),
                                        children: (0, r.jsx)("div", {
                                            className: M.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(N.Z, { className: M.wumpusRocket }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
