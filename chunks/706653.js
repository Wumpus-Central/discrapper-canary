var i = n(38454),
    r = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    var t = this.__data__;
    if (i) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
    }
    return r.call(t, e) ? t[e] : void 0;
};
