n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(726542),
    l = n(603113),
    r = n(981631),
    a = n(388032);
function s(e) {
    var t;
    let n = null !== (t = (0, l.Z)(e)) && void 0 !== t ? t : '';
    switch (n) {
        case r.M7m.PS4:
        case r.M7m.PS5:
            return a.intl.formatToPlainString(a.t.A17aMz, { platform: n.toUpperCase() });
        case r.M7m.XBOX:
        case r.M7m.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aMz, { platform: i.Z.get(n).name });
        default:
            return a.intl.string(a.t['2TbM/P']);
    }
}
