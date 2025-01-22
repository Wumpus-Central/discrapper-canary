r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(81825);
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
class o extends i.Z {
    static createFromServer(e) {
        return new o(e);
    }
    constructor(e) {
        super(), a(this, 'id', void 0), a(this, 'name', void 0), (this.id = e.id), (this.name = e.name);
    }
}
