n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(922016),
    a = n(780338),
    o = n(782603),
    d = n(832712),
    c = n(543465),
    u = n(625494),
    h = n(477427),
    A = n(58736),
    _ = n(461678),
    g = n(652215),
    m = n(985018);
function p(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        [p, f] = (0, s.yK)(
            [c.Ay],
            () => [c.Ay.isChannelMuted(t.getGuildId(), t.id), c.Ay.resolvedMessageNotifications(t)],
            [t],
        ),
        [E, C] = l.useState(!1);
    l.useEffect(() => {
        let e = () => C(!0);
        return (
            u._.subscribe(g.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                u._.unsubscribe(g.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let x = (e) => {
            e.shiftKey
                ? d.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !p }, h.G_.muted(!p))
                : C((e) => !e);
        },
        I = m.intl.string(m.t.h850Ss);
    return (0, i.jsx)(r.Y, {
        targetElementRef: n,
        shouldShow: E,
        animation: r.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => C(!1),
        renderPopout: (e) =>
            (0, i.jsx)(_.A, { ...e, channel: t, navId: "channel-context", label: m.intl.string(m.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(A.Ay.Icon, {
                ...e,
                ref: n,
                onClick: x,
                tooltip: l ? null : I,
                icon: p || f !== g.orn.ALL_MESSAGES ? a.a : o.X,
                "aria-label": I,
                selected: l,
            });
        },
    });
}
