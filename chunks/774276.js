n.d(t, {
    ZP: () => l,
    cI: () => i
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2023-10_premium_tier_2_trial_offer_expiring_notice',
        label: 'Premium Tier 2 Trial Offer Expiring Notice',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    l =
        12633 == n.j
            ? function () {
                  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                      t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return i.useExperiment(
                      { location: 'experiment_hook' },
                      {
                          autoTrackExposure: e,
                          disable: t
                      }
                  );
              }
            : null;
