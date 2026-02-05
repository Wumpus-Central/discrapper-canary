"use strict";
var n = r(378555),
    i = r(954055),
    o = r(595042),
    a = r(869639),
    s = r(63996),
    u = r(750240),
    c = r(575641),
    l = r(644485),
    f = r(197576),
    p = r(670200),
    h = !1,
    d = !1,
    g = null,
    y = {
        onCompositionStart: function (t) {
            (d = !0), g || (g = new n(c(t))).start();
        },
        onCompositionEnd: function (t) {
            (h = !1),
                (d = !1),
                setTimeout(function () {
                    h || y.resolveComposition(t);
                }, 20);
        },
        onSelect: u,
        onKeyDown: function (t, e) {
            if (!d) {
                y.resolveComposition(t), t._onKeyDown(e);
                return;
            }
            (e.which === s.RIGHT || e.which === s.LEFT) && e.preventDefault();
        },
        onKeyPress: function (t, e) {
            e.which === s.RETURN && e.preventDefault();
        },
        resolveComposition: function (t) {
            if (!d) {
                var e = p(g).stopAndFlushMutations();
                (g = null), (h = !0);
                var r = a.set(t._latestEditorState, { inCompositionMode: !1 });
                if ((t.exitCurrentMode(), !e.size)) return void t.update(r);
                var n = r.getCurrentContent();
                e.forEach(function (t, e) {
                    var s = o.decode(e),
                        u = s.blockKey,
                        c = s.decoratorKey,
                        l = s.leafKey,
                        p = r.getBlockTree(u).getIn([c, "leaves", l]),
                        h = p.start,
                        d = p.end,
                        g = r
                            .getSelection()
                            .merge({ anchorKey: u, focusKey: u, anchorOffset: h, focusOffset: d, isBackward: !1 }),
                        y = f(n, g),
                        v = n.getBlockForKey(u).getInlineStyleAt(h);
                    (n = i.replaceText(n, g, t, v, y)), (r = a.set(r, { currentContent: n }));
                });
                var s = l(r, c(t)).selectionState;
                t.restoreEditorDOM();
                var u = a.acceptSelection(r, s);
                t.update(a.push(u, n, "insert-characters"));
            }
        },
    };
t.exports = y;
