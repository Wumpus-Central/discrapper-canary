n.d(t, { m: () => w });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(772848),
    o = n(535655),
    c = n(973693),
    d = n(912370),
    u = n(442837),
    h = n(481060),
    p = n(2052),
    m = n(40851),
    f = n(607070),
    g = n(100527),
    _ = n(906732),
    C = n(226026),
    x = n(895924),
    v = n(674588),
    E = n(368862),
    I = n(34674),
    b = n(703656),
    Z = n(390322),
    N = n(857192),
    T = n(626135),
    S = n(566620),
    j = n(127255),
    y = n(5200),
    A = n(558317),
    P = n(403404),
    R = n(981631),
    M = n(388032),
    L = n(350562);
let k = c.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    O = 'vc-activities-'.concat((0, s.Z)());
function D(e) {
    var t;
    let n,
        { onClick: a } = e,
        { fetchState: s, voiceBannerCollection: c } = (function () {
            let e = (0, u.e7)([N.default], () => N.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE;
            return (
                l.useEffect(() => {
                    (0, v.XK)({
                        surface: k,
                        activeState: e
                    });
                }, [e]),
                {
                    fetchState: (0, u.e7)([E.Z], () =>
                        E.Z.getFetchState({
                            surface: k,
                            activeState: e
                        })
                    ),
                    voiceBannerCollection: (0, u.e7)([E.Z], () =>
                        E.Z.getCollections({
                            surface: k,
                            activeState: e
                        })
                    )[0]
                }
            );
        })(),
        p = s === E.M.FETCHING,
        { analyticsLocations: m } = (0, _.ZP)(g.Z.APP_LAUNCHER_IN_VOICE_BANNER),
        f = l.useMemo(() => {
            let e = null == c ? void 0 : c.application_directory_collection_items[0];
            return null == e ? null : e.type === d.C.APPLICATION_BANNER ? e : null;
        }, [null == c ? void 0 : c.application_directory_collection_items]),
        { trackItemImpressionRef: x } = (0, C.Z)({
            applicationId: null !== (t = null == f ? void 0 : f.application.id) && void 0 !== t ? t : '',
            sectionName: 'app_launcher_in_voice_banner',
            sectionPosition: null == f ? void 0 : f.position,
            sectionOverallPosition: 0
        });
    return null == f || null == c || p
        ? null
        : (null != f.id &&
              null != f.image_hash &&
              (n = (0, I.$_)({
                  itemId: f.id,
                  hash: f.image_hash,
                  containerWidth: 584
              })),
          (0, i.jsxs)(h.P3F, {
              className: r()(L.clickableBanner),
              innerRef: x,
              onClick: () => {
                  a(), (0, b.uL)(R.Z5c.ACTIVITY_DETAILS(f.application.id), { sourceLocationStack: m });
              },
              children: [
                  (0, i.jsx)('img', {
                      alt: f.description,
                      src: n,
                      className: L.poster
                  }),
                  (0, i.jsx)('div', { className: L.posterDivider })
              ]
          }));
}
let w = l.forwardRef(function (e, t) {
    var n;
    let { channel: a, isHovered: s, closePopout: o, onMouseEnter: c, onMouseLeave: d, onClick: C, className: v } = e,
        E = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        { id: I, guild_id: b } = a;
    l.useEffect(() => {
        T.default.track(R.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: I,
            guild_id: b
        });
    }, [I, b]),
        l.useEffect(() => {
            s || o();
        }, [o, s]);
    let N = (0, m.bp)(),
        { analyticsLocations: k } = (0, _.ZP)(g.Z.ACTIVITIES_MINI_SHELF),
        w = N === R.IlC.POPOUT,
        U = (0, p.O)(),
        B = ((n = a.getGuildId()), (0, j.Z)({ guildId: n }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => S.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let F = l.useCallback(() => {
            var e;
            (0, P.Z)({
                channel: a,
                guildId: null !== (e = a.getGuildId()) && void 0 !== e ? e : void 0,
                locationObject: U.location,
                openInPopout: w,
                analyticsLocations: k,
                opensAppLauncherModal: !0
            }),
                d(),
                C();
        }, [U, k, a, C, d, w]),
        H = l.useCallback(
            (e) => {
                c(),
                    T.default.track(R.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId()
                    });
            },
            [c, a]
        );
    return (0, i.jsx)(_.Gt, {
        value: k,
        children: (0, i.jsx)(Z.Z, {
            children: (0, i.jsxs)(h.VqE, {
                ref: t,
                'aria-labelledby': O,
                className: v,
                children: [
                    (0, i.jsx)(h.y5t, {
                        forceLevel: 2,
                        children: (0, i.jsx)(h.nn4, {
                            children: (0, i.jsx)(h.H, {
                                id: O,
                                children: M.intl.string(M.t['2lnYtL'])
                            })
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: L.container,
                        onMouseEnter: H,
                        onMouseLeave: d,
                        children: [
                            (0, i.jsxs)('div', {
                                className: L.titleContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: L.titleLeft,
                                        children: [
                                            (0, i.jsx)(h.nG3, {
                                                size: 'md',
                                                className: L.titleLeftIcon,
                                                color: 'var(--interactive-active)'
                                            }),
                                            (0, i.jsx)(h.Text, {
                                                variant: 'eyebrow',
                                                children: M.intl.string(M.t.f3Cz29)
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(h.P3F, {
                                        className: L.titleRight,
                                        onClick: F,
                                        children: [
                                            (0, i.jsx)(h.Text, {
                                                variant: 'eyebrow',
                                                children: M.intl.string(M.t['K8+z4e'])
                                            }),
                                            (0, i.jsx)(h.Fbu, {
                                                size: 'custom',
                                                width: 12,
                                                height: 12,
                                                color: 'var(--interactive-active)',
                                                className: L.titleRightIcon
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(D, {
                                onClick: () => {
                                    C(), o();
                                }
                            }),
                            (0, i.jsxs)('div', {
                                className: L.activityContainer,
                                children: [
                                    B.map((e) =>
                                        (0, i.jsx)(
                                            y.Y,
                                            {
                                                context: {
                                                    channel: a,
                                                    type: 'channel'
                                                },
                                                activityItem: e,
                                                onClick: () => {
                                                    o(), C();
                                                },
                                                aspectRatio: y.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                animatedDivClass: L.activitySuggestion,
                                                commandOrigin: x.bB.MINI_SHELF
                                            },
                                            e.application.id
                                        )
                                    ),
                                    (0, i.jsx)('div', {
                                        className: r()(L.wumpusRocketOuterContainer, { [L.wumpusReducedMotion]: E }),
                                        children: (0, i.jsx)('div', {
                                            className: L.wumpusRocketInnerContainer,
                                            children: (0, i.jsx)(A.Z, { className: L.wumpusRocket })
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
