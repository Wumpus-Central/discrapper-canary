"use strict";
n.d(t, { A: () => d });
var i = n(582128),
    r = n(367513),
    a = n(951001),
    s = n(398590),
    l = n(976860),
    o = n(652215);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { selectParticipantId: n } = t;
    return i.useCallback(() => {
        (0, s.bz)();
        let t = e.getGuildId() ?? o.ME;
        (0, l.uh)(t, e.id), a.A.channelListScrollTo(t, e.id), null != n && r.A.selectParticipant(e.id, n);
    }, [e, n]);
}
