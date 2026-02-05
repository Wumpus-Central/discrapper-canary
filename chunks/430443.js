i.d(e, { U: () => d });
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
