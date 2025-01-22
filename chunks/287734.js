r.r(n);
var i = r(570140),
    a = r(254238),
    o = r(258609);
r(473241);
var s = r(788983),
    l = r(703656),
    u = r(700615),
    c = r(592125),
    d = r(731290),
    f = r(131951),
    p = r(944486),
    h = r(914010),
    _ = r(594174),
    m = r(934415),
    g = r(604151),
    E = r(981631);
n.default = {
    selectChannel(e) {
        let { guildId: n, channelId: r, messageId: a, jumpType: o, preserveDrawerState: s, source: l } = e;
        i.Z.dispatch({
            type: 'CHANNEL_SELECT',
            guildId: n === E.ME ? null : n,
            channelId: r,
            messageId: a,
            jumpType: o,
            preserveDrawerState: s,
            source: l
        });
    },
    selectPrivateChannel(e) {
        (0, l.uL)(E.Z5c.CHANNEL(E.ME, e));
    },
    selectVoiceChannel(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = c.Z.getChannel(e),
            o = null == a ? void 0 : a.getGuildId();
        if ((null == a ? void 0 : a.isGuildVocal()) && (null == a ? void 0 : a.isNSFW()) && (!(null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) || !d.Z.didAgree(o))) {
            (0, l.uL)(E.Z5c.CHANNEL(o, e));
            return;
        }
        f.Z.isSupported() && (null != e && f.Z.getMediaEngine().interact(), (0, g.h)(e, o, r, i));
    },
    disconnect() {
        let e = o.Z.getRemoteSessionId();
        if ((null != e && a._(e), (0, u.ur)())) this.selectVoiceChannel(null);
        else {
            let e = c.Z.getChannel(p.Z.getChannelId()),
                n = p.Z.getChannelId() === p.Z.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
            if ((this.selectVoiceChannel(null), s.xv(E.KJ3.CHANNEL_CALL_POPOUT), n)) {
                let e = h.Z.getGuildId();
                null != e && (0, l.uL)((0, m.LY)(e));
            }
        }
    }
};
