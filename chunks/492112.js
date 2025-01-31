n.d(t, { Z: () => o });
var i = n(423650),
    r = n.n(i),
    a = n(388032);
let s = '1290718710658629658';
function o(e) {
    let { entityName: t } = e,
        n = [
            {
                key: 'NOT_INTERESTED',
                text: a.intl.formatToPlainString(a.t.AZRWVV, { entityName: t })
            },
            {
                key: 'INVALUABLE',
                text: a.intl.string(a.t.ETU4NT)
            },
            {
                key: 'TOO_LONG',
                text: a.intl.string(a.t.uRIIpK)
            },
            {
                key: 'UNSURE_HOW',
                text: a.intl.string(a.t['5dxvxs'])
            },
            {
                key: 'OTHER',
                text: a.intl.string(a.t.RFasgo)
            }
        ];
    return {
        id: s,
        title: a.intl.string(a.t.ugbhDQ),
        subtitle: a.intl.string(a.t.FIYcpK),
        choices: r()(n.slice(0, 4)).concat(n[4])
    };
}
