n.d(t, { Z: () => d });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140);
let o = {};
class c extends (r = a.ZP.Store) {
    getSkuIdForChannel(e) {
        return o[e];
    }
}
(l = 'ChannelSKUStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let d = new c(s.Z, {
    CONNECTION_OPEN: function () {
        o = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (o[t] = n.sku.id);
    }
});
