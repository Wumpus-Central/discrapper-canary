var i = n(821819),
    r = n(360518),
    a = n(882708),
    s = r('species');
e.exports = function (e) {
    return (
        a >= 51 ||
        !i(function () {
            var t = [];
            return (
                ((t.constructor = {})[s] = function () {
                    return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
            );
        })
    );
};
