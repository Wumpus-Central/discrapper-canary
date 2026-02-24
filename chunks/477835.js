n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(417597),
    o = n(554146),
    d = n(621956),
    c = n(990078),
    u = n(421380),
    A = n(397927),
    h = n(442433),
    _ = n(793574),
    m = n(688810),
    p = n(384059),
    g = n(480890),
    E = n(160761),
    I = n(173660),
    f = n(430452),
    C = n(234320),
    T = n(536432),
    N = n(674168),
    S = n(989799),
    x = n(652215),
    v = n(49999),
    y = n(985018),
    b = n(255259);
function O(e) {
    let { channel: t, ...l } = e,
        O = r.useRef(null),
        { mute: L, suppress: R } = (0, I.A)(t),
        P = (0, s.bG)([f.Ay], () => f.Ay.isDeaf()),
        j = L || R || P,
        [D, M] = r.useState(!1),
        w = t.getGuildId(),
        U = (0, T.VE)({ isSoundboardButtonDisabled: j }),
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
                        onInteraction: (0, g.s)("SoundboardContextMenu", _.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: F,
            play: Y,
            events: { onMouseEnter: W, onMouseLeave: q },
        } = (0, d.E)(),
        K = r.useCallback(() => {
            j || M(!D);
        }, [j, D]);
    return (
        (0, C.Vo)({ event: x.jej.TOGGLE_SOUNDBOARD, handler: K }),
        (0, i.jsx)(m.f5, {
            value: V,
            children: (0, i.jsx)(c.m, {
                targetElementRef: O,
                text: L
                    ? y.intl.string(y.t["Ox4/zU"])
                    : R
                      ? y.intl.string(y.t["+YBKYI"])
                      : P
                        ? y.intl.string(y.t.X1lQli)
                        : y.intl.string(y.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !D,
                children: (0, i.jsx)(A.YNO, {
                    targetElementRef: O,
                    animation: A.YNO.Animation.FADE,
                    shouldShow: D,
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
                                className: a()(b.x6, b.Sq, { [b.W4]: D, [b.r9]: j }),
                                wrapperClassName: b.x6,
                                innerClassName: b.bk,
                                disabled: j,
                                onClick: () => {
                                    null != G && G !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && k(v.i.UNKNOWN),
                                        M(!D),
                                        Y(),
                                        (0, p.X)(B, p.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    l.onMouseEnter?.(e), W();
                                },
                                onMouseLeave: (e) => {
                                    l.onMouseLeave?.(e), q();
                                },
                                onContextMenu: H,
                                fullWidth: !0,
                                size: u.$n.Sizes.MEDIUM,
                                ...l,
                                children: (0, i.jsx)(F, { className: b.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
