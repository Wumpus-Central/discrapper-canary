"use strict";
var n = r(954055),
    i = r(869639),
    o = r(448567),
    a = r(812415),
    s = r(423856),
    u = r(291691);
t.exports = function (t, e) {
    var r,
        c = t._latestEditorState,
        l = c.getSelection(),
        f = e.target;
    if (l.isCollapsed()) return void e.preventDefault();
    u(f) && (r = s(o.getScrollParent(f)));
    var p = a(c);
    t.setClipboard(p),
        t.setMode("cut"),
        setTimeout(function () {
            var e, o;
            t.restoreEditorDOM(r),
                t.exitCurrentMode(),
                t.update(
                    ((e = c),
                    (o = n.removeRange(e.getCurrentContent(), e.getSelection(), "forward")),
                    i.push(e, o, "remove-range")),
                );
        }, 0);
};
