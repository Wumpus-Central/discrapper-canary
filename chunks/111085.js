n.d(t, {
    A: () => d,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = {
    sentGifts: {},
};

function l(e, t) {
    return "".concat(e, ":").concat(t);
}
class c extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && ((o = e), this.cleanupExpiredGifts());
    }
    getState() {
        return o;
    }
    hasSentGift(e, t) {
        let n = l(e, t),
            r = o.sentGifts[n];
        return !(null == r || new Date(r.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = l(e, t),
            r = o.sentGifts[n];
        return null == r || new Date(r.expiresAt) < new Date() ? null : r;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(o.sentGifts)) new Date(n.expiresAt) < e && delete o.sentGifts[t];
    }
}

function u(e) {
    let t = l(e.skuId, e.recipientId),
        n = new Date(),
        r = new Date(n.getTime() + 1728e5);
    o.sentGifts[t] = {
        skuId: e.skuId,
        recipientId: e.recipientId,
        sentAt: n.toISOString(),
        expiresAt: r.toISOString(),
    };
}
s(c, "displayName", "SentGiftsStore"), s(c, "persistKey", "SentGiftsStore");
let d = new c(a.h, {
    WISHLIST_GIFT_SENT: u,
});
