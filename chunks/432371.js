n.d(t, { Kc: () => o, cI: () => m, pk: () => u, vC: () => h });
var l = n(702841),
    s = n(5180),
    a = n(260509),
    i = n(71393),
    r = n(652215),
    c = n(746080);
function o(e) {
    return u(e, !0, !1);
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        !(
            null == e ||
            !(function (e) {
                if (null == e) return !1;
                let t = i.A.getGuild(e?.guild_id ?? ""),
                    n = null != t && t.rulesChannelId === e.id,
                    l = (0, a.wh)(t);
                return r.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !l;
            })(e) ||
            (!1 === t && e.hasFlag(c.lx.SUMMARIES_DISABLED))
        ) && d(i.A.getGuild(e.guild_id), n)
    );
}
function d(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        !(null != (t = e.id) && (t === r.ME || (0, s.ai)(t))) &&
        !!e.features.has(r.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(r.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function m(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u(e, t);
}
function h(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, l.bG)([i.A], () => d(i.A.getGuild(e?.id ?? r.dJq), !1), [e])
    );
}
