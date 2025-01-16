n.d(t, {
    m: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(626135),
    x = n(566620),
    v = n(127255),
    _ = n(5200),
    I = n(558317),
    E = n(403404),
    b = n(981631),
    Z = n(388032),
    N = n(350562);
let S = 'vc-activities-'.concat((0, s.Z)()),
    T = l.forwardRef(function (e, t) {
        let { channel: n, isHovered: r, closePopout: s, onMouseEnter: T, onMouseLeave: j, onClick: A, className: y } = e,
            P = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            { id: M, guild_id: R } = n;
        l.useEffect(() => {
            C.default.track(b.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: M,
                guild_id: R
            });
        }, [M, R]),
            l.useEffect(() => {
                !r && s();
            }, [s, r]);
        let L = (0, u.bp)(),
            { analyticsLocations: k } = (0, m.ZP)(p.Z.ACTIVITIES_MINI_SHELF),
            { analyticsLocations: O } = (0, m.ZP)([...k, p.Z.ACTIVITIES_MINI_SHELF_BANNER]),
            D = L === b.IlC.POPOUT,
            w = (0, d.O)(),
            B = (function (e) {
                return (0, v.Z)({ guildId: e }).slice(0, 5);
            })(n.getGuildId());
        l.useEffect(() => {
            let e = setTimeout(() => x.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let U = l.useCallback(() => {
                var e;
                (0, E.Z)({
                    channel: n,
                    guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: w.location,
                    openInPopout: D,
                    analyticsLocations: k,
                    opensAppLauncherModal: !0
                }),
                    j(),
                    A();
            }, [w, k, n, A, j, D]),
            H = l.useCallback(
                (e) => {
                    T(),
                        C.default.track(b.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                            channel_id: n.id,
                            guild_id: n.getGuildId()
                        });
                },
                [T, n]
            );
        return (0, i.jsx)(m.Gt, {
            value: k,
            children: (0, i.jsx)(g.Z, {
                children: (0, i.jsxs)(c.Dialog, {
                    ref: t,
                    'aria-labelledby': S,
                    className: y,
                    children: [
                        (0, i.jsx)(c.HeadingLevel, {
                            forceLevel: 2,
                            children: (0, i.jsx)(c.HiddenVisually, {
                                children: (0, i.jsx)(c.H, {
                                    id: S,
                                    children: Z.intl.string(Z.t['2lnYtL'])
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: N.container,
                            onMouseEnter: H,
                            onMouseLeave: j,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: N.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: N.titleLeft,
                                            children: [
                                                (0, i.jsx)(c.ActivitiesIcon, {
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
                                        (0, i.jsxs)(c.Clickable, {
                                            className: N.titleRight,
                                            onClick: U,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: Z.intl.string(Z.t['K8+z4e'])
                                                }),
                                                (0, i.jsx)(c.ChevronSmallRightIcon, {
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
                                    value: O,
                                    children: null
                                }),
                                (0, i.jsxs)('div', {
                                    className: N.activityContainer,
                                    children: [
                                        B.map((e) =>
                                            (0, i.jsx)(
                                                _.Y,
                                                {
                                                    channel: n,
                                                    activityItem: e,
                                                    onClick: () => {
                                                        s(), A();
                                                    },
                                                    aspectRatio: _.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                    animatedDivClass: N.activitySuggestion,
                                                    commandOrigin: f.bB.MINI_SHELF
                                                },
                                                e.application.id
                                            )
                                        ),
                                        (0, i.jsx)('div', {
                                            className: a()(N.wumpusRocketOuterContainer, { [N.wumpusReducedMotion]: P }),
                                            children: (0, i.jsx)('div', {
                                                className: N.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(I.Z, { className: N.wumpusRocket })
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
