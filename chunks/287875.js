"use strict";
n.d(t, { WM: () => s });
var i = n(792620),
    r = n(375708);
function s(e) {
    let t = e.percentComplete > 0,
        n = (function (e) {
            let { minutes: t, seconds: n } = (0, i.lG)(e),
                s = 60 * t + n;
            return s >= 60
                ? r.intl.formatToPlainString(r.t.PHhTXX, { count: Math.round(s / 60) })
                : r.intl.formatToPlainString(r.t.rUfeQx, { count: s });
        })(e);
    return t
        ? r.intl.formatToPlainString(r.t["pF/deA"], { durationShort: n })
        : r.intl.formatToPlainString(r.t.CHrvqg, { durationShort: n });
}
