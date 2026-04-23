n.d(t, { A: () => r });
var i = n(17928),
    l = n(760751),
    s = n(486020);
function r(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let r = "cover" === t ? n.cover_image_hash : n.icon;
    return s.Ay.getApplicationIconURL({ id: n.id, icon: r, keepAspectRatio: !0 });
}
