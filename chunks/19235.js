var e = Function.prototype.toString;
t.exports = function (t) {
    if (null != t) {
        try {
            return e.call(t);
        } catch (t) {}
        try {
            return t + '';
        } catch (t) {}
    }
    return '';
};
