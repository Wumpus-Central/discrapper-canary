n.d(t, { Z: () => l }), n(388685);
var r = n(241601),
    i = n(147913),
    a = n(405656);
function o(e, t, n) {
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
class s extends i.Z {
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, r.Ql)(a.Pe);
    }
    _terminate() {
        var e, t;
        null == (e = (t = this)._unsubscribeIntlLoadingStore) || e.call(t);
    }
    constructor(...e) {
        super(...e),
            o(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: a.Pe,
                POST_CONNECTION_OPEN: a.Pe
            }),
            o(this, '_unsubscribeIntlLoadingStore', void 0);
    }
}
let l = new s();
