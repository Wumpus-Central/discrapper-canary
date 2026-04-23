n.d(t, { A: () => o });
var i = n(311907),
    a = n(73153);
let l = { sentGifts: {} };
function s(e, t) {
    return `${e}:${t}`;
}
class r extends i.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((l = e), this.cleanupExpiredGifts());
    }
    getState() {
        return l;
    }
    hasSentGift(e, t) {
        let n = s(e, t),
            i = l.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s(e, t),
            i = l.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(l.sentGifts)) new Date(n.expiresAt) < e && delete l.sentGifts[t];
    }
}
let o = new r(a.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = s(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        l.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
