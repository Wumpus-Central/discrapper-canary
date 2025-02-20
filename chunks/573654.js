function r(e, t) {
    for (var n, r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
    if (!e) {
        if (void 0 === t) n = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var a = 0;
            (n = Error(
                t.replace(/%s/g, function () {
                    return i[a++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((n.framesToPop = 1), n);
    }
}
n.d(t, { k: () => r });
