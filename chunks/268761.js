"use strict";
n.d(t, { Gk: () => l, Gl: () => u });
var i = n(531815),
    r = n.n(i);
n(989349);
var s = n(927813),
    a = n(37411),
    o = n(375708);
function l() {
    return [
        { id: "1hour", label: o.intl.string(o.t.cs8A1c), value: s.A.Minutes.HOUR },
        { id: "24hours", label: o.intl.string(o.t.zFKbrF), value: s.A.Minutes.DAY },
        { id: "3days", label: o.intl.string(o.t.TmPIZX), value: 3 * s.A.Minutes.DAY },
        { id: "1week", label: o.intl.string(o.t["/7i2el"]), value: s.A.Minutes.WEEK },
    ];
}
function u(e, t) {
    return t ?? e?.defaultAutoArchiveDuration ?? a.cM;
}
s.A.Minutes.HOUR, s.A.Minutes.DAY, s.A.Minutes.DAY, s.A.Minutes.WEEK, r()(() => l().map((e) => e.value));
