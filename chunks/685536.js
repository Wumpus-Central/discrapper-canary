var n = r(143310),
    i = r(688411);
t.exports = function (t) {
    var e = n(t.ownerDocument || t.document);
    t.Window && t instanceof t.Window && (t = e);
    var r = i(t),
        o = t === e ? t.ownerDocument.documentElement : t,
        a = t.scrollWidth - o.clientWidth,
        u = t.scrollHeight - o.clientHeight;
    return (r.x = Math.max(0, Math.min(r.x, a))), (r.y = Math.max(0, Math.min(r.y, u))), r;
};
