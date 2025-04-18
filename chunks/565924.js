n.d(t, { Z: () => o });
var r = n(592125),
    i = n(981631);
function a(e) {
    if (null == e.parent_id)
        if (e.type === i.d4z.GUILD_CATEGORY) return (e.position + 1) * 1000;
        else return e.position;
    {
        var t, n;
        let i = ((null != (n = null == (t = r.Z.getChannel(e.parent_id)) ? void 0 : t.position) ? n : 0) + 1) * 1000;
        return e.isGuildVocal() ? i + e.position + 500 : i + e.position;
    }
}
function o(e, t) {
    var n, r, i, o, s, l;
    if (e.score !== t.score) return t.score - e.score;
    let c = a(e.record),
        u = a(t.record);
    if (c !== u) return c - u;
    let d = null != (o = null != (i = e.sortable) ? i : null == (n = e.comparator) ? void 0 : n.toLocaleLowerCase()) ? o : '',
        f = null != (l = null != (s = e.sortable) ? s : null == (r = t.comparator) ? void 0 : r.toLocaleLowerCase()) ? l : '';
    return d < f ? -1 : +(d > f);
}
