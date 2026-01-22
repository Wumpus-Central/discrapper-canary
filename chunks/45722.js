var r = n(1140),
    i = n(505122),
    a = n(586348),
    s = n(797686);
function o(e) {
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
    a || s(!1), a.appendChild(r);
    var o = r.getBoundingClientRect();
    return a.removeChild(r), o.height;
}
function l(e, t) {
    for (var n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = 0; s < e.length; s++) {
        var o = e[s];
        0 !== o.width &&
            1 !== o.width &&
            ((n = Math.min(n, o.top)),
            (r = Math.min(r, o.bottom)),
            (i = Math.max(i, o.top)),
            (a = Math.max(a, o.bottom)));
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
    e.collapsed || s(!1);
    var t = (e = e.cloneRange()).startContainer;
    1 !== t.nodeType && (t = t.parentNode);
    var n = o(t),
        i = e.endContainer,
        u = e.endOffset;
    for (
        e.setStart(e.startContainer, 0);
        l(a(e), n) &&
        ((i = e.startContainer),
        (u = e.startOffset),
        i.parentNode || s(!1),
        e.setStartBefore(i),
        1 !== i.nodeType || "inline" === getComputedStyle(i).display);
    );
    for (var d = i, f = u - 1; ; ) {
        for (var p = d.nodeValue, _ = f; _ >= 0; _--)
            if (!(null != p && _ > 0 && r.isSurrogatePair(p, _ - 1)))
                if ((e.setStart(d, _), l(a(e), n))) (i = d), (u = _);
                else break;
        if (-1 === _ || 0 === d.childNodes.length) break;
        f = c((d = d.childNodes[_]));
    }
    return e.setStart(i, u), e;
};
