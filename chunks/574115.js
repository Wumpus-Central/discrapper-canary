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
function _(e, t) {
    return "deleteContentBackward" === e ? c(t) : t;
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n,
        o,
        c,
        p,
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
            v = u(l(m)),
            I = i.decode(v),
            T = I.blockKey,
            S = I.decoratorKey,
            A = I.leafKey,
            C = O.getBlockTree(T).getIn([S, "leaves", A]),
            N = C.start,
            R = C.end,
            P = O.getCurrentContent(),
            D = P.getBlockForKey(T),
            w = D.getText().slice(N, R);
        if ((y.endsWith(f) && (y = y.slice(0, -1)), y === w)) {
            var L = t.nativeEvent.inputType;
            if (L) {
                var x = _(L, O);
                x !== O && (e.restoreEditorDOM(), e.update(x));
            }
            return;
        }
        var M = O.getSelection(),
            j = M.merge({
                anchorOffset: N,
                focusOffset: R,
                isBackward: !1,
            }),
            k = D.getEntityAt(N),
            U = s(k) ? P.getEntity(k) : null,
            G = null != U ? U.getMutability() : null,
            B = "MUTABLE" === G,
            Z = B ? "spellcheck-change" : "apply-entity",
            F = r.replaceText(P, j, y, D.getInlineStyleAt(N), B ? D.getEntityAt(N) : null);
        if (d)
            (n = h.anchorOffset), (p = (c = N + Math.min(n, (o = h.focusOffset))) + Math.abs(n - o)), (n = c), (o = p);
        else {
            var V = y.length - w.length;
            (c = M.getStartOffset()), (p = M.getEndOffset()), (n = g ? p + V : c), (o = p + V);
        }
        var H = F.merge({
            selectionBefore: P.getSelectionAfter(),
            selectionAfter: M.merge({
                anchorOffset: n,
                focusOffset: o,
            }),
        });
        e.update(a.push(O, H, Z));
    }
};
