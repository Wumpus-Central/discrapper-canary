n.d(t, { A: () => o });
var i = n(208284),
    l = n(734057),
    s = n(927813),
    r = n(935208);
let a = 2 * s.A.Millis.HOUR;
function o(e, t, n) {
    if (r.default.extractTimestamp(t.id) + a < Date.now()) return !1;
    if (null == n) {
        let e = l.A.getBasicChannel(t.channel_id)?.guild_id,
            { enabled: n } = i.A.getConfig({ guildId: e ?? "", location: "canFulfillStreamRequest" });
        if (n) return !0;
    }
    if (null == e) return !1;
    let s = null != t.activity ? t.activity.party_id : null,
        o = null != s && e.party?.id !== s,
        d = null != e.application_id && e.application_id !== n;
    return !o && !d;
}
