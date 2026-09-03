n.r(t), n.d(t, { hasDomParent: () => i, isDOMRangeCollapsed: () => s, normalizeDOMPoint: () => r });
var l = n(530795);
{
    l.rL.toSlateRange = (e, t, n) => {
        var i;
        let r,
            { exactMatch: a, suppressThrow: o } = n,
            {
                anchorNode: u,
                anchorOffset: d,
                focusNode: h,
                focusOffset: m,
            } = null != (r = (i = t) && i.anchorNode && c(i.anchorNode)) && i instanceof r.Selection
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
            f = s(u, d, h, m);
        if (null == u || null == h || null == d || null == m) {
            if (o) return null;
            throw Error("Cannot resolve a Slate range from DOM range");
        }
        let p = l.rL.toSlatePoint(e, [u, d], { exactMatch: a, suppressThrow: o }),
            g = f ? p : l.rL.toSlatePoint(e, [h, m], { exactMatch: a, suppressThrow: o });
        return null != p && null != g ? { anchor: p, focus: g } : null;
    };
    let e = l.rL.toSlatePoint;
    l.rL.toSlatePoint = (t, n, l) => {
        let { exactMatch: i, suppressThrow: s, direction: a = "forward" } = l;
        i || (n = r(n, a));
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
function r(e, t) {
    let n,
        [l, i] = e;
    if (!o(l) || 0 === l.childNodes.length) return e;
    for (
        "forward" === t && i === l.childNodes.length && (t = "backward"),
            "backward" === t && i--,
            [l, n] = a(l, i, t),
            "forward" === t && n < i ? (t = "backward") : "backward" === t && n > i && (t = "forward"),
            i = n;
        o(l) && l.childNodes.length > 0;
    ) {
        let e = "backward" === t ? l.childNodes.length - 1 : 0;
        l = a(l, e, t)[0];
    }
    let s = "backward" === t && null != l.textContent ? l.textContent.length : 0;
    return [l, s];
}
function a(e, t, n) {
    var l;
    let { childNodes: i } = e,
        s = i[t],
        r = t,
        a = !1,
        c = !1;
    for (
        ;
        ((u((l = s)) && 8 === l.nodeType) ||
            (o(s) && 0 === s.childNodes.length) ||
            (o(s) && "false" === s.getAttribute("contenteditable"))) &&
        (!a || !c);
    ) {
        if (r >= i.length) {
            (a = !0), (r = t - 1), (n = "backward");
            continue;
        }
        if (r < 0) {
            (c = !0), (r = t + 1), (n = "forward");
            continue;
        }
        (s = i[r]), (t = r), (r += "forward" === n ? 1 : -1);
    }
    return [s, t];
}
function o(e) {
    return u(e) && 1 === e.nodeType;
}
function u(e) {
    let t = c(e);
    return null != t && e instanceof t.Node;
}
function c(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
}
