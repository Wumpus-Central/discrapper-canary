r.d(t, { c: () => l });
let n = (0, r(818083).B)({
        kind: 'user',
        id: '2024-12_robert_holiday_promo',
        label: 'Robert Holiday Promo Switch Experiment',
        defaultConfig: { showRobertPromo: !1 },
        treatments: [
            {
                id: 1,
                label: 'Show robert holiday promo',
                config: { showRobertPromo: !0 }
            }
        ]
    }),
    l = (e) => n.useExperiment({ location: e }).showRobertPromo;
