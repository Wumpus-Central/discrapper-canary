var r = n(387739),
    i = n(116740).List;
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
