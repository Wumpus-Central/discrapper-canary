n.d(t, { A: () => l, h: () => s });
var i = n(534573),
    r = n(486020),
    a = n(240248);
function s(e) {
    return null != e && !(0, a.uJ)(e.value);
}
function l(e, t, n) {
    if (!s(t)) return null;
    switch (t.type) {
        case "hash":
            return r.Ay.getGameAssetURL({ id: e, hash: t.value, ...n }) ?? null;
        case "url":
            return (0, i.Ec)(t.value, { size: n?.size, keepAspectRatio: n?.keepAspectRatio, format: n?.format });
        default:
            return null;
    }
}
