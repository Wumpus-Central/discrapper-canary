n.d(t, { Kc: () => o, cI: () => _, pk: () => d, vC: () => E });
var i = n(702841),
    a = n(260509),
    r = n(71393),
    s = n(652215),
    l = n(746080);
function o(e) {
    return d(e, !0, !1);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        !(
            null == e ||
            !(function (e) {
                if (null == e) return !1;
                let t = r.A.getGuild(e?.guild_id ?? ""),
                    n = null != t && t.rulesChannelId === e.id,
                    i = (0, a.wh)(t);
                return s.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !i;
            })(e) ||
            (!1 === t && e.hasFlag(l.lx.SUMMARIES_DISABLED))
        ) && c(r.A.getGuild(e.guild_id), n)
    );
}
function c(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        (null == (t = e.id) || (t !== s.ME && t !== s.YYv)) &&
        !!e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function _(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(e, t);
}
function E(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, i.bG)([r.A], () => c(r.A.getGuild(e?.id ?? s.dJq), !1), [e])
    );
}
