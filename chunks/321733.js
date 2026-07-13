e.d(t, { V: () => n });
function n(r, t) {
    for (var e, n = arguments.length, o = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) o[u - 2] = arguments[u];
    if (!r) {
        if (void 0 === t)
            e = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var a = 0;
            (e = Error(
                t.replace(/%s/g, function () {
                    return o[a++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((e.framesToPop = 1), e);
    }
}
