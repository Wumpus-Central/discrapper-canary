n(321073);
var l,
    r = n(690352),
    s = (((l = {}).LOCKED = "LOCKED"), (l.OPENABLE = "OPENABLE"), (l.HINT = "HINT"), (l.REVEALED = "REVEALED"), l);
let a = {
    [r.G.SMALL_SQUARE]: { columns: 1, rows: 1 },
    [r.G.TALL]: { columns: 1, rows: 2 },
    [r.G.WIDE]: { columns: 2, rows: 1 },
    [r.G.LARGE_SQUARE]: { columns: 2, rows: 2 },
};
function i(e, t) {
    let { row: n, column: l } = e,
        r = [];
    for (let e = n; e < n + t.rows; e++) for (let n = l; n < l + t.columns; n++) r.push(`${e},${n}`);
    return r;
}
function o(e, t, n) {
    return i(t, n).every((t) => !e.has(t));
}
n.d(
    t,
    {},
    {
        Vv: function (e, t) {
            let n = e.map((e) => {
                let n = a[e] ?? a[r.G.SMALL_SQUARE];
                return { columns: Math.min(n.columns, t), rows: n.rows };
            });
            if (0 === n.length) return [];
            if (t <= 2) {
                var l, s;
                let e, r, a, u, c;
                return (
                    (l = n),
                    (s = t),
                    (e = new Set()),
                    (r = []),
                    (a = 0),
                    (u = 1),
                    (c = 1),
                    l.forEach((t, n) => {
                        let d = n === l.length - 1;
                        for (; (d && u + t.rows - 1 < a) || c + t.columns - 1 > s || !o(e, { row: u, column: c }, t);)
                            ++c > s && ((c = 1), u++);
                        (i({ row: u, column: c }, t).forEach((t) => e.add(t)),
                            r.push({ row: u, column: c }),
                            (a = Math.max(a, u + t.rows - 1)));
                    }),
                    r
                );
            }
            let u = n.reduce((e, t) => e + t.columns * t.rows, 0);
            for (let e = Math.max(Math.ceil(u / t), n[n.length - 1].rows); ; e++) {
                let l = (function (e, t, n) {
                    let l = e[e.length - 1],
                        r = { row: n - l.rows + 1, column: 3 === t ? 1 : t - l.columns + 1 },
                        s = new Set(i(r, l)),
                        a = [];
                    for (let l of e.slice(0, -1)) {
                        let e = null;
                        for (let r = 1; r + l.rows - 1 <= n && null == e; r++)
                            for (let n = 1; n + l.columns - 1 <= t && null == e; n++)
                                o(s, { row: r, column: n }, l) && (e = { row: r, column: n });
                        if (null == e) return null;
                        (i(e, l).forEach((e) => s.add(e)), a.push(e));
                    }
                    return [...a, r];
                })(n, t, e);
                if (null != l) return l;
            }
        },
        d: function (e) {
            let { positions: t, openPosition: n } = e,
                l = n ?? 0,
                r = t.filter((e) => e > l);
            return r.length > 0 ? Math.min(...r) : null;
        },
        k$: s,
        q9: function (e) {
            let { position: t, openPosition: n, hintPosition: l, isOpenPositionRevealed: r, hasCampaignEnded: s } = e;
            return null == n && s
                ? "REVEALED"
                : t === l
                  ? "HINT"
                  : null == n
                    ? "LOCKED"
                    : t < n
                      ? "REVEALED"
                      : t === n
                        ? r
                            ? "REVEALED"
                            : "OPENABLE"
                        : "LOCKED";
        },
    },
);
