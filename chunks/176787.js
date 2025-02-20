n.d(t, {
    bG: () => o,
    bY: () => a
});
var r,
    i = n(358085),
    l = n(75060),
    o = (((r = {})[(r.UNHANDLED = -1)] = 'UNHANDLED'), (r[(r.NOMINAL = 0)] = 'NOMINAL'), (r[(r.FAIR = 1)] = 'FAIR'), (r[(r.SERIOUS = 2)] = 'SERIOUS'), (r[(r.CRITICAL = 3)] = 'CRITICAL'), r);
function a() {
    return (function (e) {
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
    })(l.Z.getRawThermalState());
}
