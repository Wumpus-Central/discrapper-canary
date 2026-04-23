n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(265872),
    r = n(780338),
    o = n(782603),
    d = n(832712),
    c = n(543465),
    u = n(203982),
    h = n(477427),
    A = n(58736),
    _ = n(461678),
    m = n(652215),
    g = n(985018);
function p(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        [p, f] = (0, s.yK)(
            [c.Ay],
            () => [c.Ay.isChannelMuted(t.getGuildId(), t.id), c.Ay.resolvedMessageNotifications(t)],
            [t],
        ),
        [E, x] = l.useState(!1);
    l.useEffect(() => {
        let e = () => x(!0);
        return (
            u._.subscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                u._.unsubscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let I = (e) => {
            e.shiftKey
                ? d.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !p }, h.G_.muted(!p))
                : x((e) => !e);
        },
        C = g.intl.string(g.t.h850Ss);
    return (0, i.jsx)(a.Y, {
        targetElementRef: n,
        shouldShow: E,
        animation: a.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => x(!1),
        renderPopout: (e) =>
            (0, i.jsx)(_.A, { ...e, channel: t, navId: "channel-context", label: g.intl.string(g.t.Xm41aV) }),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(A.Ay.Icon, {
                ...e,
                ref: n,
                onClick: I,
                tooltip: l ? null : C,
                icon: p || f !== m.orn.ALL_MESSAGES ? r.a : o.X,
                "aria-label": C,
                selected: l,
            });
        },
    });
}
