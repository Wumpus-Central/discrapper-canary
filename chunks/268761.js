n.d(t, { Gk: () => l, Gl: () => o });
var i = n(531815),
    r = n.n(i);
n(989349);
var a = n(927813),
    s = n(37411),
    _ = n(985018);
function l() {
    return [
        { id: "1hour", label: _.intl.string(_.t.cs8A1c), value: a.A.Minutes.HOUR },
        { id: "24hours", label: _.intl.string(_.t.zFKbrF), value: a.A.Minutes.DAY },
        { id: "3days", label: _.intl.string(_.t.TmPIZX), value: 3 * a.A.Minutes.DAY },
        { id: "1week", label: _.intl.string(_.t["/7i2el"]), value: a.A.Minutes.WEEK },
    ];
}
function o(e, t) {
    return t ?? e?.defaultAutoArchiveDuration ?? s.cM;
}
a.A.Minutes.HOUR, a.A.Minutes.DAY, a.A.Minutes.DAY, a.A.Minutes.WEEK, r()(() => l().map((e) => e.value));
