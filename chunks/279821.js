r.d(n, {
    d: function () {
        return s;
    }
});
var i = r(411104);
function a(e, n, r) {
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
class o {
    raise(e) {
        throw e;
    }
    setCallbacks(e) {
        this.callback = e.response;
    }
    databaseOpen(e, n, r) {
        let i = 'kv_storage: platform "web" is not supported at this time.';
        if (null == r ? void 0 : r.synchronous) throw Error(i);
        return this.reply({
            requestId: e,
            synchronous: !1,
            ok: !1,
            data: i
        });
    }
    databaseList(e, n) {
        return this.reply({
            requestId: e,
            synchronous: null == n ? void 0 : n.synchronous,
            ok: !0,
            data: []
        });
    }
    databaseDelete(e, n, r) {
        return this.reply({
            requestId: e,
            synchronous: null == r ? void 0 : r.synchronous,
            ok: !0,
            data: void 0
        });
    }
    databaseOptimize(e, n, r) {
        return this.reply({
            requestId: e,
            synchronous: null == r ? void 0 : r.synchronous,
            ok: !0,
            data: void 0
        });
    }
    reply(e) {
        if (e.synchronous) return e.data;
        if (null != e.requestId) {
            var n, r;
            let i = 0;
            null === (n = (r = this).callback) ||
                void 0 === n ||
                n.call(
                    r,
                    {
                        id: e.requestId,
                        ok: e.ok,
                        data: e.data,
                        timings: {
                            queueTimeNanoseconds: 0,
                            executionTimeNanoseconds: 0,
                            materializationTimeNanoseconds: 0,
                            totalTimeNanoseconds: 0
                        }
                    },
                    i
                );
        }
    }
    constructor() {
        a(this, 'callback', null);
    }
}
let s = new o();
