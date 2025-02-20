n.d(t, { Z: () => a }), n(47120);
var r = n(992774);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    addSink(e, t, n) {
        let i = this.streams,
            o = i[e];
        if ((null == o && (o = i[e] = new Map()), 0 === o.size)) {
            let t = (0, r.zS)();
            t.setVideoOutputSink(e, this.handleImageData.bind(this, t.signalVideoOutputSinkReady.bind(t, e), o), !0);
        }
        o.set(t, n);
    }
    removeSink(e, t) {
        let n = this.streams,
            i = n[e];
        null != i && (i.delete(t), 0 === i.size && (delete n[e], (0, r.zS)().setVideoOutputSink(e)));
    }
    handleImageData(e, t, n) {
        for (let e of t.values()) e(n);
        e();
    }
    constructor() {
        i(this, 'streams', {});
    }
}
let a = new o();
