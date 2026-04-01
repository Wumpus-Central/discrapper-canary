"use strict";
n.d(t, { v: () => i });
var r = n(839006);
function i(e) {
    let t;
    (0, r.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
        (0, r.V1)("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
    let n = [],
        i = [],
        s = e.length,
        a = 3;
    for (; a < s; ) {
        let o,
            l = e.indexOf("-", a);
        o = -1 === l ? s - a : l - a;
        let u = e.slice(a, a + o);
        (0, r.V1)(o >= 2, "Expected a subtag to have at least 2 characters"),
            void 0 === t && 2 != o
                ? -1 === n.indexOf(u) && n.push(u)
                : 2 === o
                  ? ((t = { key: u, value: "" }), void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                  : t?.value === ""
                    ? (t.value = u)
                    : ((0, r.V1)(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + u)),
            (a += o + 1);
    }
    return { attributes: n, keywords: i };
}
