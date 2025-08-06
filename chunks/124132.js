var r = n(733359).substr;
e.exports = function (e, t) {
    var n = Array(e.length).fill(null);
    return (
        t &&
            t.forEach(function (t) {
                for (var i = r(e, 0, t.offset).length, o = i + r(e, t.offset, t.length).length, a = i; a < o; a++) n[a] = t.key;
            }),
        n
    );
};
