"use strict";
function n(e, t) {
    for (var r, n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
    if (!e) {
        if (void 0 === t)
            r = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var a = 0;
            (r = Error(
                t.replace(/%s/g, function () {
                    return i[a++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((r.framesToPop = 1), r);
    }
}
r.d(t, { V: () => n });
