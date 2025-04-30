var r = n(535213),
    i = n(234268),
    o = n(286233);
e.exports = function () {
    r();
    var e = i();
    return (
        o(
            Promise,
            { allSettled: e },
            {
                allSettled: function () {
                    return Promise.allSettled !== e;
                }
            }
        ),
        e
    );
};
