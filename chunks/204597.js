var r = n(352644),
    i = '__lodash_hash_undefined__',
    o = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    var t = this.__data__;
    if (r) {
        var n = t[e];
        return n === i ? void 0 : n;
    }
    return o.call(t, e) ? t[e] : void 0;
};
