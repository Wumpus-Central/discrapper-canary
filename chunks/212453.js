var r = n(378555),
    i = n(954055),
    a = n(595042),
    s = n(869639),
    o = n(63996),
    l = n(750240),
    c = n(575641),
    u = n(644485),
    d = n(197576),
    f = n(670200),
    p = 20,
    _ = !1,
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
        (_ = !1),
            (h = !1),
            setTimeout(function () {
                _ || E.resolveComposition(e);
            }, p);
    },
    onSelect: l,
    onKeyDown: function (e, t) {
        if (!h) {
            E.resolveComposition(e), e._onKeyDown(t);
            return;
        }
        (t.which === o.RIGHT || t.which === o.LEFT) && t.preventDefault();
    },
    onKeyPress: function (e, t) {
        t.which === o.RETURN && t.preventDefault();
    },
    resolveComposition: function (e) {
        if (!h) {
            var t = f(m).stopAndFlushMutations();
            (m = null), (_ = !0);
            var n = s.set(e._latestEditorState, {
                inCompositionMode: !1,
            });
            if ((e.exitCurrentMode(), !t.size)) return void e.update(n);
            var r = n.getCurrentContent();
            t.forEach(function (e, t) {
                var o = a.decode(t),
                    l = o.blockKey,
                    c = o.decoratorKey,
                    u = o.leafKey,
                    f = n.getBlockTree(l).getIn([c, "leaves", u]),
                    p = f.start,
                    _ = f.end,
                    h = n.getSelection().merge({
                        anchorKey: l,
                        focusKey: l,
                        anchorOffset: p,
                        focusOffset: _,
                        isBackward: !1,
                    }),
                    m = d(r, h),
                    g = r.getBlockForKey(l).getInlineStyleAt(p);
                (r = i.replaceText(r, h, e, g, m)),
                    (n = s.set(n, {
                        currentContent: r,
                    }));
            });
            var o = u(n, c(e)),
                l = o.selectionState;
            e.restoreEditorDOM();
            var p = s.acceptSelection(n, l);
            e.update(s.push(p, r, "insert-characters"));
        }
    },
};
e.exports = E;
