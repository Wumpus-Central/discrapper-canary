"use strict";
n.d(t, { A: () => l, G: () => o });
var r = n(311907),
    i = n(71393),
    s = n(576705),
    a = n(818348);
function o(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(a.xB.ADMINISTRATOR, t);
}
function l(e) {
    return (0, r.bG)([s.A, i.A], () => o(s.A, i.A.getGuild(e)));
}
