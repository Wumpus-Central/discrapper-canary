a.d(t, { Z: () => r });
var n,
    i,
    c = a(442837),
    o = a(570140);
let s = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null,
};
class d extends (i = c.ZP.Store) {
    getState() {
        return s;
    }
    get canPlayWowMoment() {
        return s.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return s.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return s.wowMomentWumpusMediaUrl;
    }
}
(n = "displayName") in d
    ? Object.defineProperty(d, n, {
          value: "PurchasedItemsFestivityStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[n] = "PurchasedItemsFestivityStore");
let r = new d(o.Z, {
    LOGOUT: function () {
        s = {
            canPlayWowMoment: !1,
            isFetchingWowMomentMedia: !1,
            wowMomentWumpusMediaUrl: null,
        };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
        let { value: t } = e;
        s.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
        s.isFetchingWowMomentMedia = !0;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
        let { wumpusMedia: t } = e;
        (s.wowMomentWumpusMediaUrl = t), (s.isFetchingWowMomentMedia = !1);
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
        (s.isFetchingWowMomentMedia = !1), (s.canPlayWowMoment = !1);
    },
});
