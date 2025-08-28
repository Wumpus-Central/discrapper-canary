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
                ? o.intl.string(o.t["tgi+np"])
                : o.intl.formatToPlainString(o.t.AZRWVV, { entityName: e.config.messages.gameTitle }),
        },
        {
            key: "INVALUABLE",
            text: o.intl.string(o.t.ETU4NT),
        },
        {
            key: "TOO_LONG",
            text: o.intl.string(o.t.uRIIpK),
        },
        {
            key: "UNSURE_HOW",
            text: o.intl.string(o.t["5dxvxs"]),
        },
        {
            key: "OTHER",
            text: o.intl.string(o.t.RFasgo),
        },
    ];
    return {
        id: s,
        title: o.intl.string(o.t.ugbhDQ),
        subtitle: o.intl.string(o.t.FIYcpK),
        choices: i()(t.slice(0, 4)).concat(t[4]),
    };
}
