"use strict";
var n = r(249759),
    o = r(45804),
    i = r(381265);
e.exports = function () {
    n();
    var e = o();
    return (
        i(
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
