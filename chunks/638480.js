n.d(t, {
    A: () => o,
});
var r = n(487329),
    i = n(562153),
    a = n(652215),
    s = n(985018);

function o(e, t, n, o) {
    if (e.state === a.XYD.RECONNECTING) {
        var l;
        let e = null == (l = (0, r.B1)(r.iy.STREAM_RECONNECTING)) ? void 0 : l.errorCode;
        return {
            mainText: s.intl.string(s.t["pdFFK+"]),
            supportingText: s.intl.string(s.t["+PuO2N"]),
            errorCodeText: s.intl.formatToPlainString(s.t.ejOT95, {
                errorCode: e,
            }),
        };
    }
    return e.state === a.XYD.PAUSED
        ? n
            ? {
                  mainText: s.intl.string(s.t["5q17w5"]),
                  supportingText: s.intl.string(s.t.LV1NSN),
              }
            : {
                  mainText: s.intl.string(s.t["5q17w5"]),
                  supportingText: s.intl.formatToPlainString(s.t.meVVlb, {
                      username: i.Ay.getName(e.guildId, e.channelId, t),
                  }),
              }
        : o
          ? {
                mainText: s.intl.string(s.t.JmaKtK),
                supportingText: s.intl.string(s.t["hC3+BD"]),
            }
          : null;
}
