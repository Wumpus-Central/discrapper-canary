n.d(t, { U: () => c });
var i = n(311907),
    s = n(10094),
    l = n(683760),
    a = n(419954),
    r = n(780964),
    o = n(788868);
let d = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: o.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: o.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: o.PremiumTypes.TIER_2 },
    ],
    c = (0, a.Hn)(r.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => d,
        clearable: !0,
        useValue: () =>
            (0, i.bG)([l.A], () => {
                let e = l.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, s.O)(null, void 0)
                : null === e
                  ? (0, s.O)(void 0, void 0)
                  : (0, s.O)(0 === e ? null : e, void 0);
        },
    });
