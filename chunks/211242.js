n.d(t, {
    Q: () => s,
    Z: () => l
});
var r = n(818083),
    i = n(847903);
let o = (0, r.B)({
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
    a = (0, r.B)({
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
function s() {
    let { paymentsBlocked: e } = o.useExperiment({ location: 'c519a9_1' }, { autoTrackExposure: !1 }),
        { checkPaymentSource: t } = a.useExperiment({ location: 'c519a9_2' }, { autoTrackExposure: !1 }),
        { defaultBillingCountryCode: n } = (0, i.Z)();
    return e || (t && 'RU' === n);
}
let l = o;
