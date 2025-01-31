i.d(t, { Z: () => m }), i(653041), i(47120), i(392711);
var r,
    n,
    a,
    l = i(442837),
    s = i(570140),
    o = i(823379),
    c = i(128449),
    d = i(388032);
let u = null,
    _ = [],
    E = [],
    p = {};
class I extends (r = l.ZP.Store) {
    getPrimaryCategories() {
        return _;
    }
    getDiscoveryCategories() {
        let e = c.L3.map((e) => E.find((t) => t.categoryId === e)).filter(o.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.intl.string(d.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = c.L3.map((e) => E.find((t) => t.categoryId === e)).filter(o.lm);
        return [
            {
                categoryId: c.Hk,
                name: d.intl.string(d.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return E;
    }
    getFetchedLocale() {
        return u;
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
let m = new I(s.Z, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: i, locale: r } = e,
            n = [],
            a = [];
        if (
            (i
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: i, name: r, is_primary: l } = e;
                    if (i !== c.o3) {
                        if (i === c.dc) {
                            t = {
                                categoryId: i,
                                name: r
                            };
                            return;
                        }
                        !0 === l &&
                            n.push({
                                categoryId: i,
                                name: r
                            }),
                            a.push({
                                categoryId: i,
                                name: r
                            }),
                            (p[i] = r);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: i } = t;
            n.push({
                categoryId: e,
                name: i
            }),
                (p[e] = i);
        }
        (u = r), (_ = n), (E = a);
    }
});
