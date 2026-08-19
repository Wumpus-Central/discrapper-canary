"use strict";
n.d(t, { A: () => o, G: () => l });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(818348);
function l(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(s.xB.ADMINISTRATOR, t);
}
function o(e) {
    return (0, i.bG)([a.A, r.A], () => l(a.A, r.A.getGuild(e)));
}
