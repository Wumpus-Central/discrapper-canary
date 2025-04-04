var e = n(779688),
    o = n(394370),
    i = n(306983),
    u = o('species');
t.exports = function (t) {
    return (
        i >= 51 ||
        !e(function () {
            var r = [];
            return (
                ((r.constructor = {})[u] = function () {
                    return { foo: 1 };
                }),
                1 !== r[t](Boolean).foo
            );
        })
    );
};
