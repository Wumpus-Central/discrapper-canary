n(47120);
var r,
    i,
    u,
    l,
    s = n(442837),
    o = n(570140),
    d = n(959546),
    a = n(215023);
let c = new Map(),
    E = new Set(),
    f = new Set(),
    S = new Set(),
    _ = new Map(),
    p = null;
class C extends (r = s.ZP.Store) {
    getPrice(e) {
        return c.get(e);
    }
    isFetchingPrice(e) {
        return E.has(e);
    }
    getErrored(e) {
        return S.has(e);
    }
    getEntitlement(e) {
        return _.get(e);
    }
    isEntitlementFetched(e) {
        return _.has(e);
    }
    isEntitlementFetching(e) {
        return f.has(e);
    }
    getPreviousGoLiveSettings() {
        return p;
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
    (t.Z = new C(o.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            E.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            c.set(e.skuId, e.price), E.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            E.delete(e.skuId), S.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            S.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            f.delete(e.skuId), _.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === a.FX) _.set(e.skuId, d.Z.createFromServer(t));
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            S.add(e.skuId), f.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            p = e.previousGoLiveSettings;
        },
        CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            _.delete(e.skuId);
        }
    }));
