var r = n(733359),
    i = n(258329),
    a = n(276263),
    o = n(581079);
function s(e) {
    var t = getComputedStyle(e),
        n = i(e),
        r = n.createElement("div");
    (r.style.fontFamily = t.fontFamily),
        (r.style.fontSize = t.fontSize),
        (r.style.fontStyle = t.fontStyle),
        (r.style.fontWeight = t.fontWeight),
        (r.style.lineHeight = t.lineHeight),
        (r.style.position = "absolute"),
        (r.textContent = "M");
    var a = n.body;
    a || o(!1), a.appendChild(r);
    var s = r.getBoundingClientRect();
    return a.removeChild(r), s.height;
}
function l(e, t) {
    for (var n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = 0; o < e.length; o++) {
        var s = e[o];
        0 !== s.width &&
            1 !== s.width &&
            ((n = Math.min(n, s.top)),
            (r = Math.min(r, s.bottom)),
            (i = Math.max(i, s.top)),
            (a = Math.max(a, s.bottom)));
    }
    return i <= r && i - n < t && a - r < t;
}
function c(e) {
    switch (e.nodeType) {
        case Node.DOCUMENT_TYPE_NODE:
            return 0;
        case Node.TEXT_NODE:
        case Node.PROCESSING_INSTRUCTION_NODE:
        case Node.COMMENT_NODE:
            return e.length;
        default:
            return e.childNodes.length;
    }
}
e.exports = function (e) {
    e.collapsed || o(!1);
    var t = (e = e.cloneRange()).startContainer;
    1 !== t.nodeType && (t = t.parentNode);
    var n = s(t),
        i = e.endContainer,
        u = e.endOffset;
    for (
        e.setStart(e.startContainer, 0);
        l(a(e), n) &&
        ((i = e.startContainer),
        (u = e.startOffset),
        i.parentNode || o(!1),
        e.setStartBefore(i),
        1 !== i.nodeType || "inline" === getComputedStyle(i).display);
    );
    for (var d = i, f = u - 1; ; ) {
        for (var _ = d.nodeValue, p = f; p >= 0; p--)
            if (!(null != _ && p > 0 && r.isSurrogatePair(_, p - 1)))
                if ((e.setStart(d, p), l(a(e), n))) (i = d), (u = p);
                else break;
        if (-1 === p || 0 === d.childNodes.length) break;
        f = c((d = d.childNodes[p]));
    }
    return e.setStart(i, u), e;
};
