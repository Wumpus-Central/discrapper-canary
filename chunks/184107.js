n.d(t, { Z: () => u });
var r,
    i,
    l,
    o = n(442837),
    a = n(570140);
let s = {};
class c extends (l = o.ZP.Store) {
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
let u = new c(a.Z, {
    CONNECTION_OPEN: function () {
        s = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (s[t] = n.sku.id);
    }
});
