n.d(t, {
    A: () => l,
});
var r = n(588350),
    i = n.n(r),
    a = n(792620),
    s = n(985018);
let o = "1290718710658629658";

function l(e) {
    let t = [
        {
            key: "NOT_INTERESTED",
            text: (0, a.vv)(e)
                ? s.intl.string(s.t.wHRWkE)
                : s.intl.formatToPlainString(s.t.AZRWVY, {
                      entityName: e.config.messages.gameTitle,
                  }),
        },
        {
            key: "INVALUABLE",
            text: s.intl.string(s.t.ETU4Na),
        },
        {
            key: "TOO_LONG",
            text: s.intl.string(s.t.uRIIpD),
        },
        {
            key: "UNSURE_HOW",
            text: s.intl.string(s.t["5dxvxs"]),
        },
        {
            key: "OTHER",
            text: s.intl.string(s.t.RFasgu),
        },
    ];
    return {
        id: o,
        title: s.intl.string(s.t.ugbhDS),
        subtitle: s.intl.string(s.t.FIYcpC),
        choices: i()(t.slice(0, 4)).concat(t[4]),
    };
}
