n.d(t, { Z: () => r });
var l = n(442837),
    a = n(77498),
    i = n(768581);
function r(e, t) {
    let n = (0, l.e7)([a.Z], () => a.Z.getDetectableGame(null != e ? e : ""));
    if (null == n) return;
    let r = "cover" === t ? n.cover_image_hash : n.icon;
    return i.ZP.getApplicationIconURL({
        id: n.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
