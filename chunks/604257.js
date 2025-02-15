t.exports = function (t) {
    return function (e, a, r) {
        for (var n = -1, _ = Object(e), o = r(e), i = o.length; i--; ) {
            var c = o[t ? i : ++n];
            if (!1 === a(_[c], c, _)) break;
        }
        return e;
    };
};
