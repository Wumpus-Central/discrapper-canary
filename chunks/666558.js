var n = r(309943),
    i = r(102736),
    o = r(292489),
    a = r(401647),
    u = r(685536),
    s = r(790771);
t.exports = function (t, e) {
    var r,
        c = t._latestEditorState,
        l = c.getSelection(),
        f = e.target;
    if (l.isCollapsed()) return void e.preventDefault();
    s(f) && (r = u(o.getScrollParent(f)));
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
