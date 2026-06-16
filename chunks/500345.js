"use strict";
n.d(t, { B1: () => u, Gg: () => l, b1: () => c, cV: () => o, nh: () => a });
var i = n(2242),
    r = n(788868),
    s = n(375708);
function a(e) {
    return "roles" in e ? `emoji-${e.id}` : `${e.ref_type}-${e.emoji_id}-${e.name}-${e.ref_id}`;
}
function o(e) {
    let { interval: t, interval_count: n } = e;
    return s.intl.format(
        (function (e) {
            switch (e) {
                case r.WT.DAY:
                    return s.t["3rUmPQ"];
                case r.WT.MONTH:
                    return s.t.zuN545;
                case r.WT.YEAR:
                    return s.t.cuSp8Q;
            }
        })(t),
        { count: n },
    );
}
function l(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case r.WT.DAY:
            if (n > 0 && n % 7 == 0) return s.intl.formatToPlainString(s.t.iVZYyl, { weeks: n / 7 });
            return s.intl.formatToPlainString(s.t.jzH70Z, { days: n });
        case r.WT.MONTH:
            return s.intl.formatToPlainString(s.t.erUSmA, { months: n });
        case r.WT.YEAR:
            return s.intl.formatToPlainString(s.t.IfYQVC, { years: n });
    }
}
function u(e) {
    return e.ref_type === i.bN.CHANNEL;
}
function c(e) {
    return e.ref_type === i.bN.INTANGIBLE;
}
