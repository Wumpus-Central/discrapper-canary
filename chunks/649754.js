n.d(t, { Z: () => o }), n(388685);
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
class a {
    addSink(e, t, n) {
        let i = this.streams,
            a = i[e];
        if ((null == a && (a = i[e] = new Map()), 0 === a.size)) {
            let t = (0, r.zS)();
            t.setVideoOutputSink(e, this.handleImageData.bind(this, t.signalVideoOutputSinkReady.bind(t, e), a), !0);
        }
        a.set(t, n);
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
let o = new a();
