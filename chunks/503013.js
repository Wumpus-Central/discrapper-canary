r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(81825),
    a = r(388032);
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
            id: e.id,
            liveBuildId: e.live_build_id,
            name: e.name
        });
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? a.intl.string(a.t.AHqj6e) : a.intl.string(a.t['62f4nJ']);
    }
    constructor(e) {
        super(), o(this, 'id', void 0), o(this, 'liveBuildId', void 0), o(this, 'name', void 0), (this.id = e.id), (this.liveBuildId = e.liveBuildId), (this.name = e.name);
    }
}
