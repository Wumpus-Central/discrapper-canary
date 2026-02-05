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
    g = n(421773),
    m = n(536432),
    p = n(674168),
    _ = n(989799),
    x = n(173660),
    f = n(430452),
    E = n(246356),
    C = n(709562),
    I = n(376086),
    S = n(985018);
function b(e) {
    let { channel: t, themeable: b, whichPopoutIsOpen: N, setWhichPopoutIsOpen: T } = e,
        { parentAnalyticsLocation: j } = (0, c.Ay)(),
        {
            Component: v,
            play: y,
            events: { onMouseEnter: R, onMouseLeave: O },
        } = (0, r.E)(),
        L = t.getGuildId(),
        { mute: D, suppress: M } = (0, x.A)(t),
        G = (0, s.bG)([f.A], () => f.A.isDeaf()),
        U = D || M || G,
        P = (0, m.VE)({ isSoundboardButtonDisabled: U }),
        [k, w] = (0, A.DP)(P),
        { analyticsLocations: V } = (0, c.Ay)(),
        { isHovered: B, setIsHovered: H, onMouseEnter: F, onMouseLeave: Y } = (0, g.A)(200, 300);
    function W(e) {
        null != L &&
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: L,
                        sourceAnalyticsLocations: V,
                        ...t,
                        onInteraction: (0, h.s)("SoundboardContextMenu", j),
                    });
            });
    }
    function K() {
        (0, u.X)(j, u.O.SOUNDBOARD),
            N === I.P.SOUNDBOARD ? (T?.(void 0), Y()) : (null != N ? (y(), F()) : y(), T?.(I.P.SOUNDBOARD));
    }
    let z = l.useRef(null);
    return (0, i.jsx)(o.Y, {
        targetElementRef: z,
        shouldShow: (B && (N === I.P.SOUNDBOARD || null == N)) || N === I.P.SOUNDBOARD,
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
                : (0, i.jsx)(E.A, {
                      children: (0, i.jsx)("div", {
                          onMouseEnter: F,
                          onMouseLeave: Y,
                          children: (0, i.jsx)(_.A, {
                              guildId: L,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  k === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(p.m, { onClose: n, markAsDismissed: w }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, i.jsx)(C.l, {
                ref: z,
                isTrayButton: !0,
                themeable: b,
                label: D
                    ? S.intl.string(S.t["Ox4/zU"])
                    : M
                      ? S.intl.string(S.t["+YBKYI"])
                      : G
                        ? S.intl.string(S.t.X1lQli)
                        : void 0,
                iconComponent: v,
                disabled: U,
                onContextMenu: W,
                onClick: K,
                onMouseEnter: (e) => {
                    R(), "focus" !== e.type && F();
                },
                onMouseLeave: () => {
                    null == N && (Y(), O());
                },
                isActive: B || N === I.P.SOUNDBOARD,
                color: B || N === I.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
