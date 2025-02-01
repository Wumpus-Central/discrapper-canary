n.r(t), n.d(t, { default: () => E });
var i = n(570140),
    r = n(254238),
    a = n(258609);
n(473241);
var s = n(788983),
    o = n(703656),
    l = n(700615),
    u = n(592125),
    c = n(731290),
    d = n(131951),
    f = n(944486),
    _ = n(914010),
    p = n(594174),
    h = n(934415),
    m = n(604151),
    g = n(981631);
let E = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: r, jumpType: a, preserveDrawerState: s, source: o } = e;
        i.Z.dispatch({
            type: 'CHANNEL_SELECT',
            guildId: t === g.ME ? null : t,
            channelId: n,
            messageId: r,
            jumpType: a,
            preserveDrawerState: s,
            source: o
        });
    },
    selectPrivateChannel(e) {
        (0, o.uL)(g.Z5c.CHANNEL(g.ME, e));
    },
    selectVoiceChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = u.Z.getChannel(e),
            a = null == r ? void 0 : r.getGuildId();
        if ((null == r ? void 0 : r.isGuildVocal()) && (null == r ? void 0 : r.isNSFW()) && (!(null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !c.Z.didAgree(a))) {
            (0, o.uL)(g.Z5c.CHANNEL(a, e));
            return;
        }
        d.Z.isSupported() && (null != e && d.Z.getMediaEngine().interact(), (0, m.h)(e, a, n, i));
    },
    disconnect() {
        let e = a.Z.getRemoteSessionId();
        if ((null != e && r._(e), (0, l.ur)())) this.selectVoiceChannel(null);
        else {
            let e = u.Z.getChannel(f.Z.getChannelId()),
                t = f.Z.getChannelId() === f.Z.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
            if ((this.selectVoiceChannel(null), s.xv(g.KJ3.CHANNEL_CALL_POPOUT), t)) {
                let e = _.Z.getGuildId();
                null != e && (0, o.uL)((0, h.LY)(e));
            }
        }
    }
};
