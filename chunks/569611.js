n.d(t, {
    Hj: () => o,
    Pz: () => c,
    ZH: () => l
}),
    n(653041),
    n(411104),
    n(47120);
var i = n(427786),
    r = n.n(i);
let a = 5000,
    s = new (r())(a);
function o(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    let r = u(n);
    for (
        'string' == typeof e
            ? s.push({
                  time: Date.now(),
                  category: e,
                  message: r
              })
            : s.push({
                  time: Date.now(),
                  category: e.name,
                  timing: e.timing,
                  message: r
              });
        s.length > a;

    )
        s.shift();
}
function l() {
    s.clear();
}
function u(e) {
    let t = '';
    for (let n of e) {
        let e = typeof n;
        'string' === e || 'number' === e || 'boolean' === e ? (t += n + ' ') : n instanceof Error ? (t += n.message + '\n' + n.stack + ' ') : (t += JSON.stringify(n) + ' ');
    }
    return t;
}
function c(e) {
    return s
        .toArray()
        .filter((t) => null == e || e.includes(t.category))
        .map((e) => {
            let t = [];
            return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(' -> ');
        })
        .join('\n');
}
