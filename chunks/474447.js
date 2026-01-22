n.d(t, { A: () => o });
var r = n(573648),
    i = n(855511),
    a = n(652215),
    s = n(985018);
function o(e) {
    var t;
    let n = null != (t = (0, i.A)(e)) ? t : "";
    switch (n) {
        case a.yTV.PS4:
        case a.yTV.PS5:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: n.toUpperCase() });
        case a.yTV.XBOX:
        case a.yTV.SAMSUNG:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: r.A.get(n).name });
        default:
            return s.intl.string(s.t["2TbM/G"]);
    }
}
