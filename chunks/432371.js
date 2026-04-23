n.d(t, { Kc: () => l, cI: () => d, pk: () => o, vC: () => c });
var i = n(702841),
    r = n(260509),
    a = n(71393),
    s = n(652215),
    _ = n(746080);
function l(e) {
    return o(e, !0, !1);
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        !(
            null == e ||
            !(function (e) {
                if (null == e) return !1;
                let t = a.A.getGuild(e?.guild_id ?? ""),
                    n = null != t && t.rulesChannelId === e.id,
                    i = (0, r.wh)(t);
                return s.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !n && !i;
            })(e) ||
            (!1 === t && e.hasFlag(_.lx.SUMMARIES_DISABLED))
        ) && E(a.A.getGuild(e.guild_id), n)
    );
}
function E(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        (null == (t = e.id) || (t !== s.ME && t !== s.YYv)) &&
        !!e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
function d(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return o(e, t);
}
function c(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, i.bG)([a.A], () => E(a.A.getGuild(e?.id ?? s.dJq), !1), [e])
    );
}
