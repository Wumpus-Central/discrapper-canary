"use strict";
n.d(t, { Kc: () => u, cI: () => h, pk: () => c, vC: () => m });
var l = n(702841),
    i = n(5180),
    s = n(260509),
    r = n(71393),
    a = n(652215),
    o = n(746080);
function u(e) {
    return c(e, !0, !1);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        !(
            null == e ||
            !(function (e) {
                if (null == e) return !1;
                let t = r.A.getGuild(e?.guild_id ?? ""),
                    n = null != t && t.rulesChannelId === e.id,
                    l = (0, s.wh)(t);
                return a.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !l;
            })(e) ||
            (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))
        ) && d(r.A.getGuild(e.guild_id), n)
    );
}
function d(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        !(null != (t = e.id) && (t === a.ME || (0, i.ai)(t))) &&
        !!e.features.has(a.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(a.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function h(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return c(e, t);
}
function m(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, l.bG)([r.A], () => d(r.A.getGuild(e?.id ?? a.dJq), !1), [e])
    );
}
