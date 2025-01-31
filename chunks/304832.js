n.d(t, {
    Hj: () => a,
    YJ: () => r
});
var i = function (e, t) {
    return e === t;
};
function r(e, t) {
    return (!e && !t) || (!!e && !!t && e.x === t.x && e.y === t.y);
}
function a(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
    if (e.length !== t.length) return !1;
    for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
    return !0;
}
