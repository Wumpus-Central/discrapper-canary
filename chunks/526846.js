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
    h = n(2052),
    f = n(40851),
    m = n(607070),
    g = n(100527),
    b = n(906732),
    _ = n(226026),
    C = n(895924),
    v = n(674588),
    y = n(368862),
    x = n(34674),
    j = n(703656),
    O = n(390322),
    N = n(857192),
    E = n(626135),
    P = n(566620),
    I = n(127255),
    S = n(5200),
    Z = n(558317),
    T = n(403404),
    A = n(981631),
    w = n(388032),
    R = n(454510);
let k = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    M = 'vc-activities-'.concat((0, a.Z)());
function L(e) {
    var t;
    let n,
        { onClick: l } = e,
        { fetchState: a, voiceBannerCollection: c } = (function () {
            let e = (0, d.e7)([N.default], () => N.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            return (
                i.useEffect(() => {
                    (0, v.XK)({
                        surface: k,
                        activeState: e
                    });
                }, [e]),
                {
                    fetchState: (0, d.e7)([y.Z], () =>
                        y.Z.getFetchState({
                            surface: k,
                            activeState: e
                        })
                    ),
                    voiceBannerCollection: (0, d.e7)([y.Z], () =>
                        y.Z.getCollections({
                            surface: k,
                            activeState: e
                        })
                    )[0]
                }
            );
        })(),
        h = a === y.M.FETCHING,
        { analyticsLocations: f } = (0, b.ZP)(g.Z.APP_LAUNCHER_IN_VOICE_BANNER),
        m = i.useMemo(() => {
            let e = null == c ? void 0 : c.application_directory_collection_items[0];
            return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null;
        }, [null == c ? void 0 : c.application_directory_collection_items]),
        { trackItemImpressionRef: C } = (0, _.Z)({
            applicationId: null !== (t = null == m ? void 0 : m.application.id) && void 0 !== t ? t : '',
            applicationFlags: null == m ? void 0 : m.application.flags,
            sectionName: 'app_launcher_in_voice_banner',
            sectionPosition: null == m ? void 0 : m.position,
            sectionOverallPosition: 0
        });
    return null == m || null == c || h
        ? null
        : (null != m.id &&
              null != m.image_hash &&
              (n = (0, x.$_)({
                  itemId: m.id,
                  hash: m.image_hash,
                  containerWidth: 584
              })),
          (0, r.jsxs)(p.P3F, {
              className: o()(R.clickableBanner),
              innerRef: C,
              onClick: () => {
                  l(), (0, j.uL)(A.Z5c.ACTIVITY_DETAILS(m.application.id), { sourceLocationStack: f });
              },
              children: [
                  (0, r.jsx)('img', {
                      alt: m.description,
                      src: n,
                      className: R.poster
                  }),
                  (0, r.jsx)('div', { className: R.posterDivider })
              ]
          }));
}
let D = i.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: a, closePopout: s, onMouseEnter: c, onMouseLeave: u, onClick: _, className: v } = e,
        y = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        { id: x, guild_id: j } = l;
    i.useEffect(() => {
        E.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: x,
            guild_id: j
        });
    }, [x, j]),
        i.useEffect(() => {
            a || s();
        }, [s, a]);
    let N = (0, f.bp)(),
        { analyticsLocations: k } = (0, b.ZP)(g.Z.ACTIVITIES_MINI_SHELF),
        D = N === A.IlC.POPOUT,
        W = (0, h.O)(),
        U = ((n = l.getGuildId()), (0, I.Z)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => P.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let B = i.useCallback(() => {
            var e;
            (0, T.Z)({
                channel: l,
                guildId: null !== (e = l.getGuildId()) && void 0 !== e ? e : void 0,
                locationObject: W.location,
                openInPopout: D,
                analyticsLocations: k,
                opensAppLauncherModal: !0
            }),
                u(),
                _();
        }, [W, k, l, _, u, D]),
        F = i.useCallback(
            (e) => {
                c(),
                    E.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId()
                    });
            },
            [c, l]
        );
    return (0, r.jsx)(b.Gt, {
        value: k,
        children: (0, r.jsx)(O.Z, {
            children: (0, r.jsxs)(p.VqE, {
                ref: t,
                'aria-labelledby': M,
                className: v,
                children: [
                    (0, r.jsx)(p.y5t, {
                        forceLevel: 2,
                        children: (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                id: M,
                                children: w.NW.string(w.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: R.container,
                        onMouseEnter: F,
                        onMouseLeave: u,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.titleContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: R.titleLeft,
                                        children: [
                                            (0, r.jsx)(p.nG3, {
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
                                        onClick: B,
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
                                onClick: () => {
                                    _(), s();
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
                                                    channel: l,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    s(), _();
                                                },
                                                aspectRatio: S.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: R.activitySuggestion,
                                                commandOrigin: C.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, r.jsx)('div', {
                                        className: o()(R.wumpusRocketOuterContainer, { [R.wumpusReducedMotion]: y }),
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
