"use strict";
var n = r(587321),
    i = r(584606),
    o = r(692001),
    a = r(797686),
    s = r(494277),
    u = r(670200);
function c(t, e, r) {
    var o = e,
        c = n(o);
    if (
        (null != c || (t && (t === o || t.firstChild === o)) || a(!1),
        t === o &&
            (s((o = o.firstChild)) || a(!1),
            "true" !== o.getAttribute("data-contents") && a(!1),
            r > 0 && (r = o.childNodes.length)),
        0 === r)
    ) {
        var f = null;
        if (null != c) f = c;
        else {
            var p = (function (t) {
                for (
                    ;
                    t.firstChild &&
                    ((s(t.firstChild) && "true" === t.firstChild.getAttribute("data-blocks")) || i(t.firstChild));
                )
                    t = t.firstChild;
                return t;
            })(o);
            f = u(i(p));
        }
        return { key: f, offset: 0 };
    }
    var h = o.childNodes[r - 1],
        d = null,
        g = null;
    if (i(h)) {
        var y = (function (t) {
            for (
                ;
                t.lastChild &&
                ((s(t.lastChild) && "true" === t.lastChild.getAttribute("data-blocks")) || i(t.lastChild));
            )
                t = t.lastChild;
            return t;
        })(h);
        (d = u(i(y))), (g = l(y));
    } else (d = u(c)), (g = l(h));
    return { key: d, offset: g };
}
function l(t) {
    var e = t.textContent;
    return "\n" === e ? 0 : e.length;
}
t.exports = function (t, e, r, i, a, s) {
    var l = r.nodeType === Node.TEXT_NODE,
        f = a.nodeType === Node.TEXT_NODE;
    if (l && f) return { selectionState: o(t, u(n(r)), i, u(n(a)), s), needsRecovery: !1 };
    var p = null,
        h = null,
        d = !0;
    return (
        l
            ? ((p = { key: u(n(r)), offset: i }), (h = c(e, a, s)))
            : f
              ? ((h = { key: u(n(a)), offset: s }), (p = c(e, r, i)))
              : ((p = c(e, r, i)),
                (h = c(e, a, s)),
                r === a && i === s && (d = !!r.firstChild && "BR" !== r.firstChild.nodeName)),
        { selectionState: o(t, p.key, p.offset, h.key, h.offset), needsRecovery: d }
    );
};
