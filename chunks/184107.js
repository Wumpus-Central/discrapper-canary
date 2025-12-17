n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = {};
class s extends (i = l.ZP.Store) {
    getSkuIdForChannel(e) {
        return o[e];
    }
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "ChannelSKUStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "ChannelSKUStore");
let c = new s(a.Z, {
    CONNECTION_OPEN: function () {
        o = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (o[t] = n.sku.id);
    },
});
