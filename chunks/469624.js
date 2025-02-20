var r = n(821819),
    i = n(360518),
    o = n(882708),
    a = i('species');
e.exports = function (e) {
    return (
        o >= 51 ||
        !r(function () {
            var t = [];
            return (
                ((t.constructor = {})[a] = function () {
                    return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
            );
        })
    );
};
