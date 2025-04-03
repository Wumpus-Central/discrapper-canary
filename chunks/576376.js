function r(e) {
    let t,
        n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
        return n || ((n = !0), (t = e(...i))), t;
    };
}
n.d(t, { h: () => r }), n(47120);
