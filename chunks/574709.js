n(724458);
var i,
    r = n(180650),
    a = n(979554),
    s = n(442837),
    o = n(570140),
    l = n(597688);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new Date(2023, 8, 25),
    d = new Date(2023, 9, 5),
    f = () => ({
        categoryItemViews: {
            [r.T.FANTASY]: {
                [a.Z.AVATAR_DECORATION]: c,
                [a.Z.PROFILE_EFFECT]: d
            },
            [r.T.ANIME]: {
                [a.Z.AVATAR_DECORATION]: c,
                [a.Z.PROFILE_EFFECT]: d
            },
            [r.T.BREAKFAST]: {
                [a.Z.AVATAR_DECORATION]: c,
                [a.Z.PROFILE_EFFECT]: d
            },
            [r.T.DISXCORE]: { [a.Z.AVATAR_DECORATION]: c }
        }
    }),
    _ = f(),
    p = (e) => {
        let { categories: t, itemTypes: n } = e,
            i = new Date();
        return t.reduce((e, t) => {
            let { skuId: r } = t,
                a = n.reduce((e, t) => {
                    var n;
                    return (null === (n = _.categoryItemViews[r]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == _.categoryItemViews[r] && (_.categoryItemViews[r] = {}), (_.categoryItemViews[r][t] = i), !0);
                }, !1);
            return e || a;
        }, !1);
    };
class h extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (_ = e);
    }
    getState() {
        return _;
    }
    isItemViewed(e) {
        var t, n;
        let i = null === (t = l.Z.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
        return null != i && (null === (n = _.categoryItemViews[i]) || void 0 === n ? void 0 : n[e.type]) != null;
    }
    reset() {
        _ = f();
    }
}
u(h, 'displayName', 'CollectiblesPersistedStore'), u(h, 'persistKey', 'CollectiblesPersistedStoreV2'), new h(o.Z, { COLLECTIBLES_CATEGORY_ITEMS_VIEWED: p });
