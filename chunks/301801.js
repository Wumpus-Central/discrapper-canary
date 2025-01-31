n.d(t, { H: () => i }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var a = n(392711),
    l = n(823379);
let r = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function i(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = (0, a.uniqueId)();
    return new Promise((a) => {
        let s = (t) => {
            let {
                data: { id: n, foundItemIndexes: i }
            } = t;
            o === n && a(i.map((t) => e[t]).filter(l.lm)), null == r || r.removeEventListener('message', s);
        };
        null == r || r.addEventListener('message', s);
        let c = {
            id: o,
            searchTerm: n,
            searchStrings: e.map(t),
            useRegex: i
        };
        null == r || r.postMessage(c);
    });
}
