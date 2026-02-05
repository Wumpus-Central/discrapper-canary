"use strict";
var r = n(249759),
    i = n(45804),
    a = n(381265);
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
                },
            },
        ),
        e
    );
};
