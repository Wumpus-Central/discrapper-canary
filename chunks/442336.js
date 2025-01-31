n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(87051),
    o = n(9156),
    c = n(585483),
    d = n(621600),
    u = n(665149),
    h = n(110255),
    p = n(981631),
    m = n(388032),
    f = n(107711);
function g(e) {
    let { channel: t } = e,
        n = (0, r.bWb)().enabled,
        [g, _] = (0, a.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]),
        [C, x] = l.useState(!1);
    l.useEffect(() => {
        let e = () => x(!0);
        return (
            c.S.subscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c.S.unsubscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let v = (e) => {
            e.shiftKey ? s.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !g }, d.UE.muted(!g)) : x((e) => !e);
        },
        E = m.intl.string(m.t.h850Sk);
    return (0, i.jsx)(r.yRy, {
        shouldShow: C,
        animation: r.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => x(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                channel: t,
                navId: 'channel-context',
                label: m.intl.string(m.t.Xm41aW)
            }),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(u.ZP.Icon, {
                ...e,
                onClick: v,
                tooltip: l ? null : E,
                icon: g || _ !== p.bL.ALL_MESSAGES ? r.owu : r.Dkj,
                foreground: g && !n ? f.strikethrough : null,
                'aria-label': E,
                selected: l
            });
        }
    });
}
