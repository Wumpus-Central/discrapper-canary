var r = n(50153),
    i = n(65183).List;
e.exports = function (e, t) {
    return i(
        e.map(function (e, n) {
            var i = t[n];
            return r.create({
                style: e,
                entity: i,
            });
        }),
    );
};
