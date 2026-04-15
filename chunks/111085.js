n.d(t, { A: () => o });
var i = n(311907),
    l = n(73153);
let a = { sentGifts: {} };
function r(e, t) {
    return `${e}:${t}`;
}
class s extends i.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((a = e), this.cleanupExpiredGifts());
    }
    getState() {
        return a;
    }
    hasSentGift(e, t) {
        let n = r(e, t),
            i = a.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = r(e, t),
            i = a.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(a.sentGifts)) new Date(n.expiresAt) < e && delete a.sentGifts[t];
    }
}
let o = new s(l.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = r(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        a.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
