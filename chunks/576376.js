function r(e) {
    let t,
        n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return n || ((n = !0), (t = e(...i))), t;
    };
}
n.d(t, { h: () => r }), n(388685);
