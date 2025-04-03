var e = n(821819);
t.exports = function (t, r) {
    var n = [][t];
    return (
        !!n &&
        e(function () {
            n.call(
                null,
                r ||
                    function () {
                        return 1;
                    },
                1
            );
        })
    );
};
