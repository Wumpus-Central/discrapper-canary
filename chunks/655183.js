var r = n(4145),
    i = n(309943),
    a = n(654530),
    o = n(102736),
    s = n(574369),
    l = n(66386),
    c = n(933585),
    u = n(665635),
    d = n(878694),
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
        (h = !0), g(e);
    },
    onCompositionEnd: function (e) {
        (p = !1),
            (h = !1),
            setTimeout(function () {
                p || E.resolveComposition(e);
            }, _);
    },
    onSelect: l,
    onKeyDown: function (e, t) {
        if (!h) {
            E.resolveComposition(e), e._onKeyDown(t);
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
            (m = null), (p = !0);
            var n = o.set(e._latestEditorState, { inCompositionMode: !1 });
            if ((e.exitCurrentMode(), !t.size)) return void e.update(n);
            var r = n.getCurrentContent();
            t.forEach(function (e, t) {
                var s = a.decode(t),
                    l = s.blockKey,
                    c = s.decoratorKey,
                    u = s.leafKey,
                    f = n.getBlockTree(l).getIn([c, "leaves", u]),
                    _ = f.start,
                    p = f.end,
                    h = n.getSelection().merge({
                        anchorKey: l,
                        focusKey: l,
                        anchorOffset: _,
                        focusOffset: p,
                        isBackward: !1,
                    }),
                    m = d(r, h),
                    g = r.getBlockForKey(l).getInlineStyleAt(_);
                (r = i.replaceText(r, h, e, g, m)), (n = o.set(n, { currentContent: r }));
            });
            var s = u(n, c(e)),
                l = s.selectionState;
            e.restoreEditorDOM();
            var _ = o.acceptSelection(n, l);
            e.update(o.push(_, r, "insert-characters"));
        }
    },
};
e.exports = E;
