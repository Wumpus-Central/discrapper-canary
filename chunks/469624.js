var e = n(821819),
    o = n(360518),
    i = n(882708),
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
