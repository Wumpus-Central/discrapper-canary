n.d(t, {
    M: function () {
        return A;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
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
    C = n(403404),
    x = n(906732),
    v = n(424602),
    _ = n(243778),
    I = n(579185),
    E = n(301076),
    b = n(861254),
    Z = n(127379),
    S = n(981631),
    N = n(921944),
    T = n(388032),
    j = n(829769);
function A(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: A, setWhichPopoutIsOpen: y } = e,
        P = (0, r.e7)([d.ZP], () => d.ZP.isLaunchingActivity()),
        M = (0, p.KF)(t.id),
        R = (0, p.g5)(M),
        L = M !== p.jy.CAN_LAUNCH || P,
        { isHovered: k, setIsHovered: O, onMouseEnter: D, onMouseLeave: w } = (0, I.Z)(200, 300),
        { groupedButtons: B } = (0, b.ZP)({ location: 'CenterControlTrayActivityButton' }),
        U = (0, h.a)(),
        H = (0, u.Z)({ channelId: t.id }),
        G = !L,
        F = l.useCallback(
            (e) => {
                'focus' !== e.type && D();
            },
            [D]
        ),
        V = (0, o.O)(),
        z = (0, c.bp)() === S.IlC.POPOUT,
        { analyticsLocations: W } = (0, x.ZP)(),
        K = W.length > 0 ? W[W.length - 1] : 'open-activity-shelf';
    v.m1.useExperiment({ location: K }, { autoTrackExposure: !0 });
    let Y = l.useCallback(() => {
            (0, C.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: V.location,
                openInPopout: z,
                analyticsLocations: W,
                opensAppLauncherModal: !0
            });
        }, [V.location, W, t, z]),
        q = [];
    !L && q.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.Z)(t.id) && !L && q.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: X } = v.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    X && !L && q.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let J = l.useRef(!1);
    return (0, i.jsx)(_.ZP, {
        contentTypes: q,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: r } = e,
                o = l === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
            return (
                !0 === J.current && !1 === o && r(N.L.AUTO_DISMISS),
                J.current !== o && (J.current = o),
                (0, i.jsx)(s.Popout, {
                    fixed: !0,
                    shouldShow: k && (A === Z.D.ACTIVITY || null == A),
                    animation: B ? s.Popout.Animation.FADE : s.Popout.Animation.TRANSLATE,
                    animationPosition: B ? 'top' : 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        O(!1), null == y || y(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return G
                            ? (0, i.jsx)(f.m, {
                                  ref: l,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: D,
                                  onMouseLeave: w,
                                  isHovered: k,
                                  onClick: () => r(N.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.Tooltip, {
                                    text: T.intl.string(T.t.P8vmUl),
                                    color: s.TooltipColors.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(E.Z, {
                                                disabled: L,
                                                'aria-label': R,
                                                label: G ? void 0 : R,
                                                isActivityActive: H || (!B && k),
                                                className: B ? '' : j.controlButton,
                                                onClick: () => {
                                                    Y(), (l === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || l === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || l === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && r(N.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: F,
                                                onMouseLeave: w
                                            })
                                        })
                                }),
                                U
                                    ? B
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
