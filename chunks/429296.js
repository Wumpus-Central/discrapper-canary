n.d(t, { Z: () => a });
var i = 9007199254740991,
    r = /^(?:0|[1-9]\d*)$/;
let a = function (e, t) {
    var n = typeof e;
    return !!(t = null == t ? i : t) && ('number' == n || ('symbol' != n && r.test(e))) && e > -1 && e % 1 == 0 && e < t;
};
