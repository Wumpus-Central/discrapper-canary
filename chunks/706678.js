var i = r(47120);
var a = r(411104);
var s = r(259443);
let o = !1,
    l = new s.Yd('useStateFromStores'),
    u = new Map(),
    c = 60000,
    d = 10,
    f = 1000;
function _() {
    var e;
    let n = null === (e = Error().stack) || void 0 === e ? void 0 : e.split('\n'),
        r = null != n ? n : [];
    for (let e = 3; e < r.length; e++) {
        let n = r[e].trim().split(' ')[1];
        if ('useStateFromStores' !== n && 'useStateFromStoresArray' !== n && 'useStateFromStoresObject' !== n) return n;
    }
    return 'unknown';
}
function h(e) {
    return 'anonymous' !== e.name && (e.execCount > f || e.execTime > d);
}
function p() {
    for (let [e, n] of u) {
        if (!!h(n)) return !0;
    }
    return !1;
}
function m() {
    for (let [e, n] of (p() ? g() : l.log('No violators found'), u)) (n.warned = !1), (n.execTime = 0), (n.execCount = 0);
}
let g = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + n + r + 6;
    for (let [a, s] of (l.log('|'.padEnd(i, '-') + '|'), l.log('| Consumers of `useStateFromStores` exceeding warning thresholds:'.padEnd(i, ' ') + '|'), l.log('|'.padEnd(i, '-') + '|'), l.log('| '.concat('Function/Component Name'.padEnd(e, ' ')) + '| '.concat('Total Exec Time'.padEnd(n, ' ')) + '| '.concat('Total Exec Count'.padEnd(r, ' '), '|')), l.log('|'.padEnd(i, '-') + '|'), u)) {
        if (!!h(s)) l.log('| '.concat(a.padEnd(e, ' ')) + '| '.concat((s.execTime.toFixed(2) + 'ms').padEnd(n, ' ')) + '| '.concat(s.execCount.toString().padEnd(r, ' '), '|'));
    }
    l.log('|'.padEnd(i, '-') + '|');
};
o && setInterval(m, c);
