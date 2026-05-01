n.d(t, { Gk: () => o, Gl: () => d });
var i = n(531815),
    a = n.n(i);
n(989349);
var r = n(927813),
    s = n(37411),
    l = n(985018);
function o() {
    return [
        { id: "1hour", label: l.intl.string(l.t.cs8A1c), value: r.A.Minutes.HOUR },
        { id: "24hours", label: l.intl.string(l.t.zFKbrF), value: r.A.Minutes.DAY },
        { id: "3days", label: l.intl.string(l.t.TmPIZX), value: 3 * r.A.Minutes.DAY },
        { id: "1week", label: l.intl.string(l.t["/7i2el"]), value: r.A.Minutes.WEEK },
    ];
}
function d(e, t) {
    return t ?? e?.defaultAutoArchiveDuration ?? s.cM;
}
r.A.Minutes.HOUR, r.A.Minutes.DAY, r.A.Minutes.DAY, r.A.Minutes.WEEK, a()(() => o().map((e) => e.value));
