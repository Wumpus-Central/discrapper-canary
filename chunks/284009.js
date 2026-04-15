"use strict";
e.exports = function (e, t, n, r, i, s, a, o) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [n, r, i, s, a, o],
                c = 0;
            (l = Error(
                t.replace(/%s/g, function () {
                    return u[c++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((l.framesToPop = 1), l);
    }
};
