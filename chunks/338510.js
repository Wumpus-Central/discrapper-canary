"use strict";
n.d(t, { u: () => r });
var i = n(617641),
    s = n(168447),
    l = n(546140);
function r(e) {
    let t = (0, i.Lc)({ location: "safety-tools-button" }),
        n = (0, l.L)(),
        r = (0, s.Y)(e);
    if (!t || !n) return;
    let a = r.filter((e) => null != e.dismiss_timestamp);
    if (0 !== a.length)
        return a.sort((e, t) => (e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
