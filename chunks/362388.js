var i = n(4609),
    r = Math.max;
function a(e, t, n) {
    return (
        (t = r(void 0 === t ? e.length - 1 : t, 0)),
        function () {
            for (var a = arguments, s = -1, o = r(a.length - t, 0), l = Array(o); ++s < o; ) l[s] = a[t + s];
            s = -1;
            for (var u = Array(t + 1); ++s < t; ) u[s] = a[s];
            return (u[t] = n(l)), i(e, this, u);
        }
    );
}
e.exports = a;
