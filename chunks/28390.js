"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(367513),
    s = n(951001),
    a = n(398590),
    o = n(976860),
    l = n(652215);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { selectParticipantId: n } = t;
    return i.useCallback(() => {
        (0, a.bz)();
        let t = e.getGuildId() ?? l.ME;
        (0, o.uh)(t, e.id), s.A.channelListScrollTo(t, e.id), null != n && r.A.selectParticipant(e.id, n);
    }, [e, n]);
}
