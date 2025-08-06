var t = function (e) {
    if (void 0 === e) throw Error("invariant(...): Second argument must be a string.");
};
e.exports = function (e, n) {
    for (var r, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
    if ((t(n), !e)) {
        if (void 0 === n)
            r = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var s = 0;
            (r = Error(
                n.replace(/%s/g, function () {
                    return String(o[s++]);
                }),
            )).name = "Invariant Violation";
        }
        throw ((r.framesToPop = 1), r);
    }
};
