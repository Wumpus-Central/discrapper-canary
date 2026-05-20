n.r(t), n.d(t, { default: () => h });
var i = n(459838),
    a = n(626584),
    l = n(761853),
    s = n(607814);
let d = new a.A("MLSignalHandler");
class o {
    start() {
        d.info("ML signal handler started"), l.Ay.getMediaEngine().on(i.bg.ClipsMlDetection, this.handleV3MlDetection);
    }
    stop() {
        l.Ay.getMediaEngine().off(i.bg.ClipsMlDetection, this.handleV3MlDetection), d.info("ML signal handler stopped");
    }
    handleV3MlDetection = (e) => {
        (0, s.$N)(e);
    };
}
let h = () => new o();
