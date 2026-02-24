n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(417597),
    o = n(554146),
    d = n(990078),
    c = n(421380),
    u = n(397927),
    A = n(442433),
    h = n(793574),
    _ = n(688810),
    m = n(384059),
    p = n(480890),
    g = n(160761),
    E = n(173660),
    I = n(430452),
    f = n(234320),
    C = n(536432),
    T = n(674168),
    N = n(989799),
    S = n(652215),
    x = n(49999),
    v = n(985018),
    y = n(255259);
function b(e) {
    let { channel: t, ...l } = e,
        b = r.useRef(null),
        { mute: O, suppress: L } = (0, E.A)(t),
        R = (0, s.bG)([I.Ay], () => I.Ay.isDeaf()),
        P = O || L || R,
        [j, D] = r.useState(!1),
        M = t.getGuildId(),
        w = (0, C.VE)({ isSoundboardButtonDisabled: P }),
        [U, G] = (0, g.DP)(w),
        { analyticsLocations: k, parentAnalyticsLocation: V } = (0, _.Ay)(h.A.SOUNDBOARD_BUTTON);
    function B(e) {
        null != M &&
            (0, A.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: M,
                        sourceAnalyticsLocations: k,
                        ...t,
                        onInteraction: (0, p.s)("SoundboardContextMenu", h.A.RTC_PANEL),
                    });
            });
    }
    let H = r.useCallback(() => {
        P || D(!j);
    }, [P, j]);
    return (
        (0, f.Vo)({ event: S.jej.TOGGLE_SOUNDBOARD, handler: H }),
        (0, i.jsx)(_.f5, {
            value: k,
            children: (0, i.jsx)(d.m, {
                targetElementRef: b,
                text: O
                    ? v.intl.string(v.t["Ox4/zU"])
                    : L
                      ? v.intl.string(v.t["+YBKYI"])
                      : R
                        ? v.intl.string(v.t.X1lQli)
                        : v.intl.string(v.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !j,
                children: (0, i.jsx)(u.YNO, {
                    targetElementRef: b,
                    animation: u.YNO.Animation.FADE,
                    shouldShow: j,
                    position: "top",
                    onRequestClose: () => D(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, i.jsx)(N.A, {
                            guildId: M,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                U === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, i.jsx)(T.m, { onClose: n, markAsDismissed: G }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ref: b,
                            children: (0, i.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: a()(y.x6, y.Sq, { [y.W4]: j, [y.r9]: P }),
                                wrapperClassName: y.x6,
                                innerClassName: y.bk,
                                disabled: P,
                                onClick: () => {
                                    null != U && U !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(x.i.UNKNOWN),
                                        D(!j),
                                        (0, m.X)(V, m.O.SOUNDBOARD);
                                },
                                onContextMenu: B,
                                fullWidth: !0,
                                size: c.$n.Sizes.MEDIUM,
                                ...l,
                                children: (0, i.jsx)(u.gZH, {
                                    eventTargetRef: b,
                                    className: u.d5l.sm,
                                    dataBinding: { fill: "currentColor" },
                                }),
                            }),
                        }),
                }),
            }),
        })
    );
}
