"use strict";
n.d(t, { A: () => o, j: () => d });
var i = n(17928),
    r = n(967198),
    a = n(181079),
    s = n(5180),
    l = n(652215);
function o(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuildId());
    return null != t ? t : e.getGuildId();
}
function d(e) {
    return (0, s.ai)(r.A.getGuildId()) && (a.A.isFavorite(e.id) || (e.isThread() && a.A.isFavorite(e.parent_id)))
        ? l.YYv
        : e.getGuildId();
}
