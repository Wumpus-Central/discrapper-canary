var i = r(548015),
    a = r(463619),
    o = r(286134),
    s = '[object Null]',
    l = '[object Undefined]',
    u = i.Z ? i.Z.toStringTag : void 0;
function c(e) {
    return null == e ? (void 0 === e ? l : s) : u && u in Object(e) ? (0, a.Z)(e) : (0, o.Z)(e);
}
n.Z = c;
