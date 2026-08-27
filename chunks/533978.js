t.d(n, { A: () => O });
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
    f = t(600597),
    E = t(813564),
    p = t(674168),
    g = t(987933),
    x = t(662080),
    I = t(641403),
    v = t(173660),
    T = t(453028),
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
        { mute: U, suppress: B } = (0, v.A)(n),
        H = (0, a.bG)([T.Ay], () => T.Ay.isDeaf()),
        w = U || B || H,
        F = (0, E.VE)({ isSoundboardButtonDisabled: w }),
        [Y, z] = (0, m.DP)(F),
        { analyticsLocations: K } = (0, u.Ay)(),
        { showQuickAccess: X } = (0, f.j)("ActionBarSoundboardButton"),
        [W, J] = i.useState(X),
        q = i.useCallback(
            (e) => {
                X && J(e);
            },
            [X],
        ),
        $ = i.useCallback(() => q(!1), [q]),
        { isHovered: Q, setIsHovered: Z, onMouseEnter: ee, onMouseLeave: en } = (0, h.A)(200, 300),
        et = i.useMemo(() => (Q && (y === b.P.SOUNDBOARD || null == y)) || y === b.P.SOUNDBOARD, [Q, y]);
    function el(e) {
        null != V &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: V,
                        sourceAnalyticsLocations: K,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", L),
                    });
            });
    }
    function ei() {
        P(), null != y && ee(), W && $(), R?.(b.P.SOUNDBOARD);
    }
    function ea() {
        (0, d.X)(L, d.O.SOUNDBOARD), y === b.P.SOUNDBOARD ? (R?.(void 0), en()) : ei();
    }
    i.useEffect(() => {
        et || W || q(!0);
    }, [et, W, q]);
    let es = i.useCallback(() => {
            null == y && R?.(b.P.SOUNDBOARD);
        }, [y, R]),
        er = i.useRef(null),
        { enabled: eo } = (0, C.H)("SoundboardButton"),
        { usersInChannel: ec } = (0, a.cf)([_.Ay], () => ({ usersInChannel: _.Ay.countVoiceStatesForChannel(n.id) }), [
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
                                      onMouseDown: es,
                                      children: W
                                          ? (0, l.jsx)(x.A, { openFullPicker: $ })
                                          : (0, l.jsx)(I.A, {
                                                guildId: V,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    Y === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, l.jsx)(p.m, { onClose: t, markAsDismissed: z }),
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
                            onClick: ea,
                            onMouseEnter: (e) => {
                                k(), "focus" !== e.type && ee();
                            },
                            onMouseLeave: () => {
                                null == y && (en(), G());
                            },
                            isActive: Q || y === b.P.SOUNDBOARD,
                            color: Q || y === b.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                eo &&
                    eu &&
                    (0, l.jsx)(g.A, { targetElementRef: er, openSoundboardPicker: ei, shouldShowSoundboardPicker: et }),
            ],
        })
    );
}
