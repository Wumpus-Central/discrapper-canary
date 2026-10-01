s.d(t, { Kc: () => u, cI: () => h, pk: () => d, vC: () => m });
var n = s(702841),
    a = s(5180),
    l = s(260509),
    i = s(71393),
    r = s(652215),
    o = s(746080);
function u(e) {
    return d(e, !0, !1);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        !(
            null == e ||
            !(function (e) {
                if (null == e) return !1;
                let t = i.A.getGuild(e?.guild_id ?? ""),
                    s = null != t && t.rulesChannelId === e.id,
                    n = (0, l.wh)(t);
                return r.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !s && !n;
            })(e) ||
            (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))
        ) && c(i.A.getGuild(e.guild_id), s)
    );
}
function c(e) {
    var t;
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        !(null != (t = e.id) && (t === r.ME || (0, a.ai)(t))) &&
        !!e.features.has(r.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!s || e.features.has(r.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function h(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(e, t);
}
function m(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, n.bG)([i.A], () => c(i.A.getGuild(e?.id ?? r.dJq), !1), [e])
    );
}
