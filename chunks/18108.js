"use strict";
r.d(t, { g: () => s });
let n = (e, t) => {
        let r = a(e, t);
        if (r > 0) {
            let n = i(e, t),
                a = (r / e.length + r / t.length + (r - n) / r) / 3;
            return a < 0.7 ? a : a + 0.1 * l(e, t) * (1 - a);
        }
        return 0;
    },
    a = (e, t) => {
        let r = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            n = [],
            a = 0;
        for (var i = 0; i < e.length; i++)
            for (var l = Math.max(0, i - r); l <= Math.min(t.length, i + r); l++)
                if (e[i] === t[l] && !n[l]) {
                    (n[l] = !0), a++;
                    break;
                }
        return a;
    },
    i = (e, t) => {
        let r = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            n = { a: "", b: "" },
            a = [];
        for (let i = 0; i < e.length; i++)
            for (let l = Math.max(0, i - r); l <= Math.min(t.length, i + r); l++)
                if (e[i] === t[l] && !a[l]) {
                    (n.a += e[i]), (a[l] = !0);
                    break;
                }
        a = [];
        for (let i = 0; i < t.length; i++)
            for (let l = Math.max(0, i - r); l <= Math.min(e.length, i + r); l++)
                if (t[i] === e[l] && !a[l]) {
                    (n.b += t[i]), (a[l] = !0);
                    break;
                }
        let i = 0;
        for (let e = 0; e < n.a.length; e++) n.a[e] !== n.b[e] && i++;
        return Math.floor(i / 2);
    },
    l = (e, t) => {
        let r = 0;
        for (; r < 4; r++) if (e[r] !== t[r]) return r;
        return ++r;
    };
function s(e, t, r) {
    let { caseSensitive: a = !1 } = r ?? {};
    return a ? n(e, t) : n(e.toLowerCase(), t.toLowerCase());
}
