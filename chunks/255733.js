"use strict";
var n = r(381265),
    i = r(189891);
e.exports = function () {
    var e = i();
    return (
        n(
            Array.prototype,
            { map: e },
            {
                map: function () {
                    return Array.prototype.map !== e;
                },
            },
        ),
        e
    );
};
