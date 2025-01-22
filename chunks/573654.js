function i(e, n) {
    for (var r, i = arguments.length, a = Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) a[o - 2] = arguments[o];
    if (!e) {
        if (void 0 === n) r = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var s = 0;
            (r = Error(
                n.replace(/%s/g, function () {
                    return a[s++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((r.framesToPop = 1), r);
    }
}
r.d(n, {
    k: function () {
        return i;
    }
});
