t.d(n, { A: () => _ });
var l = t(627968),
    i = t(64700),
    a = t(311907),
    s = t(554146),
    r = t(621956),
    o = t(265872),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    h = t(160761),
    p = t(421773),
    m = t(536432),
    g = t(674168),
    f = t(989799),
    C = t(173660),
    E = t(430452),
    v = t(246356),
    I = t(709562),
    x = t(376086),
    T = t(985018);
function _(e) {
    let { channel: n, themeable: _, whichPopoutIsOpen: j, setWhichPopoutIsOpen: N } = e,
        { parentAnalyticsLocation: b } = (0, u.Ay)(),
        {
            Component: y,
            play: S,
            events: { onMouseEnter: O, onMouseLeave: L },
        } = (0, r.E)(),
        R = n.getGuildId(),
        { mute: M, suppress: D } = (0, C.A)(n),
        P = (0, a.bG)([E.Ay], () => E.Ay.isDeaf()),
        G = M || D || P,
        k = (0, m.VE)({ isSoundboardButtonDisabled: G }),
        [V, U] = (0, h.DP)(k),
        { analyticsLocations: B } = (0, u.Ay)(),
        { isHovered: w, setIsHovered: H, onMouseEnter: Y, onMouseLeave: F } = (0, p.A)(200, 300);
    function K(e) {
        null != R &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("51111").then(t.bind(t, 323002));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: R,
                        sourceAnalyticsLocations: B,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", b),
                    });
            });
    }
    function X() {
        (0, d.X)(b, d.O.SOUNDBOARD),
            j === x.P.SOUNDBOARD ? (N?.(void 0), F()) : (null != j ? (S(), Y()) : S(), N?.(x.P.SOUNDBOARD));
    }
    let z = i.useCallback(() => {
            null == j && N?.(x.P.SOUNDBOARD);
        }, [j, N]),
        W = i.useRef(null);
    return (0, l.jsx)(o.Y, {
        targetElementRef: W,
        shouldShow: (w && (j === x.P.SOUNDBOARD || null == j)) || j === x.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            H(!1), N?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return G
                ? null
                : (0, l.jsx)(v.A, {
                      children: (0, l.jsx)("div", {
                          onMouseEnter: Y,
                          onMouseLeave: F,
                          onMouseDown: z,
                          children: (0, l.jsx)(f.A, {
                              guildId: R,
                              channel: n,
                              onClose: t,
                              gridNotice:
                                  V === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, l.jsx)(g.m, { onClose: t, markAsDismissed: U }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, l.jsx)(I.l, {
                ref: W,
                isTrayButton: !0,
                themeable: _,
                label: M
                    ? T.intl.string(T.t["Ox4/zU"])
                    : D
                      ? T.intl.string(T.t["+YBKYI"])
                      : P
                        ? T.intl.string(T.t.X1lQli)
                        : void 0,
                iconComponent: y,
                disabled: G,
                onContextMenu: K,
                onClick: X,
                onMouseEnter: (e) => {
                    O(), "focus" !== e.type && Y();
                },
                onMouseLeave: () => {
                    null == j && (F(), L());
                },
                isActive: w || j === x.P.SOUNDBOARD,
                color: w || j === x.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
