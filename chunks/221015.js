"use strict";
var r = n(517737),
    i = n(514575),
    s = n(630017),
    a = r(r.bind);
e.exports = function (e, t) {
    return (
        i(e),
        void 0 === t
            ? e
            : s
              ? a(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
