n.d(l, { A: () => N });
var t = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(922016),
    r = n(780338),
    c = n(782603),
    u = n(832712),
    d = n(543465),
    o = n(625494),
    m = n(477427),
    A = n(58736),
    h = n(461678),
    g = n(652215),
    x = n(375708);
function N(e) {
    let { channel: l } = e,
        n = i.useRef(null),
        [N, f] = (0, s.yK)(
            [d.Ay],
            () => [d.Ay.isChannelMuted(l.getGuildId(), l.id), d.Ay.resolvedMessageNotifications(l)],
            [l],
        ),
        [j, E] = i.useState(!1);
    function C(e) {
        e.shiftKey ? u.A.updateChannelOverrideSettings(l.guild_id, l.id, { muted: !N }, m.G_.muted(!N)) : E((e) => !e);
    }
    i.useEffect(() => {
        function e() {
            return E(!0);
        }
        return (
            o._.subscribe(g.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                o._.unsubscribe(g.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let p = x.intl.string(x.t.h850Ss);
    return (0, t.jsx)(a.Y, {
        targetElementRef: n,
        shouldShow: j,
        animation: a.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => E(!1),
        renderPopout: (e) =>
            (0, t.jsx)(h.A, { ...e, channel: l, navId: "channel-context", label: x.intl.string(x.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, l) => {
            let { isShown: i } = l;
            return (0, t.jsx)(A.Ay.Icon, {
                ...e,
                ref: n,
                onClick: C,
                tooltip: i ? null : p,
                icon: N || f !== g.orn.ALL_MESSAGES ? r.BellSlashIcon : c.BellIcon,
                "aria-label": p,
                selected: i,
            });
        },
    });
}
