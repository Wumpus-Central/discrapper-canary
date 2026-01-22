n.d(t, {
    MW: () => a,
    zw: () => s,
});
var r,
    i = n(723702),
    l = n(655087),
    a =
        (((r = {})[(r.UNHANDLED = -1)] = "UNHANDLED"),
        (r[(r.NOMINAL = 0)] = "NOMINAL"),
        (r[(r.FAIR = 1)] = "FAIR"),
        (r[(r.SERIOUS = 2)] = "SERIOUS"),
        (r[(r.CRITICAL = 3)] = "CRITICAL"),
        r);
function s() {
    var e = l.A.getRawThermalState();
    if (null == e) return -1;
    if ((0, i.isIOS)()) return e;
    if (!(0, i.isAndroid)()) return -1;
    switch (e) {
        case 0:
            return 0;
        case 1:
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
        case 5:
        case 6:
            return 3;
        default:
            return -1;
    }
}
