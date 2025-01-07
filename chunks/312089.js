function i(e, n) {
    if (null == e) return {};
    var r = {};
    for (var i in e)
        if ({}.hasOwnProperty.call(e, i)) {
            if (n.includes(i)) continue;
            r[i] = e[i];
        }
    return r;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
