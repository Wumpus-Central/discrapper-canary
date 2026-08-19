"use strict";
r.d(t, { Q: () => i });
var n = r(59344);
let o = new Map();
function i(e) {
    let { locale: t } = (0, n.Y)(),
        r =
            t +
            (e
                ? Object.entries(e)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : "");
    if (o.has(r)) return o.get(r);
    let i = new Intl.Collator(t, e);
    return o.set(r, i), i;
}
