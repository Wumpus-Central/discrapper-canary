var i = t(477900),
    l = t(582128),
    s = t(855986),
    a = t(554146),
    r = t(621956),
    o = t(265872),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    h = t(409145),
    m = t(421773),
    g = t(994153),
    x = t(600597),
    C = t(458976),
    f = t(233324),
    p = t(987933),
    E = t(714736),
    I = t(829834),
    j = t(662080),
    v = t(327289),
    N = t(173660),
    _ = t(120246),
    T = t(754712),
    b = t(607567),
    S = t(246356),
    y = t(693409);
t(980504);
var O = t(376086),
    R = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n, themeable: P, whichPopoutIsOpen: M, setWhichPopoutIsOpen: D, idle: L } = e,
                { parentAnalyticsLocation: G } = (0, u.Ay)(),
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
                { analyticsLocations: J } = (0, u.Ay)(),
                W = (0, g.N)(w, "ActionBarSoundboardButton") && !z,
                Q = l.useCallback((e) => (0, i.jsx)(I.A, { showDot: W, children: (0, i.jsx)(k, { ...e }) }), [k, W]),
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
                eo = l.useMemo(() => (el && (M === O.P.SOUNDBOARD || null == M)) || M === O.P.SOUNDBOARD, [el, M]);
            function ec() {
                return H
                    ? R.intl.string(R.t["Ox4/zU"])
                    : Y
                      ? R.intl.string(R.t["+YBKYI"])
                      : K
                        ? R.intl.string(R.t.X1lQli)
                        : R.intl.string(R.t["6EJvHt"]);
            }
            function eu(e) {
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
            function ed() {
                (U(), null != M && ea(), Z && et(), D?.(O.P.SOUNDBOARD));
            }
            function eA() {
                ((0, d.XJ)(G, d.OP.SOUNDBOARD), M === O.P.SOUNDBOARD ? (D?.(void 0), er()) : ed());
            }
            l.useEffect(() => {
                eo || Z || en(!0);
            }, [eo, Z, en]);
            let eh = l.useCallback(() => {
                    null == M && D?.(O.P.SOUNDBOARD);
                }, [M, D]),
                em = l.useRef(null),
                { usersInChannel: eg } = (0, s.cf)(
                    [b.Ay],
                    () => ({ usersInChannel: b.Ay.countVoiceStatesForChannel(n.id) }),
                    [n],
                ),
                [ex, eC] = l.useState(!1);
            return (
                l.useEffect(() => {
                    let e = eg >= 2 && !z && null == M;
                    if (L || !e) return void eC(!1);
                    let n = setTimeout(() => eC(!0), 300);
                    return () => clearTimeout(n);
                }, [L, z, eg, M]),
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
                                                  ? (0, i.jsx)(j.A, {
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
                                    themeable: P,
                                    label: ec(),
                                    "aria-label": W ? R.intl.string(R.t.D923q4) : ec(),
                                    iconComponent: Q,
                                    disabled: z,
                                    onContextMenu: eu,
                                    onClick: eA,
                                    onMouseEnter: (e) => {
                                        (V(), "focus" !== e.type && ea());
                                    },
                                    onMouseLeave: () => {
                                        null == M && (er(), B());
                                    },
                                    isActive: el || M === O.P.SOUNDBOARD,
                                    color: el || M === O.P.SOUNDBOARD ? "primaryDark" : void 0,
                                }),
                        }),
                        !eo && null != w && ei ? (0, i.jsx)(_.A, { guildId: w, channelId: n.id }) : null,
                        ex &&
                            (0, i.jsx)(p.A, {
                                targetElementRef: em,
                                openSoundboardPicker: ed,
                                shouldShowSoundboardPicker: eo,
                            }),
                    ],
                })
            );
        },
    },
);
