"use strict";
n.d(t, { A: () => l, G: () => o });
var i = n(17928),
    r = n(71393),
    s = n(576705),
    a = n(818348);
function o(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(a.xB.ADMINISTRATOR, t);
}
function l(e) {
    return (0, i.bG)([s.A, r.A], () => o(s.A, r.A.getGuild(e)));
}
