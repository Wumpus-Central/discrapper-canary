n.d(t, { Z: () => l });
var r = n(423650),
    i = n.n(r),
    a = n(509212),
    o = n(388032);
let s = "1290718710658629658";
function l(e) {
    let t = [
        {
            key: "NOT_INTERESTED",
            text: (0, a.q8)(e)
                ? o.intl.string(o.t.wHRWkE)
                : o.intl.formatToPlainString(o.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
        },
        {
            key: "INVALUABLE",
            text: o.intl.string(o.t.ETU4Na),
        },
        {
            key: "TOO_LONG",
            text: o.intl.string(o.t.uRIIpD),
        },
        {
            key: "UNSURE_HOW",
            text: o.intl.string(o.t["5dxvxs"]),
        },
        {
            key: "OTHER",
            text: o.intl.string(o.t.RFasgu),
        },
    ];
    return {
        id: s,
        title: o.intl.string(o.t.ugbhDS),
        subtitle: o.intl.string(o.t.FIYcpC),
        choices: i()(t.slice(0, 4)).concat(t[4]),
    };
}
