n.d(t, { Z: () => u });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140);
let s = {};
class c extends (l = a.ZP.Store) {
    getSkuIdForChannel(e) {
        return s[e];
    }
}
(i = 'ChannelSKUStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let u = new c(o.Z, {
    CONNECTION_OPEN: function () {
        s = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (s[t] = n.sku.id);
    }
});
