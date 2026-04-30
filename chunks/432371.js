"use strict";
n.d(t, { Kc: () => l, cI: () => d, pk: () => u, vC: () => _ });
var i = n(702841),
    r = n(260509),
    s = n(71393),
    a = n(652215),
    o = n(746080);
function l(e) {
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
                let t = s.A.getGuild(e?.guild_id ?? ""),
                    n = null != t && t.rulesChannelId === e.id,
                    i = (0, r.wh)(t);
                return a.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !i;
            })(e) ||
            (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))
        ) && c(s.A.getGuild(e.guild_id), n)
    );
}
function c(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        (null == (t = e.id) || (t !== a.ME && t !== a.YYv)) &&
        !!e.features.has(a.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(a.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function d(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u(e, t);
}
function _(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, i.bG)([s.A], () => c(s.A.getGuild(e?.id ?? a.dJq), !1), [e])
    );
}
