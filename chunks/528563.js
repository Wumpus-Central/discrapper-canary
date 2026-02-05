"use strict";
r.d(t, { A: () => i });
var n = r(8215),
    o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g;
let i = (0, n.A)(function (e) {
    var t = [];
    return (
        46 === e.charCodeAt(0) && t.push(""),
        e.replace(o, function (e, r, n, o) {
            t.push(n ? o.replace(a, "$1") : r || e);
        }),
        t
    );
});
