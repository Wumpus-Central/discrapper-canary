"use strict";
n.d(t, { b: () => l });
var r = n(725428),
    i = n(109489),
    a = n(961565),
    s = n(988633),
    o = n(577249);
function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = u(i),
        l = new s.W(a, new o.s(a)),
        c = new r.p(a, l),
        d = e(c, t, n);
    return c.receiveBackend(d), c;
}
function u(e) {
    var t = "u" > typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, i.y$)(a.T, e && t && t({ name: "dnd-core", instanceId: "dnd-core" }));
}
