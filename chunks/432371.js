n.d(t, {
    Kc: () => u,
    cI: () => p,
    pk: () => d,
    vC: () => _,
});
var r = n(417597),
    i = n(260509),
    a = n(71393),
    s = n(652215),
    o = n(746080);

function l(e) {
    var t;
    if (null == e) return !1;
    let n = a.A.getGuild(null != (t = null == e ? void 0 : e.guild_id) ? t : ""),
        r = null != n && n.rulesChannelId === e.id,
        o = (0, i.wh)(n);
    return s.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !r && !o;
}

function c(e) {
    return null != e && (e === s.ME || e === s.YYv);
}

function u(e) {
    return d(e, !0, !1);
}

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return !(null == e || !l(e) || (!1 === t && e.hasFlag(o.lx.SUMMARIES_DISABLED))) && f(a.A.getGuild(e.guild_id), n);
}

function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        !(null == e || c(e.id)) &&
        !!e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        (!t || e.features.has(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    );
}

function p(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(e, t);
}

function _(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, r.bG)([a.A], () => {
            var t;
            return f(a.A.getGuild(null != (t = null == e ? void 0 : e.id) ? t : s.dJq), !1);
        }, [e])
    );
}
