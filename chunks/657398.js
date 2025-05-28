var r = n(466293),
    i = n(146945),
    a = n(251584),
    o = '[object Null]',
    s = '[object Undefined]',
    l = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? s : o) : l && l in Object(e) ? i(e) : a(e);
};
