n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(265872),
    o = n(397927),
    d = n(442433),
    c = n(688810),
    u = n(384059),
    h = n(480890),
    A = n(160761),
    _ = n(421773),
    m = n(536432),
    p = n(674168),
    g = n(989799),
    f = n(173660),
    E = n(430452),
    x = n(246356),
    I = n(709562),
    C = n(376086),
    N = n(985018);
function T(e) {
    let { channel: t, themeable: T, whichPopoutIsOpen: S, setWhichPopoutIsOpen: b } = e,
        { parentAnalyticsLocation: y } = (0, c.Ay)(),
        v = t.getGuildId(),
        { mute: R, suppress: j } = (0, f.A)(t),
        O = (0, s.bG)([E.Ay], () => E.Ay.isDeaf()),
        L = R || j || O,
        M = (0, m.VE)({ isSoundboardButtonDisabled: L }),
        [D, U] = (0, A.DP)(M),
        { analyticsLocations: G } = (0, c.Ay)(),
        { isHovered: P, setIsHovered: k, onMouseEnter: w, onMouseLeave: B } = (0, _.A)(200, 300);
    function V(e) {
        null != v &&
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: v,
                        sourceAnalyticsLocations: G,
                        ...t,
                        onInteraction: (0, h.s)("SoundboardContextMenu", y),
                    });
            });
    }
    function H() {
        (0, u.X)(y, u.O.SOUNDBOARD),
            S === C.P.SOUNDBOARD ? (b?.(void 0), B()) : (null != S && w(), b?.(C.P.SOUNDBOARD));
    }
    let F = l.useCallback(() => {
            null == S && b?.(C.P.SOUNDBOARD);
        }, [S, b]),
        W = l.useRef(null);
    return (0, i.jsx)(r.Y, {
        targetElementRef: W,
        shouldShow: (P && (S === C.P.SOUNDBOARD || null == S)) || S === C.P.SOUNDBOARD,
        animation: r.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            k(!1), b?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return L
                ? null
                : (0, i.jsx)(x.A, {
                      children: (0, i.jsx)("div", {
                          onMouseEnter: w,
                          onMouseLeave: B,
                          onMouseDown: F,
                          children: (0, i.jsx)(g.A, {
                              guildId: v,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  D === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(p.m, { onClose: n, markAsDismissed: U }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, i.jsx)(I.l, {
                ref: W,
                isTrayButton: !0,
                themeable: T,
                label: R
                    ? N.intl.string(N.t["Ox4/zU"])
                    : j
                      ? N.intl.string(N.t["+YBKYI"])
                      : O
                        ? N.intl.string(N.t.X1lQli)
                        : void 0,
                iconComponent: (0, i.jsx)(o.gZH, {
                    eventTargetRef: W,
                    className: o.d5l.refresh_sm,
                    dataBinding: { fill: "currentColor" },
                }),
                disabled: L,
                onContextMenu: V,
                onClick: H,
                onMouseEnter: (e) => {
                    "focus" !== e.type && w();
                },
                onMouseLeave: () => {
                    null == S && B();
                },
                isActive: P || S === C.P.SOUNDBOARD,
                color: P || S === C.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
