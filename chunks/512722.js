t.exports = function (t, e, a, r, n, o, _, i) {
    if (!t) {
        var c;
        if (void 0 === e) c = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var s = [a, r, n, o, _, i],
                E = 0;
            (c = Error(
                e.replace(/%s/g, function () {
                    return s[E++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((c.framesToPop = 1), c);
    }
};
