var r = n(1140).substr;
e.exports = function (e, t) {
    var n = Array(e.length).fill(null);
    return (
        t &&
            t.forEach(function (t) {
                for (var i = r(e, 0, t.offset).length, a = i + r(e, t.offset, t.length).length, s = i; s < a; s++)
                    n[s] = t.key;
            }),
        n
    );
};
