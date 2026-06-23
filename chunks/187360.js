t.d(l, { A: () => N });
var n = t(627968),
    i = t(64700),
    s = t(17928),
    a = t(922016),
    r = t(780338),
    c = t(782603),
    u = t(832712),
    d = t(543465),
    o = t(625494),
    m = t(477427),
    A = t(58736),
    g = t(461678),
    h = t(652215),
    x = t(375708);
function N(e) {
    let { channel: l } = e,
        t = i.useRef(null),
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
            o._.subscribe(h.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                o._.unsubscribe(h.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let p = x.intl.string(x.t.h850Ss);
    return (0, n.jsx)(a.Y, {
        targetElementRef: t,
        shouldShow: j,
        animation: a.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => E(!1),
        renderPopout: (e) =>
            (0, n.jsx)(g.A, { ...e, channel: l, navId: "channel-context", label: x.intl.string(x.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, l) => {
            let { isShown: i } = l;
            return (0, n.jsx)(A.Ay.Icon, {
                ...e,
                ref: t,
                onClick: C,
                tooltip: i ? null : p,
                icon: N || f !== h.orn.ALL_MESSAGES ? r.a : c.X,
                "aria-label": p,
                selected: i,
            });
        },
    });
}
