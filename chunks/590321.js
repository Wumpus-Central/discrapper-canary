n.d(t, { f: () => l });
var i = n(36149),
    s = n(207560);
function l(e) {
    let t = (0, s.fk)(),
        n = (0, i.b8)(),
        l = (0, i.yM)(),
        a = (0, i.Y2)();
    if (!t) return !1;
    let r = !n || l;
    switch (e) {
        case "verify":
            return r;
        case "edit":
            return !r && a;
        case "info":
            return !r && !a;
        default:
            return !1;
    }
}
