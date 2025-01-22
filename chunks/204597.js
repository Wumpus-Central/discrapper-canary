var i = r(352644),
    a = '__lodash_hash_undefined__',
    o = Object.prototype.hasOwnProperty;
function s(e) {
    var n = this.__data__;
    if (i) {
        var r = n[e];
        return r === a ? void 0 : r;
    }
    return o.call(n, e) ? n[e] : void 0;
}
e.exports = s;
