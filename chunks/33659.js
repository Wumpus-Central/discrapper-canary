"use strict";
n.d(t, { H: () => a });
var r = n(311907),
    i = n(861382),
    s = n(167074);
function a(e) {
    let { channel: t, chatInputType: n } = e,
        a = n.commands?.enabled ?? !1,
        o = (0, s.f)(t),
        { activeCommand: l } = (0, r.cf)([i.A], () => ({ activeCommand: a ? i.A.getActiveCommand(t.id) : null }));
    return a && o && null == l;
}
