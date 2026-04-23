n.d(t, { x: () => o });
var i = n(311907),
    l = n(519480),
    s = n(370876),
    a = n(222823),
    r = n(661191);
function o(e) {
    return (0, i.bG)([l.A, a.Ay], () => {
        if (null == e) return 0;
        let t = a.Ay.ackMessageId(e.id);
        if (null == t) return 0;
        let n = Object.values(l.A.getDirectoryEntries(e.id) ?? {}).filter(
            (e) => new Date(e.createdAt).getTime() > r.default.extractTimestamp(t),
        );
        return Math.min(s.zP, n.length);
    }, [e]);
}
