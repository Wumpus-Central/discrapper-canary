n.d(t, { M: () => A }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(704215),
    s = n(481060),
    o = n(2052),
    c = n(40851),
    d = n(317381),
    u = n(683921),
    h = n(588580),
    p = n(374065),
    m = n(451576),
    f = n(526846),
    g = n(119315),
    _ = n(403404),
    C = n(906732),
    x = n(424602),
    v = n(243778),
    E = n(579185),
    I = n(301076),
    b = n(861254),
    Z = n(127379),
    N = n(981631),
    T = n(921944),
    S = n(388032),
    j = n(812801);
function A(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: A, setWhichPopoutIsOpen: y } = e,
        P = (0, a.e7)([d.ZP], () => d.ZP.isLaunchingActivity()),
        R = (0, p.KF)(t.id),
        M = (0, p.g5)(R),
        L = R !== p.jy.CAN_LAUNCH || P,
        { isHovered: k, setIsHovered: O, onMouseEnter: D, onMouseLeave: w } = (0, E.Z)(200, 300),
        { groupedButtons: U } = (0, b.ZP)({ location: 'CenterControlTrayActivityButton' }),
        B = (0, h.a)(),
        F = (0, u.Z)({ channelId: t.id }),
        H = !L,
        G = l.useCallback(
            (e) => {
                'focus' !== e.type && D();
            },
            [D]
        ),
        V = (0, o.O)(),
        z = (0, c.bp)() === N.IlC.POPOUT,
        { analyticsLocations: W } = (0, C.ZP)(),
        Y = W.length > 0 ? W[W.length - 1] : 'open-activity-shelf';
    x.m1.useExperiment({ location: Y }, { autoTrackExposure: !0 });
    let q = l.useCallback(() => {
            (0, _.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: V.location,
                openInPopout: z,
                analyticsLocations: W,
                opensAppLauncherModal: !0
            });
        }, [V.location, W, t, z]),
        K = [];
    L || K.push(r.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.Z)(t.id) && !L && K.push(r.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: X } = x.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    X && !L && K.push(r.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let J = l.useRef(!1);
    return (0, i.jsx)(v.ZP, {
        contentTypes: K,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: a } = e,
                o = l === r.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
            return (
                !0 === J.current && !1 === o && a(T.L.AUTO_DISMISS),
                J.current !== o && (J.current = o),
                (0, i.jsx)(s.yRy, {
                    fixed: !0,
                    shouldShow: k && (A === Z.D.ACTIVITY || null == A),
                    animation: U ? s.yRy.Animation.FADE : s.yRy.Animation.TRANSLATE,
                    animationPosition: U ? 'top' : 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        O(!1), null == y || y(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return H
                            ? (0, i.jsx)(f.m, {
                                  ref: l,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: D,
                                  onMouseLeave: w,
                                  isHovered: k,
                                  onClick: () => a(T.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.ua7, {
                                    text: S.intl.string(S.t.P8vmUl),
                                    color: s.FGA.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(I.Z, {
                                                disabled: L,
                                                'aria-label': M,
                                                label: H ? void 0 : M,
                                                isActivityActive: F || (!U && k),
                                                className: U ? '' : j.controlButton,
                                                onClick: () => {
                                                    q(), (l === r.z.ACTIVITIES_MINI_SHELF_SPARKLES || l === r.z.ACTIVITY_GDM_ROCKET_SPARKLE || l === r.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === r.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === r.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && a(T.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: G,
                                                onMouseLeave: w
                                            })
                                        })
                                }),
                                B
                                    ? U
                                        ? (0, i.jsx)(g.r, {
                                              top: 2,
                                              right: 2,
                                              size: 6
                                          })
                                        : (0, i.jsx)(g.r, {
                                              top: 4,
                                              right: 10,
                                              size: 12,
                                              maskColor: g.T.BLACK
                                          })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
