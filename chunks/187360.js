t.d(n, { A: () => j });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(265872),
    r = t(780338),
    c = t(782603),
    o = t(832712),
    u = t(543465),
    d = t(625494),
    h = t(477427),
    g = t(58736),
    A = t(461678),
    m = t(652215),
    p = t(105292);
function j(e) {
    let { channel: n } = e,
        t = i.useRef(null),
        [j, f] = (0, a.yK)(
            [u.Ay],
            () => [u.Ay.isChannelMuted(n.getGuildId(), n.id), u.Ay.resolvedMessageNotifications(n)],
            [n],
        ),
        [x, N] = i.useState(!1);
    function C(e) {
        e.shiftKey
            ? o.A.updateChannelOverrideSettings({
                  guildId: n.guild_id,
                  channelId: n.id,
                  settings: { muted: !j },
                  label: h.G_.muted(!j),
              })
            : N((e) => !e);
    }
    i.useEffect(() => {
        function e() {
            return N(!0);
        }
        return (
            d._.subscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                d._.unsubscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let b = p.intl.string(p.t.h850Ss);
    return (0, l.jsx)(s.Y, {
        targetElementRef: t,
        shouldShow: x,
        animation: s.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => N(!1),
        renderPopout: (e) =>
            (0, l.jsx)(A.A, { ...e, channel: n, navId: "channel-context", label: p.intl.string(p.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(g.Ay.Icon, {
                ...e,
                ref: t,
                onClick: C,
                tooltip: i ? null : b,
                icon: j || f !== m.orn.ALL_MESSAGES ? r.BellSlashIcon : c.BellIcon,
                "aria-label": b,
                selected: i,
            });
        },
    });
}
