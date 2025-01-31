n.d(t, { Z: () => s });
var i = n(592125),
    r = n(981631);
function a(e) {
    if (null == e.parent_id) return e.type === r.d4z.GUILD_CATEGORY ? (e.position + 1) * 1000 : e.position;
    {
        var t, n;
        let r = ((null !== (n = null === (t = i.Z.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1000;
        return e.isGuildVocal() ? r + e.position + 500 : r + e.position;
    }
}
function s(e, t) {
    var n, i, r, s, o, l;
    if (e.score !== t.score) return t.score - e.score;
    let u = a(e.record),
        c = a(t.record);
    if (u !== c) return u - c;
    let d = null !== (s = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== s ? s : '',
        f = null !== (l = null !== (o = e.sortable) && void 0 !== o ? o : null === (i = t.comparator) || void 0 === i ? void 0 : i.toLocaleLowerCase()) && void 0 !== l ? l : '';
    return d < f ? -1 : d > f ? 1 : 0;
}
