n.d(t, { h: () => m });
var i = n(952265),
    r = n(570140),
    a = n(281956),
    s = n(200498),
    o = n(368442),
    l = n(672339),
    u = n(653175),
    c = n(592125),
    d = n(430824),
    f = n(607744),
    _ = n(944486),
    p = n(979651),
    h = n(934415);
let m = function (e, t) {
    let m = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        E = c.Z.getChannel(e),
        v = p.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
        y = null != E ? f.Z.getCheck(E.guild_id) : null;
    if (!(null != t && (0, a.n)(t)) && (null == y || y.canChat || (0, s.jU)(E))) {
        if (null != E && !v) {
            let e = (0, h.rY)(E, p.Z, d.Z);
            if (e && E.isGuildStageVoice() && (0, o.xJ)(E.id)) {
                (0, i.ZD)(async () => {
                    let { default: e } = await n.e('46398').then(n.bind(n, 523794));
                    return (t) =>
                        e({
                            channel: E,
                            ...t
                        });
                });
                return;
            }
            if (e) {
                (0, i.ZD)(async () => {
                    let { default: e } = await n.e('86465').then(n.bind(n, 997308));
                    return (t) => e(t);
                });
                return;
            }
        }
        m && (0, l.eH)(), (0, u.Z)(I, e, g, m);
    }
    function I() {
        r.Z.dispatch({
            type: 'VOICE_CHANNEL_SELECT',
            guildId: t,
            channelId: e,
            currentVoiceChannelId: _.Z.getVoiceChannelId(),
            video: m,
            stream: g
        });
    }
};
