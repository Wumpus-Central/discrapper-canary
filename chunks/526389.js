r.d(t, { Z: () => o });
var n = Function.prototype.toString;
let o = function (e) {
    if (null != e) {
        try {
            return n.call(e);
        } catch (e) {}
        try {
            return e + '';
        } catch (e) {}
    }
    return '';
};
