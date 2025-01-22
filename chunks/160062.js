r.d(n, {
    Kl: function () {
        return o;
    },
    Wv: function () {
        return u;
    },
    cT: function () {
        return s;
    },
    l1: function () {
        return l;
    },
    xg: function () {
        return c;
    }
});
var i = r(174212),
    a = r(689079);
function o(e) {
    let n = e.toLowerCase() === a.WO.toLowerCase(),
        r = e.toLowerCase() === a.Lu.toLowerCase();
    if (!!(n || r)) return n;
}
function s(e, n) {
    var r;
    let i = null == e ? void 0 : null === (r = e.find((e) => e.displayName === n)) || void 0 === r ? void 0 : r.value;
    if ('string' == typeof i) return i;
}
function l(e, n) {
    var r;
    let i = null == e ? void 0 : null === (r = e.find((e) => e.displayName === n)) || void 0 === r ? void 0 : r.value;
    if ('number' == typeof i) return i;
}
function u(e, n, r) {
    return s(i.Z.getAutocompleteLastChoices(e, n), r);
}
function c(e, n, r) {
    return l(i.Z.getAutocompleteLastChoices(e, n), r);
}
