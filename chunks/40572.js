n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(81825),
    r = n(598077);
function l(e, t, n) {
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
    constructor(e) {
        super(), l(this, 'id', void 0), l(this, 'name', void 0), l(this, 'managed', void 0), l(this, 'roles', void 0), l(this, 'requiredColons', void 0), l(this, 'user', void 0), l(this, 'animated', void 0), l(this, 'available', void 0), (this.id = e.id), (this.name = e.name), (this.managed = e.managed), (this.roles = e.roles), (this.requiredColons = e.requiredColons), (this.user = new r.Z(e.user)), (this.animated = e.animated), (this.available = e.available);
    }
}
