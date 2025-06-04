var r = n(535213),
    i = n(234268),
    a = n(286233);
e.exports = function () {
    r();
    var e = i();
    return (
        a(
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
