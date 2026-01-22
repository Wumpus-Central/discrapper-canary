n.d(t, { A: () => l }), n(896048);
var r = n(11057),
    i = n(439372),
    a = n(822382);
function s(e, t, n) {
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
class o extends i.A {
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, r.I)(a.IY);
    }
    _terminate() {
        var e, t;
        null == (e = (t = this)._unsubscribeIntlLoadingStore) || e.call(t);
    }
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                USER_SETTINGS_PROTO_UPDATE: a.IY,
                POST_CONNECTION_OPEN: a.IY,
            }),
            s(this, "_unsubscribeIntlLoadingStore", void 0);
    }
}
let l = new o();
