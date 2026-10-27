t.d(n, { A: () => O });
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
    g = t(600597),
    x = t(813564),
    C = t(674168),
    f = t(987933),
    p = t(714736),
    E = t(662080),
    j = t(476254),
    v = t(173660),
    I = t(665252),
    N = t(360906),
    T = t(607567),
    _ = t(246356),
    b = t(204651);
t(980504);
var S = t(376086),
    y = t(105292);
function O(e) {
    let { channel: n, themeable: O, whichPopoutIsOpen: R, setWhichPopoutIsOpen: L, idle: M } = e,
        { parentAnalyticsLocation: D } = (0, u.Ay)(),
        {
            Component: G,
            play: P,
            events: { onMouseEnter: k, onMouseLeave: U },
        } = (0, r.E)(),
        V = n.getGuildId(),
        { mute: B, suppress: w } = (0, v.A)(n),
        H = (0, s.bG)([N.Ay], () => N.Ay.isDeaf()),
        Y = B || w || H,
        z = (0, x.VE)({ isSoundboardButtonDisabled: Y }),
        [K, F] = (0, h.DP)(z),
        { analyticsLocations: X } = (0, u.Ay)(),
        { showQuickAccess: q } = (0, g.j)("ActionBarSoundboardButton"),
        [Q, W] = l.useState(q),
        J = l.useCallback(
            (e) => {
                q && W(e);
            },
            [q],
        ),
        $ = l.useCallback(() => J(!1), [J]),
        { enabled: Z } = (0, p.W)(V ?? "0", "ActionBarSoundboardButton"),
        { isHovered: ee, setIsHovered: en, onMouseEnter: et, onMouseLeave: ei } = (0, m.A)(200, 300),
        el = l.useMemo(() => (ee && (R === S.P.SOUNDBOARD || null == R)) || R === S.P.SOUNDBOARD, [ee, R]);
    function es(e) {
        null != V &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, i.jsx)(e, {
                        guildId: V,
                        sourceAnalyticsLocations: X,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", D),
                    });
            });
    }
    function ea() {
        (P(), null != R && et(), Q && $(), L?.(S.P.SOUNDBOARD));
    }
    function er() {
        ((0, d.X)(D, d.O.SOUNDBOARD), R === S.P.SOUNDBOARD ? (L?.(void 0), ei()) : ea());
    }
    l.useEffect(() => {
        el || Q || J(!0);
    }, [el, Q, J]);
    let eo = l.useCallback(() => {
            null == R && L?.(S.P.SOUNDBOARD);
        }, [R, L]),
        ec = l.useRef(null),
        { usersInChannel: eu } = (0, s.cf)([T.Ay], () => ({ usersInChannel: T.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [ed, eA] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = eu >= 2 && !Y && null == R;
            if (M || !e) return void eA(!1);
            let n = setTimeout(() => eA(!0), 300);
            return () => clearTimeout(n);
        }, [M, Y, eu, R]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Y, {
                    targetElementRef: ec,
                    shouldShow: el,
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (en(!1), L?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return Y
                            ? null
                            : (0, i.jsx)(_.A, {
                                  children: (0, i.jsx)("div", {
                                      onMouseEnter: et,
                                      onMouseLeave: ei,
                                      onMouseDown: eo,
                                      children: Q
                                          ? (0, i.jsx)(E.A, {
                                                channel: n,
                                                guildId: V,
                                                openFullPicker: $,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                                showEchoes: Z,
                                            })
                                          : (0, i.jsx)(j.A, {
                                                guildId: V,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    K === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, i.jsx)(C.m, { onClose: t, markAsDismissed: F }),
                                                analyticsSource: "action bar button",
                                                showEchoes: Z,
                                            }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, i.jsx)(b.l, {
                            ref: ec,
                            isTrayButton: !0,
                            themeable: O,
                            label: B
                                ? y.intl.string(y.t["Ox4/zU"])
                                : w
                                  ? y.intl.string(y.t["+YBKYI"])
                                  : H
                                    ? y.intl.string(y.t.X1lQli)
                                    : y.intl.string(y.t["6EJvHt"]),
                            iconComponent: G,
                            disabled: Y,
                            onContextMenu: es,
                            onClick: er,
                            onMouseEnter: (e) => {
                                (k(), "focus" !== e.type && et());
                            },
                            onMouseLeave: () => {
                                null == R && (ei(), U());
                            },
                            isActive: ee || R === S.P.SOUNDBOARD,
                            color: ee || R === S.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                !el && null != V && Z ? (0, i.jsx)(I.A, { guildId: V, channelId: n.id }) : null,
                ed &&
                    (0, i.jsx)(f.A, { targetElementRef: ec, openSoundboardPicker: ea, shouldShowSoundboardPicker: el }),
            ],
        })
    );
}
