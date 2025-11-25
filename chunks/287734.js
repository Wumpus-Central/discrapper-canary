n.r(t), n.d(t, { default: () => p });
var r = n(570140),
    i = n(622822),
    a = n(254238),
    o = n(258609);
n(473241);
var s = n(788983),
    l = n(703656),
    c = n(700615),
    u = n(592125),
    d = n(131951),
    f = n(604151),
    _ = n(981631);
let p = {
    selectChannel(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            jumpType: a,
            preserveDrawerState: o,
            source: s,
            isInitialSetup: l,
        } = e;
        r.Z.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === _.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: a,
            preserveDrawerState: o,
            source: s,
            isInitialSetup: l,
        });
    },
    selectPrivateChannel(e) {
        (0, l.uL)(_.Z5c.CHANNEL(_.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = u.Z.getChannel(e),
            o = null == a ? void 0 : a.getGuildId();
        if ((null == a ? void 0 : a.isGuildVocal()) && (0, i.Y3)(a)) return void (0, l.uL)(_.Z5c.CHANNEL(o, e));
        d.Z.isSupported() && (null != e && d.Z.getMediaEngine().interact(), (0, f.h)(e, o, t, n, r));
    },
    disconnect() {
        let e = o.default.getRemoteSessionId();
        null != e && a._(e),
            (0, c.ur)()
                ? this.selectVoiceChannel(null)
                : (this.selectVoiceChannel(null), s.close(_.KJ3.CHANNEL_CALL_POPOUT));
    },
};
