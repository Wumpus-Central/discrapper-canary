n.d(t, { g: () => l });
let i = (e, t) => {
        let n = s(e, t);
        if (n > 0) {
            let i = r(e, t),
                s = (n / e.length + n / t.length + (n - i) / n) / 3;
            return s < 0.7 ? s : s + 0.1 * a(e, t) * (1 - s);
        }
        return 0;
    },
    s = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = [],
            s = 0;
        for (var r = 0; r < e.length; r++)
            for (var a = Math.max(0, r - n); a <= Math.min(t.length, r + n); a++)
                if (e[r] === t[a] && !i[a]) {
                    (i[a] = !0), s++;
                    break;
                }
        return s;
    },
    r = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = { a: "", b: "" },
            s = [];
        for (let r = 0; r < e.length; r++)
            for (let a = Math.max(0, r - n); a <= Math.min(t.length, r + n); a++)
                if (e[r] === t[a] && !s[a]) {
                    (i.a += e[r]), (s[a] = !0);
                    break;
                }
        s = [];
        for (let r = 0; r < t.length; r++)
            for (let a = Math.max(0, r - n); a <= Math.min(e.length, r + n); a++)
                if (t[r] === e[a] && !s[a]) {
                    (i.b += t[r]), (s[a] = !0);
                    break;
                }
        let r = 0;
        for (let e = 0; e < i.a.length; e++) i.a[e] !== i.b[e] && r++;
        return Math.floor(r / 2);
    },
    a = (e, t) => {
        let n = 0;
        for (; n < 4; n++) if (e[n] !== t[n]) return n;
        return ++n;
    };
function l(e, t, n) {
    let { caseSensitive: s = !1 } = n ?? {};
    return s ? i(e, t) : i(e.toLowerCase(), t.toLowerCase());
}
