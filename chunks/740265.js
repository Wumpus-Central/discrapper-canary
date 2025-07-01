n.d(t, { Z: () => a });
var r = n(726542),
    i = n(603113),
    l = n(981631),
    o = n(388032);
function a(e) {
    var t;
    let n = null != (t = (0, i.Z)(e)) ? t : '';
    switch (n) {
        case l.M7m.PS4:
        case l.M7m.PS5:
            return o.intl.formatToPlainString(o.t.A17aMz, { platform: n.toUpperCase() });
        case l.M7m.XBOX:
        case l.M7m.SAMSUNG:
            return o.intl.formatToPlainString(o.t.A17aMz, { platform: r.Z.get(n).name });
        default:
            return o.intl.string(o.t['2TbM/P']);
    }
}
