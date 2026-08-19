i.d(t, { A: () => o });
var n = i(17928),
    l = i(228366);
let s = { sentGifts: {} };
function r(e, t) {
    return `${e}:${t}`;
}
class a extends n.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((s = e), this.cleanupExpiredGifts());
    }
    getState() {
        return s;
    }
    hasSentGift(e, t) {
        let i = r(e, t),
            n = s.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = r(e, t),
            n = s.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(s.sentGifts)) new Date(i.expiresAt) < e && delete s.sentGifts[t];
    }
}
let o = new a(l.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = r(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        s.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
