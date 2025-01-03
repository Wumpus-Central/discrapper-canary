r.d(n, {
    L: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-12_uplift_trial_nux',
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    label: 'Uplift Trial NUX',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Users will see the uplift trial NUX',
            config: { enabled: !0 }
        }
    ]
});
