n.d(t, { Tr: () => d, MJ: () => c, Gx: () => u, Ch: () => m, VF: () => o });
var i,
    l = n(661191),
    s = n(682901),
    r = (((i = {})[(i.PENDING = 1)] = "PENDING"), (i[(i.ACTIVE = 2)] = "ACTIVE"), (i[(i.ENDED = 3)] = "ENDED"), i),
    a = n(652215);
function o(e) {
    return e.type === a.rzx.GIFT && null != e.giftSubscription && e.status !== a.Dmq.ENDED;
}
function u(e) {
    return Array.from(e)
        .filter(o)
        .sort((e, t) => l.default.compare(t.id, e.id));
}
function c(e) {
    let { giftSubscription: t, status: n, canceledAt: i, currentPeriodEnd: l } = e,
        { recipientUserId: s } = t;
    return t.status === r.PENDING
        ? { kind: "pending", expiresAt: t.acceptanceExpiresAt, isCanceled: null != i }
        : n === a.Dmq.PAST_DUE || n === a.Dmq.BILLING_RETRY
          ? { kind: "payment_failed", recipientUserId: s }
          : null != i || t.status === r.ENDED
            ? { kind: "canceled", recipientUserId: s, canResubscribe: t.status === r.ACTIVE }
            : { kind: "active", renewsAt: l, recipientUserId: s };
}
function d(e) {
    switch (e) {
        case s.MM.PREMIUM_GIFT_MONTH_TIER_2:
            return { interval: s.WT.MONTH, intervalCount: 1 };
        case s.MM.PREMIUM_GIFT_YEAR_TIER_2:
            return { interval: s.WT.YEAR, intervalCount: 1 };
        default:
            return null;
    }
}
function m(e) {
    let t = new Set(),
        n = new Set();
    for (let { giftSubscription: i } of e)
        i.status === r.PENDING &&
            (null != i.initialGiftCode && t.add(i.initialGiftCode),
            null != i.initialEntitlementId && n.add(i.initialEntitlementId));
    return { giftCodes: t, entitlementIds: n };
}
