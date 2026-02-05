"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let a = { sentGifts: {} };
function s(e, t) {
    return `${e}:${t}`;
}
class o extends r.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((a = e), this.cleanupExpiredGifts());
    }
    getState() {
        return a;
    }
    hasSentGift(e, t) {
        let n = s(e, t),
            r = a.sentGifts[n];
        return !(null == r || new Date(r.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s(e, t),
            r = a.sentGifts[n];
        return null == r || new Date(r.expiresAt) < new Date() ? null : r;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(a.sentGifts)) new Date(n.expiresAt) < e && delete a.sentGifts[t];
    }
}
function l(e) {
    let t = s(e.skuId, e.recipientId),
        n = new Date(),
        r = new Date(n.getTime() + 1728e5);
    a.sentGifts[t] = {
        skuId: e.skuId,
        recipientId: e.recipientId,
        sentAt: n.toISOString(),
        expiresAt: r.toISOString(),
    };
}
let u = new o(i.h, { WISHLIST_GIFT_SENT: l });
