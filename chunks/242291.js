"use strict";
var n = e(486816);
t.exports = function (t, r) {
    var e = [][t];
    return (
        !!e &&
        n(function () {
            e.call(
                null,
                r ||
                    function () {
                        return 1;
                    },
                1,
            );
        })
    );
};
