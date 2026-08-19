"use strict";
n.d(t, {
    $r: () => I,
    Hi: () => c,
    Ik: () => d,
    NH: () => s,
    Ob: () => u,
    Ss: () => o,
    YC: () => h,
    iW: () => E,
    oW: () => l,
    tE: () => f,
    uA: () => A,
    v4: () => _,
});
var i,
    r = n(155718),
    a = n(375708);
let s = "True",
    l = "False",
    o = [
        { name: s, displayName: s, value: "true" },
        { name: l, displayName: l, value: "false" },
    ];
var d = (((i = {}).BUILT_IN = "-1"), (i.FRECENCY = "-2"), i);
let c = 10,
    u = 5,
    _ = "\0",
    E = 100,
    A = 3,
    h = 10,
    I = 500;
function f(e) {
    if (null != e.choices) return a.intl.string(a.t.xi5aah);
    switch (e.type) {
        case r.n4.BOOLEAN:
            return a.intl.string(a.t.ATIx6O);
        case r.n4.CHANNEL:
            return a.intl.string(a.t.Q0z2Gx);
        case r.n4.INTEGER:
            return a.intl.string(a.t["d/9Rk4"]);
        case r.n4.NUMBER:
            return a.intl.string(a.t["FDyk/V"]);
        case r.n4.ROLE:
            return a.intl.string(a.t.vrRQn0);
        case r.n4.USER:
            return a.intl.string(a.t.i2r7j5);
        case r.n4.MENTIONABLE:
            return a.intl.string(a.t.I7imec);
        default:
            return a.intl.string(a.t.EkDo1i);
    }
}
Object.freeze([]), Object.freeze([]);
