var e = function (t) {
    if (void 0 === t) throw Error('invariant(...): Second argument must be a string.');
};
t.exports = function (t, r) {
    for (var n, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
    if ((e(r), !t)) {
        if (void 0 === r) n = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var u = 0;
            (n = Error(
                r.replace(/%s/g, function () {
                    return String(o[u++]);
                })
            )).name = 'Invariant Violation';
        }
        throw ((n.framesToPop = 1), n);
    }
};
