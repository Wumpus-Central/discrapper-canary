"use strict";
n.d(t, { A: () => u });
var l = n(735438),
    i = n.n(l),
    s = n(311907),
    a = n(73153),
    r = n(71393);
let o = null,
    d = {};
class c extends s.Ay.Store {
    static displayName = "RegionStore";
    initialize() {
        this.waitFor(r.A);
    }
    getOptimalRegion() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRegions(e);
        return null != t
            ? (t.find((e) => {
                  let { optimal: t } = e;
                  return t;
              }) ?? i().sample(t))
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
        return null != t ? i().sample(t) : null;
    }
    getRandomRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRandomRegion(e);
        return null != t ? t.id : null;
    }
    getRegions(e) {
        return null != e ? d[e] : o;
    }
}
let u = new c(a.h, {
    LOAD_REGIONS: function (e) {
        let t = i().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (d[e.guildId] = t) : (o = t);
    },
    GUILD_DELETE: function (e) {
        delete d[e.guild.id];
    },
});
