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
    constructor(e) {
        var n;
        super(), a(this, 'id', void 0), a(this, 'widgets', void 0), a(this, 'version', void 0), (this.version = null !== (n = Number(e.version)) && void 0 !== n ? n : 0), (this.id = e.id || ''), (this.widgets = e.widgets || []);
    }
}
