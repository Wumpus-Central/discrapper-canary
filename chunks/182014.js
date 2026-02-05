"use strict";
n.d(t, { A: () => s });
var r = n(734057),
    i = n(652215);
function a(e) {
    if (null == e.parent_id)
        if (e.type === i.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
        else return e.position;
    {
        let t = ((r.A.getChannel(e.parent_id)?.position ?? 0) + 1) * 1e3;
        return e.isGuildVocal() ? t + e.position + 500 : t + e.position;
    }
}
function s(e, t) {
    if (e.score !== t.score) return t.score - e.score;
    let n = a(e.record),
        r = a(t.record);
    if (n !== r) return n - r;
    let i = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
        s = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
    return i < s ? -1 : +(i > s);
}
