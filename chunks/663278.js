n.d(t, { MW: () => l, zw: () => s });
var i,
    r = n(723702),
    a = n(655087),
    l =
        (((i = {})[(i.UNHANDLED = -1)] = "UNHANDLED"),
        (i[(i.NOMINAL = 0)] = "NOMINAL"),
        (i[(i.FAIR = 1)] = "FAIR"),
        (i[(i.SERIOUS = 2)] = "SERIOUS"),
        (i[(i.CRITICAL = 3)] = "CRITICAL"),
        i);
function s() {
    var e = a.A.getRawThermalState();
    if (null == e) return -1;
    if ((0, r.isIOS)()) return e;
    if (!(0, r.isAndroid)()) return -1;
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
