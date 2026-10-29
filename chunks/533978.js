t.d(n, { A: () => L });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(554146),
    r = t(621956),
    o = t(265872),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    h = t(160761),
    m = t(421773),
    g = t(994153),
    x = t(600597),
    C = t(813564),
    f = t(674168),
    p = t(987933),
    E = t(714736),
    j = t(829834),
    v = t(662080),
    I = t(754388),
    N = t(173660),
    T = t(665252),
    _ = t(999926),
    b = t(607567),
    S = t(246356),
    y = t(204651);
t(980504);
var O = t(376086),
    R = t(105292);
function L(e) {
    let { channel: n, themeable: L, whichPopoutIsOpen: D, setWhichPopoutIsOpen: M, idle: G } = e,
        { parentAnalyticsLocation: P } = (0, u.Ay)(),
        {
            Component: k,
            play: U,
            events: { onMouseEnter: V, onMouseLeave: B },
        } = (0, r.E)(),
        w = n.getGuildId(),
        { mute: H, suppress: Y } = (0, N.A)(n),
        z = (0, s.bG)([_.Ay], () => _.Ay.isDeaf()),
        K = H || Y || z,
        F = (0, C.VE)({ isSoundboardButtonDisabled: K }),
        [X, q] = (0, h.DP)(F),
        { analyticsLocations: Q } = (0, u.Ay)(),
        W = (0, g.N)(w, "ActionBarSoundboardButton") && !K,
        J = l.useCallback((e) => (0, i.jsx)(j.A, { showDot: W, children: (0, i.jsx)(k, { ...e }) }), [k, W]),
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
        eo = l.useMemo(() => (el && (D === O.P.SOUNDBOARD || null == D)) || D === O.P.SOUNDBOARD, [el, D]);
    function ec() {
        return H
            ? R.intl.string(R.t["Ox4/zU"])
            : Y
              ? R.intl.string(R.t["+YBKYI"])
              : z
                ? R.intl.string(R.t.X1lQli)
                : R.intl.string(R.t["6EJvHt"]);
    }
    function eu(e) {
        null != w &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, i.jsx)(e, {
                        guildId: w,
                        sourceAnalyticsLocations: Q,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", P),
                    });
            });
    }
    function ed() {
        (U(), null != D && ea(), Z && et(), M?.(O.P.SOUNDBOARD));
    }
    function eA() {
        ((0, d.X)(P, d.O.SOUNDBOARD), D === O.P.SOUNDBOARD ? (M?.(void 0), er()) : ed());
    }
    l.useEffect(() => {
        eo || Z || en(!0);
    }, [eo, Z, en]);
    let eh = l.useCallback(() => {
            null == D && M?.(O.P.SOUNDBOARD);
        }, [D, M]),
        em = l.useRef(null),
        { usersInChannel: eg } = (0, s.cf)([b.Ay], () => ({ usersInChannel: b.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [ex, eC] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = eg >= 2 && !K && null == D;
            if (G || !e) return void eC(!1);
            let n = setTimeout(() => eC(!0), 300);
            return () => clearTimeout(n);
        }, [G, K, eg, D]),
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
                        (es(!1), M?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return K
                            ? null
                            : (0, i.jsx)(S.A, {
                                  children: (0, i.jsx)("div", {
                                      onMouseEnter: ea,
                                      onMouseLeave: er,
                                      onMouseDown: eh,
                                      children: Z
                                          ? (0, i.jsx)(v.A, {
                                                channel: n,
                                                guildId: w,
                                                openFullPicker: et,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                                showEchoes: ei,
                                            })
                                          : (0, i.jsx)(I.A, {
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
                            themeable: L,
                            label: ec(),
                            "aria-label": W ? R.intl.string(R.t.D923q4) : ec(),
                            iconComponent: J,
                            disabled: K,
                            onContextMenu: eu,
                            onClick: eA,
                            onMouseEnter: (e) => {
                                (V(), "focus" !== e.type && ea());
                            },
                            onMouseLeave: () => {
                                null == D && (er(), B());
                            },
                            isActive: el || D === O.P.SOUNDBOARD,
                            color: el || D === O.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                !eo && null != w && ei ? (0, i.jsx)(T.A, { guildId: w, channelId: n.id }) : null,
                ex &&
                    (0, i.jsx)(p.A, { targetElementRef: em, openSoundboardPicker: ed, shouldShowSoundboardPicker: eo }),
            ],
        })
    );
}
