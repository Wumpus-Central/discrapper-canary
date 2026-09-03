var n = r(249759),
    i = r(45804),
    o = r(381265);
e.exports = function () {
    n();
    var e = i();
    return (
        o(
            Promise,
            { allSettled: e },
            {
                allSettled: function () {
                    return Promise.allSettled !== e;
                },
            },
        ),
        e
    );
};
