i.d(t, { A: () => o });
var n = i(17928),
    s = i(228366);
let l = { sentGifts: {} };
function r(e, t) {
    return `${e}:${t}`;
}
class a extends n.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((l = e), this.cleanupExpiredGifts());
    }
    getState() {
        return l;
    }
    hasSentGift(e, t) {
        let i = r(e, t),
            n = l.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = r(e, t),
            n = l.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(l.sentGifts)) new Date(i.expiresAt) < e && delete l.sentGifts[t];
    }
}
let o = new a(s.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = r(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        l.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
