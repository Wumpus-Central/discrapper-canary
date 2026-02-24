"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(265872),
    o = n(397927),
    c = n(442433),
    d = n(688810),
    u = n(384059),
    h = n(480890),
    A = n(160761),
    p = n(421773),
    g = n(536432),
    m = n(674168),
    _ = n(989799),
    f = n(173660),
    x = n(430452),
    C = n(246356),
    E = n(709562),
    I = n(376086),
    N = n(985018);
function b(e) {
    let { channel: t, themeable: b, whichPopoutIsOpen: S, setWhichPopoutIsOpen: T } = e,
        { parentAnalyticsLocation: y } = (0, d.Ay)(),
        v = t.getGuildId(),
        { mute: j, suppress: R } = (0, f.A)(t),
        O = (0, l.bG)([x.Ay], () => x.Ay.isDeaf()),
        L = j || R || O,
        M = (0, g.VE)({ isSoundboardButtonDisabled: L }),
        [D, G] = (0, A.DP)(M),
        { analyticsLocations: U } = (0, d.Ay)(),
        { isHovered: P, setIsHovered: w, onMouseEnter: k, onMouseLeave: V } = (0, p.A)(200, 300);
    function B(e) {
        null != v &&
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: v,
                        sourceAnalyticsLocations: U,
                        ...t,
                        onInteraction: (0, h.s)("SoundboardContextMenu", y),
                    });
            });
    }
    function H() {
        (0, u.X)(y, u.O.SOUNDBOARD),
            S === I.P.SOUNDBOARD ? (T?.(void 0), V()) : (null != S && k(), T?.(I.P.SOUNDBOARD));
    }
    let F = s.useRef(null);
    return (0, i.jsx)(a.Y, {
        targetElementRef: F,
        shouldShow: (P && (S === I.P.SOUNDBOARD || null == S)) || S === I.P.SOUNDBOARD,
        animation: a.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            w(!1), T?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return L
                ? null
                : (0, i.jsx)(C.A, {
                      children: (0, i.jsx)("div", {
                          onMouseEnter: k,
                          onMouseLeave: V,
                          children: (0, i.jsx)(_.A, {
                              guildId: v,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  D === r.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(m.m, { onClose: n, markAsDismissed: G }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, i.jsx)(E.l, {
                ref: F,
                isTrayButton: !0,
                themeable: b,
                label: j
                    ? N.intl.string(N.t["Ox4/zU"])
                    : R
                      ? N.intl.string(N.t["+YBKYI"])
                      : O
                        ? N.intl.string(N.t.X1lQli)
                        : void 0,
                iconComponent: (0, i.jsx)(o.gZH, {
                    eventTargetRef: F,
                    className: o.d5l.refresh_sm,
                    dataBinding: { fill: "currentColor" },
                }),
                disabled: L,
                onContextMenu: B,
                onClick: H,
                onMouseEnter: (e) => {
                    "focus" !== e.type && k();
                },
                onMouseLeave: () => {
                    null == S && V();
                },
                isActive: P || S === I.P.SOUNDBOARD,
                color: P || S === I.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
