"use strict";
r.d(t, { W: () => i });
var n = r(120330);
function i(e, t, r, i, o) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let a = e[t];
    if (void 0 !== a) {
        if ("boolean" !== r && "string" !== r) throw TypeError("invalid type");
        if (
            ("boolean" === r && (a = !!a),
            "string" === r && (a = (0, n.bf)(a)),
            void 0 !== i && !i.filter((e) => e == a).length)
        )
            throw RangeError(`${a} is not within ${i.join(", ")}`);
        return a;
    }
    return o;
}
