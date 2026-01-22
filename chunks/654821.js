n.r(t),
    n.d(t, {
        hasDomParent: () => s,
        isDOMRangeCollapsed: () => o,
        normalizeDOMPoint: () => l,
    }),
    n(65821),
    n(896048);
var r = n(253018);

function i(e) {
    return f(e)
        ? {
              anchorNode: e.anchorNode,
              anchorOffset: e.anchorOffset,
              focusNode: e.focusNode,
              focusOffset: e.focusOffset,
          }
        : {
              anchorNode: e.startContainer,
              anchorOffset: e.startOffset,
              focusNode: e.endContainer,
              focusOffset: e.endOffset,
          };
}
let a = !1;
{
    r.rL.toSlateRange = (e, t, n) => {
        let { exactMatch: a, suppressThrow: s } = n,
            { anchorNode: l, anchorOffset: c, focusNode: u, focusOffset: d } = i(t),
            f = o(l, c, u, d);
        if (null == l || null == u || null == c || null == d) {
            if (s) return null;
            throw Error("Cannot resolve a Slate range from DOM range");
        }
        let p = r.rL.toSlatePoint(e, [l, c], {
                exactMatch: a,
                suppressThrow: s,
            }),
            _ = f
                ? p
                : r.rL.toSlatePoint(e, [u, d], {
                      exactMatch: a,
                      suppressThrow: s,
                  });
        return null != p && null != _
            ? {
                  anchor: p,
                  focus: _,
              }
            : null;
    };
    let e = r.rL.toSlatePoint;
    (r.rL.toSlatePoint = (t, n, r) => {
        let { exactMatch: i, suppressThrow: a, direction: s = "forward" } = r;
        i || (n = l(n, s));
        try {
            return e(t, n, {
                exactMatch: !0,
                suppressThrow: a,
            });
        } catch (e) {
            if (a) return null;
            throw e;
        }
    }),
        (a = !0);
}

function s(e, t) {
    if (null == t) return !1;
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}

function o(e, t, n, r) {
    return e === n && t === r;
}

function l(e, t) {
    let n,
        [r, i] = e;
    if (!d(r) || 0 === r.childNodes.length) return e;
    for (
        "forward" === t && i === r.childNodes.length && (t = "backward"),
            "backward" === t && i--,
            [r, n] = c(r, i, t),
            "forward" === t && n < i ? (t = "backward") : "backward" === t && n > i && (t = "forward"),
            i = n;
        d(r) && r.childNodes.length > 0;
    ) {
        let e = "backward" === t ? r.childNodes.length - 1 : 0;
        r = c(r, e, t)[0];
    }
    let a = "backward" === t && null != r.textContent ? r.textContent.length : 0;
    return [r, a];
}

function c(e, t, n) {
    let { childNodes: r } = e,
        i = r[t],
        a = t,
        s = !1,
        o = !1;
    for (
        ;
        (u(i) || (d(i) && 0 === i.childNodes.length) || (d(i) && "false" === i.getAttribute("contenteditable"))) &&
        (!s || !o);
    ) {
        if (a >= r.length) {
            (s = !0), (a = t - 1), (n = "backward");
            continue;
        }
        if (a < 0) {
            (o = !0), (a = t + 1), (n = "forward");
            continue;
        }
        (i = r[a]), (t = a), (a += "forward" === n ? 1 : -1);
    }
    return [i, t];
}

function u(e) {
    return p(e) && 8 === e.nodeType;
}

function d(e) {
    return p(e) && 1 === e.nodeType;
}

function f(e) {
    let t = e && e.anchorNode && _(e.anchorNode);
    return null != t && e instanceof t.Selection;
}

function p(e) {
    let t = _(e);
    return null != t && e instanceof t.Node;
}

function _(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
}
