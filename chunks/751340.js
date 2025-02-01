var i = n(535213),
    r = n(234268),
    a = n(286233);
e.exports = function () {
    i();
    var e = r();
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
