"use strict";
var r = n(313400),
    i = n(4940);
e.exports = function (e, t, n) {
    return n.get && r(n.get, t, { getter: !0 }), n.set && r(n.set, t, { setter: !0 }), i.f(e, t, n);
};
