"use strict";
n.d(t, {
    $r: () => p,
    Hi: () => d,
    Ik: () => u,
    NH: () => a,
    Ob: () => c,
    Ss: () => l,
    YC: () => h,
    iW: () => f,
    oW: () => o,
    tE: () => m,
    uA: () => E,
    v4: () => _,
});
var r,
    i = n(155718),
    s = n(985018);
let a = "True",
    o = "False",
    l = [
        { name: a, displayName: a, value: "true" },
        { name: o, displayName: o, value: "false" },
    ];
var u = (((r = {}).BUILT_IN = "-1"), (r.FRECENCY = "-2"), r);
let d = 10,
    c = 5,
    _ = "\0",
    f = 100,
    E = 3,
    h = 10,
    p = 500;
function m(e) {
    if (null != e.choices) return s.intl.string(s.t.xi5aah);
    switch (e.type) {
        case i.n4.BOOLEAN:
            return s.intl.string(s.t.ATIx6O);
        case i.n4.CHANNEL:
            return s.intl.string(s.t.Q0z2Gx);
        case i.n4.INTEGER:
            return s.intl.string(s.t["d/9Rk4"]);
        case i.n4.NUMBER:
            return s.intl.string(s.t["FDyk/V"]);
        case i.n4.ROLE:
            return s.intl.string(s.t.vrRQn0);
        case i.n4.USER:
            return s.intl.string(s.t.i2r7j5);
        case i.n4.MENTIONABLE:
            return s.intl.string(s.t.I7imec);
        default:
            return s.intl.string(s.t.EkDo1i);
    }
}
Object.freeze([]), Object.freeze([]);
