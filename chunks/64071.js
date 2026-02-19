"use strict";
n.d(t, { x: () => o });
var i = n(311907),
    s = n(519480),
    l = n(370876),
    r = n(222823),
    a = n(661191);
function o(e) {
    return (0, i.bG)([s.A, r.Ay], () => {
        if (null == e) return 0;
        let t = r.Ay.ackMessageId(e.id);
        if (null == t) return 0;
        let n = Object.values(s.A.getDirectoryEntries(e.id) ?? {}).filter(
            (e) => new Date(e.createdAt).getTime() > a.default.extractTimestamp(t),
        );
        return Math.min(l.zP, n.length);
    }, [e]);
}
