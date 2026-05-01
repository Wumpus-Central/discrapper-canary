"use strict";
n.d(t, { a: () => s, p: () => r }), n(321073);
var i = n(64700);
function r(e) {
    let t = {};
    return (
        e &&
            i.Children.map(e, (e) => e)?.forEach((e) => {
                let n = e.key;
                null != n && (t[n] = e);
            }),
        t
    );
}
function s() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    function i(e) {
        return n.hasOwnProperty(e) ? n[e] : t[e];
    }
    let r = {},
        s = [];
    for (let e in t) n.hasOwnProperty(e) ? s.length > 0 && ((r[e] = s), (s = [])) : s.push(e);
    let a = {};
    for (let t in n) {
        if (r.hasOwnProperty(t))
            for (e = 0; e < r[t].length; e++) {
                let n = r[t][e];
                a[r[t][e]] = i(n);
            }
        a[t] = i(t);
    }
    for (e = 0; e < s.length; e++) a[s[e]] = i(s[e]);
    return a;
}
