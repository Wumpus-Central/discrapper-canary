r.d(n, {
    Kl: function () {
        return s;
    },
    Wv: function () {
        return u;
    },
    cT: function () {
        return o;
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
let s = (e) => {
    let n = e.toLowerCase() === a.WO.toLowerCase(),
        r = e.toLowerCase() === a.Lu.toLowerCase();
    return n || r ? n : null;
};
function o(e, n) {
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
    return o(i.Z.getAutocompleteLastChoices(e, n), r);
}
function c(e, n, r) {
    return l(i.Z.getAutocompleteLastChoices(e, n), r);
}
