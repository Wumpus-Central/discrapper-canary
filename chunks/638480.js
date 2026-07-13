"use strict";
n.d(t, { A: () => l });
var i = n(487329),
    r = n(562153),
    a = n(652215),
    s = n(375708);
function l(e, t, n, l) {
    if (e.state === a.XYD.RECONNECTING) {
        let e = (0, i.B1)(i.iy.STREAM_RECONNECTING)?.errorCode;
        return {
            mainText: s.intl.string(s.t["pdFFK+"]),
            supportingText: s.intl.string(s.t["+PuO2N"]),
            errorCodeText: s.intl.formatToPlainString(s.t.ejOT95, { errorCode: e }),
        };
    }
    return e.state === a.XYD.PAUSED
        ? n
            ? { mainText: s.intl.string(s.t["5q17w5"]), supportingText: s.intl.string(s.t.LV1NSN) }
            : {
                  mainText: s.intl.string(s.t["5q17w5"]),
                  supportingText: s.intl.formatToPlainString(s.t.meVVlb, {
                      username: r.Ay.getName(e.guildId, e.channelId, t),
                  }),
              }
        : l
          ? { mainText: s.intl.string(s.t.JmaKtK), supportingText: s.intl.string(s.t["hC3+BD"]) }
          : null;
}
