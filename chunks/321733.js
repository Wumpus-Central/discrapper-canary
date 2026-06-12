"use strict";
function i(e, t) {
    for (var n, i = arguments.length, r = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) r[s - 2] = arguments[s];
    if (!e) {
        if (void 0 === t)
            n = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var a = 0;
            (n = Error(
                t.replace(/%s/g, function () {
                    return r[a++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((n.framesToPop = 1), n);
    }
}
n.d(t, { V: () => i });
