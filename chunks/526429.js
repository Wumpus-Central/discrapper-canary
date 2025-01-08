r.d(t, {
    j: function () {
        return p;
    }
}),
    r(653041),
    r(47120);
var n,
    i,
    a,
    l,
    s = r(392711),
    o = r.n(s),
    c = r(442837),
    d = r(570140),
    u = r(823379),
    _ = r(128449),
    E = r(388032);
function p(e, t) {
    return o().isEqual(
        e.map((e) => [e.categoryId, e.name]),
        t.map((e) => [e.categoryId, e.name])
    );
}
let I = null,
    m = [],
    h = [],
    T = {};
class A extends (n = c.ZP.Store) {
    getPrimaryCategories() {
        return m;
    }
    getDiscoveryCategories() {
        let e = _.L3.map((e) => h.find((t) => t.categoryId === e)).filter(u.lm);
        return [
            {
                categoryId: _.Hk,
                name: E.intl.string(E.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = _.L3.map((e) => h.find((t) => t.categoryId === e)).filter(u.lm);
        return [
            {
                categoryId: _.Hk,
                name: E.intl.string(E.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return h;
    }
    getFetchedLocale() {
        return I;
    }
    getCategoryName(e) {
        return e === _.Hk ? E.intl.string(E.t.Ym2Ri4) : T[e];
    }
}
(l = 'GuildDiscoveryCategoryStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = l),
    (t.Z = new A(d.Z, {
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let t,
                { categories: r, locale: n } = e,
                i = [],
                a = [];
            if (
                (r
                    .sort((e, t) => (e.name < t.name ? -1 : 1))
                    .forEach((e) => {
                        let { id: r, name: n, is_primary: l } = e;
                        if (r !== _.o3) {
                            if (r === _.dc) {
                                t = {
                                    categoryId: r,
                                    name: n
                                };
                                return;
                            }
                            !0 === l &&
                                i.push({
                                    categoryId: r,
                                    name: n
                                }),
                                a.push({
                                    categoryId: r,
                                    name: n
                                }),
                                (T[r] = n);
                        }
                    }),
                null != t)
            ) {
                let { categoryId: e, name: r } = t;
                i.push({
                    categoryId: e,
                    name: r
                }),
                    (T[e] = r);
            }
            (I = n), (m = i), (h = a);
        }
    }));
