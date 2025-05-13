n.d(t, { m: () => U }), n(997841), n(953529);
var r = n(255367),
    i = n(73800),
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
    x = n(397698),
    y = n(895924),
    C = n(471518),
    v = n(425986),
    j = n(216780),
    O = n(390322),
    E = n(857192),
    I = n(626135),
    S = n(456100),
    P = n(566620),
    Z = n(127255),
    N = n(5200),
    T = n(558317),
    A = n(403404),
    w = n(981631),
    R = n(388032),
    k = n(210408);
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
                    (0, C.XK)({
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
        { trackItemImpressionRef: y } = (0, _.Z)({
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
              innerRef: y,
              onClick: () => {
                  a(),
                      (0, x.Z)({
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
let U = i.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: a, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: b, className: _ } = e,
        x = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: C, guild_id: v } = l;
    i.useEffect(() => {
        I.default.track(w.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: C,
            guild_id: v
        });
    }, [C, v]),
        i.useEffect(() => {
            a || s();
        }, [s, a]);
    let j = (0, h.bp)(),
        { analyticsLocations: E } = (0, g.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
        M = j === w.IlC.POPOUT,
        U = ((n = l.getGuildId()), (0, Z.Z)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => P.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let { enabled: B } = S.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        G = i.useCallback(() => {
            (0, A.Z)({
                channel: l,
                openInPopout: M,
                analyticsLocations: E
            }),
                u(),
                b();
        }, [E, l, b, u, M]),
        F = i.useCallback(
            (e) => {
                c(),
                    I.default.track(w.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId()
                    });
            },
            [c, l]
        ),
        H = B ? p.iWm : p.nG3;
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
                        className: k.container,
                        onMouseEnter: F,
                        onMouseLeave: u,
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
                                                children: R.intl.string(R.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(p.P3F, {
                                        className: k.titleRight,
                                        onClick: G,
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
                                                className: k.titleRightIcon
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(D, {
                                openInPopout: M,
                                channel: l,
                                onClick: () => {
                                    b(), s();
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: k.activityContainer,
                                children: [
                                    U.map((e) =>
                                        (0, r.jsx)(
                                            N.Y,
                                            {
                                                context: {
                                                    channel: l,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    s(), b();
                                                },
                                                aspectRatio: N.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: k.activitySuggestion,
                                                commandOrigin: y.bB.MINI_SHELF
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
