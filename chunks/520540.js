n.d(t, {
    g: function () {
        return a;
    },
    p: function () {
        return r;
    }
});
var i,
    r,
    s = n(818083);
((i = r || (r = {}))[(i.VARIANT_1 = 0)] = 'VARIANT_1'), (i[(i.VARIANT_2 = 1)] = 'VARIANT_2');
let a = (0, s.B)({
    kind: 'user',
    id: '2024-03_referral_program_sender',
    label: 'Referral Program Sender Experience',
    defaultConfig: {
        enabled: !1,
        subscriberHomeVariant: null,
        eligibleToFetch: !1
    },
    treatments: [
        {
            id: 0,
            label: 'Disabled',
            config: {
                enabled: !1,
                subscriberHomeVariant: null,
                eligibleToFetch: !0
            }
        },
        {
            id: 1,
            label: 'Enabled',
            config: {
                enabled: !0,
                subscriberHomeVariant: 0,
                eligibleToFetch: !0
            }
        },
        {
            id: 2,
            label: 'Enabled',
            config: {
                enabled: !0,
                subscriberHomeVariant: 1,
                eligibleToFetch: !0
            }
        }
    ]
});
