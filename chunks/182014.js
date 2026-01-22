n.d(t, { A: () => s });
var r = n(734057),
    i = n(652215);
function a(e) {
    if (null == e.parent_id)
        if (e.type === i.rbe.GUILD_CATEGORY) return (e.position + 1) * 1000;
        else return e.position;
    {
        var t, n;
        let i = ((null != (t = null == (n = r.A.getChannel(e.parent_id)) ? void 0 : n.position) ? t : 0) + 1) * 1000;
        return e.isGuildVocal() ? i + e.position + 500 : i + e.position;
    }
}
function s(e, t) {
    var n, r, i, s, o, l;
    if (e.score !== t.score) return t.score - e.score;
    let c = a(e.record),
        u = a(t.record);
    if (c !== u) return c - u;
    let d =
            null != (n = null != (r = e.sortable) ? r : null == (o = e.comparator) ? void 0 : o.toLocaleLowerCase())
                ? n
                : "",
        f =
            null != (i = null != (s = e.sortable) ? s : null == (l = t.comparator) ? void 0 : l.toLocaleLowerCase())
                ? i
                : "";
    return d < f ? -1 : +(d > f);
}
