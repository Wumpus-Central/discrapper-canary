var r = n(574366),
    i = n(512930),
    a = n(460337),
    s = "[object Null]",
    o = "[object Undefined]",
    l = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? o : s) : l && l in Object(e) ? i(e) : a(e);
};
