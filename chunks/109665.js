e.exports = function (e) {
    var t = -1,
        n = Array(e.size);
    return (
        e.forEach(function (e, r) {
            n[++t] = [r, e];
        }),
        n
    );
};
