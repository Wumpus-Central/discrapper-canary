n.d(e, { A: () => a });
var i = n(573648),
    l = n(855511),
    r = n(652215),
    s = n(985018);
function a(t) {
    let e = (0, l.A)(t) ?? "";
    switch (e) {
        case r.yTV.PS4:
        case r.yTV.PS5:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: e.toUpperCase() });
        case r.yTV.XBOX:
        case r.yTV.SAMSUNG:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: i.A.get(e).name });
        default:
            return s.intl.string(s.t["2TbM/G"]);
    }
}
