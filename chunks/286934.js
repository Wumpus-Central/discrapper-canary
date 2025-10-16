n.d(t, { Z: () => f }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = !1;
function l() {
    s = !1;
}
function c() {
    s = !0;
}
function u() {
    s = !1;
}
class d extends (r = i.ZP.Store) {
    initialize() {
        l();
    }
    isInProgress() {
        return s;
    }
    constructor(...e) {
        super(...e), o(this, "summaryInProgress", !1);
    }
}
o(d, "displayName", "ThreadSummaryStore");
let f = new d(a.Z, {
    SUMMARIZE_THREAD_START: c,
    SUMMARIZE_THREAD_SUCCESS: u,
    SUMMARIZE_THREAD_FAILURE: u,
});
