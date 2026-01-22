e.exports = function (e) {
    var t = -1,
        n = Array(e.size);
    return (
        e.forEach(function (e) {
            n[++t] = e;
        }),
        n
    );
};
