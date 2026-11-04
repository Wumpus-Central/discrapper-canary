var l = n(164636),
    s = n(5180),
    a = n(260509),
    i = n(71393),
    r = n(652215),
    o = n(746080);
function c(e) {
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
            (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))
        ) && u(i.A.getGuild(e.guild_id), n)
    );
}
function u(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        null != e &&
        !(null != (t = e.id) && (t === r.ME || (0, s.ai)(t))) &&
        !!e.features.has(r.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!n || e.features.has(r.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}
n.d(
    t,
    {},
    {
        Kc: function (e) {
            return c(e, !0, !1);
        },
        cI: function (e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return c(e, t);
        },
        pk: c,
        vC: function (e) {
            return (
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                (0, l.bG)([i.A], () => u(i.A.getGuild(e?.id ?? ""), !1), [e])
            );
        },
    },
);
