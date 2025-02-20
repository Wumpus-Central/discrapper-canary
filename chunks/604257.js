t.exports = function (t) {
    return function (e, a, r) {
        for (var n = -1, o = Object(e), _ = r(e), i = _.length; i--; ) {
            var c = _[t ? i : ++n];
            if (!1 === a(o[c], c, o)) break;
        }
        return e;
    };
};
