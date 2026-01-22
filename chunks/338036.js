var r = n(50613),
    i = n(627335),
    a = n(744082),
    s = "[object Null]",
    o = "[object Undefined]",
    l = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? o : s) : l && l in Object(e) ? i(e) : a(e);
};
