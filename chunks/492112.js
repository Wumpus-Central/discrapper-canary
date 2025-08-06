n.d(t, { Z: () => s });
var r = n(423650),
    i = n.n(r),
    o = n(388032);
let a = '1290718710658629658';
function s(e) {
    let { entityName: t } = e,
        n = [
            {
                key: 'NOT_INTERESTED',
                text: o.intl.formatToPlainString(o.t.AZRWVV, { entityName: t })
            },
            {
                key: 'INVALUABLE',
                text: o.intl.string(o.t.ETU4NT)
            },
            {
                key: 'TOO_LONG',
                text: o.intl.string(o.t.uRIIpK)
            },
            {
                key: 'UNSURE_HOW',
                text: o.intl.string(o.t['5dxvxs'])
            },
            {
                key: 'OTHER',
                text: o.intl.string(o.t.RFasgo)
            }
        ];
    return {
        id: a,
        title: o.intl.string(o.t.ugbhDQ),
        subtitle: o.intl.string(o.t.FIYcpK),
        choices: i()(n.slice(0, 4)).concat(n[4])
    };
}
