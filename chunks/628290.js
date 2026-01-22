var r = n(954055),
    i = n(595042),
    a = n(869639),
    s = n(573750),
    o = n(611122).notEmptyKey,
    l = n(587321),
    c = n(907014),
    u = n(670200),
    d = s.isEngine("Gecko"),
    f = "\n\n";
function p(e, t) {
    return "deleteContentBackward" === e ? c(t) : t;
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n,
        s,
        c,
        _,
        h = e.editor.ownerDocument.defaultView.getSelection(),
        m = h.anchorNode,
        g = h.isCollapsed;
    if (
        (null == m ? void 0 : m.nodeType) === Node.TEXT_NODE ||
        (null == m ? void 0 : m.nodeType) === Node.ELEMENT_NODE
    ) {
        if (m.nodeType === Node.TEXT_NODE && (null !== m.previousSibling || null !== m.nextSibling)) {
            var E = m.parentNode;
            m.nodeValue = E.textContent;
            for (var b = E.firstChild; null !== b; b = b.nextSibling) b !== m && E.removeChild(b);
        }
        var y = m.textContent,
            O = e._latestEditorState,
            A = u(l(m)),
            v = i.decode(A),
            S = v.blockKey,
            I = v.decoratorKey,
            T = v.leafKey,
            C = O.getBlockTree(S).getIn([I, "leaves", T]),
            N = C.start,
            R = C.end,
            w = O.getCurrentContent(),
            P = w.getBlockForKey(S),
            D = P.getText().slice(N, R);
        if ((y.endsWith(f) && (y = y.slice(0, -1)), y === D)) {
            var x = t.nativeEvent.inputType;
            if (x) {
                var L = p(x, O);
                L !== O && (e.restoreEditorDOM(), e.update(L));
            }
            return;
        }
        var j = O.getSelection(),
            M = j.merge({
                anchorOffset: N,
                focusOffset: R,
                isBackward: !1,
            }),
            k = P.getEntityAt(N),
            U = o(k) ? w.getEntity(k) : null,
            G = null != U ? U.getMutability() : null,
            V = "MUTABLE" === G,
            F = V ? "spellcheck-change" : "apply-entity",
            B = r.replaceText(w, M, y, P.getInlineStyleAt(N), V ? P.getEntityAt(N) : null);
        if (d)
            (n = h.anchorOffset), (_ = (c = N + Math.min(n, (s = h.focusOffset))) + Math.abs(n - s)), (n = c), (s = _);
        else {
            var H = y.length - D.length;
            (c = j.getStartOffset()), (_ = j.getEndOffset()), (n = g ? _ + H : c), (s = _ + H);
        }
        var Y = B.merge({
            selectionBefore: w.getSelectionAfter(),
            selectionAfter: j.merge({
                anchorOffset: n,
                focusOffset: s,
            }),
        });
        e.update(a.push(O, Y, F));
    }
};
