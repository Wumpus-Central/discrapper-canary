n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(417597),
    o = n(554146),
    d = n(621956),
    u = n(990078),
    c = n(862482),
    A = n(265872),
    h = n(442433),
    _ = n(793574),
    E = n(688810),
    p = n(384059),
    m = n(480890),
    g = n(160761),
    I = n(173660),
    C = n(430452),
    f = n(234320),
    T = n(536432),
    S = n(674168),
    N = n(989799),
    O = n(652215),
    L = n(49999),
    y = n(985018),
    v = n(395766);
function b(e) {
    let { channel: t, ...a } = e,
        b = r.useRef(null),
        { mute: D, suppress: R } = (0, I.A)(t),
        P = (0, s.bG)([C.Ay], () => C.Ay.isDeaf()),
        w = D || R || P,
        [M, U] = r.useState(!1),
        x = t.getGuildId(),
        G = (0, T.VE)({ isSoundboardButtonDisabled: w }),
        [k, j] = (0, g.DP)(G),
        { analyticsLocations: V, parentAnalyticsLocation: H } = (0, E.Ay)(_.A.SOUNDBOARD_BUTTON);
    function B(e) {
        null != x &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: x,
                        sourceAnalyticsLocations: V,
                        ...t,
                        onInteraction: (0, m.s)("SoundboardContextMenu", _.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: F,
            play: Y,
            events: { onMouseEnter: K, onMouseLeave: z },
        } = (0, d.E)(),
        W = r.useCallback(() => {
            w || U(!M);
        }, [w, M]);
    return (
        (0, f.Vo)({ event: O.jej.TOGGLE_SOUNDBOARD, handler: W }),
        (0, i.jsx)(E.f5, {
            value: V,
            children: (0, i.jsx)(u.m, {
                targetElementRef: b,
                text: D
                    ? y.intl.string(y.t["Ox4/zU"])
                    : R
                      ? y.intl.string(y.t["+YBKYI"])
                      : P
                        ? y.intl.string(y.t.X1lQli)
                        : y.intl.string(y.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !M,
                children: (0, i.jsx)(A.Y, {
                    targetElementRef: b,
                    animation: A.Y.Animation.FADE,
                    shouldShow: M,
                    position: "top",
                    onRequestClose: () => U(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, i.jsx)(N.A, {
                            guildId: x,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                k === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, i.jsx)(S.m, { onClose: n, markAsDismissed: j }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ref: b,
                            children: (0, i.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: l()(v.x6, v.Sq, { [v.W4]: M, [v.r9]: w }),
                                wrapperClassName: v.x6,
                                innerClassName: v.bk,
                                disabled: w,
                                onClick: () => {
                                    null != k && k !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && j(L.i.UNKNOWN),
                                        U(!M),
                                        Y(),
                                        (0, p.X)(H, p.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    a.onMouseEnter?.(e), K();
                                },
                                onMouseLeave: (e) => {
                                    a.onMouseLeave?.(e), z();
                                },
                                onContextMenu: B,
                                fullWidth: !0,
                                size: c.$n.Sizes.MEDIUM,
                                ...a,
                                children: (0, i.jsx)(F, { className: v.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
