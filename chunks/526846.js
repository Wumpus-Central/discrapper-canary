n.d(t, { m: () => W }), n(789020), n(266796);
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
    h = n(2052),
    f = n(40851),
    m = n(607070),
    g = n(100527),
    b = n(906732),
    _ = n(226026),
    C = n(397698),
    v = n(895924),
    y = n(471518),
    x = n(425986),
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
    M = n(908848);
let k = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    L = 'vc-activities-'.concat((0, a.Z)());
function D(e) {
    var t;
    let n,
        { channel: l, openInPopout: o, onClick: a } = e,
        { fetchState: c, voiceBannerCollection: h } = (function () {
            let e = (0, d.e7)([E.default], () => E.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, y.XK)({
                        surface: k,
                        activeState: e
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([x.Z], () =>
                        x.Z.getFetchState({
                            surface: k,
                            activeState: e
                        })
                    ),
                    voiceBannerCollection: (0, d.e7)([x.Z], () =>
                        x.Z.getCollections({
                            surface: k,
                            activeState: e
                        })
                    )[0]
                }
            );
        })(),
        f = c === x.M.FETCHING,
        m = i.useMemo(() => {
            let e = null == h ? void 0 : h.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == h ? void 0 : h.application_directory_collection_items]),
        { trackItemImpressionRef: b } = (0, _.Z)({
            applicationId: null !== (t = null == m ? void 0 : m.application.id) && void 0 !== t ? t : '',
            applicationFlags: null == m ? void 0 : m.application.flags,
            sectionName: 'app_launcher_in_voice_banner',
            sectionPosition: null == m ? void 0 : m.position,
            sectionOverallPosition: 0
        });
    return null == m || null == h || f
        ? null
        : (null != m.id &&
              null != m.image_hash &&
              (n = (0, j.$_)({
                  itemId: m.id,
                  hash: m.image_hash,
                  containerWidth: 584
              })),
          (0, r.jsxs)(p.P3F, {
              className: M.clickableBanner,
              innerRef: b,
              onClick: () => {
                  a(),
                      (0, C.Z)({
                          context: {
                              type: 'channel',
                              channel: l
                          },
                          openInPopout: o,
                          analyticsLocation: g.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: m.application.id }
                      });
              },
              children: [
                  (0, r.jsx)('img', {
                      alt: m.description,
                      src: n,
                      className: M.poster
                  }),
                  (0, r.jsx)('div', { className: M.posterDivider })
              ]
          }));
}
let W = i.forwardRef(function (e, t) {
    var n, l;
    let { channel: a, isHovered: s, closePopout: c, onMouseEnter: u, onMouseLeave: _, onClick: C, className: y } = e,
        x = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        { id: j, guild_id: E } = a;
    i.useEffect(() => {
        N.default.track(w.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: j,
            guild_id: E
        });
    }, [j, E]),
        i.useEffect(() => {
            s || c();
        }, [c, s]);
    let k = (0, f.bp)(),
        { analyticsLocations: W } = (0, b.ZP)(g.Z.ACTIVITIES_MINI_SHELF),
        U = k === w.IlC.POPOUT,
        B = (0, h.O)(),
        H =
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
    let { enabled: F } = I.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        G = i.useCallback(() => {
            var e;
            (0, A.Z)({
                channel: a,
                guildId: null !== (e = a.getGuildId()) && void 0 !== e ? e : void 0,
                locationObject: B.location,
                openInPopout: U,
                analyticsLocations: W,
                opensAppLauncherModal: !0
            }),
                _(),
                C();
        }, [B, W, a, C, _, U]),
        V = i.useCallback(
            (e) => {
                u(),
                    N.default.track(w.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId()
                    });
            },
            [u, a]
        ),
        z = F ? p.iWm : p.nG3;
    return (0, r.jsx)(b.Gt, {
        value: W,
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
                        className: M.container,
                        onMouseEnter: V,
                        onMouseLeave: _,
                        children: [
                            (0, r.jsxs)('div', {
                                className: M.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: M.titleLeft,
                                        children: [
                                            (0, r.jsx)(z, {
                                                size: 'md',
                                                className: M.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: R.NW.string(R.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: M.titleRight,
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
                                                className: M.titleRightIcon
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(D, {
                                openInPopout: U,
                                channel: a,
                                onClick: () => {
                                    C(), c();
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: M.activityContainer,
                                children: [
                                    H.map((e) =>
                                        (0, r.jsx)(
                                            Z.Y,
                                            {
                                                context: {
                                                    channel: a,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    c(), C();
                                                },
                                                aspectRatio: Z.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: M.activitySuggestion,
                                                commandOrigin: v.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: o()(M.wumpusRocketOuterContainer, { [M.wumpusReducedMotion]: x }),
                                        children: (0, r.jsx)('div', {
                                            className: M.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(T.Z, { className: M.wumpusRocket })
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
