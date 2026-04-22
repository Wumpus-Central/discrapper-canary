"use strict";
n.d(t, { A: () => o });
var r = n(588350),
    i = n.n(r),
    s = n(792620),
    a = n(985018);
function o(e) {
    let t = [
        {
            key: "NOT_INTERESTED",
            text: (0, s.vv)(e)
                ? a.intl.string(a.t.wHRWkE)
                : a.intl.formatToPlainString(a.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
        },
        { key: "INVALUABLE", text: a.intl.string(a.t.ETU4Na) },
        { key: "TOO_LONG", text: a.intl.string(a.t.uRIIpD) },
        { key: "UNSURE_HOW", text: a.intl.string(a.t["5dxvxs"]) },
        { key: "OTHER", text: a.intl.string(a.t.RFasgu) },
    ];
    return {
        id: "1290718710658629658",
        title: a.intl.string(a.t.ugbhDS),
        subtitle: a.intl.string(a.t.FIYcpC),
        choices: i()(t.slice(0, 4)).concat(t[4]),
    };
}
