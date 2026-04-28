n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(554146),
    r = n(621956),
    o = n(922016),
    c = n(442433),
    u = n(688810),
    d = n(384059),
    A = n(480890),
    E = n(160761),
    m = n(421773),
    h = n(536432),
    C = n(674168),
    g = n(126970),
    I = n(173660),
    p = n(969341),
    x = n(246356),
    T = n(709562),
    _ = n(376086),
    v = n(985018);
function N(e) {
    let { channel: t, themeable: N, whichPopoutIsOpen: f, setWhichPopoutIsOpen: j } = e,
        { parentAnalyticsLocation: S } = (0, u.Ay)(),
        {
            Component: b,
            play: O,
            events: { onMouseEnter: y, onMouseLeave: L },
        } = (0, r.E)(),
        M = t.getGuildId(),
        { mute: R, suppress: D } = (0, I.A)(t),
        P = (0, s.bG)([p.Ay], () => p.Ay.isDeaf()),
        G = R || D || P,
        k = (0, h.VE)({ isSoundboardButtonDisabled: G }),
        [U, V] = (0, E.DP)(k),
        { analyticsLocations: B } = (0, u.Ay)(),
        { isHovered: H, setIsHovered: w, onMouseEnter: K, onMouseLeave: F } = (0, m.A)(200, 300);
    function Y(e) {
        null != M &&
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) =>
                    (0, l.jsx)(e, {
                        guildId: M,
                        sourceAnalyticsLocations: B,
                        ...t,
                        onInteraction: (0, A.s)("SoundboardContextMenu", S),
                    });
            });
    }
    function X() {
        (0, d.X)(S, d.O.SOUNDBOARD),
            f === _.P.SOUNDBOARD ? (j?.(void 0), F()) : (null != f ? (O(), K()) : O(), j?.(_.P.SOUNDBOARD));
    }
    let z = i.useCallback(() => {
            null == f && j?.(_.P.SOUNDBOARD);
        }, [f, j]),
        W = i.useRef(null);
    return (0, l.jsx)(o.Y, {
        targetElementRef: W,
        shouldShow: (H && (f === _.P.SOUNDBOARD || null == f)) || f === _.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            w(!1), j?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return G
                ? null
                : (0, l.jsx)(x.A, {
                      children: (0, l.jsx)("div", {
                          onMouseEnter: K,
                          onMouseLeave: F,
                          onMouseDown: z,
                          children: (0, l.jsx)(g.A, {
                              guildId: M,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  U === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, l.jsx)(C.m, { onClose: n, markAsDismissed: V }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, l.jsx)(T.l, {
                ref: W,
                isTrayButton: !0,
                themeable: N,
                label: R
                    ? v.intl.string(v.t["Ox4/zU"])
                    : D
                      ? v.intl.string(v.t["+YBKYI"])
                      : P
                        ? v.intl.string(v.t.X1lQli)
                        : void 0,
                iconComponent: b,
                disabled: G,
                onContextMenu: Y,
                onClick: X,
                onMouseEnter: (e) => {
                    y(), "focus" !== e.type && K();
                },
                onMouseLeave: () => {
                    null == f && (F(), L());
                },
                isActive: H || f === _.P.SOUNDBOARD,
                color: H || f === _.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
