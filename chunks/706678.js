let i;
var a = r(47120);
var o = r(411104);
var s = r(259443);
r(433517);
let l = new s.Yd('useStateFromStores'),
    u = c();
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60000;
    return e;
}
let d = f();
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return e;
}
let p = h();
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1000;
    return e;
}
let _ = m();
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    return e;
}
let g = E();
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
}
g && (i = setInterval(T, u));
let v = new Map();
function y() {
    var e;
    let n = null === (e = Error().stack) || void 0 === e ? void 0 : e.split('\n'),
        r = null != n ? n : [];
    for (let e = 3; e < r.length; e++) {
        let n = r[e].trim().split(' ')[1];
        if ('useStateFromStores' !== n && 'useStateFromStoresArray' !== n && 'useStateFromStoresObject' !== n) return n;
    }
    return 'unknown';
}
function b(e) {
    return 'anonymous' !== e.name && ('' === _ || e.name === _) && (e.execCount > p || e.execTime > d);
}
function I() {
    for (let [e, n] of v) {
        if (!!b(n)) return !0;
    }
    return !1;
}
function T() {
    for (let [e, n] of (I() || '' !== _ ? S() : l.log('No violators found'), v)) (n.warned = !1), (n.execTime = 0), (n.execCount = 0);
}
let S = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + n + r + 6;
    for (let [a, o] of (l.log('|'.padEnd(i, '-') + '|'), l.log('| Consumers of `useStateFromStores` exceeding warning thresholds:'.padEnd(i, ' ') + '|'), l.log('|'.padEnd(i, '-') + '|'), l.log('| '.concat('Function/Component Name'.padEnd(e, ' ')) + '| '.concat('Total Exec Time'.padEnd(n, ' ')) + '| '.concat('Total Exec Count'.padEnd(r, ' '), '|')), l.log('|'.padEnd(i, '-') + '|'), v)) {
        if (!!('' !== _ && a === _) || !!b(o)) l.log('| '.concat(a.padEnd(e, ' ')) + '| '.concat((o.execTime.toFixed(2) + 'ms').padEnd(n, ' ')) + '| '.concat(o.execCount.toString().padEnd(r, ' '), '|'));
    }
    l.log('|'.padEnd(i, '-') + '|');
};
