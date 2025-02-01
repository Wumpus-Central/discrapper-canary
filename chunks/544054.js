var r = a(524556),
    n = Object.prototype.hasOwnProperty;
t.exports = function (t) {
    var e = this.__data__;
    if (r) {
        var a = e[t];
        return '__lodash_hash_undefined__' === a ? void 0 : a;
    }
    return n.call(e, t) ? e[t] : void 0;
};
