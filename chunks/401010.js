function r(e, t, n) {
    var r = t.reduce(function (t, n) {
        return t || e.getData(n);
    }, '');
    return null != r ? r : n;
}
n.d(t, { R: () => r });
