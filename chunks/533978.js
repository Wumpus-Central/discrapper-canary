n.d(t, { A: () => T });
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
    _ = n(421773),
    m = n(536432),
    g = n(674168),
    p = n(989799),
    f = n(173660),
    x = n(430452),
    E = n(246356),
    I = n(709562),
    C = n(376086),
    N = n(985018);
function T(e) {
    let { channel: t, themeable: T, whichPopoutIsOpen: S, setWhichPopoutIsOpen: b } = e,
        { parentAnalyticsLocation: y } = (0, c.Ay)(),
        {
            Component: v,
            play: j,
            events: { onMouseEnter: R, onMouseLeave: O },
        } = (0, r.E)(),
        L = t.getGuildId(),
        { mute: M, suppress: D } = (0, f.A)(t),
        U = (0, s.bG)([x.Ay], () => x.Ay.isDeaf()),
        G = M || D || U,
        P = (0, m.VE)({ isSoundboardButtonDisabled: G }),
        [k, w] = (0, A.DP)(P),
        { analyticsLocations: B } = (0, c.Ay)(),
        { isHovered: V, setIsHovered: H, onMouseEnter: F, onMouseLeave: K } = (0, _.A)(200, 300);
    function W(e) {
        null != L &&
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: L,
                        sourceAnalyticsLocations: B,
                        ...t,
                        onInteraction: (0, h.s)("SoundboardContextMenu", y),
                    });
            });
    }
    function Y() {
        (0, u.X)(y, u.O.SOUNDBOARD),
            S === C.P.SOUNDBOARD ? (b?.(void 0), K()) : (null != S ? (j(), F()) : j(), b?.(C.P.SOUNDBOARD));
    }
    let z = l.useCallback(() => {
            null == S && b?.(C.P.SOUNDBOARD);
        }, [S, b]),
        q = l.useRef(null);
    return (0, i.jsx)(o.Y, {
        targetElementRef: q,
        shouldShow: (V && (S === C.P.SOUNDBOARD || null == S)) || S === C.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            H(!1), b?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return G
                ? null
                : (0, i.jsx)(E.A, {
                      children: (0, i.jsx)("div", {
                          onMouseEnter: F,
                          onMouseLeave: K,
                          onMouseDown: z,
                          children: (0, i.jsx)(p.A, {
                              guildId: L,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  k === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(g.m, { onClose: n, markAsDismissed: w }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, i.jsx)(I.l, {
                ref: q,
                isTrayButton: !0,
                themeable: T,
                label: M
                    ? N.intl.string(N.t["Ox4/zU"])
                    : D
                      ? N.intl.string(N.t["+YBKYI"])
                      : U
                        ? N.intl.string(N.t.X1lQli)
                        : void 0,
                iconComponent: v,
                disabled: G,
                onContextMenu: W,
                onClick: Y,
                onMouseEnter: (e) => {
                    R(), "focus" !== e.type && F();
                },
                onMouseLeave: () => {
                    null == S && (K(), O());
                },
                isActive: V || S === C.P.SOUNDBOARD,
                color: V || S === C.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
