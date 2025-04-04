function r(e, t, n) {
    let r,
        i = [],
        o = function () {
            for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
            let c = Date.now();
            for (null != r && (clearTimeout(r), (r = null)); i.length > 0 && i[0] <= c; ) i.shift();
            i.length < e ? (i.push(c + t), n(...s)) : (r = setTimeout(() => o(...s), i[0] - c));
        };
    return o;
}
n.d(t, { Z: () => r }), n(653041), n(47120);
