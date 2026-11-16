n(321073);
var l,
    r = n(690352),
    s = n(927813),
    a = (((l = {}).LOCKED = "LOCKED"), (l.OPENABLE = "OPENABLE"), (l.HINT = "HINT"), (l.REVEALED = "REVEALED"), l);
let i = "en-US",
    o = {
        [r.G.SMALL_SQUARE]: { columns: 1, rows: 1 },
        [r.G.TALL]: { columns: 1, rows: 2 },
        [r.G.WIDE]: { columns: 2, rows: 1 },
        [r.G.LARGE_SQUARE]: { columns: 2, rows: 2 },
    };
function u(e, t) {
    let { row: n, column: l } = e,
        r = [];
    for (let e = n; e < n + t.rows; e++) for (let n = l; n < l + t.columns; n++) r.push(`${e},${n}`);
    return r;
}
function c(e, t, n) {
    return u(t, n).every((t) => !e.has(t));
}
n.d(
    t,
    {},
    {
        Hm: function (e, t) {
            if (Number.isNaN(e.getTime())) return null;
            let n = (function (e) {
                    try {
                        return Intl.DateTimeFormat.supportedLocalesOf(e).length > 0 ? e : i;
                    } catch {
                        return i;
                    }
                })(t),
                l = new Intl.DateTimeFormat(n, { month: "short", day: "numeric" }).formatToParts(e);
            if ("en" !== new Intl.Locale(n).language)
                return l
                    .map((e) => {
                        let { value: t } = e;
                        return t;
                    })
                    .join("");
            let r = new Intl.DateTimeFormat(n, { month: "long" }).format(e);
            return l
                .map((e) => {
                    let { type: t, value: n } = e;
                    return "month" !== t || n === r || n.endsWith(".") ? n : `${n}.`;
                })
                .join("");
        },
        KH: function (e, t) {
            return null != e ? new Date(e.getTime() + (t - 1) * s.A.Millis.DAY) : null;
        },
        Vv: function (e, t) {
            let n = e.map((e) => {
                let n = o[e] ?? o[r.G.SMALL_SQUARE];
                return { columns: Math.min(n.columns, t), rows: n.rows };
            });
            if (0 === n.length) return [];
            if (t <= 2) {
                var l, s;
                let e, r, a, i, o;
                return (
                    (l = n),
                    (s = t),
                    (e = new Set()),
                    (r = []),
                    (a = 0),
                    (i = 1),
                    (o = 1),
                    l.forEach((t, n) => {
                        let d = n === l.length - 1;
                        for (; (d && i + t.rows - 1 < a) || o + t.columns - 1 > s || !c(e, { row: i, column: o }, t);)
                            ++o > s && ((o = 1), i++);
                        (u({ row: i, column: o }, t).forEach((t) => e.add(t)),
                            r.push({ row: i, column: o }),
                            (a = Math.max(a, i + t.rows - 1)));
                    }),
                    r
                );
            }
            let a = n.reduce((e, t) => e + t.columns * t.rows, 0);
            for (let e = Math.max(Math.ceil(a / t), n[n.length - 1].rows); ; e++) {
                let l = (function (e, t, n) {
                    let l = e[e.length - 1],
                        r = { row: n - l.rows + 1, column: 3 === t ? 1 : t - l.columns + 1 },
                        s = new Set(u(r, l)),
                        a = [];
                    for (let l of e.slice(0, -1)) {
                        let e = null;
                        for (let r = 1; r + l.rows - 1 <= n && null == e; r++)
                            for (let n = 1; n + l.columns - 1 <= t && null == e; n++)
                                c(s, { row: r, column: n }, l) && (e = { row: r, column: n });
                        if (null == e) return null;
                        (u(e, l).forEach((e) => s.add(e)), a.push(e));
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
        k$: a,
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
