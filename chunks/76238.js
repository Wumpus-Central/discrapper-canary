n.d(t, { Z: () => s });
var r = n(392711),
    i = n.n(r),
    l = n(996106),
    a = n(981631);
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
class s {
    checkRpcVersion(e) {
        if (null == e || e > a.X6Q || e < 1) throw new l.Z({ closeCode: a.$VG.INVALID_VERSION }, 'Invalid Version: '.concat(e));
    }
    constructor(e, t, n) {
        o(this, 'transport', void 0),
            o(this, 'version', void 0),
            o(this, 'encoding', void 0),
            o(this, 'id', void 0),
            o(this, 'authorization', void 0),
            o(this, 'application', void 0),
            o(this, 'abortController', void 0),
            (this.transport = e),
            (this.version = t),
            (this.encoding = n),
            (this.id = i().uniqueId()),
            (this.authorization = {
                authing: !1,
                scopes: [],
                accessToken: null,
                expires: new Date(0)
            }),
            (this.application = {
                id: null,
                name: null,
                icon: null
            }),
            (this.abortController = new AbortController()),
            this.checkRpcVersion(t);
    }
}
