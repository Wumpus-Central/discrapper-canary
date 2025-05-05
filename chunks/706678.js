let r;
n(388685), n(415506), n(35282), n(781311);
var i = n(259443);
n(433517);
let a = new i.Yd('useStateFromStores'),
    o = s();
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60000;
    return e;
}
let l = c();
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return e;
}
let u = d();
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
})() && (r = setInterval(g, o));
let p = new Map();
function h(e) {
    return 'anonymous' !== e.name && ('' === f || e.name === f) && (e.execCount > u || e.execTime > l);
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
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [i, o] of (a.log('|'.padEnd(r, '-') + '|'), a.log('| Consumers of `useStateFromStores` exceeding warning thresholds:'.padEnd(r, ' ') + '|'), a.log('|'.padEnd(r, '-') + '|'), a.log('| '.concat('Function/Component Name'.padEnd(e, ' ')) + '| '.concat('Total Exec Time'.padEnd(t, ' ')) + '| '.concat('Total Exec Count'.padEnd(n, ' '), '|')), a.log('|'.padEnd(r, '-') + '|'), p)) (('' !== f && i === f) || h(o)) && a.log('| '.concat(i.padEnd(e, ' ')) + '| '.concat((o.execTime.toFixed(2) + 'ms').padEnd(t, ' ')) + '| '.concat(o.execCount.toString().padEnd(n, ' '), '|'));
    a.log('|'.padEnd(r, '-') + '|');
};
