"use strict";
n.d(t, { A: () => s });
var i = n(534573),
    r = n(486020),
    a = n(240248);
function s(e, t, n) {
    if (null == t) return null;
    switch (t.type) {
        case "hash":
            if ((0, a.uJ)(t.value)) return null;
            return r.Ay.getGameAssetURL({ id: e, hash: t.value, ...n }) ?? null;
        case "url":
            return (0, i.Ec)(t.value, { size: n?.size, keepAspectRatio: n?.keepAspectRatio, format: n?.format });
        default:
            return null;
    }
}
