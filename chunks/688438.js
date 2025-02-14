n.d(t, { t: () => s });
var i = n(442837),
    l = n(273387),
    r = n(975984),
    a = n(306680),
    o = n(709054);
function s(e) {
    return (0, i.e7)(
        [l.Z, a.ZP],
        () => {
            var t;
            if (null == e) return 0;
            let n = a.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let i = Object.values(null !== (t = l.Z.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter((e) => new Date(e.createdAt).getTime() > o.default.extractTimestamp(n));
            return Math.min(r._N, i.length);
        },
        [e]
    );
}
