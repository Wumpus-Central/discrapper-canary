t.d(n, { A: () => S });
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
    f = t(714736),
    E = t(662080),
    I = t(511558),
    v = t(173660),
    j = t(767931),
    T = t(25578),
    N = t(607567),
    _ = t(246356),
    b = t(204651);
t(980504);
var O = t(376086),
    y = t(375708);
function S(e) {
    let { channel: n, themeable: S, whichPopoutIsOpen: R, setWhichPopoutIsOpen: D, idle: L } = e,
        { parentAnalyticsLocation: M } = (0, u.Ay)(),
        {
            Component: P,
            play: k,
            events: { onMouseEnter: U, onMouseLeave: G },
        } = (0, o.E)(),
        V = n.getGuildId(),
        { mute: B, suppress: w } = (0, v.A)(n),
        H = (0, a.bG)([T.Ay], () => T.Ay.isDeaf()),
        Y = B || w || H,
        F = (0, p.VE)({ isSoundboardButtonDisabled: Y }),
        [X, K] = (0, m.DP)(F),
        { analyticsLocations: z } = (0, u.Ay)(),
        { showQuickAccess: W } = (0, C.j)("ActionBarSoundboardButton"),
        [J, q] = l.useState(W),
        Q = l.useCallback(
            (e) => {
                W && q(e);
            },
            [W],
        ),
        $ = l.useCallback(() => Q(!1), [Q]),
        { enabled: Z } = (0, f.W)(V ?? "0", "ActionBarSoundboardButton"),
        { isHovered: ee, setIsHovered: en, onMouseEnter: et, onMouseLeave: ei } = (0, h.A)(200, 300),
        el = l.useMemo(() => (ee && (R === O.P.SOUNDBOARD || null == R)) || R === O.P.SOUNDBOARD, [ee, R]);
    function ea(e) {
        null != V &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, i.jsx)(e, {
                        guildId: V,
                        sourceAnalyticsLocations: z,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", M),
                    });
            });
    }
    function es() {
        (k(), null != R && et(), J && $(), D?.(O.P.SOUNDBOARD));
    }
    function eo() {
        ((0, d.X)(M, d.O.SOUNDBOARD), R === O.P.SOUNDBOARD ? (D?.(void 0), ei()) : es());
    }
    l.useEffect(() => {
        el || J || Q(!0);
    }, [el, J, Q]);
    let er = l.useCallback(() => {
            null == R && D?.(O.P.SOUNDBOARD);
        }, [R, D]),
        ec = l.useRef(null),
        { usersInChannel: eu } = (0, a.cf)([N.Ay], () => ({ usersInChannel: N.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [ed, eA] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = eu >= 2 && !Y && null == R;
            if (L || !e) return void eA(!1);
            let n = setTimeout(() => eA(!0), 300);
            return () => clearTimeout(n);
        }, [L, Y, eu, R]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Y, {
                    targetElementRef: ec,
                    shouldShow: el,
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (en(!1), D?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return Y
                            ? null
                            : (0, i.jsx)(_.A, {
                                  children: (0, i.jsx)("div", {
                                      onMouseEnter: et,
                                      onMouseLeave: ei,
                                      onMouseDown: er,
                                      children: J
                                          ? (0, i.jsx)(E.A, {
                                                channel: n,
                                                guildId: V,
                                                openFullPicker: $,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                            })
                                          : (0, i.jsx)(I.A, {
                                                guildId: V,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    X === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, i.jsx)(x.m, { onClose: t, markAsDismissed: K }),
                                                analyticsSource: "action bar button",
                                            }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                !el && null != V && Z ? (0, i.jsx)(j.A, { guildId: V, channelId: n.id }) : null,
                                (0, i.jsx)(b.l, {
                                    ref: ec,
                                    isTrayButton: !0,
                                    themeable: S,
                                    label: B
                                        ? y.intl.string(y.t["Ox4/zU"])
                                        : w
                                          ? y.intl.string(y.t["+YBKYI"])
                                          : H
                                            ? y.intl.string(y.t.X1lQli)
                                            : y.intl.string(y.t["6EJvHt"]),
                                    iconComponent: P,
                                    disabled: Y,
                                    onContextMenu: ea,
                                    onClick: eo,
                                    onMouseEnter: (e) => {
                                        (U(), "focus" !== e.type && et());
                                    },
                                    onMouseLeave: () => {
                                        null == R && (ei(), G());
                                    },
                                    isActive: ee || R === O.P.SOUNDBOARD,
                                    color: ee || R === O.P.SOUNDBOARD ? "primaryDark" : void 0,
                                }),
                            ],
                        }),
                }),
                ed &&
                    (0, i.jsx)(g.A, { targetElementRef: ec, openSoundboardPicker: es, shouldShowSoundboardPicker: el }),
            ],
        })
    );
}
