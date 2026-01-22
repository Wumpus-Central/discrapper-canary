var r = n(473479),
    i = n(762710),
    a = n(797686);
function s(e, t, n, s, o, l, c) {
    var u = n.getStartOffset(),
        d = n.getEndOffset(),
        f = e.__get(o).getMutability(),
        p = c ? u : d;
    if ("MUTABLE" === f) return n;
    var _ = i(t, o).filter(function (e) {
        return p <= e.end && p >= e.start;
    });
    1 != _.length && a(!1);
    var h = _[0];
    if ("IMMUTABLE" === f)
        return n.merge({
            anchorOffset: h.start,
            focusOffset: h.end,
            isBackward: !1,
        });
    l || (c ? (d = h.end) : (u = h.start));
    var m = r.getRemovalRange(u, d, t.getText().slice(h.start, h.end), h.start, s);
    return n.merge({
        anchorOffset: m.start,
        focusOffset: m.end,
        isBackward: !1,
    });
}
e.exports = function (e, t, n, r, i) {
    var a = r.getStartOffset(),
        o = r.getEndOffset(),
        l = t.getEntityAt(a),
        c = n.getEntityAt(o - 1);
    if (!l && !c) return r;
    var u = r;
    if (l && l === c) u = s(e, t, u, i, l, !0, !0);
    else if (l && c) {
        var d = s(e, t, u, i, l, !1, !0),
            f = s(e, n, u, i, c, !1, !1);
        u = u.merge({
            anchorOffset: d.getAnchorOffset(),
            focusOffset: f.getFocusOffset(),
            isBackward: !1,
        });
    } else if (l) {
        var p = s(e, t, u, i, l, !1, !0);
        u = u.merge({
            anchorOffset: p.getStartOffset(),
            isBackward: !1,
        });
    } else if (c) {
        var _ = s(e, n, u, i, c, !1, !1);
        u = u.merge({
            focusOffset: _.getEndOffset(),
            isBackward: !1,
        });
    }
    return u;
};
