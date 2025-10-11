a.d(t, { Z: () => r });
var c = a(442837),
    n = a(77498),
    i = a(768581);
function r(e, t) {
    let a = (0, c.e7)([n.Z], () => n.Z.getDetectableGame(null != e ? e : ""));
    if (null == a) return;
    let r = "cover" === t ? a.cover_image_hash : a.icon;
    return i.ZP.getApplicationIconURL({
        id: a.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
