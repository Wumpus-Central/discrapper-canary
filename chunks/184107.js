n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    a = n(570140);
let s = {};
class o extends (i = l.ZP.Store) {
    getSkuIdForChannel(e) {
        return s[e];
    }
}
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "ChannelSKUStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "ChannelSKUStore");
let c = new o(a.Z, {
    CONNECTION_OPEN: function () {
        s = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (s[t] = n.sku.id);
    },
});
