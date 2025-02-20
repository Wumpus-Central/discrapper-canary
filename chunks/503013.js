n.d(t, { Z: () => a });
var r = n(81825),
    i = n(388032);
function o(e, t, n) {
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
    static createFromServer(e) {
        return new a({
            id: e.id,
            liveBuildId: e.live_build_id,
            name: e.name
        });
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? i.NW.string(i.t.AHqj6e) : i.NW.string(i.t['62f4nJ']);
    }
    constructor(e) {
        super(), o(this, 'id', void 0), o(this, 'liveBuildId', void 0), o(this, 'name', void 0), (this.id = e.id), (this.liveBuildId = e.liveBuildId), (this.name = e.name);
    }
}
