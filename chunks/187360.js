n.d(l, { A: () => f });
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(922016),
    r = n(780338),
    c = n(782603),
    u = n(832712),
    d = n(543465),
    o = n(625494),
    A = n(477427),
    h = n(58736),
    g = n(461678),
    m = n(652215),
    x = n(375708);
function f(e) {
    let { channel: l } = e,
        n = i.useRef(null),
        [f, j] = (0, a.yK)(
            [d.Ay],
            () => [d.Ay.isChannelMuted(l.getGuildId(), l.id), d.Ay.resolvedMessageNotifications(l)],
            [l],
        ),
        [N, C] = i.useState(!1);
    function E(e) {
        e.shiftKey ? u.A.updateChannelOverrideSettings(l.guild_id, l.id, { muted: !f }, A.G_.muted(!f)) : C((e) => !e);
    }
    i.useEffect(() => {
        function e() {
            return C(!0);
        }
        return (
            o._.subscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                o._.unsubscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let p = x.intl.string(x.t.h850Ss);
    return (0, t.jsx)(s.Y, {
        targetElementRef: n,
        shouldShow: N,
        animation: s.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => C(!1),
        renderPopout: (e) =>
            (0, t.jsx)(g.A, { ...e, channel: l, navId: "channel-context", label: x.intl.string(x.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, l) => {
            let { isShown: i } = l;
            return (0, t.jsx)(h.Ay.Icon, {
                ...e,
                ref: n,
                onClick: E,
                tooltip: i ? null : p,
                icon: f || j !== m.orn.ALL_MESSAGES ? r.BellSlashIcon : c.BellIcon,
                "aria-label": p,
                selected: i,
            });
        },
    });
}
