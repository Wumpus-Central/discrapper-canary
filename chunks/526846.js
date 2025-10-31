n.d(t, { m: () => k }), n(997841), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(535655),
    c = n(973693),
    u = n(912370),
    d = n(442837),
    p = n(481060),
    f = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(783097),
    b = n(226026),
    _ = n(397698),
    y = n(895924),
    C = n(471518),
    v = n(425986),
    O = n(216780),
    x = n(728285),
    E = n(390322),
    j = n(857192),
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
    D = "vc-activities-".concat((0, o.Z)());
function L(e) {
    var t;
    let n,
        { channel: l, openInPopout: a, onClick: o } = e,
        { fetchState: c, voiceBannerCollection: f } = (function () {
            let e = (0, d.e7)([j.default], () => j.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, C.XK)({
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
        y = i.useMemo(() => {
            let e = null == f ? void 0 : f.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == f ? void 0 : f.application_directory_collection_items]),
        { trackItemImpressionRef: x } = (0, b.Z)({
            applicationId: null != (t = null == y ? void 0 : y.application.id) ? t : "",
            applicationFlags: null == y ? void 0 : y.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: null == y ? void 0 : y.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != y ? (0, g.dF)(y.application) : void 0,
        });
    return null == y || null == f || m
        ? null
        : (null != y.id &&
              null != y.image_hash &&
              (n = (0, O.$_)({
                  itemId: y.id,
                  hash: y.image_hash,
                  containerWidth: 584,
              })),
          (0, r.jsxs)(p.P3F, {
              className: M.clickableBanner,
              innerRef: x,
              onClick: () => {
                  o(),
                      (0, _.Z)({
                          context: {
                              type: "channel",
                              channel: l,
                          },
                          openInPopout: a,
                          analyticsLocation: h.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: y.application.id },
                      });
              },
              children: [
                  (0, r.jsx)("img", {
                      alt: y.description,
                      src: n,
                      className: M.poster,
                  }),
                  (0, r.jsx)("div", { className: M.posterDivider }),
              ],
          }));
}
let k = i.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: o, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: g, className: b } = e,
        C = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: v, guild_id: O } = l;
    i.useEffect(() => {
        S.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: v,
            guild_id: O,
        });
    }, [v, O]),
        i.useEffect(() => {
            o || s();
        }, [s, o]);
    let j = (0, x.bp)(),
        { analyticsLocations: R, newestAnalyticsLocation: k } = (0, m.ZP)(h.Z.ACTIVITIES_MINI_SHELF),
        U = j === A.IlC.POPOUT,
        B = ((n = l.getGuildId()), (0, Z.Z)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => I.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: F } = P.c.useExperiment({ location: "ActivitiesMiniShelf" }, { autoTrackExposure: !0 }),
        V = i.useCallback(() => {
            (0, _.Z)({
                context:
                    null != l
                        ? {
                              type: "channel",
                              channel: l,
                          }
                        : { type: "contextless" },
                openInPopout: U,
                analyticsLocation: k,
            }),
                u(),
                g();
        }, [l, k, g, u, U]),
        H = i.useCallback(
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
        children: (0, r.jsx)(E.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                "aria-labelledby": D,
                className: b,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: D,
                                children: w.intl.string(w.t["2lnYtB"]),
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: M.container,
                        onMouseEnter: H,
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
                                                children: w.intl.string(w.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: M.titleRight,
                                        onClick: V,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: "eyebrow",
                                                children: w.intl.string(w.t["K8+z4S"]),
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
                                                commandOrigin: y.bB.MINI_SHELF,
                                            },
                                            e.application.id,
                                        ),
                                    ),
                                    (0, r.jsx)("div", {
                                        className: a()(M.wumpusRocketOuterContainer, { [M.wumpusReducedMotion]: C }),
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
