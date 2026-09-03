n.d(t, { P: () => s, v: () => l });
var i = n(95701),
    r = n(149790),
    a = n(652215);
function s(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { year: "numeric", month: "short" });
}
function l(e) {
    if (null == e.guild || (0, r.DY)(e.guild).features.has(a.GuildFeatures.HUB)) return !1;
    let t = e?.channel != null ? (0, i.OY)(e.channel) : null;
    return !t?.isGuildVoiceOrThread();
}
