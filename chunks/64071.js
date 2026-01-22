n.d(t, {
    x: () => o,
});
var r = n(311907),
    l = n(519480),
    i = n(370876),
    a = n(222823),
    s = n(661191);

function o(e) {
    return (0, r.bG)([l.A, a.Ay], () => {
        var t;
        if (null == e) return 0;
        let n = a.Ay.ackMessageId(e.id);
        if (null == n) return 0;
        let r = Object.values(null != (t = l.A.getDirectoryEntries(e.id)) ? t : {}).filter(
            (e) => new Date(e.createdAt).getTime() > s.default.extractTimestamp(n),
        );
        return Math.min(i.zP, r.length);
    }, [e]);
}
