var i = r(535213),
    a = r(234268),
    o = r(286233);
e.exports = function () {
    i();
    var e = a();
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
