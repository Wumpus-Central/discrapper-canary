i.d(t, { U: () => d });
var n = i(311907),
    l = i(10094),
    s = i(683760),
    r = i(419954),
    a = i(780964),
    u = i(788868);
let o = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: u.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: u.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: u.PremiumTypes.TIER_2 },
    ],
    d = (0, r.Hn)(a.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => o,
        clearable: !0,
        useValue: () =>
            (0, n.bG)([s.A], () => {
                let e = s.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, l.O)(null, void 0)
                : null === e
                  ? (0, l.O)(void 0, void 0)
                  : (0, l.O)(0 === e ? null : e, void 0);
        },
    });
