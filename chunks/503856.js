n.d(t, {
    p: () => l,
    r: () => u
});
var i = n(442837),
    r = n(592125),
    a = n(430824),
    s = n(944486),
    o = n(981631);
let l = () => {
        let e = s.Z.getVoiceChannelId();
        if (null == e) return !1;
        let t = r.Z.getChannel(e);
        if (null == t) return !1;
        let n = a.Z.getGuild(t.getGuildId());
        return null != n && n.hasFeature(o.oNc.HUB);
    },
    u = (e) =>
        (0, i.e7)([s.Z, r.Z, a.Z], () => {
            let t = s.Z.getVoiceChannelId();
            if (null == t) return !1;
            let n = r.Z.getChannel(t);
            if (null == n) return !1;
            let i = a.Z.getGuild(n.getGuildId());
            return null != i && i.id === e;
        });
