var r = a(466293),
    n = a(146945),
    o = a(251584),
    _ = r ? r.toStringTag : void 0;
t.exports = function (t) {
    return null == t ? (void 0 === t ? '[object Undefined]' : '[object Null]') : _ && _ in Object(t) ? n(t) : o(t);
};
