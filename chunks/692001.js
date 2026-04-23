"use strict";
var n = r(595042),
    i = r(670200);
t.exports = function (t, e, r, o, a) {
    var s = i(t.getSelection()),
        u = n.decode(e),
        c = u.blockKey,
        l = t.getBlockTree(c),
        f = l && l.getIn([u.decoratorKey, "leaves", u.leafKey]),
        p = n.decode(o),
        h = p.blockKey,
        d = t.getBlockTree(h),
        g = d && d.getIn([p.decoratorKey, "leaves", p.leafKey]);
    if (!f || !g) return s;
    var y = f.get("start"),
        v = g.get("start"),
        m = f ? y + r : null,
        _ = g ? v + a : null;
    if (s.getAnchorKey() === c && s.getAnchorOffset() === m && s.getFocusKey() === h && s.getFocusOffset() === _)
        return s;
    var b = !1;
    if (c === h) {
        var S = f.get("end"),
            w = g.get("end");
        b = v === y && w === S ? a < r : v < y;
    } else
        b =
            t
                .getCurrentContent()
                .getBlockMap()
                .keySeq()
                .skipUntil(function (t) {
                    return t === c || t === h;
                })
                .first() === h;
    return s.merge({ anchorKey: c, anchorOffset: m, focusKey: h, focusOffset: _, isBackward: b });
};
