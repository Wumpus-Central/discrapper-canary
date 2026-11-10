n(205816);
var i = n(517352);
function r(e) {
    return "number" == typeof e && Object.hasOwn(i.bt, e);
}
function a(e, t) {
    return r(t) && e.properties.oneofKind === i.bt[t];
}
n.d(
    t,
    {},
    {
        Uy: r,
        a9: function (e, t) {
            return a(e.properties, t);
        },
        lp: a,
        uq: function (e) {
            return (r(e), e);
        },
    },
);
