"use strict";
n.r(t), n.d(t, { hasDomParent: () => i, isDOMRangeCollapsed: () => s, normalizeDOMPoint: () => a });
var l = n(670482);
{
    l.rL.toSlateRange = (e, t, n) => {
        var i;
        let a,
            { exactMatch: r, suppressThrow: o } = n,
            {
                anchorNode: c,
                anchorOffset: d,
                focusNode: h,
                focusOffset: m,
            } = null != (a = (i = t) && i.anchorNode && u(i.anchorNode)) && i instanceof a.Selection
                ? {
                      anchorNode: t.anchorNode,
                      anchorOffset: t.anchorOffset,
                      focusNode: t.focusNode,
                      focusOffset: t.focusOffset,
                  }
                : {
                      anchorNode: t.startContainer,
                      anchorOffset: t.startOffset,
                      focusNode: t.endContainer,
                      focusOffset: t.endOffset,
                  },
            p = s(c, d, h, m);
        if (null == c || null == h || null == d || null == m) {
            if (o) return null;
            throw Error("Cannot resolve a Slate range from DOM range");
        }
        let f = l.rL.toSlatePoint(e, [c, d], { exactMatch: r, suppressThrow: o }),
            g = p ? f : l.rL.toSlatePoint(e, [h, m], { exactMatch: r, suppressThrow: o });
        return null != f && null != g ? { anchor: f, focus: g } : null;
    };
    let e = l.rL.toSlatePoint;
    l.rL.toSlatePoint = (t, n, l) => {
        let { exactMatch: i, suppressThrow: s, direction: r = "forward" } = l;
        i || (n = a(n, r));
        try {
            return e(t, n, { exactMatch: !0, suppressThrow: s });
        } catch (e) {
            if (s) return null;
            throw e;
        }
    };
}
function i(e, t) {
    if (null == t) return !1;
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function s(e, t, n, l) {
    return e === n && t === l;
}
function a(e, t) {
    let n,
        [l, i] = e;
    if (!o(l) || 0 === l.childNodes.length) return e;
    for (
        "forward" === t && i === l.childNodes.length && (t = "backward"),
            "backward" === t && i--,
            [l, n] = r(l, i, t),
            "forward" === t && n < i ? (t = "backward") : "backward" === t && n > i && (t = "forward"),
            i = n;
        o(l) && l.childNodes.length > 0;
    ) {
        let e = "backward" === t ? l.childNodes.length - 1 : 0;
        l = r(l, e, t)[0];
    }
    let s = "backward" === t && null != l.textContent ? l.textContent.length : 0;
    return [l, s];
}
function r(e, t, n) {
    var l;
    let { childNodes: i } = e,
        s = i[t],
        a = t,
        r = !1,
        u = !1;
    for (
        ;
        ((c((l = s)) && 8 === l.nodeType) ||
            (o(s) && 0 === s.childNodes.length) ||
            (o(s) && "false" === s.getAttribute("contenteditable"))) &&
        (!r || !u);
    ) {
        if (a >= i.length) {
            (r = !0), (a = t - 1), (n = "backward");
            continue;
        }
        if (a < 0) {
            (u = !0), (a = t + 1), (n = "forward");
            continue;
        }
        (s = i[a]), (t = a), (a += "forward" === n ? 1 : -1);
    }
    return [s, t];
}
function o(e) {
    return c(e) && 1 === e.nodeType;
}
function c(e) {
    let t = u(e);
    return null != t && e instanceof t.Node;
}
function u(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
}
