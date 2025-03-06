t.d(r, { H: () => u });
let n = (e, r) => {
        let t = o(e, r);
        if (t > 0) {
            let n = a(e, r),
                o = (t / e.length + t / r.length + (t - n) / t) / 3;
            return o < 0.7 ? o : o + 0.1 * i(e, r) * (1 - o);
        }
        return 0;
    },
    o = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            n = [],
            o = 0;
        for (var a = 0; a < e.length; a++)
            for (var i = Math.max(0, a - t); i <= Math.min(r.length, a + t); i++)
                if (e[a] === r[i] && !n[i]) {
                    (n[i] = !0), o++;
                    break;
                }
        return o;
    },
    a = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            n = {
                a: '',
                b: ''
            },
            o = [];
        for (let a = 0; a < e.length; a++)
            for (let i = Math.max(0, a - t); i <= Math.min(r.length, a + t); i++)
                if (e[a] === r[i] && !o[i]) {
                    (n.a += e[a]), (o[i] = !0);
                    break;
                }
        o = [];
        for (let a = 0; a < r.length; a++)
            for (let i = Math.max(0, a - t); i <= Math.min(e.length, a + t); i++)
                if (r[a] === e[i] && !o[i]) {
                    (n.b += r[a]), (o[i] = !0);
                    break;
                }
        let a = 0;
        for (let e = 0; e < n.a.length; e++) n.a[e] !== n.b[e] && a++;
        return Math.floor(a / 2);
    },
    i = (e, r) => {
        let t = 0;
        for (; t < 4; t++) if (e[t] !== r[t]) return t;
        return ++t;
    };
function u(e, r, t) {
    let { caseSensitive: o = !1 } = null != t ? t : {};
    return o ? n(e, r) : n(e.toLowerCase(), r.toLowerCase());
}
