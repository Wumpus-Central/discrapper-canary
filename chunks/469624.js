var i = r(821819),
    a = r(360518),
    o = r(882708),
    s = a('species');
e.exports = function (e) {
    return (
        o >= 51 ||
        !i(function () {
            var n = [];
            return (
                ((n.constructor = {})[s] = function () {
                    return { foo: 1 };
                }),
                1 !== n[e](Boolean).foo
            );
        })
    );
};
