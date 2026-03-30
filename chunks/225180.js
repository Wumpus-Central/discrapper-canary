n.d(t, { A: () => i });
var a = n(311907),
    l = n(760751),
    s = n(486020);
function i(e, t) {
    let n = (0, a.bG)([l.A], () => l.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let i = "cover" === t ? n.cover_image_hash : n.icon;
    return s.Ay.getApplicationIconURL({ id: n.id, icon: i, keepAspectRatio: !0 });
}
