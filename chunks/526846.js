n.d(t, { m: () => D }), n(789020), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(772848),
    s = n(535655),
    c = n(973693),
    u = n(912370),
    d = n(442837),
    p = n(481060),
    h = n(40851),
    f = n(607070),
    m = n(100527),
    g = n(906732),
    b = n(226026),
    _ = n(397698),
    C = n(895924),
    y = n(471518),
    x = n(425986),
    v = n(216780),
    j = n(390322),
    O = n(857192),
    E = n(626135),
    N = n(456100),
    I = n(566620),
    P = n(127255),
    S = n(5200),
    Z = n(558317),
    T = n(403404),
    A = n(981631),
    w = n(388032),
    R = n(210408);
let M = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    k = 'vc-activities-'.concat((0, a.Z)());
function L(e) {
    var t;
    let n,
        { channel: l, openInPopout: o, onClick: a } = e,
        { fetchState: c, voiceBannerCollection: h } = (function () {
            let e = (0, d.e7)([O.default], () => O.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, y.XK)({
                        surface: M,
                        activeState: e
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([x.Z], () =>
                        x.Z.getFetchState({
                            surface: M,
                            activeState: e
                        })
                    ),
                    voiceBannerCollection: (0, d.e7)([x.Z], () =>
                        x.Z.getCollections({
                            surface: M,
                            activeState: e
                        })
                    )[0]
                }
            );
        })(),
        f = c === x.M.FETCHING,
        g = i.useMemo(() => {
            let e = null == h ? void 0 : h.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == h ? void 0 : h.application_directory_collection_items]),
        { trackItemImpressionRef: C } = (0, b.Z)({
            applicationId: null != (t = null == g ? void 0 : g.application.id) ? t : '',
            applicationFlags: null == g ? void 0 : g.application.flags,
            sectionName: 'app_launcher_in_voice_banner',
            sectionPosition: null == g ? void 0 : g.position,
            sectionOverallPosition: 0
        });
    return null == g || null == h || f
        ? null
        : (null != g.id &&
              null != g.image_hash &&
              (n = (0, v.$_)({
                  itemId: g.id,
                  hash: g.image_hash,
                  containerWidth: 584
              })),
          (0, r.jsxs)(p.P3F, {
              className: R.clickableBanner,
              innerRef: C,
              onClick: () => {
                  a(),
                      (0, _.Z)({
                          context: {
                              type: 'channel',
                              channel: l
                          },
                          openInPopout: o,
                          analyticsLocation: m.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: g.application.id }
                      });
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
let D = i.forwardRef(function (e, t) {
    var n, l;
    let { channel: a, isHovered: s, closePopout: c, onMouseEnter: u, onMouseLeave: b, onClick: _, className: y } = e,
        x = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: v, guild_id: O } = a;
    i.useEffect(() => {
        E.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: v,
            guild_id: O
        });
    }, [v, O]),
        i.useEffect(() => {
            s || c();
        }, [c, s]);
    let M = (0, h.bp)(),
        { analyticsLocations: D } = (0, g.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
        W = M === A.IlC.POPOUT,
        U =
            ((n = a.getGuildId()),
            (l = a),
            (0, P.Z)({
                guildId: n,
                context: {
                    channel: l,
                    type: 'channel'
                }
            }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => I.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: B } = N.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        H = i.useCallback(() => {
            (0, T.Z)({
                channel: a,
                openInPopout: W,
                analyticsLocations: D
            }),
                b(),
                _();
        }, [D, a, _, b, W]),
        F = i.useCallback(
            (e) => {
                u(),
                    E.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId()
                    });
            },
            [u, a]
        ),
        G = B ? p.iWm : p.nG3;
    return (0, r.jsx)(g.Gt, {
        value: D,
        children: (0, r.jsx)(j.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                'aria-labelledby': k,
                className: y,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: k,
                                children: w.NW.string(w.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: R.container,
                        onMouseEnter: F,
                        onMouseLeave: b,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: R.titleLeft,
                                        children: [
                                            (0, r.jsx)(G, {
                                                size: 'md',
                                                className: R.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: w.NW.string(w.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: R.titleRight,
                                        onClick: H,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: w.NW.string(w.t['K8+z4e'])
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
                            (0, r.jsx)(L, {
                                openInPopout: W,
                                channel: a,
                                onClick: () => {
                                    _(), c();
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: R.activityContainer,
                                children: [
                                    U.map((e) =>
                                        (0, r.jsx)(
                                            S.Y,
                                            {
                                                context: {
                                                    channel: a,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    c(), _();
                                                },
                                                aspectRatio: S.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: R.activitySuggestion,
                                                commandOrigin: C.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: o()(R.wumpusRocketOuterContainer, { [R.wumpusReducedMotion]: x }),
                                        children: (0, r.jsx)('div', {
                                            className: R.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(Z.Z, { className: R.wumpusRocket })
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
