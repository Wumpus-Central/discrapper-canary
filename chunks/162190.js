m.d(e, { Z: () => r });
var g = m(442837),
    c = m(77498),
    i = m(768581);
function r(a, e) {
    let m = (0, g.e7)([c.Z], () => c.Z.getDetectableGame(null != a ? a : ""));
    if (null == m) return;
    let r = "cover" === e ? m.cover_image_hash : m.icon;
    return i.ZP.getApplicationIconURL({
        id: m.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
