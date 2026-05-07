"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
class a extends i.Ay.Store {
    static displayName = "PurchasedItemsFestivityStore";
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
let o = new a(r.h, {
    LOGOUT: function () {
        s = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
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
