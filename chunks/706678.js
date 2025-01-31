let i;
n(47120), n(411104);
var r = n(259443);
n(433517);
let a = new r.Yd('useStateFromStores'),
    s = o();
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60000;
    return e;
}
let l = u();
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return e;
}
let c = d();
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1000;
    return e;
}
let f = _();
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    return e;
}
(function e() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
})() && (i = setInterval(g, s));
let p = new Map();
function h(e) {
    return 'anonymous' !== e.name && ('' === f || e.name === f) && (e.execCount > c || e.execTime > l);
}
function m() {
    for (let [e, t] of p) if (h(t)) return !0;
    return !1;
}
function g() {
    for (let [e, t] of (m() || '' !== f ? E() : a.log('No violators found'), p)) (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
}
let E = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [r, s] of (a.log('|'.padEnd(i, '-') + '|'), a.log('| Consumers of `useStateFromStores` exceeding warning thresholds:'.padEnd(i, ' ') + '|'), a.log('|'.padEnd(i, '-') + '|'), a.log('| '.concat('Function/Component Name'.padEnd(e, ' ')) + '| '.concat('Total Exec Time'.padEnd(t, ' ')) + '| '.concat('Total Exec Count'.padEnd(n, ' '), '|')), a.log('|'.padEnd(i, '-') + '|'), p)) (('' !== f && r === f) || h(s)) && a.log('| '.concat(r.padEnd(e, ' ')) + '| '.concat((s.execTime.toFixed(2) + 'ms').padEnd(t, ' ')) + '| '.concat(s.execCount.toString().padEnd(n, ' '), '|'));
    a.log('|'.padEnd(i, '-') + '|');
};
