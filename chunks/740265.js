n.d(t, { Z: () => o });
var r = n(726542),
    l = n(603113),
    i = n(981631),
    a = n(388032);
function o(e) {
    var t;
    let n = null !== (t = (0, l.Z)(e)) && void 0 !== t ? t : '';
    switch (n) {
        case i.M7m.PS4:
        case i.M7m.PS5:
            return a.NW.formatToPlainString(a.t.A17aMz, { platform: n.toUpperCase() });
        case i.M7m.XBOX:
        case i.M7m.SAMSUNG:
            return a.NW.formatToPlainString(a.t.A17aMz, { platform: r.Z.get(n).name });
        default:
            return a.NW.string(a.t['2TbM/P']);
    }
}
