"use strict";
n.d(t, { Kc: () => d, cI: () => _, pk: () => c, vC: () => E });
var i = n(702841),
    r = n(5180),
    a = n(260509),
    s = n(71393),
    l = n(652215),
    o = n(746080);
function d(e) {
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
                let t = s.A.getGuild(e?.guild_id ?? ""),
                    n = null != t && t.rulesChannelId === e.id,
                    i = (0, a.wh)(t);
                return l.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !i;
            })(e) ||
            (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))
        ) && u(s.A.getGuild(e.guild_id), n)
    );
}
function u(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        !(null != (t = e.id) && (t === l.ME || (0, r.ai)(t))) &&
        !!e.features.has(l.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(l.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function _(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return c(e, t);
}
function E(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, i.bG)([s.A], () => u(s.A.getGuild(e?.id ?? l.dJq), !1), [e])
    );
}
