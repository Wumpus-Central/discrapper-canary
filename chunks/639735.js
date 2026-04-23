a.d(t, { A: () => s });
var n = a(311907),
    i = a(73153);
let c = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
class o extends n.Ay.Store {
    static displayName = "PurchasedItemsFestivityStore";
    getState() {
        return c;
    }
    get canPlayWowMoment() {
        return c.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return c.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return c.wowMomentWumpusMediaUrl;
    }
}
let s = new o(i.h, {
    LOGOUT: function () {
        c = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
        let { value: t } = e;
        c.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
        c.isFetchingWowMomentMedia = !0;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
        let { wumpusMedia: t } = e;
        (c.wowMomentWumpusMediaUrl = t), (c.isFetchingWowMomentMedia = !1);
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
        (c.isFetchingWowMomentMedia = !1), (c.canPlayWowMoment = !1);
    },
});
