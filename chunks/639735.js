n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
class s extends i.Ay.Store {
    static displayName = "PurchasedItemsFestivityStore";
    getState() {
        return a;
    }
    get canPlayWowMoment() {
        return a.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return a.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return a.wowMomentWumpusMediaUrl;
    }
}
let l = new s(r.h, {
    LOGOUT: function () {
        a = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
        let { value: t } = e;
        a.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
        a.isFetchingWowMomentMedia = !0;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
        let { wumpusMedia: t } = e;
        (a.wowMomentWumpusMediaUrl = t), (a.isFetchingWowMomentMedia = !1);
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
        (a.isFetchingWowMomentMedia = !1), (a.canPlayWowMoment = !1);
    },
});
