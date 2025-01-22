r.d(n, {
    Hj: function () {
        return d;
    },
    Pz: function () {
        return h;
    },
    ZH: function () {
        return f;
    }
});
var i = r(653041);
var a = r(411104);
var o = r(47120);
var s = r(427786),
    l = r.n(s);
let u = 5000,
    c = new (l())(u);
function d(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    let a = p(r);
    for (
        'string' == typeof e
            ? c.push({
                  time: Date.now(),
                  category: e,
                  message: a
              })
            : c.push({
                  time: Date.now(),
                  category: e.name,
                  timing: e.timing,
                  message: a
              });
        c.length > u;

    )
        c.shift();
}
function f() {
    c.clear();
}
function p(e) {
    let n = '';
    for (let r of e) {
        let e = typeof r;
        'string' === e || 'number' === e || 'boolean' === e ? (n += r + ' ') : r instanceof Error ? (n += r.message + '\n' + r.stack + ' ') : (n += JSON.stringify(r) + ' ');
    }
    return n;
}
function h(e) {
    return c
        .toArray()
        .filter((n) => null == e || e.includes(n.category))
        .map((e) => {
            let n = [];
            return n.push(new Date(e.time).toISOString()), null != e.timing && n.push(e.timing), n.push(e.category, e.message), n.join(' -> ');
        })
        .join('\n');
}
