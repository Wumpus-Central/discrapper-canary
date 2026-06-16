"use strict";
n.d(t, { p: () => s, v: () => r });
var i = n(873298);
function r(e) {
    return e === i.tI.PERSONAL ? i.tI.PERSONAL : i.tI.GUILD;
}
function s(e, t) {
    return e === i.tI.GUILD || e === i.tI.PERSONAL ? e : r(t);
}
