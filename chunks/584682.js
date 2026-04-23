"use strict";
n.d(t, { A: () => o, j: () => l });
var r = n(311907),
    i = n(967198),
    s = n(181079),
    a = n(652215);
function o(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return i.A.getGuildId() !== a.YYv
        ? e.getGuildId()
        : s.A.isFavorite(e.id) || (e.isThread() && s.A.isFavorite(e.parent_id))
          ? a.YYv
          : e.getGuildId();
}
