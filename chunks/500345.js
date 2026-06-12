n.d(t, { B1: () => u, Gg: () => o, b1: () => c, cV: () => s, nh: () => a });
var l = n(2242),
    r = n(788868),
    i = n(375708);
function a(e) {
    return "roles" in e ? `emoji-${e.id}` : `${e.ref_type}-${e.emoji_id}-${e.name}-${e.ref_id}`;
}
function s(e) {
    let { interval: t, interval_count: n } = e;
    return i.intl.format(
        (function (e) {
            switch (e) {
                case r.WT.DAY:
                    return i.t["3rUmPQ"];
                case r.WT.MONTH:
                    return i.t.zuN545;
                case r.WT.YEAR:
                    return i.t.cuSp8Q;
            }
        })(t),
        { count: n },
    );
}
function o(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case r.WT.DAY:
            if (n > 0 && n % 7 == 0) return i.intl.formatToPlainString(i.t.iVZYyl, { weeks: n / 7 });
            return i.intl.formatToPlainString(i.t.jzH70Z, { days: n });
        case r.WT.MONTH:
            return i.intl.formatToPlainString(i.t.erUSmA, { months: n });
        case r.WT.YEAR:
            return i.intl.formatToPlainString(i.t.IfYQVC, { years: n });
    }
}
function u(e) {
    return e.ref_type === l.bN.CHANNEL;
}
function c(e) {
    return e.ref_type === l.bN.INTANGIBLE;
}
