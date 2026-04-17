n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(417597),
    o = n(554146),
    d = n(990078),
    c = n(421380),
    u = n(397927),
    A = n(442433),
    h = n(793574),
    _ = n(688810),
    m = n(384059),
    g = n(480890),
    p = n(160761),
    E = n(173660),
    I = n(430452),
    f = n(234320),
    C = n(536432),
    T = n(674168),
    N = n(989799),
    S = n(652215),
    x = n(49999),
    v = n(985018),
    b = n(395766);
function y(e) {
    let { channel: t, ...a } = e,
        y = l.useRef(null),
        { mute: O, suppress: L } = (0, E.A)(t),
        R = (0, s.bG)([I.Ay], () => I.Ay.isDeaf()),
        P = O || L || R,
        [D, j] = l.useState(!1),
        M = t.getGuildId(),
        w = (0, C.VE)({ isSoundboardButtonDisabled: P }),
        [U, G] = (0, p.DP)(w),
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
                        onInteraction: (0, g.s)("SoundboardContextMenu", h.A.RTC_PANEL),
                    });
            });
    }
    let H = l.useCallback(() => {
        P || j(!D);
    }, [P, D]);
    return (
        (0, f.Vo)({ event: S.jej.TOGGLE_SOUNDBOARD, handler: H }),
        (0, i.jsx)(_.f5, {
            value: k,
            children: (0, i.jsx)(d.m, {
                targetElementRef: y,
                text: O
                    ? v.intl.string(v.t["Ox4/zU"])
                    : L
                      ? v.intl.string(v.t["+YBKYI"])
                      : R
                        ? v.intl.string(v.t.X1lQli)
                        : v.intl.string(v.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !D,
                children: (0, i.jsx)(u.YNO, {
                    targetElementRef: y,
                    animation: u.YNO.Animation.FADE,
                    shouldShow: D,
                    position: "top",
                    onRequestClose: () => j(!1),
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
                            ref: y,
                            children: (0, i.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: r()(b.x6, b.Sq, { [b.W4]: D, [b.r9]: P }),
                                wrapperClassName: b.x6,
                                innerClassName: b.bk,
                                disabled: P,
                                onClick: () => {
                                    null != U && U !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(x.i.UNKNOWN),
                                        j(!D),
                                        (0, m.X)(V, m.O.SOUNDBOARD);
                                },
                                onContextMenu: B,
                                fullWidth: !0,
                                size: c.$n.Sizes.MEDIUM,
                                ...a,
                                children: (0, i.jsx)(u.gZH, {
                                    autoPause: !0,
                                    eventTargetRef: y,
                                    className: u.d5l.refresh_sm,
                                    dataBinding: { fill: "currentColor" },
                                }),
                            }),
                        }),
                }),
            }),
        })
    );
}
