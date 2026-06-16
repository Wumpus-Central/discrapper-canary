l.d(t, { A: () => h });
var n = l(735438),
    i = l.n(n),
    r = l(17928),
    o = l(228366),
    s = l(71393);
let d = null,
    g = {};
class u extends r.Ay.Store {
    static displayName = "RegionStore";
    initialize() {
        this.waitFor(s.A);
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
        return null != e ? g[e] : d;
    }
}
let h = new u(o.h, {
    LOAD_REGIONS: function (e) {
        let t = i().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (g[e.guildId] = t) : (d = t);
    },
    GUILD_DELETE: function (e) {
        delete g[e.guild.id];
    },
});
