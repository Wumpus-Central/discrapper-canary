n.d(t, {
    p: () => l,
    r: () => c
});
var r = n(442837),
    i = n(592125),
    o = n(430824),
    a = n(944486),
    s = n(981631);
let l = () => {
        let e = a.Z.getVoiceChannelId();
        if (null == e) return !1;
        let t = i.Z.getChannel(e);
        if (null == t) return !1;
        let n = o.Z.getGuild(t.getGuildId());
        return null != n && n.hasFeature(s.oNc.HUB);
    },
    c = (e) =>
        (0, r.e7)([a.Z, i.Z, o.Z], () => {
            let t = a.Z.getVoiceChannelId();
            if (null == t) return !1;
            let n = i.Z.getChannel(t);
            if (null == n) return !1;
            let r = o.Z.getGuild(n.getGuildId());
            return null != r && r.id === e;
        });
