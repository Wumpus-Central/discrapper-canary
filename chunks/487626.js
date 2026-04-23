"use strict";
n.d(t, { $: () => u, w: () => l }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(734057),
    o = n(403362);
function l(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = i()(a.A.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
        l = i()(n)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(o.Vq)
            .uniq()
            .map((e) => a.A.getChannel(e))
            .filter(o.Vq)
            .sortBy("position")
            .value(),
        u = new Set(l.map((e) => e.id)),
        c = n.filter((e) => !e.isCategory() && (null == e.parent_id || !u.has(e.parent_id)));
    for (let e of ((c = i().sortBy(c, (e) => (e.isGuildVocal() ? e.position + 1e4 : e.position))), l)) {
        r || c.push(e);
        let a = t.has(e.id) ? s[e.id] : n.filter((t) => t.parent_id === e.id);
        (a = i().sortBy(a ?? [], (e) => (e.isGuildVocal() ? e.position + 1e4 : e.position))), c.push(...a);
    }
    return c;
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, s.yK)([a.A], () => {
        let r = Array.from(t)
            .map((e) => a.A.getChannel(e))
            .filter(o.Vq);
        return l(e, t, r, n);
    });
}
