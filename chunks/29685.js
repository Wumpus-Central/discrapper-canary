"use strict";
r.d(t, { U: () => s });
var n = r(183580),
    i = r(26232),
    o = r(120330),
    a = r(518375);
function s(e, t, r) {
    return (
        void 0 !== r &&
            ((r = (0, o.BT)(r)), (0, a.W)(r, "localeMatcher", "string", ["lookup", "best fit"], "best fit")),
        (function (e, t) {
            let r = [];
            for (let o of t) {
                let t = o.replace(i.KB, ""),
                    a = (0, n.q)(e, t);
                a && r.push(a);
            }
            return r;
        })(Array.from(e), t)
    );
}
