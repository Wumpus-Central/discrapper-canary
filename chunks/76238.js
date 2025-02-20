n.d(t, { Z: () => s });
var r = n(392711),
    i = n.n(r),
    l = n(996106),
    o = n(981631);
function a(e, t, n) {
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
    constructor(e, t, n) {
        if (
            (a(this, 'transport', void 0),
            a(this, 'version', void 0),
            a(this, 'encoding', void 0),
            a(this, 'id', void 0),
            a(this, 'authorization', void 0),
            a(this, 'application', void 0),
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
            null == t || t > o.X6Q || t < 1)
        )
            throw new l.Z({ closeCode: o.$VG.INVALID_VERSION }, 'Invalid Version: '.concat(t));
    }
}
