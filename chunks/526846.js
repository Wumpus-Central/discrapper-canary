n.d(t, { m: () => D }), n(997841), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(535655),
    c = n(973693),
    u = n(912370),
    d = n(442837),
    p = n(481060),
    h = n(607070),
    f = n(100527),
    m = n(906732),
    g = n(783097),
    b = n(226026),
    y = n(397698),
    C = n(895924),
    v = n(471518),
    _ = n(425986),
    x = n(216780),
    j = n(728285),
    O = n(390322),
    E = n(857192),
    S = n(626135),
    P = n(456100),
    I = n(566620),
    Z = n(127255),
    T = n(5200),
    N = n(558317),
    A = n(981631),
    w = n(388032),
    M = n(915062);
let R = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    L = "vc-activities-".concat((0, o.Z)());
function k(e) {
    var t;
    let n,
        { channel: l, openInPopout: a, onClick: o } = e,
        { fetchState: c, voiceBannerCollection: h } = (function () {
            let e = (0, d.e7)([E.default], () => E.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                r.useEffect(() => {
                    (0, v.XK)({
                        surface: R,
                        activeState: e,
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([_.Z], () =>
                        _.Z.getFetchState({
                            surface: R,
                            activeState: e,
                        }),
                    ),
                    voiceBannerCollection: (0, d.e7)([_.Z], () =>
                        _.Z.getCollections({
                            surface: R,
                            activeState: e,
                        }),
                    )[0],
                }
            );
        })(),
        m = c === _.M.FETCHING,
        C = r.useMemo(() => {
            let e = null == h ? void 0 : h.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == h ? void 0 : h.application_directory_collection_items]),
        { trackItemImpressionRef: j } = (0, b.Z)({
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
          (0, i.jsxs)(p.P3F, {
              className: M.clickableBanner,
              innerRef: j,
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
                  (0, i.jsx)("img", {
                      alt: C.description,
                      src: n,
                      className: M.poster,
                  }),
                  (0, i.jsx)("div", { className: M.posterDivider }),
              ],
          }));
}
let D = r.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: o, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: g, className: b } = e,
        v = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        { id: _, guild_id: x } = l;
    r.useEffect(() => {
        S.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: _,
            guild_id: x,
        });
    }, [_, x]),
        r.useEffect(() => {
            o || s();
        }, [s, o]);
    let E = (0, j.bp)(),
        { analyticsLocations: R, newestAnalyticsLocation: D } = (0, m.ZP)(f.Z.ACTIVITIES_MINI_SHELF),
        U = E === A.IlC.POPOUT,
        B = ((n = l.getGuildId()), (0, Z.Z)({ guildId: n }).slice(0, 5));
    r.useEffect(() => {
        let e = setTimeout(() => I.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: H } = P.c.useExperiment({ location: "ActivitiesMiniShelf" }, { autoTrackExposure: !0 }),
        V = r.useCallback(() => {
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
        F = r.useCallback(
            (e) => {
                c(),
                    S.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                    });
            },
            [c, l],
        ),
        G = H ? p.iWm : p.nG3;
    return (0, i.jsx)(m.Gt, {
        value: R,
        children: (0, i.jsx)(O.Z, {
            children: (0, i.jsxs)(p.VqE, {
                ref: t,
                "aria-labelledby": L,
                className: b,
                children: [
                    (0, i.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, i.jsx)(p.nn4, {
                            children: (0, i.jsx)(p.H, {
                                id: L,
                                children: w.intl.string(w.t["2lnYtB"]),
                            }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: M.container,
                        onMouseEnter: F,
                        onMouseLeave: u,
                        children: [
                            (0, i.jsxs)("div", {
                                className: M.titleContainer,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: M.titleLeft,
                                        children: [
                                            (0, i.jsx)(G, {
                                                size: "md",
                                                className: M.titleLeftIcon,
                                                color: "var(--interactive-active)",
                                            }),
                                            (0, i.jsx)(p.Text, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(p.P3F, {
                                        className: M.titleRight,
                                        onClick: V,
                                        children: [
                                            (0, i.jsx)(p.Text, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t["K8+z4S"]),
                                            }),
                                            (0, i.jsx)(p.Fbu, {
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
                            (0, i.jsx)(k, {
                                openInPopout: U,
                                channel: l,
                                onClick: () => {
                                    g(), s();
                                },
                            }),
                            (0, i.jsxs)("div", {
                                className: M.activityContainer,
                                children: [
                                    B.map((e) =>
                                        (0, i.jsx)(
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
                                    (0, i.jsx)("div", {
                                        className: a()(M.wumpusRocketOuterContainer, { [M.wumpusReducedMotion]: v }),
                                        children: (0, i.jsx)("div", {
                                            className: M.wumpusRocketInnerContainer,
                                            children: (0, i.jsx)(N.Z, { className: M.wumpusRocket }),
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
