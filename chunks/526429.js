r.d(t, { Z: () => I }), r(230036), r(653041), r(47120), r(392711);
var n,
    i,
    a,
    o = r(442837),
    s = r(570140),
    l = r(823379),
    c = r(128449),
    d = r(388032);
let u = null,
    _ = [],
    p = [],
    E = {};
class O extends (n = o.ZP.Store) {
    getPrimaryCategories() {
        return _;
    }
    getDiscoveryCategories() {
        let e = c.L3.map((e) => p.find((t) => t.categoryId === e)).filter(l.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.NW.string(d.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = c.L3.map((e) => p.find((t) => t.categoryId === e)).filter(l.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.NW.string(d.t.QToH29)
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
        return e === c.Hk ? d.NW.string(d.t.Ym2Ri4) : E[e];
    }
}
(a = 'GuildDiscoveryCategoryStore'),
    (i = 'displayName') in O
        ? Object.defineProperty(O, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (O[i] = a);
let I = new O(s.Z, {
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
                    if (r !== c.o3) {
                        if (r === c.dc) {
                            t = {
                                categoryId: r,
                                name: n
                            };
                            return;
                        }
                        !0 === o &&
                            i.push({
                                categoryId: r,
                                name: n
                            }),
                            a.push({
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
        (u = n), (_ = i), (p = a);
    }
});
