m.d(a, { Z: () => s });
var g = m(442837),
    i = m(77498),
    r = m(768581);
function s(e, a) {
    let m = (0, g.e7)([i.Z], () => i.Z.getDetectableGame(null != e ? e : ""));
    if (null == m) return;
    let s = "cover" === a ? m.cover_image_hash : m.icon;
    return r.ZP.getApplicationIconURL({
        id: m.id,
        icon: s,
        keepAspectRatio: !0,
    });
}
