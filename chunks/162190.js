t.d(n, { Z: () => r });
var l = t(442837),
    a = t(77498),
    i = t(768581);
function r(e, n) {
    let t = (0, l.e7)([a.Z], () => a.Z.getDetectableGame(null != e ? e : ""));
    if (null == t) return;
    let r = "cover" === n ? t.cover_image_hash : t.icon;
    return i.ZP.getApplicationIconURL({
        id: t.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
