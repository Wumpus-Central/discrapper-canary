r.d(t, { Z: () => O }), r(642613), r(539854), r(388685), r(392711);
var n,
    i,
    a = r(442837),
    o = r(570140),
    l = r(823379),
    s = r(128449),
    c = r(388032);
let d = null,
    u = [],
    _ = [],
    p = {};
class E extends (n = a.ZP.Store) {
    getPrimaryCategories() {
        return u;
    }
    getDiscoveryCategories() {
        let e = s.L3.map((e) => _.find((t) => t.categoryId === e)).filter(l.lm);
        return [
            {
                categoryId: s.Hk,
                name: c.intl.string(c.t.Ym2Ri6),
            },
            ...e,
        ];
    }
    getClanDiscoveryCategories() {
        let e = s.L3.map((e) => _.find((t) => t.categoryId === e)).filter(l.lm);
        return [
            {
                categoryId: s.Hk,
                name: c.intl.string(c.t.QToH29),
            },
            ...e,
        ];
    }
    getAllCategories() {
        return _;
    }
    getFetchedLocale() {
        return d;
    }
    getCategoryName(e) {
        return e === s.Hk ? c.intl.string(c.t.Ym2Ri6) : p[e];
    }
}
(i = "displayName") in E
    ? Object.defineProperty(E, i, {
          value: "GuildDiscoveryCategoryStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (E[i] = "GuildDiscoveryCategoryStore");
let O = new E(o.Z, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: r, locale: n } = e,
            i = [],
            a = [];
        if (
            (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: r, name: n, is_primary: o } = e;
                    if (r !== s.o3) {
                        if (r === s.dc) {
                            t = {
                                categoryId: r,
                                name: n,
                            };
                            return;
                        }
                        !0 === o &&
                            i.push({
                                categoryId: r,
                                name: n,
                            }),
                            a.push({
                                categoryId: r,
                                name: n,
                            }),
                            (p[r] = n);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: r } = t;
            i.push({
                categoryId: e,
                name: r,
            }),
                (p[e] = r);
        }
        (d = n), (u = i), (_ = a);
    },
});
