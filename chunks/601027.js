"use strict";
n.d(t, { u: () => i });
var r = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function (e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
    },
};
function i(e) {
    return e ? r[e] : r.trunc;
}
