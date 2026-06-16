"use strict";
n.d(t, { Q: () => s });
var i = n(402112);
let r = new Map();
function s(e) {
    let { locale: t } = (0, i.Y)(),
        n =
            t +
            (e
                ? Object.entries(e)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : "");
    if (r.has(n)) return r.get(n);
    let s = new Intl.Collator(t, e);
    return r.set(n, s), s;
}
