n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366);
let s = { sentGifts: {} };
function r(e, t) {
    return `${e}:${t}`;
}
class a extends i.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((s = e), this.cleanupExpiredGifts());
    }
    getState() {
        return s;
    }
    hasSentGift(e, t) {
        let n = r(e, t),
            i = s.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = r(e, t),
            i = s.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(s.sentGifts)) new Date(n.expiresAt) < e && delete s.sentGifts[t];
    }
}
let o = new a(l.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = r(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        s.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
