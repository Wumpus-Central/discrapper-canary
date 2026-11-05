n.r(t);
var i = n(205693),
    a = n(626584),
    l = n(754712),
    s = n(489496);
let d = new a.A("MLSignalHandler");
class o {
    start() {
        (d.info("ML signal handler started"),
            l.Ay.getMediaEngine().on(i.bg.ClipsMlDetection, this.handleV3MlDetection));
    }
    stop() {
        (l.Ay.getMediaEngine().off(i.bg.ClipsMlDetection, this.handleV3MlDetection),
            d.info("ML signal handler stopped"));
    }
    handleV3MlDetection = (e) => {
        (0, s.$N)(e);
    };
}
n.d(t, {}, { default: () => new o() });
