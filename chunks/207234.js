n.d(t, {
    M: () => g,
    a: () => p
});
var i = n(392711),
    r = n.n(i),
    s = n(475468),
    a = n(821020),
    l = n(592125),
    o = n(819640),
    c = n(944486),
    d = n(585483),
    u = n(981631);
let m = () => {
        let { notificationCenterVariant: e } = a.Lk.getCurrentConfig({ location: 'TOGGLE_INBOX' });
        if ('sidebar' !== e) return;
        let t = c.Z.getChannelId(),
            n = l.Z.getChannel(t);
        return window.location.pathname.startsWith(u.Z5c.NOTIFICATIONS_INBOX()) && null != n ? (0, s.K)(n.guild_id, t) : (0, s.z)(u.Z5c.NOTIFICATIONS_INBOX(null != t ? t : void 0));
    },
    p = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => !(o.Z.getLayers().length > 0) && (m(), d.S.dispatch(u.CkL.TOGGLE_INBOX), !1)
    },
    g = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: r().debounce(
            () => {
                if (d.S.hasSubscribers(u.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return (d.S.dispatch(u.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1);
            },
            100,
            { leading: !0 }
        )
    };
