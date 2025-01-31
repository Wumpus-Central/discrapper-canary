n.d(t, { m: () => S }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(2052),
    u = n(40851),
    h = n(607070),
    p = n(100527),
    m = n(906732),
    f = n(895924),
    g = n(390322),
    _ = n(626135),
    C = n(566620),
    x = n(127255),
    v = n(5200),
    E = n(558317),
    I = n(403404),
    b = n(981631),
    Z = n(388032),
    N = n(350562);
let T = 'vc-activities-'.concat((0, s.Z)()),
    S = l.forwardRef(function (e, t) {
        var n;
        let { channel: a, isHovered: s, closePopout: S, onMouseEnter: j, onMouseLeave: A, onClick: y, className: P } = e,
            R = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            { id: M, guild_id: L } = a;
        l.useEffect(() => {
            _.default.track(b.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: M,
                guild_id: L
            });
        }, [M, L]),
            l.useEffect(() => {
                s || S();
            }, [S, s]);
        let k = (0, u.bp)(),
            { analyticsLocations: O } = (0, m.ZP)(p.Z.ACTIVITIES_MINI_SHELF),
            { analyticsLocations: D } = (0, m.ZP)([...O, p.Z.ACTIVITIES_MINI_SHELF_BANNER]),
            w = k === b.IlC.POPOUT,
            U = (0, d.O)(),
            B = ((n = a.getGuildId()), (0, x.Z)({ guildId: n }).slice(0, 5));
        l.useEffect(() => {
            let e = setTimeout(() => C.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let F = l.useCallback(() => {
                var e;
                (0, I.Z)({
                    channel: a,
                    guildId: null !== (e = a.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: U.location,
                    openInPopout: w,
                    analyticsLocations: O,
                    opensAppLauncherModal: !0
                }),
                    A(),
                    y();
            }, [U, O, a, y, A, w]),
            H = l.useCallback(
                (e) => {
                    j(),
                        _.default.track(b.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                            channel_id: a.id,
                            guild_id: a.getGuildId()
                        });
                },
                [j, a]
            );
        return (0, i.jsx)(m.Gt, {
            value: O,
            children: (0, i.jsx)(g.Z, {
                children: (0, i.jsxs)(c.VqE, {
                    ref: t,
                    'aria-labelledby': T,
                    className: P,
                    children: [
                        (0, i.jsx)(c.y5t, {
                            forceLevel: 2,
                            children: (0, i.jsx)(c.nn4, {
                                children: (0, i.jsx)(c.H, {
                                    id: T,
                                    children: Z.intl.string(Z.t['2lnYtL'])
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: N.container,
                            onMouseEnter: H,
                            onMouseLeave: A,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: N.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: N.titleLeft,
                                            children: [
                                                (0, i.jsx)(c.nG3, {
                                                    size: 'md',
                                                    className: N.titleLeftIcon,
                                                    color: 'var(--interactive-active)'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: Z.intl.string(Z.t.f3Cz29)
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)(c.P3F, {
                                            className: N.titleRight,
                                            onClick: F,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: Z.intl.string(Z.t['K8+z4e'])
                                                }),
                                                (0, i.jsx)(c.Fbu, {
                                                    size: 'custom',
                                                    width: 12,
                                                    height: 12,
                                                    color: 'var(--interactive-active)',
                                                    className: N.titleRightIcon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(m.Gt, {
                                    value: D,
                                    children: null
                                }),
                                (0, i.jsxs)('div', {
                                    className: N.activityContainer,
                                    children: [
                                        B.map((e) =>
                                            (0, i.jsx)(
                                                v.Y,
                                                {
                                                    context: {
                                                        channel: a,
                                                        type: 'channel'
                                                    },
                                                    activityItem: e,
                                                    onClick: () => {
                                                        S(), y();
                                                    },
                                                    aspectRatio: v.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                    animatedDivClass: N.activitySuggestion,
                                                    commandOrigin: f.bB.MINI_SHELF
                                                },
                                                e.application.id
                                            )
                                        ),
                                        (0, i.jsx)('div', {
                                            className: r()(N.wumpusRocketOuterContainer, { [N.wumpusReducedMotion]: R }),
                                            children: (0, i.jsx)('div', {
                                                className: N.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(E.Z, { className: N.wumpusRocket })
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
