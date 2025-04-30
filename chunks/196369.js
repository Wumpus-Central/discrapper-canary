var n = r(240461),
    i = r(482862),
    o = r(581079);
function a(t, e, r, a, u, s, c) {
    var l = r.getStartOffset(),
        f = r.getEndOffset(),
        p = t.__get(u).getMutability(),
        h = c ? l : f;
    if ('MUTABLE' === p) return r;
    var d = i(e, u).filter(function (t) {
        return h <= t.end && h >= t.start;
    });
    1 != d.length && o(!1);
    var g = d[0];
    if ('IMMUTABLE' === p)
        return r.merge({
            anchorOffset: g.start,
            focusOffset: g.end,
            isBackward: !1
        });
    s || (c ? (f = g.end) : (l = g.start));
    var y = n.getRemovalRange(l, f, e.getText().slice(g.start, g.end), g.start, a);
    return r.merge({
        anchorOffset: y.start,
        focusOffset: y.end,
        isBackward: !1
    });
}
t.exports = function (t, e, r, n, i) {
    var o = n.getStartOffset(),
        u = n.getEndOffset(),
        s = e.getEntityAt(o),
        c = r.getEntityAt(u - 1);
    if (!s && !c) return n;
    var l = n;
    if (s && s === c) l = a(t, e, l, i, s, !0, !0);
    else if (s && c) {
        var f = a(t, e, l, i, s, !1, !0),
            p = a(t, r, l, i, c, !1, !1);
        l = l.merge({
            anchorOffset: f.getAnchorOffset(),
            focusOffset: p.getFocusOffset(),
            isBackward: !1
        });
    } else if (s) {
        var h = a(t, e, l, i, s, !1, !0);
        l = l.merge({
            anchorOffset: h.getStartOffset(),
            isBackward: !1
        });
    } else if (c) {
        var d = a(t, r, l, i, c, !1, !1);
        l = l.merge({
            focusOffset: d.getEndOffset(),
            isBackward: !1
        });
    }
    return l;
};
