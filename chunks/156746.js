var n = r(949499).default;
(e.exports = function (e, t) {
    if ("object" != n(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var o = r.call(e, t || "default");
        if ("object" != n(o)) return o;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
