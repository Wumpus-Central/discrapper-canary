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
n.d(t, { O: () => i }), n(411104);
class i extends Error {
    constructor(e, t) {
        super(t), r(this, 'errorCode', void 0), r(this, 'closeCode', void 0), r(this, 'code', void 0), r(this, 'message', void 0), r(this, 'name', void 0), 'closeCode' in e ? ((this.code = e.closeCode), (this.closeCode = e.closeCode)) : ((this.code = e.errorCode), (this.errorCode = e.errorCode)), (this.message = t), (this.name = 'RPCError');
    }
}
