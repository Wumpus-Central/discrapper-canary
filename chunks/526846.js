n.d(t, { m: () => W }), n(997841), n(953529);
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
    b = n(783097),
    _ = n(226026),
    y = n(397698),
    C = n(895924),
    x = n(471518),
    v = n(425986),
    j = n(216780),
    O = n(390322),
    E = n(857192),
    N = n(626135),
    I = n(456100),
    P = n(566620),
    S = n(127255),
    Z = n(5200),
    T = n(558317),
    A = n(403404),
    w = n(981631),
    R = n(388032),
    k = n(680832);
let M = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    L = 'vc-activities-'.concat((0, a.Z)());
function D(e) {
    var t;
    let n,
        { channel: l, openInPopout: o, onClick: a } = e,
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
              className: k.clickableBanner,
              innerRef: C,
              onClick: () => {
                  a(),
                      (0, y.Z)({
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
                      className: k.poster
                  }),
                  (0, r.jsx)('div', { className: k.posterDivider })
              ]
          }));
}
let W = i.forwardRef(function (e, t) {
    var n, l;
    let { channel: a, isHovered: s, closePopout: c, onMouseEnter: u, onMouseLeave: b, onClick: _, className: y } = e,
        x = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: v, guild_id: j } = a;
    i.useEffect(() => {
        N.default.track(w.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: v,
            guild_id: j
        });
    }, [v, j]),
        i.useEffect(() => {
            s || c();
        }, [c, s]);
    let E = (0, h.bp)(),
        { analyticsLocations: M } = (0, g.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
        W = E === w.IlC.POPOUT,
        U =
            ((n = a.getGuildId()),
            (l = a),
            (0, S.Z)({
                guildId: n,
                context: {
                    channel: l,
                    type: 'channel'
                }
            }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => P.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: B } = I.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        G = i.useCallback(() => {
            (0, A.Z)({
                channel: a,
                openInPopout: W,
                analyticsLocations: M
            }),
                b(),
                _();
        }, [M, a, _, b, W]),
        F = i.useCallback(
            (e) => {
                u(),
                    N.default.track(w.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId()
                    });
            },
            [u, a]
        ),
        H = B ? p.iWm : p.nG3;
    return (0, r.jsx)(g.Gt, {
        value: M,
        children: (0, r.jsx)(O.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                'aria-labelledby': L,
                className: y,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: L,
                                children: R.NW.string(R.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: k.container,
                        onMouseEnter: F,
                        onMouseLeave: b,
                        children: [
                            (0, r.jsxs)('div', {
                                className: k.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: k.titleLeft,
                                        children: [
                                            (0, r.jsx)(H, {
                                                size: 'md',
                                                className: k.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: R.NW.string(R.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: k.titleRight,
                                        onClick: G,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: R.NW.string(R.t['K8+z4e'])
                                            }),
                                            (0, r.jsx)(p.Fbu, {
                                                size: 'custom',
                                                width: 12,
                                                height: 12,
                                                color: 'var(--interactive-active)',
                                                className: k.titleRightIcon
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(D, {
                                openInPopout: W,
                                channel: a,
                                onClick: () => {
                                    _(), c();
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: k.activityContainer,
                                children: [
                                    U.map((e) =>
                                        (0, r.jsx)(
                                            Z.Y,
                                            {
                                                context: {
                                                    channel: a,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    c(), _();
                                                },
                                                aspectRatio: Z.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: k.activitySuggestion,
                                                commandOrigin: C.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: o()(k.wumpusRocketOuterContainer, { [k.wumpusReducedMotion]: x }),
                                        children: (0, r.jsx)('div', {
                                            className: k.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(T.Z, { className: k.wumpusRocket })
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
