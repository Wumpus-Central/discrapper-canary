n.d(t, {
    P: () => s,
    v: () => o,
});
var r = n(95701),
    i = n(860689),
    a = n(652215);
function s(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, {
              year: "numeric",
              month: "short",
          });
}
function o(e) {
    if (null == e.guild || (0, i.DY)(e.guild).features.has(a.GuildFeatures.HUB)) return !1;
    let t = (null == e ? void 0 : e.channel) != null ? (0, r.OY)(e.channel) : null;
    return null == t || !t.isGuildVoiceOrThread();
}
