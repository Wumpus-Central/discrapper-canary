e.d(t, { V: () => n });
function n(r, t) {
    for (var e, n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = arguments[a];
    if (!r) {
        if (void 0 === t)
            e = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = 0;
            (e = Error(
                t.replace(/%s/g, function () {
                    return o[u++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((e.framesToPop = 1), e);
    }
}
