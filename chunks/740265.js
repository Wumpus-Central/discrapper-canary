n.d(t, { Z: () => a });
var r = n(726542),
    l = n(603113),
    i = n(981631),
    o = n(388032);
function a(e) {
    var t;
    let n = null != (t = (0, l.Z)(e)) ? t : '';
    switch (n) {
        case i.M7m.PS4:
        case i.M7m.PS5:
            return o.NW.formatToPlainString(o.t.A17aMz, { platform: n.toUpperCase() });
        case i.M7m.XBOX:
        case i.M7m.SAMSUNG:
            return o.NW.formatToPlainString(o.t.A17aMz, { platform: r.Z.get(n).name });
        default:
            return o.NW.string(o.t['2TbM/P']);
    }
}
