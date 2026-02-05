i.d(t, { A: () => o });
var n = i(573648),
    a = i(153331),
    l = i(855511),
    r = i(652215),
    s = i(985018);
function o(e, t, i) {
    let o = (0, l.A)(e) ?? "",
        d = t === a.O.VOICE_CHANNEL && i;
    switch (o) {
        case r.yTV.PS4:
        case r.yTV.PS5:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: o.toUpperCase() });
        case r.yTV.XBOX:
        case r.yTV.SAMSUNG:
            return s.intl.formatToPlainString(s.t.A17aM8, { platform: n.A.get(o).name });
        default:
            return s.intl.string(d ? s.t.J4MQFX : s.t["2TbM/G"]);
    }
}
