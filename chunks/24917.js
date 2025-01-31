function i(e, t, n) {
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
n.d(t, { O: () => r }), n(411104);
class r extends Error {
    constructor(e, t) {
        super(t), i(this, 'errorCode', void 0), i(this, 'closeCode', void 0), i(this, 'code', void 0), i(this, 'message', void 0), i(this, 'name', void 0), 'closeCode' in e ? ((this.code = e.closeCode), (this.closeCode = e.closeCode)) : ((this.code = e.errorCode), (this.errorCode = e.errorCode)), (this.message = t), (this.name = 'RPCError');
    }
}
