r.d(n, {
    O: function () {
        return o;
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
class o extends Error {
    constructor(e, n) {
        super(n), a(this, 'errorCode', void 0), a(this, 'closeCode', void 0), a(this, 'code', void 0), a(this, 'message', void 0), a(this, 'name', void 0), 'closeCode' in e ? ((this.code = e.closeCode), (this.closeCode = e.closeCode)) : ((this.code = e.errorCode), (this.errorCode = e.errorCode)), (this.message = n), (this.name = 'RPCError');
    }
}
