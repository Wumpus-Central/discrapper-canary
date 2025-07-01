n.d(t, { t: () => s });
var r = n(442837),
    i = n(273387),
    l = n(975984),
    o = n(306680),
    a = n(709054);
function s(e) {
    return (0, r.e7)(
        [i.Z, o.ZP],
        () => {
            var t;
            if (null == e) return 0;
            let n = o.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let r = Object.values(null != (t = i.Z.getDirectoryEntries(e.id)) ? t : {}).filter((e) => new Date(e.createdAt).getTime() > a.default.extractTimestamp(n));
            return Math.min(l._N, r.length);
        },
        [e]
    );
}
