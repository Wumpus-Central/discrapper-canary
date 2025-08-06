var r = n(39472),
    i = n(38465),
    o = n(581079);
function a(e, t, n, a, s, l, c) {
    var u = n.getStartOffset(),
        d = n.getEndOffset(),
        f = e.__get(s).getMutability(),
        _ = c ? u : d;
    if ('MUTABLE' === f) return n;
    var p = i(t, s).filter(function (e) {
        return _ <= e.end && _ >= e.start;
    });
    1 != p.length && o(!1);
    var h = p[0];
    if ('IMMUTABLE' === f)
        return n.merge({
            anchorOffset: h.start,
            focusOffset: h.end,
            isBackward: !1
        });
    l || (c ? (d = h.end) : (u = h.start));
    var m = r.getRemovalRange(u, d, t.getText().slice(h.start, h.end), h.start, a);
    return n.merge({
        anchorOffset: m.start,
        focusOffset: m.end,
        isBackward: !1
    });
}
e.exports = function (e, t, n, r, i) {
    var o = r.getStartOffset(),
        s = r.getEndOffset(),
        l = t.getEntityAt(o),
        c = n.getEntityAt(s - 1);
    if (!l && !c) return r;
    var u = r;
    if (l && l === c) u = a(e, t, u, i, l, !0, !0);
    else if (l && c) {
        var d = a(e, t, u, i, l, !1, !0),
            f = a(e, n, u, i, c, !1, !1);
        u = u.merge({
            anchorOffset: d.getAnchorOffset(),
            focusOffset: f.getFocusOffset(),
            isBackward: !1
        });
    } else if (l) {
        var _ = a(e, t, u, i, l, !1, !0);
        u = u.merge({
            anchorOffset: _.getStartOffset(),
            isBackward: !1
        });
    } else if (c) {
        var p = a(e, n, u, i, c, !1, !1);
        u = u.merge({
            focusOffset: p.getEndOffset(),
            isBackward: !1
        });
    }
    return u;
};
