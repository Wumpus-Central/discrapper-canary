var e = r(77826),
    o = r(554148),
    i = RangeError;
t.exports = function (t) {
    if (void 0 === t) return 0;
    var n = e(t),
        r = o(n);
    if (n !== r) throw new i('Wrong length or index');
    return r;
};
