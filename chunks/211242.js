r.d(n, {
    Q: function () {
        return l;
    }
});
var i = r(818083),
    a = r(847903);
let o = (0, i.B)({
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
function l() {
    let { paymentsBlocked: e } = o.useExperiment({ location: 'c519a9_1' }, { autoTrackExposure: !1 }),
        { checkPaymentSource: n } = s.useExperiment({ location: 'c519a9_2' }, { autoTrackExposure: !1 }),
        { defaultBillingCountryCode: r } = (0, a.Z)();
    return e || (n && 'RU' === r);
}
n.Z = o;
