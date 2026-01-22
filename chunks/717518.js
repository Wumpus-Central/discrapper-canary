n.d(t, {
    A: () => p,
});
var r,
    l,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    c = n(71393);
let u = null,
    d = {};
class f extends (l = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A);
    }
    getOptimalRegion() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = this.getRegions(t);
        return null != n
            ? null !=
              (e = n.find((e) => {
                  let { optimal: t } = e;
                  return t;
              }))
                ? e
                : a().sample(n)
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
        return null != t ? a().sample(t) : null;
    }
    getRandomRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRandomRegion(e);
        return null != t ? t.id : null;
    }
    getRegions(e) {
        return null != e ? d[e] : u;
    }
}
(r = "displayName") in f
    ? Object.defineProperty(f, r, {
          value: "RegionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[r] = "RegionStore");
let p = new f(o.h, {
    LOAD_REGIONS: function (e) {
        let t = a().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (d[e.guildId] = t) : (u = t);
    },
    GUILD_DELETE: function (e) {
        delete d[e.guild.id];
    },
});
