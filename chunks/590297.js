var r = n(754981),
    i = n(720218),
    o = n(964930),
    a = n(384404),
    s = n(574369),
    l = n(266254),
    c = n(989317),
    u = n(708150),
    d = n(520480),
    f = n(467159),
    p = 20,
    _ = !1,
    m = !1,
    h = null;
function g(e) {
    h || (h = new r(c(e))).start();
}
var E = {
    onCompositionStart: function (e) {
        (m = !0), g(e);
    },
    onCompositionEnd: function (e) {
        (_ = !1),
            (m = !1),
            setTimeout(function () {
                _ || E.resolveComposition(e);
            }, p);
    },
    onSelect: l,
    onKeyDown: function (e, t) {
        if (!m) {
            E.resolveComposition(e), e._onKeyDown(t);
            return;
        }
        (t.which === s.RIGHT || t.which === s.LEFT) && t.preventDefault();
    },
    onKeyPress: function (e, t) {
        t.which === s.RETURN && t.preventDefault();
    },
    resolveComposition: function (e) {
        if (!m) {
            var t = f(h).stopAndFlushMutations();
            (h = null), (_ = !0);
            var n = a.set(e._latestEditorState, { inCompositionMode: !1 });
            if ((e.exitCurrentMode(), !t.size)) return void e.update(n);
            var r = n.getCurrentContent();
            t.forEach(function (e, t) {
                var s = o.decode(t),
                    l = s.blockKey,
                    c = s.decoratorKey,
                    u = s.leafKey,
                    f = n.getBlockTree(l).getIn([c, "leaves", u]),
                    p = f.start,
                    _ = f.end,
                    m = n.getSelection().merge({
                        anchorKey: l,
                        focusKey: l,
                        anchorOffset: p,
                        focusOffset: _,
                        isBackward: !1,
                    }),
                    h = d(r, m),
                    g = r.getBlockForKey(l).getInlineStyleAt(p);
                (r = i.replaceText(r, m, e, g, h)), (n = a.set(n, { currentContent: r }));
            });
            var s = u(n, c(e)),
                l = s.selectionState;
            e.restoreEditorDOM();
            var p = a.acceptSelection(n, l);
            e.update(a.push(p, r, "insert-characters"));
        }
    },
};
e.exports = E;
