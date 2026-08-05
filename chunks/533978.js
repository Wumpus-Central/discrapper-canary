t.d(n, { A: () => S });
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
    C = t(641534),
    E = t(813564),
    p = t(674168),
    g = t(987933),
    x = t(333216),
    f = t(173660),
    I = t(293246),
    T = t(607567),
    v = t(246356),
    _ = t(204651),
    j = t(376086),
    N = t(375708);
function S(e) {
    let { channel: n, themeable: S, whichPopoutIsOpen: b, setWhichPopoutIsOpen: O, idle: y } = e,
        { parentAnalyticsLocation: R } = (0, u.Ay)(),
        {
            Component: M,
            play: L,
            events: { onMouseEnter: D, onMouseLeave: P },
        } = (0, r.E)(),
        k = n.getGuildId(),
        { mute: G, suppress: U } = (0, f.A)(n),
        V = (0, s.bG)([I.Ay], () => I.Ay.isDeaf()),
        B = G || U || V,
        H = (0, E.VE)({ isSoundboardButtonDisabled: B }),
        [w, Y] = (0, m.DP)(H),
        { analyticsLocations: K } = (0, u.Ay)(),
        { isHovered: F, setIsHovered: X, onMouseEnter: z, onMouseLeave: J } = (0, h.A)(200, 300);
    function W(e) {
        null != k &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("11562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: k,
                        sourceAnalyticsLocations: K,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", R),
                    });
            });
    }
    function q() {
        L(), null != b && z(), O?.(j.P.SOUNDBOARD);
    }
    function Q() {
        (0, d.X)(R, d.O.SOUNDBOARD), b === j.P.SOUNDBOARD ? (O?.(void 0), J()) : q();
    }
    let $ = i.useCallback(() => {
            null == b && O?.(j.P.SOUNDBOARD);
        }, [b, O]),
        Z = i.useRef(null),
        ee = i.useMemo(() => (F && (b === j.P.SOUNDBOARD || null == b)) || b === j.P.SOUNDBOARD, [F, b]),
        { enabled: en } = (0, C.H)("SoundboardButton"),
        { usersInChannel: et } = (0, s.cf)([T.Ay], () => ({ usersInChannel: T.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [el, ei] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = et >= 2 && !B && null == b;
            if (y || !e) return void ei(!1);
            let n = setTimeout(() => ei(!0), 300);
            return () => clearTimeout(n);
        }, [y, B, et, b]),
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
                        X(!1), O?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return B
                            ? null
                            : (0, l.jsx)(v.A, {
                                  children: (0, l.jsx)("div", {
                                      onMouseEnter: z,
                                      onMouseLeave: J,
                                      onMouseDown: $,
                                      children: (0, l.jsx)(x.A, {
                                          guildId: k,
                                          channel: n,
                                          onClose: t,
                                          gridNotice:
                                              w === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                              (0, l.jsx)(p.m, { onClose: t, markAsDismissed: Y }),
                                          analyticsSource: "action bar button",
                                      }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, l.jsx)(_.l, {
                            ref: Z,
                            isTrayButton: !0,
                            themeable: S,
                            label: G
                                ? N.intl.string(N.t["Ox4/zU"])
                                : U
                                  ? N.intl.string(N.t["+YBKYI"])
                                  : V
                                    ? N.intl.string(N.t.X1lQli)
                                    : N.intl.string(N.t["6EJvHt"]),
                            iconComponent: M,
                            disabled: B,
                            onContextMenu: W,
                            onClick: Q,
                            onMouseEnter: (e) => {
                                D(), "focus" !== e.type && z();
                            },
                            onMouseLeave: () => {
                                null == b && (J(), P());
                            },
                            isActive: F || b === j.P.SOUNDBOARD,
                            color: F || b === j.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                en &&
                    el &&
                    (0, l.jsx)(g.A, { targetElementRef: Z, openSoundboardPicker: q, shouldShowSoundboardPicker: ee }),
            ],
        })
    );
}
