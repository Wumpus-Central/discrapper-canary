n.r(t), n.d(t, { default: () => E });
var r = n(570140),
    i = n(254238),
    o = n(258609);
n(473241);
var a = n(788983),
    s = n(703656),
    l = n(700615),
    c = n(592125),
    u = n(731290),
    d = n(131951),
    f = n(944486),
    _ = n(914010),
    p = n(594174),
    h = n(934415),
    m = n(604151),
    g = n(981631);
let E = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: i, jumpType: o, preserveDrawerState: a, source: s } = e;
        r.Z.dispatch({
            type: 'CHANNEL_SELECT',
            guildId: t === g.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: o,
            preserveDrawerState: a,
            source: s
        });
    },
    selectPrivateChannel(e) {
        (0, s.uL)(g.Z5c.CHANNEL(g.ME, e));
    },
    selectVoiceChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = c.Z.getChannel(e),
            o = null == i ? void 0 : i.getGuildId();
        if ((null == i ? void 0 : i.isGuildVocal()) && (null == i ? void 0 : i.isNSFW()) && (!(null == (t = p.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) || !u.Z.didAgree(o))) return void (0, s.uL)(g.Z5c.CHANNEL(o, e));
        d.Z.isSupported() && (null != e && d.Z.getMediaEngine().interact(), (0, m.h)(e, o, n, r));
    },
    disconnect() {
        let e = o.Z.getRemoteSessionId();
        if ((null != e && i._(e), (0, l.ur)())) this.selectVoiceChannel(null);
        else {
            let e = c.Z.getChannel(f.Z.getChannelId()),
                t = f.Z.getChannelId() === f.Z.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
            if ((this.selectVoiceChannel(null), a.xv(g.KJ3.CHANNEL_CALL_POPOUT), t)) {
                let e = _.Z.getGuildId();
                null != e && (0, s.uL)((0, h.LY)(e));
            }
        }
    }
};
