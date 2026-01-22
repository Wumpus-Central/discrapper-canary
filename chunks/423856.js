var r = n(789072),
    i = n(536978);
e.exports = function (e) {
    var t = r(e.ownerDocument || e.document);
    e.Window && e instanceof e.Window && (e = t);
    var n = i(e),
        a = e === t ? e.ownerDocument.documentElement : e,
        s = e.scrollWidth - a.clientWidth,
        o = e.scrollHeight - a.clientHeight;
    return (n.x = Math.max(0, Math.min(n.x, s))), (n.y = Math.max(0, Math.min(n.y, o))), n;
};
