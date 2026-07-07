"use strict";
n.d(t, { A: () => a });
var i = n(756954),
    r = n(486020),
    s = n(240248);
function a(e, t, n) {
    if (null == t) return null;
    switch (t.type) {
        case "hash":
            if ((0, s.uJ)(t.value)) return null;
            return r.Ay.getGameAssetURL({ id: e, hash: t.value, ...n }) ?? null;
        case "url":
            return (0, i.C)(t.value, { size: n?.size, keepAspectRatio: n?.keepAspectRatio });
        default:
            return null;
    }
}
