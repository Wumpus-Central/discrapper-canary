i.d(e, { A: () => o });
var n = i(573648),
    l = i(153331),
    r = i(855511),
    s = i(652215),
    a = i(985018);
function o(t, e, i) {
    let o = (0, r.A)(t) ?? "",
        d = e === l.O.VOICE_CHANNEL && i;
    switch (o) {
        case s.yTV.PS4:
        case s.yTV.PS5:
            return a.intl.formatToPlainString(a.t.A17aM8, { platform: o.toUpperCase() });
        case s.yTV.XBOX:
        case s.yTV.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aM8, { platform: n.A.get(o).name });
        default:
            return a.intl.string(d ? a.t.J4MQFX : a.t["2TbM/G"]);
    }
}
