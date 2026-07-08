t.d(n, { U: () => o });
var i = t(183580),
    r = t(26232),
    a = t(120330),
    s = t(518375);
function o(e, n, t) {
    return (
        void 0 !== t &&
            ((t = (0, a.BT)(t)), (0, s.W)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit")),
        (function (e, n) {
            let t = [];
            for (let a of n) {
                let n = a.replace(r.KB, ""),
                    s = (0, i.q)(e, n);
                s && t.push(s);
            }
            return t;
        })(Array.from(e), n)
    );
}
