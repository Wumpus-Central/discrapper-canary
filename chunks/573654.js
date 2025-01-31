function i(e, t) {
    for (var n, i = arguments.length, r = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
    if (!e) {
        if (void 0 === t) n = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var s = 0;
            (n = Error(
                t.replace(/%s/g, function () {
                    return r[s++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((n.framesToPop = 1), n);
    }
}
n.d(t, { k: () => i });
