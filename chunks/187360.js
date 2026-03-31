n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(832712),
    o = n(543465),
    c = n(203982),
    d = n(477427),
    u = n(58736),
    h = n(461678),
    A = n(652215),
    _ = n(985018);
function m(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        [m, g] = (0, s.yK)(
            [o.Ay],
            () => [o.Ay.isChannelMuted(t.getGuildId(), t.id), o.Ay.resolvedMessageNotifications(t)],
            [t],
        ),
        [p, f] = l.useState(!1);
    l.useEffect(() => {
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
                ? r.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !m }, d.G_.muted(!m))
                : f((e) => !e);
        },
        E = _.intl.string(_.t.h850Ss);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: n,
        shouldShow: p,
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => f(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.A, { ...e, channel: t, navId: "channel-context", label: _.intl.string(_.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(u.Ay.Icon, {
                ...e,
                ref: n,
                onClick: x,
                tooltip: l ? null : E,
                icon: m || g !== A.orn.ALL_MESSAGES ? a.a_I : a.XFE,
                "aria-label": E,
                selected: l,
            });
        },
    });
}
