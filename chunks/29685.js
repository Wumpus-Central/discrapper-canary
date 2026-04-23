"use strict";
r.d(t, { U: () => o });
var n = r(183580),
    a = r(26232),
    s = r(469322),
    i = r(518375);
function o(e, t, r) {
    return (
        void 0 !== r &&
            ((r = (0, s.BT)(r)), (0, i.W)(r, "localeMatcher", "string", ["lookup", "best fit"], "best fit")),
        (function (e, t) {
            let r = [];
            for (let s of t) {
                let t = s.replace(a.KB, ""),
                    i = (0, n.q)(e, t);
                i && r.push(i);
            }
            return r;
        })(Array.from(e), t)
    );
}
