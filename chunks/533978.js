var i = t(477900),
    l = t(582128),
    s = t(855986),
    a = t(554146),
    r = t(621956),
    o = t(265872),
    c = t(442433),
    d = t(688810),
    u = t(384059),
    A = t(480890),
    h = t(160761),
    m = t(421773),
    g = t(994153),
    x = t(600597),
    C = t(458976),
    f = t(674168),
    p = t(987933),
    E = t(714736),
    j = t(829834),
    I = t(662080),
    v = t(327289),
    N = t(173660),
    _ = t(120246),
    T = t(718197),
    b = t(607567),
    S = t(246356),
    y = t(693409);
t(980504);
var O = t(376086),
    P = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n, themeable: R, whichPopoutIsOpen: L, setWhichPopoutIsOpen: D, idle: M } = e,
                { parentAnalyticsLocation: G } = (0, d.Ay)(),
                {
                    Component: k,
                    play: U,
                    events: { onMouseEnter: V, onMouseLeave: B },
                } = (0, r.E)(),
                w = n.getGuildId(),
                { mute: H, suppress: Y } = (0, N.A)(n),
                K = (0, s.bG)([T.Ay], () => T.Ay.isDeaf()),
                z = H || Y || K,
                F = (0, C.VE)({ isSoundboardButtonDisabled: z }),
                [X, q] = (0, h.DP)(F),
                { analyticsLocations: J } = (0, d.Ay)(),
                Q = (0, g.N)(w, "ActionBarSoundboardButton") && !z,
                W = l.useCallback((e) => (0, i.jsx)(j.A, { showDot: Q, children: (0, i.jsx)(k, { ...e }) }), [k, Q]),
                { showQuickAccess: $ } = (0, x.j)("ActionBarSoundboardButton"),
                [Z, ee] = l.useState($),
                en = l.useCallback(
                    (e) => {
                        $ && ee(e);
                    },
                    [$],
                ),
                et = l.useCallback(() => en(!1), [en]),
                { enabled: ei } = (0, E.W)(w ?? "0", "ActionBarSoundboardButton"),
                { isHovered: el, setIsHovered: es, onMouseEnter: ea, onMouseLeave: er } = (0, m.A)(200, 300),
                eo = l.useMemo(() => (el && (L === O.P.SOUNDBOARD || null == L)) || L === O.P.SOUNDBOARD, [el, L]);
            function ec() {
                return H
                    ? P.intl.string(P.t["Ox4/zU"])
                    : Y
                      ? P.intl.string(P.t["+YBKYI"])
                      : K
                        ? P.intl.string(P.t.X1lQli)
                        : P.intl.string(P.t["6EJvHt"]);
            }
            function ed(e) {
                (0, c.L3)(e, async () => {
                    let { default: e } = await t.e(702894).then(t.bind(t, 507773));
                    return (n) =>
                        (0, i.jsx)(e, {
                            guildId: w ?? void 0,
                            sourceAnalyticsLocations: J,
                            ...n,
                            onInteraction: (0, A.s)("SoundboardContextMenu", G),
                        });
                });
            }
            function eu() {
                (U(), null != L && ea(), Z && et(), D?.(O.P.SOUNDBOARD));
            }
            function eA() {
                ((0, u.XJ)(G, u.OP.SOUNDBOARD), L === O.P.SOUNDBOARD ? (D?.(void 0), er()) : eu());
            }
            l.useEffect(() => {
                eo || Z || en(!0);
            }, [eo, Z, en]);
            let eh = l.useCallback(() => {
                    null == L && D?.(O.P.SOUNDBOARD);
                }, [L, D]),
                em = l.useRef(null),
                { usersInChannel: eg } = (0, s.cf)(
                    [b.Ay],
                    () => ({ usersInChannel: b.Ay.countVoiceStatesForChannel(n.id) }),
                    [n],
                ),
                [ex, eC] = l.useState(!1);
            return (
                l.useEffect(() => {
                    let e = eg >= 2 && !z && null == L;
                    if (M || !e) return void eC(!1);
                    let n = setTimeout(() => eC(!0), 300);
                    return () => clearTimeout(n);
                }, [M, z, eg, L]),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Y, {
                            targetElementRef: em,
                            shouldShow: eo,
                            animation: o.Y.Animation.FADE,
                            animationPosition: "top",
                            position: "top",
                            align: "center",
                            spacing: 16,
                            onRequestClose: () => {
                                (es(!1), D?.(void 0));
                            },
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return z
                                    ? null
                                    : (0, i.jsx)(S.A, {
                                          children: (0, i.jsx)("div", {
                                              onMouseEnter: ea,
                                              onMouseLeave: er,
                                              onMouseDown: eh,
                                              children: Z
                                                  ? (0, i.jsx)(I.A, {
                                                        channel: n,
                                                        guildId: w,
                                                        openFullPicker: et,
                                                        onClose: t,
                                                        analyticsSource: "action bar button",
                                                        showEchoes: ei,
                                                    })
                                                  : (0, i.jsx)(v.A, {
                                                        guildId: w,
                                                        channel: n,
                                                        onClose: t,
                                                        gridNotice:
                                                            X === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                            (0, i.jsx)(f.m, { onClose: t, markAsDismissed: q }),
                                                        analyticsSource: "action bar button",
                                                        showEchoes: ei,
                                                    }),
                                          }),
                                      });
                            },
                            children: () =>
                                (0, i.jsx)(y.l, {
                                    ref: em,
                                    isTrayButton: !0,
                                    themeable: R,
                                    label: ec(),
                                    "aria-label": Q ? P.intl.string(P.t.D923q4) : ec(),
                                    iconComponent: W,
                                    disabled: z,
                                    onContextMenu: ed,
                                    onClick: eA,
                                    onMouseEnter: (e) => {
                                        (V(), "focus" !== e.type && ea());
                                    },
                                    onMouseLeave: () => {
                                        null == L && (er(), B());
                                    },
                                    isActive: el || L === O.P.SOUNDBOARD,
                                    color: el || L === O.P.SOUNDBOARD ? "primaryDark" : void 0,
                                }),
                        }),
                        !eo && null != w && ei ? (0, i.jsx)(_.A, { guildId: w, channelId: n.id }) : null,
                        ex &&
                            (0, i.jsx)(p.A, {
                                targetElementRef: em,
                                openSoundboardPicker: eu,
                                shouldShowSoundboardPicker: eo,
                            }),
                    ],
                })
            );
        },
    },
);
