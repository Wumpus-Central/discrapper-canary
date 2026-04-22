"use strict";
n.r(t), n.d(t, { hasDomParent: () => l, isDOMRangeCollapsed: () => s, normalizeDOMPoint: () => r });
var i = n(253018);
{
    i.rL.toSlateRange = (e, t, n) => {
        var l;
        let r,
            { exactMatch: a, suppressThrow: o } = n,
            {
                anchorNode: c,
                anchorOffset: d,
                focusNode: h,
                focusOffset: m,
            } = null != (r = (l = t) && l.anchorNode && u(l.anchorNode)) && l instanceof r.Selection
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
        let f = i.rL.toSlatePoint(e, [c, d], { exactMatch: a, suppressThrow: o }),
            g = p ? f : i.rL.toSlatePoint(e, [h, m], { exactMatch: a, suppressThrow: o });
        return null != f && null != g ? { anchor: f, focus: g } : null;
    };
    let e = i.rL.toSlatePoint;
    i.rL.toSlatePoint = (t, n, i) => {
        let { exactMatch: l, suppressThrow: s, direction: a = "forward" } = i;
        l || (n = r(n, a));
        try {
            return e(t, n, { exactMatch: !0, suppressThrow: s });
        } catch (e) {
            if (s) return null;
            throw e;
        }
    };
}
function l(e, t) {
    if (null == t) return !1;
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function s(e, t, n, i) {
    return e === n && t === i;
}
function r(e, t) {
    let n,
        [i, l] = e;
    if (!o(i) || 0 === i.childNodes.length) return e;
    for (
        "forward" === t && l === i.childNodes.length && (t = "backward"),
            "backward" === t && l--,
            [i, n] = a(i, l, t),
            "forward" === t && n < l ? (t = "backward") : "backward" === t && n > l && (t = "forward"),
            l = n;
        o(i) && i.childNodes.length > 0;
    ) {
        let e = "backward" === t ? i.childNodes.length - 1 : 0;
        i = a(i, e, t)[0];
    }
    let s = "backward" === t && null != i.textContent ? i.textContent.length : 0;
    return [i, s];
}
function a(e, t, n) {
    var i;
    let { childNodes: l } = e,
        s = l[t],
        r = t,
        a = !1,
        u = !1;
    for (
        ;
        ((c((i = s)) && 8 === i.nodeType) ||
            (o(s) && 0 === s.childNodes.length) ||
            (o(s) && "false" === s.getAttribute("contenteditable"))) &&
        (!a || !u);
    ) {
        if (r >= l.length) {
            (a = !0), (r = t - 1), (n = "backward");
            continue;
        }
        if (r < 0) {
            (u = !0), (r = t + 1), (n = "forward");
            continue;
        }
        (s = l[r]), (t = r), (r += "forward" === n ? 1 : -1);
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
