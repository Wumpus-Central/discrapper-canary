n.d(t, {
    $: () => c,
    w: () => l,
}),
    n(896048),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(734057),
    o = n(403362);

function l(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = i()(s.A.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
        l = i()(n)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(o.Vq)
            .uniq()
            .map((e) => s.A.getChannel(e))
            .filter(o.Vq)
            .sortBy("position")
            .value(),
        c = new Set(l.map((e) => e.id)),
        u = n.filter((e) => !e.isCategory() && (null == e.parent_id || !c.has(e.parent_id)));
    for (let e of ((u = i().sortBy(u, (e) => (e.isGuildVocal() ? e.position + 1e4 : e.position))), l)) {
        r || u.push(e);
        let s = t.has(e.id) ? a[e.id] : n.filter((t) => t.parent_id === e.id);
        (s = i().sortBy(null != s ? s : [], (e) => (e.isGuildVocal() ? e.position + 1e4 : e.position))), u.push(...s);
    }
    return u;
}

function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, a.yK)([s.A], () => {
        let r = Array.from(t)
            .map((e) => s.A.getChannel(e))
            .filter(o.Vq);
        return l(e, t, r, n);
    });
}
