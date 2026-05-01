"use strict";
var i = n(517737),
    r = n(514575),
    s = n(630017),
    a = i(i.bind);
e.exports = function (e, t) {
    return (
        r(e),
        void 0 === t
            ? e
            : s
              ? a(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
