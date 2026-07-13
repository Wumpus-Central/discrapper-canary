n.d(t, { A: () => a });
var i = n(487329),
    r = n(562153),
    l = n(652215),
    s = n(375708);
function a(e, t, n, a) {
    if (e.state === l.XYD.RECONNECTING) {
        let e = (0, i.B1)(i.iy.STREAM_RECONNECTING)?.errorCode;
        return {
            mainText: s.intl.string(s.t["pdFFK+"]),
            supportingText: s.intl.string(s.t["+PuO2N"]),
            errorCodeText: s.intl.formatToPlainString(s.t.ejOT95, { errorCode: e }),
        };
    }
    return e.state === l.XYD.PAUSED
        ? n
            ? { mainText: s.intl.string(s.t["5q17w5"]), supportingText: s.intl.string(s.t.LV1NSN) }
            : {
                  mainText: s.intl.string(s.t["5q17w5"]),
                  supportingText: s.intl.formatToPlainString(s.t.meVVlb, {
                      username: r.Ay.getName(e.guildId, e.channelId, t),
                  }),
              }
        : a
          ? { mainText: s.intl.string(s.t.JmaKtK), supportingText: s.intl.string(s.t["hC3+BD"]) }
          : null;
}
