t.d(r, { g: () => i });
let a = (e, r) => {
        let t = n(e, r);
        if (t > 0) {
            let a = o(e, r),
                n = (t / e.length + t / r.length + (t - a) / t) / 3;
            return n < 0.7 ? n : n + 0.1 * l(e, r) * (1 - n);
        }
        return 0;
    },
    n = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            a = [],
            n = 0;
        for (var o = 0; o < e.length; o++)
            for (var l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !a[l]) {
                    (a[l] = !0), n++;
                    break;
                }
        return n;
    },
    o = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            a = {
                a: "",
                b: "",
            },
            n = [];
        for (let o = 0; o < e.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !n[l]) {
                    (a.a += e[o]), (n[l] = !0);
                    break;
                }
        n = [];
        for (let o = 0; o < r.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(e.length, o + t); l++)
                if (r[o] === e[l] && !n[l]) {
                    (a.b += r[o]), (n[l] = !0);
                    break;
                }
        let o = 0;
        for (let e = 0; e < a.a.length; e++) a.a[e] !== a.b[e] && o++;
        return Math.floor(o / 2);
    },
    l = (e, r) => {
        let t = 0;
        for (; t < 4; t++) if (e[t] !== r[t]) return t;
        return ++t;
    };
function i(e, r, t) {
    let { caseSensitive: n = !1 } = null != t ? t : {};
    return n ? a(e, r) : a(e.toLowerCase(), r.toLowerCase());
}
