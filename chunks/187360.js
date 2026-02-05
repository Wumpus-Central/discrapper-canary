n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(832712),
    o = n(543465),
    d = n(203982),
    c = n(477427),
    u = n(58736),
    h = n(461678),
    A = n(652215),
    g = n(985018);
function m(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        [m, p] = (0, s.yK)(
            [o.Ay],
            () => [o.Ay.isChannelMuted(t.getGuildId(), t.id), o.Ay.resolvedMessageNotifications(t)],
            [t],
        ),
        [_, x] = l.useState(!1);
    l.useEffect(() => {
        let e = () => x(!0);
        return (
            d._.subscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                d._.unsubscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let f = (e) => {
            e.shiftKey
                ? r.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !m }, c.G_.muted(!m))
                : x((e) => !e);
        },
        E = g.intl.string(g.t.h850Ss);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: n,
        shouldShow: _,
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => x(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.A, { ...e, channel: t, navId: "channel-context", label: g.intl.string(g.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(u.Ay.Icon, {
                ...e,
                ref: n,
                onClick: f,
                tooltip: l ? null : E,
                icon: m || p !== A.orn.ALL_MESSAGES ? a.a_I : a.XFE,
                "aria-label": E,
                selected: l,
            });
        },
    });
}
