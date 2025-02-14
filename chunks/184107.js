n.d(t, { Z: () => c });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140);
let o = {};
class d extends (r = a.ZP.Store) {
    getSkuIdForChannel(e) {
        return o[e];
    }
}
(l = 'ChannelSKUStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = l);
let c = new d(s.Z, {
    CONNECTION_OPEN: function () {
        o = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (o[t] = n.sku.id);
    }
});
