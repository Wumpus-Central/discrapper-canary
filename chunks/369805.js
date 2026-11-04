var i = n(423814),
    s = n(77528),
    l = n(511484),
    r = n(682901),
    a = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, s.V)(),
                n = (0, i.O)();
            if (null != t && (null == e || t.subscriptionTrial?.skuId === e))
                return t.isReferralTrial ? a.intl.string(a.t.gtNqJQ) : a.intl.string(a.t.IBYG5U);
            if (null != n && (null == e || (0, l.U9)(n, e))) {
                let e = r.U4.includes(n.discountId);
                return a.intl.formatToPlainString(e ? a.t.mYNXed : a.t.iiLbvu, { percent: n.discount.amount });
            }
            return null;
        },
    },
);
