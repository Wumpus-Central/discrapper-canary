i.d(t, { G: () => n });
function n() {
    for (var r = arguments.length, t = Array(r), i = 0; i < r; i++) t[i] = arguments[i];
    for (let r of t) if (null != r && r) return r;
}
