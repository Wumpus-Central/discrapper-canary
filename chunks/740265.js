n.d(t, { Z: () => s });
var r = n(726542),
    i = n(603113),
    a = n(981631),
    o = n(388032);
function s(e) {
    var t;
    let n = null != (t = (0, i.Z)(e)) ? t : "";
    switch (n) {
        case a.M7m.PS4:
        case a.M7m.PS5:
            return o.intl.formatToPlainString(o.t.A17aM8, { platform: n.toUpperCase() });
        case a.M7m.XBOX:
        case a.M7m.SAMSUNG:
            return o.intl.formatToPlainString(o.t.A17aM8, { platform: r.Z.get(n).name });
        default:
            return o.intl.string(o.t["2TbM/G"]);
    }
}
