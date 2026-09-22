l.d(n, { A: () => f });
var t = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(922016),
    r = l(780338),
    c = l(782603),
    d = l(832712),
    u = l(543465),
    o = l(625494),
    A = l(477427),
    g = l(58736),
    h = l(461678),
    m = l(652215),
    x = l(375708);
function f(e) {
    let { channel: n } = e,
        l = i.useRef(null),
        [f, j] = (0, a.yK)(
            [u.Ay],
            () => [u.Ay.isChannelMuted(n.getGuildId(), n.id), u.Ay.resolvedMessageNotifications(n)],
            [n],
        ),
        [N, p] = i.useState(!1);
    function C(e) {
        e.shiftKey
            ? d.A.updateChannelOverrideSettings({
                  guildId: n.guild_id,
                  channelId: n.id,
                  settings: { muted: !f },
                  label: A.G_.muted(!f),
              })
            : p((e) => !e);
    }
    i.useEffect(() => {
        function e() {
            return p(!0);
        }
        return (
            o._.subscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                o._.unsubscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let E = x.intl.string(x.t.h850Ss);
    return (0, t.jsx)(s.Y, {
        targetElementRef: l,
        shouldShow: N,
        animation: s.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => p(!1),
        renderPopout: (e) =>
            (0, t.jsx)(h.A, { ...e, channel: n, navId: "channel-context", label: x.intl.string(x.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, t.jsx)(g.Ay.Icon, {
                ...e,
                ref: l,
                onClick: C,
                tooltip: i ? null : E,
                icon: f || j !== m.orn.ALL_MESSAGES ? r.BellSlashIcon : c.BellIcon,
                "aria-label": E,
                selected: i,
            });
        },
    });
}
