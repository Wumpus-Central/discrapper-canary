var n = r(166763),
    i = r(63451),
    o = r(133092),
    a = r(169774),
    u = r(667719).notEmptyKey,
    s = r(924970),
    c = r(473552),
    l = r(467159),
    f = a.isEngine('Gecko');
t.exports = function (t, e) {
    void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0));
    var r = t.editor.ownerDocument.defaultView.getSelection(),
        a = r.anchorNode,
        p = r.isCollapsed;
    if ((null == a ? void 0 : a.nodeType) === Node.TEXT_NODE || (null == a ? void 0 : a.nodeType) === Node.ELEMENT_NODE) {
        if (a.nodeType === Node.TEXT_NODE && (null !== a.previousSibling || null !== a.nextSibling)) {
            var h = a.parentNode;
            a.nodeValue = h.textContent;
            for (var d = h.firstChild; null !== d; d = d.nextSibling) d !== a && h.removeChild(d);
        }
        var g = a.textContent,
            y = t._latestEditorState,
            v = l(s(a)),
            m = i.decode(v),
            _ = m.blockKey,
            b = m.decoratorKey,
            S = m.leafKey,
            w = y.getBlockTree(_).getIn([b, 'leaves', S]),
            x = w.start,
            k = w.end,
            E = y.getCurrentContent(),
            C = E.getBlockForKey(_),
            D = C.getText().slice(x, k);
        if ((g.endsWith('\n\n') && (g = g.slice(0, -1)), g === D)) {
            var O = e.nativeEvent.inputType;
            if (O) {
                var K,
                    T,
                    M,
                    A,
                    I = 'deleteContentBackward' === O ? c(y) : y;
                I !== y && (t.restoreEditorDOM(), t.update(I));
            }
            return;
        }
        var B = y.getSelection(),
            L = B.merge({
                anchorOffset: x,
                focusOffset: k,
                isBackward: !1
            }),
            R = C.getEntityAt(x),
            F = u(R) ? E.getEntity(R) : null,
            N = 'MUTABLE' === (null != F ? F.getMutability() : null),
            P = n.replaceText(E, L, g, C.getInlineStyleAt(x), N ? C.getEntityAt(x) : null);
        if (f) (A = (M = x + Math.min((K = r.anchorOffset), (T = r.focusOffset))) + Math.abs(K - T)), (K = M), (T = A);
        else {
            var z = g.length - D.length;
            (M = B.getStartOffset()), (A = B.getEndOffset()), (K = p ? A + z : M), (T = A + z);
        }
        var j = P.merge({
            selectionBefore: E.getSelectionAfter(),
            selectionAfter: B.merge({
                anchorOffset: K,
                focusOffset: T
            })
        });
        t.update(o.push(y, j, N ? 'spellcheck-change' : 'apply-entity'));
    }
};
