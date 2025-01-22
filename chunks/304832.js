r.d(n, {
    Hj: function () {
        return o;
    },
    YJ: function () {
        return a;
    }
});
var i = function (e, n) {
    return e === n;
};
function a(e, n) {
    return (!e && !n) || (!!e && !!n && e.x === n.x && e.y === n.y);
}
function o(e, n) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
    if (e.length !== n.length) return !1;
    for (var a = 0; a < e.length; ++a) if (!r(e[a], n[a])) return !1;
    return !0;
}
