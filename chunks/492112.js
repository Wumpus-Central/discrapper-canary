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
                text: o.NW.formatToPlainString(o.t.AZRWVV, { entityName: t })
            },
            {
                key: 'INVALUABLE',
                text: o.NW.string(o.t.ETU4NT)
            },
            {
                key: 'TOO_LONG',
                text: o.NW.string(o.t.uRIIpK)
            },
            {
                key: 'UNSURE_HOW',
                text: o.NW.string(o.t['5dxvxs'])
            },
            {
                key: 'OTHER',
                text: o.NW.string(o.t.RFasgo)
            }
        ];
    return {
        id: a,
        title: o.NW.string(o.t.ugbhDQ),
        subtitle: o.NW.string(o.t.FIYcpK),
        choices: i()(n.slice(0, 4)).concat(n[4])
    };
}
