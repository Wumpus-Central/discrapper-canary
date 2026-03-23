var r = n(574366),
    i = n(512930),
    s = n(460337),
    a = "[object Null]",
    o = "[object Undefined]",
    l = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? o : a) : l && l in Object(e) ? i(e) : s(e);
};
