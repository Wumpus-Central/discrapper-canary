e.exports = function (e, t, i, r, n, a, s, o) {
    if (!e) {
        var h;
        if (void 0 === t) h = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var l = [i, r, n, a, s, o],
                u = 0;
            (h = Error(
                t.replace(/%s/g, function () {
                    return l[u++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((h.framesToPop = 1), h);
    }
};
