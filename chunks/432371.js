"use strict";
n.d(t, { Kc: () => c, cI: () => f, pk: () => d, vC: () => p });
var r = n(417597),
    i = n(260509),
    a = n(71393),
    s = n(652215),
    o = n(746080);
function l(e) {
    if (null == e) return !1;
    let t = a.A.getGuild(e?.guild_id ?? ""),
        n = null != t && t.rulesChannelId === e.id,
        r = (0, i.wh)(t);
    return s.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !r;
}
function u(e) {
    return null != e && (e === s.ME || e === s.YYv);
}
function c(e) {
    return d(e, !0, !1);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return !(null == e || !l(e) || (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))) && _(a.A.getGuild(e.guild_id), n);
}
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        !(null == e || u(e.id)) &&
        !!e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!t || e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function f(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(e, t);
}
function p(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, r.bG)([a.A], () => _(a.A.getGuild(e?.id ?? s.dJq), !1), [e])
    );
}
