var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140);
let c = {};
class d extends (a = s.ZP.Store) {
    getSkuIdForChannel(e) {
        return c[e];
    }
}
(l = 'ChannelSKUStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new d(o.Z, {
        CONNECTION_OPEN: function () {
            c = {};
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { channelId: t, storeListing: n } = e;
            null != t && (c[t] = n.sku.id);
        }
    }));
