n(580630);
var l = n(2242),
    i = n(682901);
n(818348);
var r = n(792996);
n.d(
    t,
    {},
    {
        B1: function (e) {
            return e.ref_type === l.bN.CHANNEL;
        },
        Gg: function (e) {
            let { interval: t, interval_count: n } = e;
            switch (t) {
                case i.WT.DAY:
                    if (n > 0 && n % 7 == 0) return r.intl.formatToPlainString(r.t.iVZYyl, { weeks: n / 7 });
                    return r.intl.formatToPlainString(r.t.jzH70Z, { days: n });
                case i.WT.MONTH:
                    return r.intl.formatToPlainString(r.t.erUSmA, { months: n });
                case i.WT.YEAR:
                    return r.intl.formatToPlainString(r.t.IfYQVC, { years: n });
            }
        },
        b1: function (e) {
            return e.ref_type === l.bN.INTANGIBLE;
        },
        cV: function (e) {
            let { interval: t, interval_count: n } = e;
            return r.intl.format(
                (function (e) {
                    switch (e) {
                        case i.WT.DAY:
                            return r.t["3rUmPQ"];
                        case i.WT.MONTH:
                            return r.t.zuN545;
                        case i.WT.YEAR:
                            return r.t.cuSp8Q;
                    }
                })(t),
                { count: n },
            );
        },
        nh: function (e) {
            return "roles" in e ? `emoji-${e.id}` : `${e.ref_type}-${e.emoji_id}-${e.name}-${e.ref_id}`;
        },
    },
);
