n.d(t, {
    A: () => s,
});
var r = n(573648),
    i = n(153331),
    l = n(855511),
    a = n(652215),
    o = n(985018);

function s(e, t, n) {
    var s;
    let c = null != (s = (0, l.A)(e)) ? s : "",
        u = t === i.O.VOICE_CHANNEL && n;
    switch (c) {
        case a.yTV.PS4:
        case a.yTV.PS5:
            return o.intl.formatToPlainString(o.t.A17aM8, {
                platform: c.toUpperCase(),
            });
        case a.yTV.XBOX:
        case a.yTV.SAMSUNG:
            return o.intl.formatToPlainString(o.t.A17aM8, {
                platform: r.A.get(c).name,
            });
        default:
            return o.intl.string(u ? o.t.J4MQFX : o.t["2TbM/G"]);
    }
}
