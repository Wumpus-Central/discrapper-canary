"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(88001);
let a = { lastDismissedAnnouncementModalAt: null };
class o extends i.Ay.PersistedStore {
    static displayName = "PremiumGroupPersistedStore";
    static persistKey = "PremiumGroupPersistedStore";
    initialize(e) {
        null != e && (a = e);
    }
    getState() {
        return a;
    }
    getLastDismissedAnnouncementModalAt() {
        return a.lastDismissedAnnouncementModalAt;
    }
    setLastDismissedAnnouncementModalAt(e) {
        a = { ...a, lastDismissedAnnouncementModalAt: e };
    }
}
let l = new o(r.h, {
    LOGOUT: function () {
        return (a = { lastDismissedAnnouncementModalAt: null }), !0;
    },
    PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED: function (e) {
        return e.promotionKey === s.Sc && ((a = { ...a, lastDismissedAnnouncementModalAt: Date.now() }), !0);
    },
});
