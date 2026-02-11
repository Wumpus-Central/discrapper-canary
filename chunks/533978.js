n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(621956),
    o = n(265872),
    d = n(442433),
    c = n(688810),
    u = n(384059),
    h = n(480890),
    A = n(160761),
    m = n(421773),
    p = n(536432),
    g = n(674168),
    _ = n(989799),
    f = n(173660),
    x = n(430452),
    C = n(246356),
    E = n(709562),
    I = n(376086),
    N = n(985018);
function b(e) {
    let { channel: t, themeable: b, whichPopoutIsOpen: S, setWhichPopoutIsOpen: T } = e,
        { parentAnalyticsLocation: v } = (0, c.Ay)(),
        {
            Component: y,
            play: j,
            events: { onMouseEnter: R, onMouseLeave: O },
        } = (0, r.E)(),
        L = t.getGuildId(),
        { mute: M, suppress: D } = (0, f.A)(t),
        G = (0, s.bG)([x.Ay], () => x.Ay.isDeaf()),
        U = M || D || G,
        P = (0, p.VE)({ isSoundboardButtonDisabled: U }),
        [w, k] = (0, A.DP)(P),
        { analyticsLocations: V } = (0, c.Ay)(),
        { isHovered: B, setIsHovered: H, onMouseEnter: F, onMouseLeave: K } = (0, m.A)(200, 300);
    function W(e) {
        null != L &&
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: L,
                        sourceAnalyticsLocations: V,
                        ...t,
                        onInteraction: (0, h.s)("SoundboardContextMenu", v),
                    });
            });
    }
    function Y() {
        (0, u.X)(v, u.O.SOUNDBOARD),
            S === I.P.SOUNDBOARD ? (T?.(void 0), K()) : (null != S ? (j(), F()) : j(), T?.(I.P.SOUNDBOARD));
    }
    let z = l.useRef(null);
    return (0, i.jsx)(o.Y, {
        targetElementRef: z,
        shouldShow: (B && (S === I.P.SOUNDBOARD || null == S)) || S === I.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            H(!1), T?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return U
                ? null
                : (0, i.jsx)(C.A, {
                      children: (0, i.jsx)("div", {
                          onMouseEnter: F,
                          onMouseLeave: K,
                          children: (0, i.jsx)(_.A, {
                              guildId: L,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  w === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(g.m, { onClose: n, markAsDismissed: k }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, i.jsx)(E.l, {
                ref: z,
                isTrayButton: !0,
                themeable: b,
                label: M
                    ? N.intl.string(N.t["Ox4/zU"])
                    : D
                      ? N.intl.string(N.t["+YBKYI"])
                      : G
                        ? N.intl.string(N.t.X1lQli)
                        : void 0,
                iconComponent: y,
                disabled: U,
                onContextMenu: W,
                onClick: Y,
                onMouseEnter: (e) => {
                    R(), "focus" !== e.type && F();
                },
                onMouseLeave: () => {
                    null == S && (K(), O());
                },
                isActive: B || S === I.P.SOUNDBOARD,
                color: B || S === I.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
