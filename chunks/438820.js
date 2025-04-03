a.d(t, { Z: () => p });
var n,
    i,
    c,
    o = a(442837),
    s = a(570140);
let d = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null
};
class r extends (c = o.ZP.Store) {
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
(i = 'PurchasedItemsFestivityStore'),
    (n = 'displayName') in r
        ? Object.defineProperty(r, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[n] = i);
let p = new r(s.Z, {
    LOGOUT: function () {
        d = {
            canPlayWowMoment: !1,
            isFetchingWowMomentMedia: !1,
            wowMomentWumpusMediaUrl: null
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
    }
});
