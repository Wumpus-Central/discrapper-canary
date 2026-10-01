(n.r(t), n.d(t, { hasDomParent: () => i, isDOMRangeCollapsed: () => r, normalizeDOMPoint: () => s }));
var l = n(235599);
{
    l.rL.toSlateRange = (e, t, n) => {
        var i;
        let s,
            { exactMatch: a, suppressThrow: o } = n,
            {
                anchorNode: u,
                anchorOffset: d,
                focusNode: h,
                focusOffset: m,
            } = null != (s = (i = t) && i.anchorNode && c(i.anchorNode)) && i instanceof s.Selection
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
            p = r(u, d, h, m);
        if (null == u || null == h || null == d || null == m) {
            if (o) return null;
            throw Error("Cannot resolve a Slate range from DOM range");
        }
        let f = l.rL.toSlatePoint(e, [u, d], { exactMatch: a, suppressThrow: o }),
            g = p ? f : l.rL.toSlatePoint(e, [h, m], { exactMatch: a, suppressThrow: o });
        return null != f && null != g ? { anchor: f, focus: g } : null;
    };
    let e = l.rL.toSlatePoint;
    l.rL.toSlatePoint = (t, n, l) => {
        let { exactMatch: i, suppressThrow: r, direction: a = "forward" } = l;
        i || (n = s(n, a));
        try {
            return e(t, n, { exactMatch: !0, suppressThrow: r });
        } catch (e) {
            if (r) return null;
            throw e;
        }
    };
}
function i(e, t) {
    if (null == t) return !1;
    for (; null != e;) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function r(e, t, n, l) {
    return e === n && t === l;
}
function s(e, t) {
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
    let r = "backward" === t && null != l.textContent ? l.textContent.length : 0;
    return [l, r];
}
function a(e, t, n) {
    var l;
    let { childNodes: i } = e,
        r = i[t],
        s = t,
        a = !1,
        c = !1;
    for (
        ;
        ((u((l = r)) && 8 === l.nodeType) ||
            (o(r) && 0 === r.childNodes.length) ||
            (o(r) && "false" === r.getAttribute("contenteditable"))) &&
        (!a || !c);
    ) {
        if (s >= i.length) {
            ((a = !0), (s = t - 1), (n = "backward"));
            continue;
        }
        if (s < 0) {
            ((c = !0), (s = t + 1), (n = "forward"));
            continue;
        }
        ((r = i[s]), (t = s), (s += "forward" === n ? 1 : -1));
    }
    return [r, t];
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
