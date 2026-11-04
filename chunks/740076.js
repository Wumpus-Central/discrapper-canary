var r = n(334279),
    i = n(855986),
    s = n(166403),
    l = n(792996);
n.d(
    t,
    {},
    {
        I: function (e) {
            let t = (0, i.bG)([s.A], () => {
                let e = s.A.getPremiumSubscription();
                return e?.isPurchasedExternally === !0;
            });
            return r.I.ALL.has(e)
                ? { isDisabled: t, disabledReason: t ? l.intl.string(l.t.NbveHD) : null }
                : { isDisabled: !1, disabledReason: null };
        },
    },
);
