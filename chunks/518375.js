"use strict";
n.d(t, { W: () => i });
var r = n(676040);
function i(e, t, n, i, s) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let a = e[t];
    if (void 0 !== a) {
        if ("boolean" !== n && "string" !== n) throw TypeError("invalid type");
        if (
            ("boolean" === n && (a = !!a),
            "string" === n && (a = (0, r.bf)(a)),
            void 0 !== i && !i.filter((e) => e == a).length)
        )
            throw RangeError(`${a} is not within ${i.join(", ")}`);
        return a;
    }
    return s;
}
