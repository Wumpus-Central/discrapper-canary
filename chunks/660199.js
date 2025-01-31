n.d(t, {
    Ay: () => c,
    He: () => f,
    K_: () => l,
    Qh: () => o,
    ZB: () => d
});
var i = n(913527),
    r = n.n(i),
    a = n(55935),
    s = n(70956);
let o = {
        t: (e) => (0, a.vc)(e, 'LT'),
        T: (e) => (0, a.vc)(e, 'LTS'),
        d: (e) => (0, a.vc)(e, 'L'),
        D: (e) => (0, a.vc)(e, 'LL'),
        f: (e) => (0, a.vc)(e, 'LLL'),
        F: (e) => (0, a.vc)(e, 'LLLL'),
        R: (e) => {
            let t = r().relativeTimeThreshold('s');
            r().relativeTimeThreshold('s', 60);
            let n = r().relativeTimeThreshold('ss');
            r().relativeTimeThreshold('ss', -1);
            let i = r().relativeTimeThreshold('m');
            r().relativeTimeThreshold('m', 60);
            let a = null;
            try {
                a = r()(e.toDate()).fromNow();
            } catch (e) {}
            return r().relativeTimeThreshold('s', t), r().relativeTimeThreshold('ss', n), r().relativeTimeThreshold('m', i), null != a ? a : r()(e.toDate()).fromNow();
        }
    },
    l = 'f';
Object.setPrototypeOf(o, null);
let u = Object.keys(o).join('|'),
    c = new RegExp('^<t:(-?\\d{1,17})(?::('.concat(u, '))?>'));
function d(e, t) {
    let n = r()(Number(e) * s.Z.Millis.SECOND);
    if (!n.isValid()) return null;
    let i = null != t ? o[t] : void 0;
    return (
        null == i && (i = o[l]),
        {
            timestamp: e,
            format: t,
            parsed: n,
            full: o.F(n),
            formatted: i(n)
        }
    );
}
function f(e, t) {
    return null != t ? '<t:'.concat(e, ':').concat(t, '>') : '<t:'.concat(e, '>');
}
