var r = n(720218),
    i = n(964930),
    a = n(384404),
    o = n(169774),
    s = n(754823).notEmptyKey,
    l = n(466312),
    c = n(257834),
    u = n(467159),
    d = o.isEngine("Gecko"),
    f = "\n\n";
function p(e, t) {
    return "deleteContentBackward" === e ? c(t) : t;
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n,
        o,
        c,
        _,
        m = e.editor.ownerDocument.defaultView.getSelection(),
        h = m.anchorNode,
        g = m.isCollapsed;
    if (
        (null == h ? void 0 : h.nodeType) === Node.TEXT_NODE ||
        (null == h ? void 0 : h.nodeType) === Node.ELEMENT_NODE
    ) {
        if (h.nodeType === Node.TEXT_NODE && (null !== h.previousSibling || null !== h.nextSibling)) {
            var E = h.parentNode;
            h.nodeValue = E.textContent;
            for (var b = E.firstChild; null !== b; b = b.nextSibling) b !== h && E.removeChild(b);
        }
        var y = h.textContent,
            O = e._latestEditorState,
            v = u(l(h)),
            S = i.decode(v),
            I = S.blockKey,
            T = S.decoratorKey,
            C = S.leafKey,
            A = O.getBlockTree(I).getIn([T, "leaves", C]),
            N = A.start,
            P = A.end,
            R = O.getCurrentContent(),
            D = R.getBlockForKey(I),
            w = D.getText().slice(N, P);
        if ((y.endsWith(f) && (y = y.slice(0, -1)), y === w)) {
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
                focusOffset: P,
                isBackward: !1,
            }),
            k = D.getEntityAt(N),
            U = s(k) ? R.getEntity(k) : null,
            G = null != U ? U.getMutability() : null,
            Z = "MUTABLE" === G,
            B = Z ? "spellcheck-change" : "apply-entity",
            F = r.replaceText(R, M, y, D.getInlineStyleAt(N), Z ? D.getEntityAt(N) : null);
        if (d)
            (n = m.anchorOffset), (_ = (c = N + Math.min(n, (o = m.focusOffset))) + Math.abs(n - o)), (n = c), (o = _);
        else {
            var V = y.length - w.length;
            (c = j.getStartOffset()), (_ = j.getEndOffset()), (n = g ? _ + V : c), (o = _ + V);
        }
        var H = F.merge({
            selectionBefore: R.getSelectionAfter(),
            selectionAfter: j.merge({
                anchorOffset: n,
                focusOffset: o,
            }),
        });
        e.update(a.push(O, H, B));
    }
};
