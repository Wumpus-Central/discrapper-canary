n.d(t, { U: () => u });
var r = n(183580),
    i = n(26232),
    a = n(120330),
    o = n(518375);
function u(e, t, n) {
    return (
        void 0 !== n &&
            ((n = (0, a.BT)(n)), (0, o.W)(n, "localeMatcher", "string", ["lookup", "best fit"], "best fit")),
        (function (e, t) {
            let n = [];
            for (let a of t) {
                let t = a.replace(i.KB, ""),
                    o = (0, r.q)(e, t);
                o && n.push(o);
            }
            return n;
        })(Array.from(e), t)
    );
}
