var i = n(823598);
function r() {
    return window.createDiscordStream;
}
class a {
    stream;
    refcount = 0;
    constructor(e) {
        let t = r();
        if (null == t) throw Error("Direct video streams are unavailable outside the native client");
        this.stream = t(e);
    }
    addref() {
        this.refcount++;
    }
    release() {
        return (this.refcount--, 0 === this.refcount);
    }
}
let s = new Map();
n.d(
    t,
    {},
    {
        au: function () {
            return null != r();
        },
        nz: function (e) {
            let t = s.get(e);
            null == t && ((t = new a(e)), (0, i.lE)().addDirectVideoOutputSink(e), s.set(e, t));
            let n = t;
            n.addref();
            let r = !1;
            return {
                stream: n.stream,
                release() {
                    r || ((r = !0), n.release() && (s.delete(e), (0, i.lE)().removeDirectVideoOutputSink(e)));
                },
            };
        },
        sj: function (e) {
            return s.get(e)?.refcount ?? 0;
        },
    },
);
