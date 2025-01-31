n.d(t, {
    Q: () => o,
    Z: () => l
});
var i = n(818083),
    r = n(847903);
let a = (0, i.B)({
        kind: 'user',
        id: '2022-03_block_russian_purchases',
        label: 'Block purchases based on country',
        defaultConfig: { paymentsBlocked: !1 },
        treatments: [
            {
                id: 1,
                label: 'Payments Blocked',
                config: { paymentsBlocked: !0 }
            }
        ]
    }),
    s = (0, i.B)({
        kind: 'user',
        id: '2022-03_block_russian_purchases_desktop',
        label: 'Block purchases based on country (desktop specific flags)',
        defaultConfig: { checkPaymentSource: !1 },
        treatments: [
            {
                id: 1,
                label: 'Check Payment Source',
                config: { checkPaymentSource: !0 }
            }
        ]
    });
function o() {
    let { paymentsBlocked: e } = a.useExperiment({ location: 'c519a9_1' }, { autoTrackExposure: !1 }),
        { checkPaymentSource: t } = s.useExperiment({ location: 'c519a9_2' }, { autoTrackExposure: !1 }),
        { defaultBillingCountryCode: n } = (0, r.Z)();
    return e || (t && 'RU' === n);
}
let l = a;
