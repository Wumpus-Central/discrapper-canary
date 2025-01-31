function i(e, t) {
    if (null == e) return {};
    var n = {};
    for (var i in e)
        if ({}.hasOwnProperty.call(e, i)) {
            if (t.includes(i)) continue;
            n[i] = e[i];
        }
    return n;
}
n.d(t, { Z: () => i });
