n.d(t, { Z: () => o });
var r = n(104494),
    i = n(639119),
    a = n(388032);
let o = (e) => {
    var t;
    let n = (0, i.N)(),
        o = (0, r.Ng)();
    return null != n && (null == e || (null == (t = n.subscription_trial) ? void 0 : t.sku_id) === e)
        ? null != n.referrer_id
            ? a.intl.string(a.t.gtNqJQ)
            : a.intl.string(a.t.IBYG5U)
        : null != o && (null == e || (0, r.Wp)(o, e))
          ? a.intl.formatToPlainString(a.t.iiLbvu, { percent: o.discount.amount })
          : null;
};
