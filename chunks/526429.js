r.d(t, { Z: () => A }), r(653041), r(47120), r(392711);
var i,
    n,
    a,
    s = r(442837),
    l = r(570140),
    o = r(823379),
    c = r(128449),
    d = r(388032);
let _ = null,
    E = [],
    u = [],
    p = {};
class I extends (i = s.ZP.Store) {
    getPrimaryCategories() {
        return E;
    }
    getDiscoveryCategories() {
        let e = c.L3.map((e) => u.find((t) => t.categoryId === e)).filter(o.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.intl.string(d.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = c.L3.map((e) => u.find((t) => t.categoryId === e)).filter(o.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.intl.string(d.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return u;
    }
    getFetchedLocale() {
        return _;
    }
    getCategoryName(e) {
        return e === c.Hk ? d.intl.string(d.t.Ym2Ri4) : p[e];
    }
}
(a = 'GuildDiscoveryCategoryStore'),
    (n = 'displayName') in I
        ? Object.defineProperty(I, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[n] = a);
let A = new I(l.Z, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: r, locale: i } = e,
            n = [],
            a = [];
        if (
            (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: r, name: i, is_primary: s } = e;
                    if (r !== c.o3) {
                        if (r === c.dc) {
                            t = {
                                categoryId: r,
                                name: i
                            };
                            return;
                        }
                        !0 === s &&
                            n.push({
                                categoryId: r,
                                name: i
                            }),
                            a.push({
                                categoryId: r,
                                name: i
                            }),
                            (p[r] = i);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: r } = t;
            n.push({
                categoryId: e,
                name: r
            }),
                (p[e] = r);
        }
        (_ = i), (E = n), (u = a);
    }
});
