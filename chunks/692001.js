var r = n(595042),
    i = n(670200);
e.exports = function (e, t, n, a, s) {
    var o = i(e.getSelection()),
        l = r.decode(t),
        c = l.blockKey,
        u = e.getBlockTree(c),
        d = u && u.getIn([l.decoratorKey, "leaves", l.leafKey]),
        f = r.decode(a),
        p = f.blockKey,
        _ = e.getBlockTree(p),
        h = _ && _.getIn([f.decoratorKey, "leaves", f.leafKey]);
    if (!d || !h) return o;
    var m = d.get("start"),
        g = h.get("start"),
        E = d ? m + n : null,
        b = h ? g + s : null;
    if (o.getAnchorKey() === c && o.getAnchorOffset() === E && o.getFocusKey() === p && o.getFocusOffset() === b)
        return o;
    var y = !1;
    if (c === p) {
        var O = d.get("end"),
            A = h.get("end");
        y = g === m && A === O ? s < n : g < m;
    } else
        y =
            e
                .getCurrentContent()
                .getBlockMap()
                .keySeq()
                .skipUntil(function (e) {
                    return e === c || e === p;
                })
                .first() === p;
    return o.merge({
        anchorKey: c,
        anchorOffset: E,
        focusKey: p,
        focusOffset: b,
        isBackward: y,
    });
};
