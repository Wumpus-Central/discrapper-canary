t.exports = function (t) {
    var e = -1,
        a = Array(t.size);
    return (
        t.forEach(function (t) {
            a[++e] = t;
        }),
        a
    );
};
