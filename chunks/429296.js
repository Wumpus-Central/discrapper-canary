r.d(t, { Z: () => o });
var n = /^(?:0|[1-9]\d*)$/;
let o = function (e, t) {
    var r = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ('number' == r || ('symbol' != r && n.test(e))) && e > -1 && e % 1 == 0 && e < t;
};
