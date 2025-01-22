r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(81825),
    a = r(598077);
function o(e, n, r) {
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
class s extends i.Z {
    static createFromServer(e) {
        return new s({
            ...e,
            user: new a.Z(e.user)
        });
    }
    constructor(e) {
        var n;
        super(), o(this, 'id', void 0), o(this, 'name', void 0), o(this, 'type', void 0), o(this, 'user', void 0), o(this, 'displayName', void 0), (this.id = e.id), (this.name = e.name), (this.type = e.type), (this.user = e.user), (this.displayName = null !== (n = e.name_localized) && void 0 !== n ? n : e.name);
    }
}
