"use strict";
n.d(t, { $: () => d, w: () => o }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(734057),
    l = n(403362);
function o(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = r()(s.A.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
        o = r()(n)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(l.Vq)
            .uniq()
            .map((e) => s.A.getChannel(e))
            .filter(l.Vq)
            .sortBy("position")
            .value(),
        d = new Set(o.map((e) => e.id)),
        c = n.filter((e) => !e.isCategory() && (null == e.parent_id || !d.has(e.parent_id)));
    for (let e of ((c = r().sortBy(c, (e) => (e.isGuildVocal() ? e.position + 1e4 : e.position))), o)) {
        i || c.push(e);
        let s = t.has(e.id) ? a[e.id] : n.filter((t) => t.parent_id === e.id);
        (s = r().sortBy(s ?? [], (e) => (e.isGuildVocal() ? e.position + 1e4 : e.position))), c.push(...s);
    }
    return c;
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, a.yK)([s.A], () => {
        let i = Array.from(t)
            .map((e) => s.A.getChannel(e))
            .filter(l.Vq);
        return o(e, t, i, n);
    });
}
