"use strict";
var n = r(381265),
    o = r(189891);
e.exports = function () {
    var e = o();
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
