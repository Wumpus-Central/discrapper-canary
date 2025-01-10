n(47120);
var r,
    i,
    u,
    l,
    o = n(442837),
    s = n(570140),
    a = n(959546),
    E = n(215023);
let c = new Map(),
    d = new Set(),
    _ = new Set(),
    f = new Set(),
    S = new Map(),
    T = null;
class C extends (r = o.ZP.Store) {
    getPrice(e) {
        return c.get(e);
    }
    isFetchingPrice(e) {
        return d.has(e);
    }
    getErrored(e) {
        return f.has(e);
    }
    getEntitlement(e) {
        return S.get(e);
    }
    isEntitlementFetched(e) {
        return S.has(e);
    }
    isEntitlementFetching(e) {
        return _.has(e);
    }
    getPreviousGoLiveSettings() {
        return T;
    }
}
(l = 'ConsumablesStore'),
    (u = 'displayName') in (i = C)
        ? Object.defineProperty(i, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[u] = l),
    (t.Z = new C(s.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            d.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            c.set(e.skuId, e.price), d.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            d.delete(e.skuId), f.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            f.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            _.delete(e.skuId), S.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (!!E.Rm.has(t.sku_id)) S.set(e.skuId, a.Z.createFromServer(t));
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            f.add(e.skuId), _.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            _.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            T = e.previousGoLiveSettings;
        },
        CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            S.delete(e.skuId);
        }
    }));
