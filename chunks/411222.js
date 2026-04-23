"use strict";
r.d(t, { A: () => d });
var n = r(807361),
    o = r(601181),
    a = r(842922),
    i = r(161632),
    l = /^\[object .+?Constructor\]$/,
    s = Object.prototype,
    u = Function.prototype.toString,
    c = s.hasOwnProperty,
    p = RegExp(
        "^" +
            u
                .call(c)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    );
let d = function (e) {
    return !(!(0, a.A)(e) || (0, o.A)(e)) && ((0, n.A)(e) ? p : l).test((0, i.A)(e));
};
