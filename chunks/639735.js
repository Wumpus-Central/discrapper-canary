a.d(t, {
    A: () => M,
});
var n,
    i,
    c = a(311907),
    o = a(73153);
let d = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null,
};
class s extends (i = c.Ay.Store) {
    getState() {
        return d;
    }
    get canPlayWowMoment() {
        return d.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return d.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return d.wowMomentWumpusMediaUrl;
    }
}
(n = "displayName") in s
    ? Object.defineProperty(s, n, {
          value: "PurchasedItemsFestivityStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[n] = "PurchasedItemsFestivityStore");
let M = new s(o.h, {
    LOGOUT: function () {
        d = {
            canPlayWowMoment: !1,
            isFetchingWowMomentMedia: !1,
            wowMomentWumpusMediaUrl: null,
        };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
        let { value: t } = e;
        d.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
        d.isFetchingWowMomentMedia = !0;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
        let { wumpusMedia: t } = e;
        (d.wowMomentWumpusMediaUrl = t), (d.isFetchingWowMomentMedia = !1);
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
        (d.isFetchingWowMomentMedia = !1), (d.canPlayWowMoment = !1);
    },
});
