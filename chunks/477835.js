n.d(t, { A: () => L });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
    N = n(536432),
    T = n(674168),
    S = n(989799),
    x = n(652215),
    v = n(49999),
    b = n(985018),
    y = n(255259);
function L(e) {
    let { channel: t, ...a } = e,
        L = r.useRef(null),
        { mute: O, suppress: R } = (0, I.A)(t),
        P = (0, s.bG)([f.Ay], () => f.Ay.isDeaf()),
        j = O || R || P,
        [D, w] = r.useState(!1),
        M = t.getGuildId(),
        U = (0, N.VE)({ isSoundboardButtonDisabled: j }),
        [G, k] = (0, E.DP)(U),
        { analyticsLocations: V, parentAnalyticsLocation: B } = (0, m.Ay)(_.A.SOUNDBOARD_BUTTON);
    function H(e) {
        null != M &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: M,
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
        z = r.useCallback(() => {
            j || w(!D);
        }, [j, D]);
    return (
        (0, C.Vo)({ event: x.jej.TOGGLE_SOUNDBOARD, handler: z }),
        (0, i.jsx)(m.f5, {
            value: V,
            children: (0, i.jsx)(c.m, {
                targetElementRef: L,
                text: O
                    ? b.intl.string(b.t["Ox4/zU"])
                    : R
                      ? b.intl.string(b.t["+YBKYI"])
                      : P
                        ? b.intl.string(b.t.X1lQli)
                        : b.intl.string(b.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !D,
                children: (0, i.jsx)(A.YNO, {
                    targetElementRef: L,
                    animation: A.YNO.Animation.FADE,
                    shouldShow: D,
                    position: "top",
                    onRequestClose: () => w(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, i.jsx)(S.A, {
                            guildId: M,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                G === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, i.jsx)(T.m, { onClose: n, markAsDismissed: k }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ref: L,
                            children: (0, i.jsx)(u.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: l()(y.x6, y.Sq, { [y.W4]: D, [y.r9]: j }),
                                wrapperClassName: y.x6,
                                innerClassName: y.bk,
                                disabled: j,
                                onClick: () => {
                                    null != G && G !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && k(v.i.UNKNOWN),
                                        w(!D),
                                        Y(),
                                        (0, p.X)(B, p.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    a.onMouseEnter?.(e), W();
                                },
                                onMouseLeave: (e) => {
                                    a.onMouseLeave?.(e), q();
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
