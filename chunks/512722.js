t.exports = function (t, e, i, r, n, a, s, o) {
    if (!t) {
        var u;
        if (void 0 === e) u = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var c = [i, r, n, a, s, o],
                h = 0;
            (u = Error(
                e.replace(/%s/g, function () {
                    return c[h++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((u.framesToPop = 1), u);
    }
};
