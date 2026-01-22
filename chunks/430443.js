i.d(e, {
    U: () => T,
});
var n = i(311907),
    l = i(10094),
    s = i(683760),
    r = i(419954),
    u = i(780964),
    a = i(788868);
let o = [
        {
            id: "none",
            label: "Non-Nitro",
            value: 0,
        },
        {
            id: "tier_0",
            label: "Nitro Basic",
            value: a.PremiumTypes.TIER_0,
        },
        {
            id: "tier_1",
            label: "Nitro Classic",
            value: a.PremiumTypes.TIER_1,
        },
        {
            id: "tier_2",
            label: "Nitro Standard",
            value: a.PremiumTypes.TIER_2,
        },
    ],
    T = (0, r.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        fieldLayout: "horizontal-responsive",
        useOptions: () => o,
        clearable: !0,
        useValue: () =>
            (0, n.bG)([s.A], () => {
                let t = s.A.getPremiumTypeOverride();
                return null === t ? 0 : t;
            }),
        setValue: (t) => {
            0 === t
                ? (0, l.O)(null, void 0)
                : null === t
                  ? (0, l.O)(void 0, void 0)
                  : (0, l.O)(0 === t ? null : t, void 0);
        },
    });
