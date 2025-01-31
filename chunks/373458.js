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
    var r,
        a,
        p,
        h,
        d = t.editor.ownerDocument.defaultView.getSelection(),
        g = d.anchorNode,
        y = d.isCollapsed;
    if ((null == g ? void 0 : g.nodeType) === Node.TEXT_NODE || (null == g ? void 0 : g.nodeType) === Node.ELEMENT_NODE) {
        if (g.nodeType === Node.TEXT_NODE && (null !== g.previousSibling || null !== g.nextSibling)) {
            var v = g.parentNode;
            g.nodeValue = v.textContent;
            for (var m = v.firstChild; null !== m; m = m.nextSibling) m !== g && v.removeChild(m);
        }
        var _ = g.textContent,
            b = t._latestEditorState,
            S = l(s(g)),
            w = i.decode(S),
            x = w.blockKey,
            k = w.decoratorKey,
            E = w.leafKey,
            C = b.getBlockTree(x).getIn([k, 'leaves', E]),
            D = C.start,
            O = C.end,
            K = b.getCurrentContent(),
            T = K.getBlockForKey(x),
            M = T.getText().slice(D, O);
        if ((_.endsWith('\n\n') && (_ = _.slice(0, -1)), _ === M)) {
            var A = e.nativeEvent.inputType;
            if (A) {
                var I,
                    B,
                    L = ((I = A), (B = b), 'deleteContentBackward' === I ? c(B) : B);
                L !== b && (t.restoreEditorDOM(), t.update(L));
            }
            return;
        }
        var R = b.getSelection(),
            F = R.merge({
                anchorOffset: D,
                focusOffset: O,
                isBackward: !1
            }),
            N = T.getEntityAt(D),
            P = u(N) ? K.getEntity(N) : null,
            z = 'MUTABLE' === (null != P ? P.getMutability() : null),
            j = n.replaceText(K, F, _, T.getInlineStyleAt(D), z ? T.getEntityAt(D) : null);
        if (f) (h = (p = D + Math.min((r = d.anchorOffset), (a = d.focusOffset))) + Math.abs(r - a)), (r = p), (a = h);
        else {
            var U = _.length - M.length;
            (p = R.getStartOffset()), (h = R.getEndOffset()), (r = y ? h + U : p), (a = h + U);
        }
        var q = j.merge({
            selectionBefore: K.getSelectionAfter(),
            selectionAfter: R.merge({
                anchorOffset: r,
                focusOffset: a
            })
        });
        t.update(o.push(b, q, z ? 'spellcheck-change' : 'apply-entity'));
    }
};
