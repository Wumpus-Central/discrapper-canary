n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(417597),
    o = n(554146),
    d = n(621956),
    c = n(990078),
    u = n(421380),
    A = n(397927),
    h = n(442433),
    _ = n(793574),
    m = n(688810),
    g = n(384059),
    p = n(480890),
    E = n(160761),
    I = n(173660),
    f = n(430452),
    C = n(234320),
    T = n(536432),
    N = n(674168),
    S = n(989799),
    x = n(652215),
    b = n(49999),
    v = n(985018),
    y = n(395766);
function O(e) {
    let { channel: t, ...a } = e,
        O = l.useRef(null),
        { mute: L, suppress: R } = (0, I.A)(t),
        P = (0, s.bG)([f.Ay], () => f.Ay.isDeaf()),
        D = L || R || P,
        [j, M] = l.useState(!1),
        w = t.getGuildId(),
        U = (0, T.VE)({ isSoundboardButtonDisabled: D }),
        [G, k] = (0, E.DP)(U),
        { analyticsLocations: V, parentAnalyticsLocation: B } = (0, m.Ay)(_.A.SOUNDBOARD_BUTTON);
    function H(e) {
        null != w &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: w,
                        sourceAnalyticsLocations: V,
                        ...t,
                        onInteraction: (0, p.s)("SoundboardContextMenu", _.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: F,
            play: Y,
            events: { onMouseEnter: W, onMouseLeave: K },
        } = (0, d.E)(),
        q = l.useCallback(() => {
            D || M(!j);
        }, [D, j]);
    return (
        (0, C.Vo)({ event: x.jej.TOGGLE_SOUNDBOARD, handler: q }),
        (0, i.jsx)(m.f5, {
            value: V,
            children: (0, i.jsx)(c.m, {
                targetElementRef: O,
                text: L
                    ? v.intl.string(v.t["Ox4/zU"])
                    : R
                      ? v.intl.string(v.t["+YBKYI"])
                      : P
                        ? v.intl.string(v.t.X1lQli)
                        : v.intl.string(v.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !j,
                children: (0, i.jsx)(A.YNO, {
                    targetElementRef: O,
                    animation: A.YNO.Animation.FADE,
                    shouldShow: j,
                    position: "top",
                    onRequestClose: () => M(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, i.jsx)(S.A, {
                            guildId: w,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                G === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, i.jsx)(N.m, { onClose: n, markAsDismissed: k }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ref: O,
                            children: (0, i.jsx)(u.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: r()(y.x6, y.Sq, { [y.W4]: j, [y.r9]: D }),
                                wrapperClassName: y.x6,
                                innerClassName: y.bk,
                                disabled: D,
                                onClick: () => {
                                    null != G && G !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && k(b.i.UNKNOWN),
                                        M(!j),
                                        Y(),
                                        (0, g.X)(B, g.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    a.onMouseEnter?.(e), W();
                                },
                                onMouseLeave: (e) => {
                                    a.onMouseLeave?.(e), K();
                                },
                                onContextMenu: H,
                                fullWidth: !0,
                                size: u.$n.Sizes.MEDIUM,
                                ...a,
                                children: (0, i.jsx)(F, { className: y.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
