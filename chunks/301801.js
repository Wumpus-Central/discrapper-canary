n.d(t, { H: () => l }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(392711),
    a = n(823379);
let i = new Worker(new URL('/assets/' + n.u('96491'), n.b));
function l(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = (0, r.uniqueId)();
    return new Promise((r) => {
        let s = (t) => {
            let {
                data: { id: n, foundItemIndexes: l }
            } = t;
            o === n && r(l.map((t) => e[t]).filter(a.lm)), null == i || i.removeEventListener('message', s);
        };
        null == i || i.addEventListener('message', s);
        let c = {
            id: o,
            searchTerm: n,
            searchStrings: e.map(t),
            useRegex: l
        };
        null == i || i.postMessage(c);
    });
}
