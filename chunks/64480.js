"use strict";
r.d(t, { l: () => l });
var n = r(346711),
    i = r(256062),
    o = r(225801),
    a = r(143761),
    s = r(570340);
function l(e) {
    if (!e.isConnected) return;
    let t = (0, a.TW)(e);
    if ("virtual" === (0, o.ME)()) {
        let r = (0, i.bq)(t);
        (0, s.v)(() => {
            let o = (0, i.bq)(t);
            (o === r || o === t.body) && e.isConnected && (0, n.e)(e);
        });
    } else (0, n.e)(e);
}
