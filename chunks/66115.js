var r = n(497727),
    i = n(621796),
    o = n(152477),
    a = n(172367),
    s = n(574369),
    l = n(536574),
    c = n(15543),
    u = n(683289),
    d = n(596464),
    f = n(467159),
    _ = 20,
    p = !1,
    h = !1,
    m = null;
function g(e) {
    m || (m = new r(c(e))).start();
}
var E = {
    onCompositionStart: function (e) {
        ((h = !0), g(e));
    },
    onCompositionEnd: function (e) {
        ((p = !1),
            (h = !1),
            setTimeout(function () {
                p || E.resolveComposition(e);
            }, _));
    },
    onSelect: l,
    onKeyDown: function (e, t) {
        if (!h) {
            (E.resolveComposition(e), e._onKeyDown(t));
            return;
        }
        (t.which === s.RIGHT || t.which === s.LEFT) && t.preventDefault();
    },
    onKeyPress: function (e, t) {
        t.which === s.RETURN && t.preventDefault();
    },
    resolveComposition: function (e) {
        if (!h) {
            var t = f(m).stopAndFlushMutations();
            ((m = null), (p = !0));
            var n = a.set(e._latestEditorState, { inCompositionMode: !1 });
            if ((e.exitCurrentMode(), !t.size)) return void e.update(n);
            var r = n.getCurrentContent();
            t.forEach(function (e, t) {
                var s = o.decode(t),
                    l = s.blockKey,
                    c = s.decoratorKey,
                    u = s.leafKey,
                    f = n.getBlockTree(l).getIn([c, 'leaves', u]),
                    _ = f.start,
                    p = f.end,
                    h = n.getSelection().merge({
                        anchorKey: l,
                        focusKey: l,
                        anchorOffset: _,
                        focusOffset: p,
                        isBackward: !1
                    }),
                    m = d(r, h),
                    g = r.getBlockForKey(l).getInlineStyleAt(_);
                ((r = i.replaceText(r, h, e, g, m)), (n = a.set(n, { currentContent: r })));
            });
            var s = u(n, c(e)),
                l = s.selectionState;
            e.restoreEditorDOM();
            var _ = a.acceptSelection(n, l);
            e.update(a.push(_, r, 'insert-characters'));
        }
    }
};
e.exports = E;
