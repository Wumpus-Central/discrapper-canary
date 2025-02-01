var i = n(352644),
    r = '__lodash_hash_undefined__',
    a = Object.prototype.hasOwnProperty;
function s(e) {
    var t = this.__data__;
    if (i) {
        var n = t[e];
        return n === r ? void 0 : n;
    }
    return a.call(t, e) ? t[e] : void 0;
}
e.exports = s;
