var r = a(466293),
    n = a(146945),
    _ = a(251584),
    o = r ? r.toStringTag : void 0;
t.exports = function (t) {
    return null == t ? (void 0 === t ? '[object Undefined]' : '[object Null]') : o && o in Object(t) ? n(t) : _(t);
};
