t.d(n, { A: () => _ });
var l = t(627968),
    i = t(64700),
    s = t(17928),
    a = t(554146),
    r = t(621956),
    o = t(922016),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    h = t(595529),
    m = t(421773),
    C = t(813564),
    E = t(674168),
    p = t(277192),
    g = t(173660),
    x = t(235058),
    I = t(246356),
    f = t(204651),
    T = t(376086),
    v = t(375708);
function _(e) {
    let { channel: n, themeable: _, whichPopoutIsOpen: j, setWhichPopoutIsOpen: N } = e,
        { parentAnalyticsLocation: O } = (0, u.Ay)(),
        {
            Component: S,
            play: b,
            events: { onMouseEnter: y, onMouseLeave: R },
        } = (0, r.E)(),
        L = n.getGuildId(),
        { mute: M, suppress: D } = (0, g.A)(n),
        P = (0, s.bG)([x.Ay], () => x.Ay.isDeaf()),
        G = M || D || P,
        k = (0, C.VE)({ isSoundboardButtonDisabled: G }),
        [U, V] = (0, h.DP)(k),
        { analyticsLocations: B } = (0, u.Ay)(),
        { isHovered: H, setIsHovered: w, onMouseEnter: Y, onMouseLeave: K } = (0, m.A)(200, 300);
    function F(e) {
        null != L &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("11562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: L,
                        sourceAnalyticsLocations: B,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", O),
                    });
            });
    }
    function X() {
        (0, d.X)(O, d.O.SOUNDBOARD),
            j === T.P.SOUNDBOARD ? (N?.(void 0), K()) : (null != j ? (b(), Y()) : b(), N?.(T.P.SOUNDBOARD));
    }
    let z = i.useCallback(() => {
            null == j && N?.(T.P.SOUNDBOARD);
        }, [j, N]),
        W = i.useRef(null);
    return (0, l.jsx)(o.Y, {
        targetElementRef: W,
        shouldShow: (H && (j === T.P.SOUNDBOARD || null == j)) || j === T.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            w(!1), N?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return G
                ? null
                : (0, l.jsx)(I.A, {
                      children: (0, l.jsx)("div", {
                          onMouseEnter: Y,
                          onMouseLeave: K,
                          onMouseDown: z,
                          children: (0, l.jsx)(p.A, {
                              guildId: L,
                              channel: n,
                              onClose: t,
                              gridNotice:
                                  U === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, l.jsx)(E.m, { onClose: t, markAsDismissed: V }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, l.jsx)(f.l, {
                ref: W,
                isTrayButton: !0,
                themeable: _,
                label: M
                    ? v.intl.string(v.t["Ox4/zU"])
                    : D
                      ? v.intl.string(v.t["+YBKYI"])
                      : P
                        ? v.intl.string(v.t.X1lQli)
                        : void 0,
                iconComponent: S,
                disabled: G,
                onContextMenu: F,
                onClick: X,
                onMouseEnter: (e) => {
                    y(), "focus" !== e.type && Y();
                },
                onMouseLeave: () => {
                    null == j && (K(), R());
                },
                isActive: H || j === T.P.SOUNDBOARD,
                color: H || j === T.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
