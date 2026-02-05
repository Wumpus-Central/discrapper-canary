"use strict";
n.d(t, {
    $r: () => h,
    Hi: () => u,
    Ik: () => l,
    NH: () => a,
    Ob: () => c,
    Ss: () => o,
    YC: () => p,
    iW: () => _,
    oW: () => s,
    tE: () => m,
    uA: () => f,
    v4: () => d,
});
var r = n(155718),
    i = n(985018);
let a = "True",
    s = "False",
    o = [
        { name: a, displayName: a, value: "true" },
        { name: s, displayName: s, value: "false" },
    ];
var l = (function (e) {
    return (e.BUILT_IN = "-1"), (e.FRECENCY = "-2"), e;
})({});
let u = 10,
    c = 5,
    d = "\0",
    _ = 100,
    f = 3,
    p = 10,
    h = 500;
function m(e) {
    if (null != e.choices) return i.intl.string(i.t.xi5aah);
    switch (e.type) {
        case r.n4.BOOLEAN:
            return i.intl.string(i.t.ATIx6O);
        case r.n4.CHANNEL:
            return i.intl.string(i.t.Q0z2Gx);
        case r.n4.INTEGER:
            return i.intl.string(i.t["d/9Rk4"]);
        case r.n4.NUMBER:
            return i.intl.string(i.t["FDyk/V"]);
        case r.n4.ROLE:
            return i.intl.string(i.t.vrRQn0);
        case r.n4.USER:
            return i.intl.string(i.t.i2r7j5);
        case r.n4.MENTIONABLE:
            return i.intl.string(i.t.I7imec);
        default:
            return i.intl.string(i.t.EkDo1i);
    }
}
Object.freeze([]), Object.freeze([]);
