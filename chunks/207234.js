n.d(t, {
    M: () => g,
    a: () => m
});
var i = n(392711),
    r = n.n(i),
    s = n(475468),
    l = n(821020),
    a = n(592125),
    o = n(944486),
    c = n(585483),
    d = n(981631);
let u = () => {
        let { notificationCenterVariant: e } = l.L.getCurrentConfig({ location: 'TOGGLE_INBOX' });
        if ('sidebar' !== e) return;
        let t = o.Z.getChannelId(),
            n = a.Z.getChannel(t);
        return window.location.pathname.startsWith(d.Z5c.NOTIFICATIONS_INBOX()) && null != n ? (0, s.K)(n.guild_id, t) : (0, s.z)(d.Z5c.NOTIFICATIONS_INBOX(null != t ? t : void 0));
    },
    m = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (u(), c.S.dispatch(d.CkL.TOGGLE_INBOX), !1)
    },
    g = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: r().debounce(
            () => {
                if (c.S.hasSubscribers(d.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return c.S.dispatch(d.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 }
        )
    };
