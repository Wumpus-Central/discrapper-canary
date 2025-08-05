(n.d(t, { m: () => V }), n(997841), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(535655),
    c = n(973693),
    u = n(912370),
    d = n(442837),
    f = n(481060),
    _ = n(40851),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(783097),
    E = n(226026),
    b = n(397698),
    y = n(895924),
    O = n(471518),
    v = n(425986),
    I = n(216780),
    T = n(390322),
    S = n(857192),
    A = n(626135),
    N = n(456100),
    C = n(566620),
    w = n(127255),
    R = n(5200),
    P = n(558317),
    D = n(981631),
    L = n(388032),
    x = n(210408);
let k = 5,
    j = 12,
    M = 1000,
    U = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    G = 584,
    B = 'vc-activities-'.concat((0, s.Z)());
function Z() {
    let e = (0, d.e7)([S.default], () => S.default.onlyShowPreviewAppCollections) ? l.E.PREVIEW : l.E.ACTIVE;
    return (
        i.useEffect(() => {
            (0, O.XK)({
                surface: U,
                activeState: e
            });
        }, [e]),
        {
            fetchState: (0, d.e7)([v.Z], () =>
                v.Z.getFetchState({
                    surface: U,
                    activeState: e
                })
            ),
            voiceBannerCollection: (0, d.e7)([v.Z], () =>
                v.Z.getCollections({
                    surface: U,
                    activeState: e
                })
            )[0]
        }
    );
}
function F(e) {
    var t;
    let n,
        { channel: a, openInPopout: o, onClick: s } = e,
        { fetchState: l, voiceBannerCollection: c } = Z(),
        d = l === v.M.FETCHING,
        _ = i.useMemo(() => {
            let e = null == c ? void 0 : c.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == c ? void 0 : c.application_directory_collection_items]),
        { trackItemImpressionRef: p } = (0, E.Z)({
            applicationId: null != (t = null == _ ? void 0 : _.application.id) ? t : '',
            applicationFlags: null == _ ? void 0 : _.application.flags,
            sectionName: 'app_launcher_in_voice_banner',
            sectionPosition: null == _ ? void 0 : _.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != _ ? (0, g.dF)(_.application) : void 0
        });
    return null == _ || null == c || d
        ? null
        : (null != _.id &&
              null != _.image_hash &&
              (n = (0, I.$_)({
                  itemId: _.id,
                  hash: _.image_hash,
                  containerWidth: G
              })),
          (0, r.jsxs)(f.P3F, {
              className: x.clickableBanner,
              innerRef: p,
              onClick: () => {
                  (s(),
                      (0, b.Z)({
                          context: {
                              type: 'channel',
                              channel: a
                          },
                          openInPopout: o,
                          analyticsLocation: h.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: _.application.id }
                      }));
              },
              children: [
                  (0, r.jsx)('img', {
                      alt: _.description,
                      src: n,
                      className: x.poster
                  }),
                  (0, r.jsx)('div', { className: x.posterDivider })
              ]
          }));
}
let V = i.forwardRef(function (e, t) {
    let { channel: n, isHovered: a, closePopout: s, onMouseEnter: l, onMouseLeave: c, onClick: u, className: g } = e,
        E = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        { id: O, guild_id: v } = n;
    (i.useEffect(() => {
        A.default.track(D.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: O,
            guild_id: v
        });
    }, [O, v]),
        i.useEffect(() => {
            a || s();
        }, [s, a]));
    let I = (0, _.bp)(),
        { analyticsLocations: S, newestAnalyticsLocation: w } = (0, m.ZP)(h.Z.ACTIVITIES_MINI_SHELF),
        k = I === D.IlC.POPOUT,
        U = H(n.getGuildId());
    i.useEffect(() => {
        let e = setTimeout(() => C.ux(), M);
        return () => clearTimeout(e);
    }, []);
    let { enabled: G } = N.c.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }),
        Z = i.useCallback(() => {
            ((0, b.Z)({
                context:
                    null != n
                        ? {
                              type: 'channel',
                              channel: n
                          }
                        : { type: 'contextless' },
                openInPopout: k,
                analyticsLocation: w
            }),
                c(),
                u());
        }, [n, w, u, c, k]),
        V = i.useCallback(
            (e) => {
                (l(),
                    A.default.track(D.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: n.id,
                        guild_id: n.getGuildId()
                    }));
            },
            [l, n]
        ),
        Y = G ? f.iWm : f.nG3;
    return (0, r.jsx)(m.Gt, {
        value: S,
        children: (0, r.jsx)(T.Z, {
            children: (0, r.jsxs)(f.VqE, {
                ref: t,
                'aria-labelledby': B,
                className: g,
                children: [
                    (0, r.jsx)(f.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(f.nn4, {
                            children: (0, r.jsx)(f.H, {
                                id: B,
                                children: L.intl.string(L.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: x.container,
                        onMouseEnter: V,
                        onMouseLeave: c,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: x.titleLeft,
                                        children: [
                                            (0, r.jsx)(Y, {
                                                size: 'md',
                                                className: x.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, r.jsx)(f.Text, {
                                                variant: 'eyebrow',
                                                children: L.intl.string(L.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(f.P3F, {
                                        className: x.titleRight,
                                        onClick: Z,
                                        children: [
                                            (0, r.jsx)(f.Text, {
                                                variant: 'eyebrow',
                                                children: L.intl.string(L.t['K8+z4e'])
                                            }),
                                            (0, r.jsx)(f.Fbu, {
                                                size: 'custom',
                                                width: j,
                                                height: j,
                                                color: 'var(--interactive-active)',
                                                className: x.titleRightIcon
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(F, {
                                openInPopout: k,
                                channel: n,
                                onClick: () => {
                                    (u(), s());
                                }
                            }),
                            (0, r.jsxs)('div', {
                                className: x.activityContainer,
                                children: [
                                    U.map((e) =>
                                        (0, r.jsx)(
                                            R.Y,
                                            {
                                                context: {
                                                    channel: n,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    (s(), u());
                                                },
                                                aspectRatio: R.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: x.activitySuggestion,
                                                commandOrigin: y.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: o()(x.wumpusRocketOuterContainer, { [x.wumpusReducedMotion]: E }),
                                        children: (0, r.jsx)('div', {
                                            className: x.wumpusRocketInnerContainer,
                                            children: (0, r.jsx)(P.Z, { className: x.wumpusRocket })
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
function H(e) {
    return (0, w.Z)({ guildId: e }).slice(0, k);
}
