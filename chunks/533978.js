t.d(n, { A: () => b });
var i = t(477900),
    l = t(582128),
    a = t(17928),
    s = t(554146),
    o = t(621956),
    r = t(922016),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    m = t(595529),
    h = t(421773),
    C = t(600597),
    p = t(813564),
    x = t(674168),
    g = t(987933),
    f = t(662080),
    E = t(827059),
    I = t(173660),
    v = t(544576),
    T = t(607567),
    j = t(246356),
    N = t(204651);
t(980504);
var _ = t(376086),
    O = t(375708);
function b(e) {
    let { channel: n, themeable: b, whichPopoutIsOpen: y, setWhichPopoutIsOpen: S, idle: R } = e,
        { parentAnalyticsLocation: D } = (0, u.Ay)(),
        {
            Component: L,
            play: M,
            events: { onMouseEnter: P, onMouseLeave: k },
        } = (0, o.E)(),
        U = n.getGuildId(),
        { mute: G, suppress: V } = (0, I.A)(n),
        B = (0, a.bG)([v.Ay], () => v.Ay.isDeaf()),
        w = G || V || B,
        H = (0, p.VE)({ isSoundboardButtonDisabled: w }),
        [Y, F] = (0, m.DP)(H),
        { analyticsLocations: X } = (0, u.Ay)(),
        { showQuickAccess: K } = (0, C.j)("ActionBarSoundboardButton"),
        [z, W] = l.useState(K),
        J = l.useCallback(
            (e) => {
                K && W(e);
            },
            [K],
        ),
        q = l.useCallback(() => J(!1), [J]),
        { isHovered: Q, setIsHovered: $, onMouseEnter: Z, onMouseLeave: ee } = (0, h.A)(200, 300),
        en = l.useMemo(() => (Q && (y === _.P.SOUNDBOARD || null == y)) || y === _.P.SOUNDBOARD, [Q, y]);
    function et(e) {
        null != U &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, i.jsx)(e, {
                        guildId: U,
                        sourceAnalyticsLocations: X,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", D),
                    });
            });
    }
    function ei() {
        (M(), null != y && Z(), z && q(), S?.(_.P.SOUNDBOARD));
    }
    function el() {
        ((0, d.X)(D, d.O.SOUNDBOARD), y === _.P.SOUNDBOARD ? (S?.(void 0), ee()) : ei());
    }
    l.useEffect(() => {
        en || z || J(!0);
    }, [en, z, J]);
    let ea = l.useCallback(() => {
            null == y && S?.(_.P.SOUNDBOARD);
        }, [y, S]),
        es = l.useRef(null),
        { usersInChannel: eo } = (0, a.cf)([T.Ay], () => ({ usersInChannel: T.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [er, ec] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = eo >= 2 && !w && null == y;
            if (R || !e) return void ec(!1);
            let n = setTimeout(() => ec(!0), 300);
            return () => clearTimeout(n);
        }, [R, w, eo, y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Y, {
                    targetElementRef: es,
                    shouldShow: en,
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        ($(!1), S?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return w
                            ? null
                            : (0, i.jsx)(j.A, {
                                  children: (0, i.jsx)("div", {
                                      onMouseEnter: Z,
                                      onMouseLeave: ee,
                                      onMouseDown: ea,
                                      children: z
                                          ? (0, i.jsx)(f.A, {
                                                channel: n,
                                                guildId: U,
                                                openFullPicker: q,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                            })
                                          : (0, i.jsx)(E.A, {
                                                guildId: U,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    Y === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, i.jsx)(x.m, { onClose: t, markAsDismissed: F }),
                                                analyticsSource: "action bar button",
                                            }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, i.jsx)(N.l, {
                            ref: es,
                            isTrayButton: !0,
                            themeable: b,
                            label: G
                                ? O.intl.string(O.t["Ox4/zU"])
                                : V
                                  ? O.intl.string(O.t["+YBKYI"])
                                  : B
                                    ? O.intl.string(O.t.X1lQli)
                                    : O.intl.string(O.t["6EJvHt"]),
                            iconComponent: L,
                            disabled: w,
                            onContextMenu: et,
                            onClick: el,
                            onMouseEnter: (e) => {
                                (P(), "focus" !== e.type && Z());
                            },
                            onMouseLeave: () => {
                                null == y && (ee(), k());
                            },
                            isActive: Q || y === _.P.SOUNDBOARD,
                            color: Q || y === _.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                er &&
                    (0, i.jsx)(g.A, { targetElementRef: es, openSoundboardPicker: ei, shouldShowSoundboardPicker: en }),
            ],
        })
    );
}
