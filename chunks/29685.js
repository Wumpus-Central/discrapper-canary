"use strict";
n.d(t, { U: () => o });
var r = n(183580),
    i = n(26232),
    a = n(469322),
    u = n(518375);
function o(e, t, n) {
    return (
        void 0 !== n &&
            ((n = (0, a.BT)(n)), (0, u.W)(n, "localeMatcher", "string", ["lookup", "best fit"], "best fit")),
        (function (e, t) {
            let n = [];
            for (let a of t) {
                let t = a.replace(i.KB, ""),
                    u = (0, r.q)(e, t);
                u && n.push(u);
            }
            return n;
        })(Array.from(e), t)
    );
}
