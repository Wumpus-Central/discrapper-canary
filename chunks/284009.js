"use strict";
e.exports = function (e, t, r, n, s, a, o, i) {
    if (!e) {
        var u;
        if (void 0 === t)
            u = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var c = [r, n, s, a, o, i],
                l = 0;
            (u = Error(
                t.replace(/%s/g, function () {
                    return c[l++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((u.framesToPop = 1), u);
    }
};
