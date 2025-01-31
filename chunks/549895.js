function i(e, t, n) {
    let i;
    let r = [],
        a = function () {
            for (var s = arguments.length, o = Array(s), l = 0; l < s; l++) o[l] = arguments[l];
            let u = Date.now();
            for (null != i && (clearTimeout(i), (i = null)); r.length > 0 && r[0] <= u; ) r.shift();
            r.length < e ? (r.push(u + t), n(...o)) : (i = setTimeout(() => a(...o), r[0] - u));
        };
    return a;
}
n.d(t, { Z: () => i }), n(653041), n(47120);
