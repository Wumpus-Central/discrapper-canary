"use strict";
var n = r(743595),
    i = r(954055),
    o = r(869639),
    a = r(587321),
    s = r(505122),
    u = r(809206),
    c = r(692001),
    l = r(882270),
    f = r(4323),
    p = r(670200);
function h(t) {
    t._internalDrag = !1;
    var e = t.editorContainer;
    if (e) {
        var r = new MouseEvent("mouseup", { view: l(e), bubbles: !0, cancelable: !0 });
        e.dispatchEvent(r);
    }
}
function d(t, e, r) {
    var n = i.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
    return o.push(t, n, "insert-fragment");
}
t.exports = {
    onDragEnd: function (t) {
        t.exitCurrentMode(), h(t);
    },
    onDrop: function (t, e) {
        var r = new n(e.nativeEvent.dataTransfer),
            l = t._latestEditorState,
            g = (function (t, e) {
                var r = null,
                    n = null,
                    i = s(t.currentTarget);
                if ("function" == typeof i.caretRangeFromPoint) {
                    var o = i.caretRangeFromPoint(t.x, t.y);
                    (r = o.startContainer), (n = o.startOffset);
                } else {
                    if (!t.rangeParent) return null;
                    (r = t.rangeParent), (n = t.rangeOffset);
                }
                (r = p(r)), (n = p(n));
                var u = p(a(r));
                return c(e, u, n, u, n);
            })(e.nativeEvent, l);
        if ((e.preventDefault(), (t._dragCount = 0), t.exitCurrentMode(), null != g)) {
            var y,
                v,
                m,
                _ = r.getFiles();
            if (_.length > 0) {
                if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(g, _))) return;
                u(_, function (e) {
                    e && t.update(d(l, g, e));
                });
                return;
            }
            var b = t._internalDrag ? "internal" : "external";
            (t.props.handleDrop && f(t.props.handleDrop(g, r, b))) ||
                (t._internalDrag
                    ? t.update(
                          ((y = l),
                          (v = g),
                          (m = i.moveText(y.getCurrentContent(), y.getSelection(), v)),
                          o.push(y, m, "insert-fragment")),
                      )
                    : t.update(d(l, g, r.getText()))),
                h(t);
        }
    },
};
