n.d(t, { B1: () => u, Gg: () => s, b1: () => c, cV: () => a, nh: () => o });
var i = n(2242),
    l = n(788868),
    r = n(985018);
function o(e) {
    return "roles" in e ? `emoji-${e.id}` : `${e.ref_type}-${e.emoji_id}-${e.name}-${e.ref_id}`;
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    return r.intl.format(
        (function (e) {
            switch (e) {
                case l.WT.DAY:
                    return r.t["3rUmPQ"];
                case l.WT.MONTH:
                    return r.t.zuN545;
                case l.WT.YEAR:
                    return r.t.cuSp8Q;
            }
        })(t),
        { count: n },
    );
}
function s(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case l.WT.DAY:
            if (n > 0 && n % 7 == 0) return r.intl.formatToPlainString(r.t.iVZYyl, { weeks: n / 7 });
            return r.intl.formatToPlainString(r.t.jzH70Z, { days: n });
        case l.WT.MONTH:
            return r.intl.formatToPlainString(r.t.erUSmA, { months: n });
        case l.WT.YEAR:
            return r.intl.formatToPlainString(r.t.IfYQVC, { years: n });
    }
}
function u(e) {
    return e.ref_type === i.bN.CHANNEL;
}
function c(e) {
    return e.ref_type === i.bN.INTANGIBLE;
}
