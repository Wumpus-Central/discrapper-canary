var n = r(574366),
    i = r(512930),
    o = r(460337),
    a = n ? n.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : a && a in Object(e) ? i(e) : o(e);
};
