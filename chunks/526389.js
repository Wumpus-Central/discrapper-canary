n.d(t, { Z: () => i });
var r = Function.prototype.toString;
let i = function (e) {
    if (null != e) {
        try {
            return r.call(e);
        } catch (e) {}
        try {
            return e + '';
        } catch (e) {}
    }
    return '';
};
