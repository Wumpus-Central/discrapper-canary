r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(423650),
    a = r.n(i),
    o = r(388032);
let s = '1290718710658629658';
function l(e) {
    let { entityName: n } = e,
        r = [
            {
                key: 'NOT_INTERESTED',
                text: o.intl.formatToPlainString(o.t.AZRWVV, { entityName: n })
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
        id: s,
        title: o.intl.string(o.t.ugbhDQ),
        subtitle: o.intl.string(o.t.FIYcpK),
        choices: a()(r.slice(0, 4)).concat(r[4])
    };
}
