n(47120);
var r,
    i,
    u,
    l,
    o = n(442837),
    s = n(570140),
    a = n(959546),
    c = n(215023);
let d = new Map(),
    E = new Set(),
    f = new Set(),
    _ = new Set(),
    S = new Map(),
    p = null;
class T extends (r = o.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return E.has(e);
    }
    getErrored(e) {
        return _.has(e);
    }
    getEntitlement(e) {
        return S.get(e);
    }
    isEntitlementFetched(e) {
        return S.has(e);
    }
    isEntitlementFetching(e) {
        return f.has(e);
    }
    getPreviousGoLiveSettings() {
        return p;
    }
}
(l = 'ConsumablesStore'),
    (u = 'displayName') in (i = T)
        ? Object.defineProperty(i, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[u] = l),
    (t.Z = new T(s.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            E.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), E.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            E.delete(e.skuId), _.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            _.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            f.delete(e.skuId), S.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (!!c.Rm.has(t.sku_id)) S.set(e.skuId, a.Z.createFromServer(t));
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            _.add(e.skuId), f.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            p = e.previousGoLiveSettings;
        },
        CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            S.delete(e.skuId);
        }
    }));
