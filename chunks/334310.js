n.d(e, {
    A: () => u,
});
var l = n(405269),
    a = n(927813),
    r = n(403362),
    i = n(403918),
    o = n(985018);
let s = (t) => {
    let e = Date.now() + t;
    return (0, l.ro)(new Date(), new Date(e))
        ? o.intl.data.formatTime(e, {
              format: "short",
          })
        : o.intl.formatToPlainString(o.t.DN91Jz, {
              time: o.intl.data.formatTime(e, {
                  format: "short",
              }),
          });
};

function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t) {
        case i.yt.TODAY:
            if (e)
                return ""
                    .concat(
                        o.intl.formatToPlainString(o.t.Rea2gR, {
                            hours: 24,
                        }),
                        " (",
                    )
                    .concat(s(a.A.Millis.DAY), ")");
            return o.intl.string(o.t.GQmLrZ);
        case i.yt.HOURS_4:
            if (e)
                return ""
                    .concat(
                        o.intl.formatToPlainString(o.t.Rea2gR, {
                            hours: 4,
                        }),
                        " (",
                    )
                    .concat(s(4 * a.A.Millis.HOUR), ")");
            return o.intl.formatToPlainString(o.t.Rea2gR, {
                hours: 4,
            });
        case i.yt.HOURS_1:
            if (e)
                return ""
                    .concat(
                        o.intl.formatToPlainString(o.t.Rea2gR, {
                            hours: 1,
                        }),
                        " (",
                    )
                    .concat(s(a.A.Millis.HOUR), ")");
            return o.intl.formatToPlainString(o.t.Rea2gR, {
                hours: 1,
            });
        case i.yt.MINUTES_30:
            if (e)
                return ""
                    .concat(
                        o.intl.formatToPlainString(o.t.TS3eJb, {
                            minutes: 30,
                        }),
                        " (",
                    )
                    .concat(s(30 * a.A.Millis.MINUTE), ")");
            return o.intl.formatToPlainString(o.t.TS3eJb, {
                minutes: 30,
            });
        case i.yt.DONT_CLEAR:
            return o.intl.string(o.t.bRn8cq);
        default:
            (0, r.xb)(t);
    }
}
