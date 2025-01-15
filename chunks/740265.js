n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(726542),
    l = n(603113),
    a = n(981631),
    r = n(388032);
function s(e) {
    var t;
    let n = null !== (t = (0, l.Z)(e)) && void 0 !== t ? t : '';
    switch (n) {
        case a.M7m.PS4:
        case a.M7m.PS5:
            return r.intl.formatToPlainString(r.t.A17aMz, { platform: n.toUpperCase() });
        case a.M7m.XBOX:
        case a.M7m.SAMSUNG:
            return r.intl.formatToPlainString(r.t.A17aMz, { platform: i.Z.get(n).name });
        default:
            return r.intl.string(r.t['2TbM/P']);
    }
}
