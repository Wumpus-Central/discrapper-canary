(n.d(t, { m: () => U }), n(997841), n(953529));
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
    A = n(403404),
    w = n(981631),
    R = n(388032),
    M = n(210408);
let D = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    L = 'vc-activities-'.concat((0, o.Z)());
function k(e) {
    var t;
    let n,
        { channel: l, openInPopout: a, onClick: o } = e,
        { fetchState: c, voiceBannerCollection: h } = (function () {
            let e = (0, d.e7)([E.default], () => E.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, x.XK)({
                        surface: D,
                        activeState: e
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([v.Z], () =>
                        v.Z.getFetchState({
                            surface: D,
                            activeState: e
                        })
                    ),
                    voiceBannerCollection: (0, d.e7)([v.Z], () =>
                        v.Z.getCollections({
                            surface: D,
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
              className: M.clickableBanner,
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
                      className: M.poster
                  }),
                  (0, r.jsx)('div', { className: M.posterDivider })
              ]
          }));
}
let U = i.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: o, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: b, className: _ } = e,
        y = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: x, guild_id: v } = l;
    (i.useEffect(() => {
        S.default.track(w.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: x,
            guild_id: v
        });
    }, [x, v]),
        i.useEffect(() => {
            o || s();
        }, [s, o]));
    let j = (0, h.bp)(),
        { analyticsLocations: E } = (0, g.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
        D = j === w.IlC.POPOUT,
        U = ((n = l.getGuildId()), (0, Z.Z)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => I.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: B } = P.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        F = i.useCallback(() => {
            ((0, A.Z)({
                channel: l,
                openInPopout: D,
                analyticsLocations: E
            }),
                u(),
                b());
        }, [E, l, b, u, D]),
        H = i.useCallback(
            (e) => {
                (c(),
                    S.default.track(w.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId()
                    }));
            },
            [c, l]
        ),
        G = B ? p.iWm : p.nG3;
    return (0, r.jsx)(g.Gt, {
        value: E,
        children: (0, r.jsx)(O.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                'aria-labelledby': L,
                className: _,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: L,
                                children: R.intl.string(R.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: M.container,
                        onMouseEnter: H,
                        onMouseLeave: u,
                        children: [
                            (0, r.jsxs)('div', {
                                className: M.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: M.titleLeft,
                                        children: [
                                            (0, r.jsx)(G, {
                                                size: 'md',
                                                className: M.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: R.intl.string(R.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: M.titleRight,
                                        onClick: F,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                children: R.intl.string(R.t['K8+z4e'])
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
                            (0, r.jsx)(k, {
                                openInPopout: D,
                                channel: l,
                                onClick: () => {
                                    (b(), s());
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: M.activityContainer,
                                children: [
                                    U.map((e) =>
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
                                                animatedDivClass: M.activitySuggestion,
                                                commandOrigin: C.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: a()(M.wumpusRocketOuterContainer, { [M.wumpusReducedMotion]: y }),
                                        children: (0, r.jsx)('div', {
                                            className: M.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(N.Z, { className: M.wumpusRocket })
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
