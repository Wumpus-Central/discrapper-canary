n.d(t, { A: () => r });
var l = n(311907),
    i = n(760751),
    a = n(486020);
function r(e, t) {
    let n = (0, l.bG)([i.A], () => i.A.getDetectableGame(null != e ? e : ""));
    if (null == n) return;
    let r = "cover" === t ? n.cover_image_hash : n.icon;
    return a.Ay.getApplicationIconURL({
        id: n.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
