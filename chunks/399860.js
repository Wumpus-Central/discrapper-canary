r.d(n, {
    gw: function () {
        return o;
    },
    rE: function () {
        return s;
    },
    tk: function () {
        return l;
    }
});
var i = r(47120);
var a = r(911969);
function o(e, n) {
    return e === a.yU.CHAT ? '/' + n : n;
}
r(895924);
function s(e, n) {
    return ''.concat(e, ':').concat(n);
}
function l(e) {
    return Object.fromEntries(e.map((e) => [s(e.id, e.type), e]));
}
function u(e, n) {
    let r = {};
    for (let [i, a] of Object.entries(e)) n.includes(a.type) && (r[i] = a);
    return r;
}
