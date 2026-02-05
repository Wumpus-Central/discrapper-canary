"use strict";
n.d(t, { B1: () => c, Gg: () => u, b1: () => d, cV: () => l, nh: () => s });
var r = n(2242),
    i = n(788868),
    a = n(985018);
function s(e) {
    return "roles" in e ? `emoji-${e.id}` : `${e.ref_type}-${e.emoji_id}-${e.name}-${e.ref_id}`;
}
function o(e) {
    switch (e) {
        case i.WT.DAY:
            return a.t["3rUmPQ"];
        case i.WT.MONTH:
            return a.t.zuN545;
        case i.WT.YEAR:
            return a.t.cuSp8Q;
    }
}
function l(e) {
    let { interval: t, interval_count: n } = e;
    return a.intl.format(o(t), { count: n });
}
function u(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case i.WT.DAY:
            if (n > 0 && n % 7 == 0) return a.intl.formatToPlainString(a.t.iVZYyl, { weeks: n / 7 });
            return a.intl.formatToPlainString(a.t.jzH70Z, { days: n });
        case i.WT.MONTH:
            return a.intl.formatToPlainString(a.t.erUSmA, { months: n });
        case i.WT.YEAR:
            return a.intl.formatToPlainString(a.t.IfYQVC, { years: n });
    }
}
function c(e) {
    return e.ref_type === r.bN.CHANNEL;
}
function d(e) {
    return e.ref_type === r.bN.INTANGIBLE;
}
