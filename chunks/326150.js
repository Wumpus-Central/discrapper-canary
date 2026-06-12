"use strict";
var i = n(249759),
    r = n(45804),
    s = n(381265);
e.exports = function () {
    i();
    var e = r();
    return (
        s(
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
