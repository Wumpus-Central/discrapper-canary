var i = r(47120);
var a = r(992774);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class s {
    addSink(e, n, r) {
        let i = this.streams,
            o = i[e];
        if ((null == o && (o = i[e] = new Map()), 0 === o.size)) {
            let n = (0, a.zS)();
            n.setVideoOutputSink(e, this.handleImageData.bind(this, n.signalVideoOutputSinkReady.bind(n, e), o), !0);
        }
        o.set(n, r);
    }
    removeSink(e, n) {
        let r = this.streams,
            i = r[e];
        null != i && (i.delete(n), 0 === i.size && (delete r[e], (0, a.zS)().setVideoOutputSink(e)));
    }
    handleImageData(e, n, r) {
        for (let e of n.values()) e(r);
        e();
    }
    constructor() {
        o(this, 'streams', {});
    }
}
n.Z = new s();
