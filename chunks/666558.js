var r = n(309943),
    i = n(102736),
    a = n(292489),
    o = n(401647),
    s = n(685536),
    l = n(790771);
function c(e) {
    var t = r.removeRange(e.getCurrentContent(), e.getSelection(), "forward");
    return i.push(e, t, "remove-range");
}
e.exports = function (e, t) {
    var n,
        r = e._latestEditorState,
        i = r.getSelection(),
        u = t.target;
    if (i.isCollapsed()) return void t.preventDefault();
    if (l(u)) {
        var d = u;
        n = s(a.getScrollParent(d));
    }
    var f = o(r);
    e.setClipboard(f),
        e.setMode("cut"),
        setTimeout(function () {
            e.restoreEditorDOM(n), e.exitCurrentMode(), e.update(c(r));
        }, 0);
};
