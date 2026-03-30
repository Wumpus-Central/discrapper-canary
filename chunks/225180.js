"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(760751),
    l = n(486020);
function a(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let a = "cover" === t ? n.cover_image_hash : n.icon;
    return l.Ay.getApplicationIconURL({ id: n.id, icon: a, keepAspectRatio: !0 });
}
