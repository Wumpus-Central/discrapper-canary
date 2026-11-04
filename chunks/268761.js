var i = n(360143),
    r = n.n(i);
n(536637);
var a = n(927813);
n(37411);
var s = n(792996);
function l() {
    return [
        { id: "1hour", label: s.intl.string(s.t.cs8A1c), value: a.A.Minutes.HOUR },
        { id: "24hours", label: s.intl.string(s.t.zFKbrF), value: a.A.Minutes.DAY },
        { id: "3days", label: s.intl.string(s.t.TmPIZX), value: 3 * a.A.Minutes.DAY },
        { id: "1week", label: s.intl.string(s.t["/7i2el"]), value: a.A.Minutes.WEEK },
    ];
}
(a.A.Minutes.HOUR,
    a.A.Minutes.DAY,
    a.A.Minutes.DAY,
    a.A.Minutes.WEEK,
    r()(() => l().map((e) => e.value)),
    n.d(
        t,
        {},
        {
            Gk: l,
            Gl: function (e, t) {
                return t ?? e?.defaultAutoArchiveDuration ?? 4320;
            },
        },
    ));
