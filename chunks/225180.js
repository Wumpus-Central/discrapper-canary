n.d(t, { A: () => a });
var i = n(311907),
    l = n(760751),
    s = n(486020);
function a(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let a = "cover" === t ? n.cover_image_hash : n.icon;
    return s.Ay.getApplicationIconURL({ id: n.id, icon: a, keepAspectRatio: !0 });
}
