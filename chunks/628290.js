"use strict";
var n = r(954055),
    i = r(595042),
    o = r(869639),
    a = r(573750),
    s = r(611122).notEmptyKey,
    u = r(587321),
    c = r(907014),
    l = r(670200),
    f = a.isEngine("Gecko");
t.exports = function (t, e) {
    void 0 !== t._pendingStateFromBeforeInput &&
        (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0));
    var r = t.editor.ownerDocument.defaultView.getSelection(),
        a = r.anchorNode,
        p = r.isCollapsed;
    if (
        (null == a ? void 0 : a.nodeType) === Node.TEXT_NODE ||
        (null == a ? void 0 : a.nodeType) === Node.ELEMENT_NODE
    ) {
        if (a.nodeType === Node.TEXT_NODE && (null !== a.previousSibling || null !== a.nextSibling)) {
            var h = a.parentNode;
            a.nodeValue = h.textContent;
            for (var d = h.firstChild; null !== d; d = d.nextSibling) d !== a && h.removeChild(d);
        }
        var g = a.textContent,
            y = t._latestEditorState,
            v = l(u(a)),
            m = i.decode(v),
            _ = m.blockKey,
            b = m.decoratorKey,
            S = m.leafKey,
            w = y.getBlockTree(_).getIn([b, "leaves", S]),
            k = w.start,
            x = w.end,
            C = y.getCurrentContent(),
            E = C.getBlockForKey(_),
            O = E.getText().slice(k, x);
        if ((g.endsWith("\n\n") && (g = g.slice(0, -1)), g === O)) {
            var D = e.nativeEvent.inputType;
            if (D) {
                var K,
                    T,
                    M,
                    A,
                    I = "deleteContentBackward" === D ? c(y) : y;
                I !== y && (t.restoreEditorDOM(), t.update(I));
            }
            return;
        }
        var B = y.getSelection(),
            L = B.merge({ anchorOffset: k, focusOffset: x, isBackward: !1 }),
            R = E.getEntityAt(k),
            N = s(R) ? C.getEntity(R) : null,
            F = "MUTABLE" === (null != N ? N.getMutability() : null),
            z = n.replaceText(C, L, g, E.getInlineStyleAt(k), F ? E.getEntityAt(k) : null);
        if (f) (A = (M = k + Math.min((K = r.anchorOffset), (T = r.focusOffset))) + Math.abs(K - T)), (K = M), (T = A);
        else {
            var P = g.length - O.length;
            (M = B.getStartOffset()), (A = B.getEndOffset()), (K = p ? A + P : M), (T = A + P);
        }
        var j = z.merge({
            selectionBefore: C.getSelectionAfter(),
            selectionAfter: B.merge({ anchorOffset: K, focusOffset: T }),
        });
        t.update(o.push(y, j, F ? "spellcheck-change" : "apply-entity"));
    }
};
