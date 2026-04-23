n.d(t, { A: () => r });
var i = n(573648),
    l = n(855511),
    a = n(652215),
    s = n(985018);
function r(e) {
    let t = (0, l.A)(e) ?? "";
    switch (t) {
        case a.yTV.PS4:
        case a.yTV.PS5:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: t.toUpperCase() });
        case a.yTV.XBOX:
        case a.yTV.SAMSUNG:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: i.A.get(t).name });
        default:
            return s.intl.string(s.t["2TbM/G"]);
    }
}
