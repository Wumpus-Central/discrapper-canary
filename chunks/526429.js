r.d(t, { Z: () => I }), r(642613), r(539854), r(388685), r(392711);
var n,
    i,
    o,
    a = r(442837),
    l = r(570140),
    s = r(823379),
    c = r(128449),
    d = r(388032);
let u = null,
    _ = [],
    p = [],
    E = {};
class O extends (n = a.ZP.Store) {
    getPrimaryCategories() {
        return _;
    }
    getDiscoveryCategories() {
        let e = c.L3.map((e) => p.find((t) => t.categoryId === e)).filter(s.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.intl.string(d.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = c.L3.map((e) => p.find((t) => t.categoryId === e)).filter(s.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.intl.string(d.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return p;
    }
    getFetchedLocale() {
        return u;
    }
    getCategoryName(e) {
        return e === c.Hk ? d.intl.string(d.t.Ym2Ri4) : E[e];
    }
}
(o = 'GuildDiscoveryCategoryStore'),
    (i = 'displayName') in O
        ? Object.defineProperty(O, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (O[i] = o);
let I = new O(l.Z, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: r, locale: n } = e,
            i = [],
            o = [];
        if (
            (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: r, name: n, is_primary: a } = e;
                    if (r !== c.o3) {
                        if (r === c.dc) {
                            t = {
                                categoryId: r,
                                name: n
                            };
                            return;
                        }
                        !0 === a &&
                            i.push({
                                categoryId: r,
                                name: n
                            }),
                            o.push({
                                categoryId: r,
                                name: n
                            }),
                            (E[r] = n);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: r } = t;
            i.push({
                categoryId: e,
                name: r
            }),
                (E[e] = r);
        }
        (u = n), (_ = i), (p = o);
    }
});
