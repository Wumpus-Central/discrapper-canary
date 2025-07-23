(n.r(t), n.d(t, { default: () => b }));
var r = n(570140),
    i = n(622822),
    a = n(254238),
    o = n(258609);
n(473241);
var s = n(788983),
    l = n(703656),
    c = n(700615),
    u = n(592125),
    d = n(731290),
    _ = n(131951),
    f = n(944486),
    p = n(914010),
    h = n(594174),
    m = n(934415),
    g = n(604151),
    E = n(981631);
let b = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: i, jumpType: a, preserveDrawerState: o, source: s, isInitialSetup: l } = e;
        r.Z.dispatch({
            type: 'CHANNEL_SELECT',
            guildId: t === E.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: a,
            preserveDrawerState: o,
            source: s,
            isInitialSetup: l
        });
    },
    selectPrivateChannel(e) {
        (0, l.uL)(E.Z5c.CHANNEL(E.ME, e));
    },
    selectVoiceChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = u.Z.getChannel(e),
            s = null == o ? void 0 : o.getGuildId();
        if ((null == o ? void 0 : o.isGuildVocal()) && (0, i.aC)(o) && (!(null == (t = h.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) || !d.Z.didAgree(s))) return void (0, l.uL)(E.Z5c.CHANNEL(s, e));
        _.Z.isSupported() && (null != e && _.Z.getMediaEngine().interact(), (0, g.h)(e, s, n, r, a));
    },
    disconnect() {
        let e = o.Z.getRemoteSessionId();
        if ((null != e && a._(e), (0, c.ur)())) this.selectVoiceChannel(null);
        else {
            let e = u.Z.getChannel(f.Z.getChannelId()),
                t = f.Z.getChannelId() === f.Z.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
            if ((this.selectVoiceChannel(null), s.xv(E.KJ3.CHANNEL_CALL_POPOUT), t)) {
                let e = p.Z.getGuildId();
                null != e && (0, l.uL)((0, m.LY)(e));
            }
        }
    }
};
