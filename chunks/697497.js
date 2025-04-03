t.d(r, { H: () => i });
let n = (e, r) => {
        let t = a(e, r);
        if (t > 0) {
            let n = o(e, r),
                a = (t / e.length + t / r.length + (t - n) / t) / 3;
            return a < 0.7 ? a : a + 0.1 * l(e, r) * (1 - a);
        }
        return 0;
    },
    a = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            n = [],
            a = 0;
        for (var o = 0; o < e.length; o++)
            for (var l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !n[l]) {
                    (n[l] = !0), a++;
                    break;
                }
        return a;
    },
    o = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            n = {
                a: '',
                b: ''
            },
            a = [];
        for (let o = 0; o < e.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !a[l]) {
                    (n.a += e[o]), (a[l] = !0);
                    break;
                }
        a = [];
        for (let o = 0; o < r.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(e.length, o + t); l++)
                if (r[o] === e[l] && !a[l]) {
                    (n.b += r[o]), (a[l] = !0);
                    break;
                }
        let o = 0;
        for (let e = 0; e < n.a.length; e++) n.a[e] !== n.b[e] && o++;
        return Math.floor(o / 2);
    },
    l = (e, r) => {
        let t = 0;
        for (; t < 4; t++) if (e[t] !== r[t]) return t;
        return ++t;
    };
function i(e, r, t) {
    let { caseSensitive: a = !1 } = null != t ? t : {};
    return a ? n(e, r) : n(e.toLowerCase(), r.toLowerCase());
}
