function r(e, t) {
    for (var n, r = arguments.length, i = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
    if (!e) {
        if (void 0 === t) n = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var o = 0;
            (n = Error(
                t.replace(/%s/g, function () {
                    return i[o++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((n.framesToPop = 1), n);
    }
}
n.d(t, { k: () => r });
