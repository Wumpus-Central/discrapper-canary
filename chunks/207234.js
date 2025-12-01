n.d(t, {
    M: () => _,
    a: () => p,
});
var r = n(392711),
    i = n.n(r),
    a = n(475468),
    o = n(821020),
    s = n(592125),
    l = n(819640),
    c = n(944486),
    u = n(585483),
    d = n(981631);
let f = () => {
        let { notificationCenterVariant: e } = (0, o.Ag)({ location: "TOGGLE_INBOX" });
        if ("sidebar" !== e) return;
        let t = c.Z.getChannelId(),
            n = s.Z.getChannel(t);
        return window.location.pathname.startsWith(d.Z5c.CHANNEL(d.STv)) && null != n
            ? (0, a.K)(n.guild_id, t)
            : (0, a.z)(d.Z5c.CHANNEL(d.STv, null != t ? t : void 0));
    },
    p = {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () => !(l.Z.getLayers().length > 0) && (f(), u.S.dispatch(d.CkL.TOGGLE_INBOX), !1),
    },
    _ = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: i().debounce(
            () => {
                if (u.S.hasSubscribers(d.CkL.MARK_TOP_INBOX_CHANNEL_READ))
                    return u.S.dispatch(d.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 },
        ),
    };
