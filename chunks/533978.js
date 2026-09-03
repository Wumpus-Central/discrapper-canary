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
    C = t(641534),
    E = t(600597),
    p = t(813564),
    g = t(674168),
    f = t(987933),
    x = t(662080),
    I = t(827059),
    T = t(173660),
    v = t(45630),
    _ = t(607567),
    j = t(246356),
    N = t(204651);
t(980504);
var b = t(376086),
    S = t(375708);
function O(e) {
    let { channel: n, themeable: O, whichPopoutIsOpen: y, setWhichPopoutIsOpen: R, idle: M } = e,
        { parentAnalyticsLocation: L } = (0, u.Ay)(),
        {
            Component: D,
            play: P,
            events: { onMouseEnter: k, onMouseLeave: G },
        } = (0, r.E)(),
        V = n.getGuildId(),
        { mute: U, suppress: B } = (0, T.A)(n),
        H = (0, s.bG)([v.Ay], () => v.Ay.isDeaf()),
        w = U || B || H,
        Y = (0, p.VE)({ isSoundboardButtonDisabled: w }),
        [F, K] = (0, m.DP)(Y),
        { analyticsLocations: X } = (0, u.Ay)(),
        { showQuickAccess: z } = (0, E.j)("ActionBarSoundboardButton"),
        [J, W] = i.useState(z),
        q = i.useCallback(
            (e) => {
                z && W(e);
            },
            [z],
        ),
        Q = i.useCallback(() => q(!1), [q]),
        { isHovered: $, setIsHovered: Z, onMouseEnter: ee, onMouseLeave: en } = (0, h.A)(200, 300),
        et = i.useMemo(() => ($ && (y === b.P.SOUNDBOARD || null == y)) || y === b.P.SOUNDBOARD, [$, y]);
    function el(e) {
        null != V &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: V,
                        sourceAnalyticsLocations: X,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", L),
                    });
            });
    }
    function ei() {
        P(), null != y && ee(), J && Q(), R?.(b.P.SOUNDBOARD);
    }
    function es() {
        (0, d.X)(L, d.O.SOUNDBOARD), y === b.P.SOUNDBOARD ? (R?.(void 0), en()) : ei();
    }
    i.useEffect(() => {
        et || J || q(!0);
    }, [et, J, q]);
    let ea = i.useCallback(() => {
            null == y && R?.(b.P.SOUNDBOARD);
        }, [y, R]),
        er = i.useRef(null),
        { enabled: eo } = (0, C.H)("SoundboardButton"),
        { usersInChannel: ec } = (0, s.cf)([_.Ay], () => ({ usersInChannel: _.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [eu, ed] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = ec >= 2 && !w && null == y;
            if (M || !e) return void ed(!1);
            let n = setTimeout(() => ed(!0), 300);
            return () => clearTimeout(n);
        }, [M, w, ec, y]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.Y, {
                    targetElementRef: er,
                    shouldShow: et,
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        Z(!1), R?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return w
                            ? null
                            : (0, l.jsx)(j.A, {
                                  children: (0, l.jsx)("div", {
                                      onMouseEnter: ee,
                                      onMouseLeave: en,
                                      onMouseDown: ea,
                                      children: J
                                          ? (0, l.jsx)(x.A, {
                                                channel: n,
                                                guildId: V,
                                                openFullPicker: Q,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                            })
                                          : (0, l.jsx)(I.A, {
                                                guildId: V,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    F === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, l.jsx)(g.m, { onClose: t, markAsDismissed: K }),
                                                analyticsSource: "action bar button",
                                            }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, l.jsx)(N.l, {
                            ref: er,
                            isTrayButton: !0,
                            themeable: O,
                            label: U
                                ? S.intl.string(S.t["Ox4/zU"])
                                : B
                                  ? S.intl.string(S.t["+YBKYI"])
                                  : H
                                    ? S.intl.string(S.t.X1lQli)
                                    : S.intl.string(S.t["6EJvHt"]),
                            iconComponent: D,
                            disabled: w,
                            onContextMenu: el,
                            onClick: es,
                            onMouseEnter: (e) => {
                                k(), "focus" !== e.type && ee();
                            },
                            onMouseLeave: () => {
                                null == y && (en(), G());
                            },
                            isActive: $ || y === b.P.SOUNDBOARD,
                            color: $ || y === b.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                eo &&
                    eu &&
                    (0, l.jsx)(f.A, { targetElementRef: er, openSoundboardPicker: ei, shouldShowSoundboardPicker: et }),
            ],
        })
    );
}
