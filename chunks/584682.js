"use strict";
n.d(t, { A: () => o, j: () => l });
var i = n(17928),
    r = n(967198),
    s = n(181079),
    a = n(652215);
function o(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return r.A.getGuildId() !== a.YYv
        ? e.getGuildId()
        : s.A.isFavorite(e.id) || (e.isThread() && s.A.isFavorite(e.parent_id))
          ? a.YYv
          : e.getGuildId();
}
