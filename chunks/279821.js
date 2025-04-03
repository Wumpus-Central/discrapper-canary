function r(e, t, n) {
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
n.d(t, { d: () => o }), n(411104);
class i {
    raise(e) {
        throw e;
    }
    setCallbacks(e) {
        this.callback = e.response;
    }
    databaseOpen(e, t, n) {
        let r = 'kv_storage: platform "web" is not supported at this time.';
        if (null == n ? void 0 : n.synchronous) throw Error(r);
        return this.reply({
            requestId: e,
            synchronous: !1,
            ok: !1,
            data: r
        });
    }
    databaseList(e, t) {
        return this.reply({
            requestId: e,
            synchronous: null == t ? void 0 : t.synchronous,
            ok: !0,
            data: []
        });
    }
    databaseDelete(e, t, n) {
        return this.reply({
            requestId: e,
            synchronous: null == n ? void 0 : n.synchronous,
            ok: !0,
            data: void 0
        });
    }
    databaseOptimize(e, t, n) {
        return this.reply({
            requestId: e,
            synchronous: null == n ? void 0 : n.synchronous,
            ok: !0,
            data: void 0
        });
    }
    reply(e) {
        if (e.synchronous) return e.data;
        if (null != e.requestId) {
            var t, n;
            let r = 0;
            null == (t = (n = this).callback) ||
                t.call(
                    n,
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
                    r
                );
        }
    }
    constructor() {
        r(this, 'callback', null);
    }
}
let o = new i();
