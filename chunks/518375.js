"use strict";
n.d(t, { W: () => i });
var r = n(469322);
function i(e, t, n, i, a) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let u = e[t];
    if (void 0 !== u) {
        if ("boolean" !== n && "string" !== n) throw TypeError("invalid type");
        if (
            ("boolean" === n && (u = !!u),
            "string" === n && (u = (0, r.bf)(u)),
            void 0 !== i && !i.filter((e) => e == u).length)
        )
            throw RangeError(`${u} is not within ${i.join(", ")}`);
        return u;
    }
    return a;
}
