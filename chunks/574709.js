var i,
    a = r(724458);
var o = r(180650),
    s = r(979554),
    l = r(442837),
    u = r(570140),
    c = r(597688);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Date(2023, 8, 25),
    p = new Date(2023, 9, 5),
    h = () => ({
        categoryItemViews: {
            [o.T.FANTASY]: {
                [s.Z.AVATAR_DECORATION]: f,
                [s.Z.PROFILE_EFFECT]: p
            },
            [o.T.ANIME]: {
                [s.Z.AVATAR_DECORATION]: f,
                [s.Z.PROFILE_EFFECT]: p
            },
            [o.T.BREAKFAST]: {
                [s.Z.AVATAR_DECORATION]: f,
                [s.Z.PROFILE_EFFECT]: p
            },
            [o.T.DISXCORE]: { [s.Z.AVATAR_DECORATION]: f }
        }
    }),
    _ = h(),
    m = (e) => {
        let { categories: n, itemTypes: r } = e,
            i = new Date();
        return n.reduce((e, n) => {
            let { skuId: a } = n,
                o = r.reduce((e, n) => {
                    var r;
                    return (null === (r = _.categoryItemViews[a]) || void 0 === r ? void 0 : r[n]) != null ? e : (null == _.categoryItemViews[a] && (_.categoryItemViews[a] = {}), (_.categoryItemViews[a][n] = i), !0);
                }, !1);
            return e || o;
        }, !1);
    };
class g extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (_ = e);
    }
    getState() {
        return _;
    }
    isItemViewed(e) {
        var n, r;
        let i = null === (n = c.Z.getProduct(e.skuId)) || void 0 === n ? void 0 : n.categorySkuId;
        return null != i && (null === (r = _.categoryItemViews[i]) || void 0 === r ? void 0 : r[e.type]) != null;
    }
    reset() {
        _ = h();
    }
}
d(g, 'displayName', 'CollectiblesPersistedStore'), d(g, 'persistKey', 'CollectiblesPersistedStoreV2'), new g(u.Z, { COLLECTIBLES_CATEGORY_ITEMS_VIEWED: m });
