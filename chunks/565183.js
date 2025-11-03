n.d(t, { Z: () => m }), n(539854), n(388685);
var r = n(647438),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(846519),
    l = n(728345),
    c = n(812206);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = 20,
    f = 60000;
class _ {
    request(e) {
        if (this._pending.has(e)) return;
        let t = this._lastFetchedAttempted.get(e);
        (null != t && Date.now() - t < f) || (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((t) => {
            this._lastFetchedAttempted.set(t, Date.now()), e.push(t);
        }),
            this._pending.clear();
        let t = [],
            n = [];
        e.forEach((e) => {
            c.Z.didFetchingApplicationFail(e) ? n.push(e) : t.push(e);
        }),
            t.length > 0 &&
                a()
                    .chunk(t, d)
                    .forEach((e) => {
                        l.ZP.fetchApplications(e, !1);
                    }),
            n.length > 0 &&
                a()
                    .chunk(n, d)
                    .forEach((e) => {
                        l.ZP.fetchApplications(e, !0);
                    });
    }
    constructor() {
        u(this, "_lastFetchedAttempted", new Map()),
            u(this, "_pending", new Set()),
            u(this, "_flushHandler", new s.sW(32, () => this._flush()));
    }
}
let p = new _();
function h(e) {
    r.useEffect(() => {
        null != e && "" !== e && p.request(e);
    }, [e]);
}
function m(e) {
    return h(e), (0, o.e7)([c.Z], () => (null != e && "" !== e ? c.Z.getApplication(e) : null), [e]);
}
