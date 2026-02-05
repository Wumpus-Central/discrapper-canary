n.d(t, { A: () => s });
var a = n(311907),
    i = n(760751),
    l = n(486020);
function s(e, t) {
    let n = (0, a.bG)([i.A], () => i.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let s = "cover" === t ? n.cover_image_hash : n.icon;
    return l.Ay.getApplicationIconURL({ id: n.id, icon: s, keepAspectRatio: !0 });
}
