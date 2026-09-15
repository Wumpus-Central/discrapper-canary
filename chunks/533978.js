t.d(n, { A: () => O });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(554146),
    r = t(621956),
    o = t(922016),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    m = t(595529),
    h = t(421773),
    C = t(600597),
    p = t(813564),
    g = t(674168),
    E = t(987933),
    f = t(662080),
    x = t(827059),
    v = t(173660),
    I = t(544576),
    T = t(607567),
    j = t(246356),
    N = t(204651);
t(980504);
var _ = t(376086),
    b = t(375708);
function O(e) {
    let { channel: n, themeable: O, whichPopoutIsOpen: S, setWhichPopoutIsOpen: y, idle: R } = e,
        { parentAnalyticsLocation: M } = (0, u.Ay)(),
        {
            Component: L,
            play: D,
            events: { onMouseEnter: P, onMouseLeave: k },
        } = (0, r.E)(),
        G = n.getGuildId(),
        { mute: U, suppress: V } = (0, v.A)(n),
        B = (0, s.bG)([I.Ay], () => I.Ay.isDeaf()),
        H = U || V || B,
        w = (0, p.VE)({ isSoundboardButtonDisabled: H }),
        [Y, F] = (0, m.DP)(w),
        { analyticsLocations: K } = (0, u.Ay)(),
        { showQuickAccess: X } = (0, C.j)("ActionBarSoundboardButton"),
        [z, J] = i.useState(X),
        W = i.useCallback(
            (e) => {
                X && J(e);
            },
            [X],
        ),
        q = i.useCallback(() => W(!1), [W]),
        { isHovered: Q, setIsHovered: $, onMouseEnter: Z, onMouseLeave: ee } = (0, h.A)(200, 300),
        en = i.useMemo(() => (Q && (S === _.P.SOUNDBOARD || null == S)) || S === _.P.SOUNDBOARD, [Q, S]);
    function et(e) {
        null != G &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: G,
                        sourceAnalyticsLocations: K,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", M),
                    });
            });
    }
    function el() {
        (D(), null != S && Z(), z && q(), y?.(_.P.SOUNDBOARD));
    }
    function ei() {
        ((0, d.X)(M, d.O.SOUNDBOARD), S === _.P.SOUNDBOARD ? (y?.(void 0), ee()) : el());
    }
    i.useEffect(() => {
        en || z || W(!0);
    }, [en, z, W]);
    let es = i.useCallback(() => {
            null == S && y?.(_.P.SOUNDBOARD);
        }, [S, y]),
        ea = i.useRef(null),
        { usersInChannel: er } = (0, s.cf)([T.Ay], () => ({ usersInChannel: T.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [eo, ec] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = er >= 2 && !H && null == S;
            if (R || !e) return void ec(!1);
            let n = setTimeout(() => ec(!0), 300);
            return () => clearTimeout(n);
        }, [R, H, er, S]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.Y, {
                    targetElementRef: ea,
                    shouldShow: en,
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        ($(!1), y?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return H
                            ? null
                            : (0, l.jsx)(j.A, {
                                  children: (0, l.jsx)("div", {
                                      onMouseEnter: Z,
                                      onMouseLeave: ee,
                                      onMouseDown: es,
                                      children: z
                                          ? (0, l.jsx)(f.A, {
                                                channel: n,
                                                guildId: G,
                                                openFullPicker: q,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                            })
                                          : (0, l.jsx)(x.A, {
                                                guildId: G,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    Y === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, l.jsx)(g.m, { onClose: t, markAsDismissed: F }),
                                                analyticsSource: "action bar button",
                                            }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, l.jsx)(N.l, {
                            ref: ea,
                            isTrayButton: !0,
                            themeable: O,
                            label: U
                                ? b.intl.string(b.t["Ox4/zU"])
                                : V
                                  ? b.intl.string(b.t["+YBKYI"])
                                  : B
                                    ? b.intl.string(b.t.X1lQli)
                                    : b.intl.string(b.t["6EJvHt"]),
                            iconComponent: L,
                            disabled: H,
                            onContextMenu: et,
                            onClick: ei,
                            onMouseEnter: (e) => {
                                (P(), "focus" !== e.type && Z());
                            },
                            onMouseLeave: () => {
                                null == S && (ee(), k());
                            },
                            isActive: Q || S === _.P.SOUNDBOARD,
                            color: Q || S === _.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                eo &&
                    (0, l.jsx)(E.A, { targetElementRef: ea, openSoundboardPicker: el, shouldShowSoundboardPicker: en }),
            ],
        })
    );
}
