"use strict";
n.d(t, { A: () => o });
var i = n(487329),
    r = n(562153),
    s = n(652215),
    a = n(375708);
function o(e, t, n, o) {
    if (e.state === s.XYD.RECONNECTING) {
        let e = (0, i.B1)(i.iy.STREAM_RECONNECTING)?.errorCode;
        return {
            mainText: a.intl.string(a.t["pdFFK+"]),
            supportingText: a.intl.string(a.t["+PuO2N"]),
            errorCodeText: a.intl.formatToPlainString(a.t.ejOT95, { errorCode: e }),
        };
    }
    return e.state === s.XYD.PAUSED
        ? n
            ? { mainText: a.intl.string(a.t["5q17w5"]), supportingText: a.intl.string(a.t.LV1NSN) }
            : {
                  mainText: a.intl.string(a.t["5q17w5"]),
                  supportingText: a.intl.formatToPlainString(a.t.meVVlb, {
                      username: r.Ay.getName(e.guildId, e.channelId, t),
                  }),
              }
        : o
          ? { mainText: a.intl.string(a.t.JmaKtK), supportingText: a.intl.string(a.t["hC3+BD"]) }
          : null;
}
