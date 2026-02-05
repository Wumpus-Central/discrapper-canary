"use strict";
n.d(t, { H: () => s });
var r = n(311907),
    i = n(861382),
    a = n(167074);
function s(e) {
    let { channel: t, chatInputType: n } = e,
        s = n.commands?.enabled ?? !1,
        o = (0, a.f)(t),
        { activeCommand: l } = (0, r.cf)([i.A], () => ({ activeCommand: s ? i.A.getActiveCommand(t.id) : null }));
    return s && o && null == l;
}
