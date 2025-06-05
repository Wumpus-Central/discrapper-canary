n.d(t, { Z: () => o });
var r = n(726542),
    i = n(603113),
    l = n(981631),
    a = n(388032);
function o(e) {
    var t;
    let n = null != (t = (0, i.Z)(e)) ? t : '';
    switch (n) {
        case l.M7m.PS4:
        case l.M7m.PS5:
            return a.intl.formatToPlainString(a.t.A17aMz, { platform: n.toUpperCase() });
        case l.M7m.XBOX:
        case l.M7m.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aMz, { platform: r.Z.get(n).name });
        default:
            return a.intl.string(a.t['2TbM/P']);
    }
}
