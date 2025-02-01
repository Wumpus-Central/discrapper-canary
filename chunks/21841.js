function t(e, t) {
    if (!e) throw Error(t || 'Assertion failed');
}
(e.exports = t),
    (t.equal = function (e, t, n) {
        if (e != t) throw Error(n || 'Assertion failed: ' + e + ' != ' + t);
    });
