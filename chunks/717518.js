"use strict";
n.d(t, { A: () => u });
var i = n(735438),
    s = n.n(i),
    l = n(311907),
    r = n(73153),
    a = n(71393);
let o = null,
    c = {};
class d extends l.Ay.Store {
    static displayName = "RegionStore";
    initialize() {
        this.waitFor(a.A);
    }
    getOptimalRegion() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRegions(e);
        return null != t
            ? (t.find((e) => {
                  let { optimal: t } = e;
                  return t;
              }) ?? s().sample(t))
            : null;
    }
    getOptimalRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getOptimalRegion(e);
        return null != t ? t.id : null;
    }
    getRandomRegion() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRegions(e);
        return null != t ? s().sample(t) : null;
    }
    getRandomRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRandomRegion(e);
        return null != t ? t.id : null;
    }
    getRegions(e) {
        return null != e ? c[e] : o;
    }
}
let u = new d(r.h, {
    LOAD_REGIONS: function (e) {
        let t = s().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (c[e.guildId] = t) : (o = t);
    },
    GUILD_DELETE: function (e) {
        delete c[e.guild.id];
    },
});
