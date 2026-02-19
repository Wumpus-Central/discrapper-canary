"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(832712),
    o = n(543465),
    c = n(203982),
    d = n(477427),
    u = n(58736),
    h = n(461678),
    A = n(652215),
    p = n(985018);
function g(e) {
    let { channel: t } = e,
        n = s.useRef(null),
        [g, m] = (0, l.yK)(
            [o.Ay],
            () => [o.Ay.isChannelMuted(t.getGuildId(), t.id), o.Ay.resolvedMessageNotifications(t)],
            [t],
        ),
        [_, f] = s.useState(!1);
    s.useEffect(() => {
        let e = () => f(!0);
        return (
            c._.subscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c._.unsubscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let x = (e) => {
            e.shiftKey
                ? a.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !g }, d.G_.muted(!g))
                : f((e) => !e);
        },
        C = p.intl.string(p.t.h850Ss);
    return (0, i.jsx)(r.YNO, {
        targetElementRef: n,
        shouldShow: _,
        animation: r.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => f(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.A, { ...e, channel: t, navId: "channel-context", label: p.intl.string(p.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsx)(u.Ay.Icon, {
                ...e,
                ref: n,
                onClick: x,
                tooltip: s ? null : C,
                icon: g || m !== A.orn.ALL_MESSAGES ? r.a_I : r.XFE,
                "aria-label": C,
                selected: s,
            });
        },
    });
}
