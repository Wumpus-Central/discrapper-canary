"use strict";
n.d(t, { A: () => a });
var r = n(734057),
    i = n(652215);
function s(e) {
    if (null == e.parent_id)
        if (e.type === i.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
        else return e.position;
    {
        let t = ((r.A.getChannel(e.parent_id)?.position ?? 0) + 1) * 1e3;
        return e.isGuildVocal() ? t + e.position + 500 : t + e.position;
    }
}
function a(e, t) {
    if (e.score !== t.score) return t.score - e.score;
    let n = s(e.record),
        r = s(t.record);
    if (n !== r) return n - r;
    let i = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
        a = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
    return i < a ? -1 : +(i > a);
}
