var r = n(50613),
    i = n(627335),
    s = n(744082),
    a = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : a && a in Object(e) ? i(e) : s(e);
};
