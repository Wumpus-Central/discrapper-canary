(n.d(t, { m: () => L }), n(997841), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(535655),
    c = n(973693),
    u = n(912370),
    d = n(442837),
    p = n(481060),
    h = n(40851),
    f = n(607070),
    m = n(100527),
    g = n(906732),
    b = n(783097),
    _ = n(226026),
    y = n(397698),
    C = n(895924),
    x = n(471518),
    v = n(425986),
    j = n(216780),
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
    R = n(210408);
let M = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    D = 'vc-activities-'.concat((0, o.Z)());
function k(e) {
    var t;
    let n,
        { channel: l, openInPopout: a, onClick: o } = e,
        { fetchState: c, voiceBannerCollection: h } = (function () {
            let e = (0, d.e7)([E.default], () => E.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, x.XK)({
                        surface: M,
                        activeState: e
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([v.Z], () =>
                        v.Z.getFetchState({
                            surface: M,
                            activeState: e
                        })
                    ),
                    voiceBannerCollection: (0, d.e7)([v.Z], () =>
                        v.Z.getCollections({
                            surface: M,
                            activeState: e
                        })
                    )[0]
                }
            );
        })(),
        f = c === v.M.FETCHING,
        g = i.useMemo(() => {
            let e = null == h ? void 0 : h.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == h ? void 0 : h.application_directory_collection_items]),
        { trackItemImpressionRef: C } = (0, _.Z)({
            applicationId: null != (t = null == g ? void 0 : g.application.id) ? t : '',
            applicationFlags: null == g ? void 0 : g.application.flags,
            sectionName: 'app_launcher_in_voice_banner',
            sectionPosition: null == g ? void 0 : g.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != g ? (0, b.dF)(g.application) : void 0
        });
    return null == g || null == h || f
        ? null
        : (null != g.id &&
              null != g.image_hash &&
              (n = (0, j.$_)({
                  itemId: g.id,
                  hash: g.image_hash,
                  containerWidth: 584
              })),
          (0, r.jsxs)(p.P3F, {
              className: R.clickableBanner,
              innerRef: C,
              onClick: () => {
                  (o(),
                      (0, y.Z)({
                          context: {
                              type: 'channel',
                              channel: l
                          },
                          openInPopout: a,
                          analyticsLocation: m.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: g.application.id }
                      }));
              },
              children: [
                  (0, r.jsx)('img', {
                      alt: g.description,
                      src: n,
                      className: R.poster
                  }),
                  (0, r.jsx)('div', { className: R.posterDivider })
              ]
          }));
}
let L = i.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: o, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: b, className: _ } = e,
        x = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: v, guild_id: j } = l;
    (i.useEffect(() => {
        S.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: v,
            guild_id: j
        });
    }, [v, j]),
        i.useEffect(() => {
            o || s();
        }, [s, o]));
    let E = (0, h.bp)(),
        { analyticsLocations: M, newestAnalyticsLocation: L } = (0, g.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
        U = E === A.IlC.POPOUT,
        B = ((n = l.getGuildId()), (0, Z.Z)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => I.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: F } = P.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        H = i.useCallback(() => {
            ((0, y.Z)({
                context:
                    null != l
                        ? {
                              type: 'channel',
                              channel: l
                          }
                        : { type: 'contextless' },
                openInPopout: U,
                analyticsLocation: L
            }),
                u(),
                b());
        }, [l, L, b, u, U]),
        G = i.useCallback(
            (e) => {
                (c(),
                    S.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId()
                    }));
            },
            [c, l]
        ),
        V = F ? p.iWm : p.nG3;
    return (0, r.jsx)(g.Gt, {
        value: M,
        children: (0, r.jsx)(O.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                'aria-labelledby': D,
                className: _,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: D,
                                children: w.intl.string(w.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: R.container,
                        onMouseEnter: G,
                        onMouseLeave: u,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: R.titleLeft,
                                        children: [
                                            (0, r.jsx)(V, {
                                                size: 'md',
                                                className: R.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: w.intl.string(w.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: R.titleRight,
                                        onClick: H,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: w.intl.string(w.t['K8+z4e'])
                                            }),
                                            (0, r.jsx)(p.Fbu, {
                                                size: 'custom',
                                                width: 12,
                                                height: 12,
                                                color: 'var(--interactive-active)',
                                                className: R.titleRightIcon
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(k, {
                                openInPopout: U,
                                channel: l,
                                onClick: () => {
                                    (b(), s());
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: R.activityContainer,
                                children: [
                                    B.map((e) =>
                                        (0, r.jsx)(
                                            T.Y,
                                            {
                                                context: {
                                                    channel: l,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    (s(), b());
                                                },
                                                aspectRatio: T.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: R.activitySuggestion,
                                                commandOrigin: C.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: a()(R.wumpusRocketOuterContainer, { [R.wumpusReducedMotion]: x }),
                                        children: (0, r.jsx)('div', {
                                            className: R.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(N.Z, { className: R.wumpusRocket })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
});
