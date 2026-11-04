function i(e, t) {
    return (e & t) === t;
}
function r(e, t) {
    return e | t;
}
function a(e, t) {
    return e & ~t;
}
n.d(
    t,
    {},
    {
        Lt: i,
        PQ: function (e, t) {
            return i(e, t) ? a(e, t) : r(e, t);
        },
        UI: r,
        VL: a,
        br: function (e, t) {
            return (e & t) != 0;
        },
        iE: function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return n.reduce((e, t) => a(e, t), e);
        },
        lA: function (e, t, n) {
            return n ? r(e, t) : a(e, t);
        },
    },
);
