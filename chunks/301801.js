n.d(t, {
    H: function () {
        return i;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var a = n(392711),
    r = n(823379);
let l = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function i(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = (0, a.uniqueId)();
    return new Promise((a) => {
        let s = (t) => {
            let {
                data: { id: n, foundItemIndexes: i }
            } = t;
            o === n && a(i.map((t) => e[t]).filter(r.lm)), null == l || l.removeEventListener('message', s);
        };
        null == l || l.addEventListener('message', s);
        let c = {
            id: o,
            searchTerm: n,
            searchStrings: e.map(t),
            useRegex: i
        };
        null == l || l.postMessage(c);
    });
}
