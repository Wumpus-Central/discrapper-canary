n.d(t, { Z: () => a });
var r = n(81825),
    i = n(598077);
function s(e, t, n) {
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
class a extends r.Z {
    constructor(e) {
        super(), s(this, 'id', void 0), s(this, 'name', void 0), s(this, 'managed', void 0), s(this, 'roles', void 0), s(this, 'requiredColons', void 0), s(this, 'user', void 0), s(this, 'animated', void 0), s(this, 'available', void 0), (this.id = e.id), (this.name = e.name), (this.managed = e.managed), (this.roles = e.roles), (this.requiredColons = e.requiredColons), (this.user = new i.Z(e.user)), (this.animated = e.animated), (this.available = e.available);
    }
}
