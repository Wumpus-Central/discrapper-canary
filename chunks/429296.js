n.d(t, { Z: () => o });
var r = 9007199254740991,
    i = /^(?:0|[1-9]\d*)$/;
let o = function (e, t) {
    var n = typeof e;
    return !!(t = null == t ? r : t) && ('number' == n || ('symbol' != n && i.test(e))) && e > -1 && e % 1 == 0 && e < t;
};
