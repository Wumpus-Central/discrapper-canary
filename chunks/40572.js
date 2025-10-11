n.d(t, { Z: () => o });
var r = n(81825),
    i = n(598077);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o extends r.Z {
    constructor(e) {
        super(),
            a(this, "id", void 0),
            a(this, "name", void 0),
            a(this, "managed", void 0),
            a(this, "roles", void 0),
            a(this, "requiredColons", void 0),
            a(this, "user", void 0),
            a(this, "animated", void 0),
            a(this, "available", void 0),
            (this.id = e.id),
            (this.name = e.name),
            (this.managed = e.managed),
            (this.roles = e.roles),
            (this.requiredColons = e.requiredColons),
            (this.user = new i.default(e.user)),
            (this.animated = e.animated),
            (this.available = e.available);
    }
}
