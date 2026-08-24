t.d(n, { A: () => b });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(554146),
    r = t(621956),
    o = t(922016),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    m = t(595529),
    h = t(421773),
    C = t(641534),
    E = t(813564),
    f = t(674168),
    p = t(987933),
    g = t(484036),
    x = t(173660),
    I = t(453028),
    v = t(607567),
    T = t(246356),
    _ = t(204651),
    N = t(376086),
    j = t(375708);
function b(e) {
    let { channel: n, themeable: b, whichPopoutIsOpen: S, setWhichPopoutIsOpen: O, idle: y } = e,
        { parentAnalyticsLocation: R } = (0, u.Ay)(),
        {
            Component: M,
            play: L,
            events: { onMouseEnter: D, onMouseLeave: P },
        } = (0, r.E)(),
        G = n.getGuildId(),
        { mute: k, suppress: V } = (0, x.A)(n),
        U = (0, a.bG)([I.Ay], () => I.Ay.isDeaf()),
        B = k || V || U,
        H = (0, E.VE)({ isSoundboardButtonDisabled: B }),
        [w, F] = (0, m.DP)(H),
        { analyticsLocations: Y } = (0, u.Ay)(),
        { isHovered: z, setIsHovered: K, onMouseEnter: X, onMouseLeave: W } = (0, h.A)(200, 300);
    function J(e) {
        null != G &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: G,
                        sourceAnalyticsLocations: Y,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", R),
                    });
            });
    }
    function q() {
        L(), null != S && X(), O?.(N.P.SOUNDBOARD);
    }
    function $() {
        (0, d.X)(R, d.O.SOUNDBOARD), S === N.P.SOUNDBOARD ? (O?.(void 0), W()) : q();
    }
    let Q = i.useCallback(() => {
            null == S && O?.(N.P.SOUNDBOARD);
        }, [S, O]),
        Z = i.useRef(null),
        ee = i.useMemo(() => (z && (S === N.P.SOUNDBOARD || null == S)) || S === N.P.SOUNDBOARD, [z, S]),
        { enabled: en } = (0, C.H)("SoundboardButton"),
        { usersInChannel: et } = (0, a.cf)([v.Ay], () => ({ usersInChannel: v.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [el, ei] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = et >= 2 && !B && null == S;
            if (y || !e) return void ei(!1);
            let n = setTimeout(() => ei(!0), 300);
            return () => clearTimeout(n);
        }, [y, B, et, S]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.Y, {
                    targetElementRef: Z,
                    shouldShow: ee,
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        K(!1), O?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return B
                            ? null
                            : (0, l.jsx)(T.A, {
                                  children: (0, l.jsx)("div", {
                                      onMouseEnter: X,
                                      onMouseLeave: W,
                                      onMouseDown: Q,
                                      children: (0, l.jsx)(g.A, {
                                          guildId: G,
                                          channel: n,
                                          onClose: t,
                                          gridNotice:
                                              w === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                              (0, l.jsx)(f.m, { onClose: t, markAsDismissed: F }),
                                          analyticsSource: "action bar button",
                                      }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, l.jsx)(_.l, {
                            ref: Z,
                            isTrayButton: !0,
                            themeable: b,
                            label: k
                                ? j.intl.string(j.t["Ox4/zU"])
                                : V
                                  ? j.intl.string(j.t["+YBKYI"])
                                  : U
                                    ? j.intl.string(j.t.X1lQli)
                                    : j.intl.string(j.t["6EJvHt"]),
                            iconComponent: M,
                            disabled: B,
                            onContextMenu: J,
                            onClick: $,
                            onMouseEnter: (e) => {
                                D(), "focus" !== e.type && X();
                            },
                            onMouseLeave: () => {
                                null == S && (W(), P());
                            },
                            isActive: z || S === N.P.SOUNDBOARD,
                            color: z || S === N.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                en &&
                    el &&
                    (0, l.jsx)(p.A, { targetElementRef: Z, openSoundboardPicker: q, shouldShowSoundboardPicker: ee }),
            ],
        })
    );
}
