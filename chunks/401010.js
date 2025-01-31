function i(e, t, n) {
    var i = t.reduce(function (t, n) {
        return t || e.getData(n);
    }, '');
    return null != i ? i : n;
}
n.d(t, { R: () => i });
