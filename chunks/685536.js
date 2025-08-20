var r = n(143310),
    i = n(688411);
e.exports = function (e) {
    var t = r(e.ownerDocument || e.document);
    e.Window && e instanceof e.Window && (e = t);
    var n = i(e),
        a = e === t ? e.ownerDocument.documentElement : e,
        o = e.scrollWidth - a.clientWidth,
        s = e.scrollHeight - a.clientHeight;
    return (n.x = Math.max(0, Math.min(n.x, o))), (n.y = Math.max(0, Math.min(n.y, s))), n;
};
