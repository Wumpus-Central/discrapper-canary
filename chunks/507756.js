n.d(t, { A: () => s });
var i = n(287809),
    r = n(248174),
    a = n(753070);
function s(e, t, n, s) {
    if (n !== a.on.RESOLUTION_1080 || s !== a.kn.FPS_30) return n;
    let l = (0, r.A)(e, i.default.getCurrentUser(), t);
    return l?.maskReportedQuality === !0 ? a.on.RESOLUTION_720 : n;
}
