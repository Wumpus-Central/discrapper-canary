"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(88001);
let s = { lastDismissedAnnouncementModalAt: null };
class l extends i.Ay.PersistedStore {
    static displayName = "PremiumGroupPersistedStore";
    static persistKey = "PremiumGroupPersistedStore";
    initialize(e) {
        null != e && (s = e);
    }
    getState() {
        return s;
    }
    getLastDismissedAnnouncementModalAt() {
        return s.lastDismissedAnnouncementModalAt;
    }
    setLastDismissedAnnouncementModalAt(e) {
        s = { ...s, lastDismissedAnnouncementModalAt: e };
    }
}
let o = new l(r.h, {
    LOGOUT: function () {
        return (s = { lastDismissedAnnouncementModalAt: null }), !0;
    },
    PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED: function (e) {
        return e.promotionKey === a.Sc && ((s = { ...s, lastDismissedAnnouncementModalAt: Date.now() }), !0);
    },
});
