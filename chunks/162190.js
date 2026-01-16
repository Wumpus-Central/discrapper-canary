t.d(n, { Z: () => r });
var l = t(442837),
    i = t(404577),
    a = t(768581);
function r(e, n) {
    let t = (0, l.e7)([i.Z], () => i.Z.getDetectableGame(null != e ? e : ""));
    if (null == t) return;
    let r = "cover" === n ? t.cover_image_hash : t.icon;
    return a.ZP.getApplicationIconURL({
        id: t.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
