n.d(t, { Z: () => s });
var r = n(423650),
    i = n.n(r),
    a = n(388032);
let o = '1290718710658629658';
function s(e) {
    let { entityName: t } = e,
        n = [
            {
                key: 'NOT_INTERESTED',
                text: a.NW.formatToPlainString(a.t.AZRWVV, { entityName: t })
            },
            {
                key: 'INVALUABLE',
                text: a.NW.string(a.t.ETU4NT)
            },
            {
                key: 'TOO_LONG',
                text: a.NW.string(a.t.uRIIpK)
            },
            {
                key: 'UNSURE_HOW',
                text: a.NW.string(a.t['5dxvxs'])
            },
            {
                key: 'OTHER',
                text: a.NW.string(a.t.RFasgo)
            }
        ];
    return {
        id: o,
        title: a.NW.string(a.t.ugbhDQ),
        subtitle: a.NW.string(a.t.FIYcpK),
        choices: i()(n.slice(0, 4)).concat(n[4])
    };
}
