n.d(t, {
    g: () => a,
});
let r = (e, t) => {
        let n = i(e, t);
        if (n > 0) {
            let r = l(e, t),
                i = (n / e.length + n / t.length + (n - r) / n) / 3;
            return i < 0.7 ? i : i + 0.1 * s(e, t) * (1 - i);
        }
        return 0;
    },
    i = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            r = [],
            i = 0;
        for (var l = 0; l < e.length; l++)
            for (var s = Math.max(0, l - n); s <= Math.min(t.length, l + n); s++)
                if (e[l] === t[s] && !r[s]) {
                    (r[s] = !0), i++;
                    break;
                }
        return i;
    },
    l = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            r = {
                a: "",
                b: "",
            },
            i = [];
        for (let l = 0; l < e.length; l++)
            for (let s = Math.max(0, l - n); s <= Math.min(t.length, l + n); s++)
                if (e[l] === t[s] && !i[s]) {
                    (r.a += e[l]), (i[s] = !0);
                    break;
                }
        i = [];
        for (let l = 0; l < t.length; l++)
            for (let s = Math.max(0, l - n); s <= Math.min(e.length, l + n); s++)
                if (t[l] === e[s] && !i[s]) {
                    (r.b += t[l]), (i[s] = !0);
                    break;
                }
        let l = 0;
        for (let e = 0; e < r.a.length; e++) r.a[e] !== r.b[e] && l++;
        return Math.floor(l / 2);
    },
    s = (e, t) => {
        let n = 0;
        for (; n < 4; n++) if (e[n] !== t[n]) return n;
        return ++n;
    };

function a(e, t, n) {
    let { caseSensitive: i = !1 } = null != n ? n : {};
    return i ? r(e, t) : r(e.toLowerCase(), t.toLowerCase());
}
