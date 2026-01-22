var r = n(954055),
    i = n(869639),
    a = n(448567),
    s = n(812415),
    o = n(423856),
    l = n(291691);
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
        n = o(a.getScrollParent(d));
    }
    var f = s(r);
    e.setClipboard(f),
        e.setMode("cut"),
        setTimeout(function () {
            e.restoreEditorDOM(n), e.exitCurrentMode(), e.update(c(r));
        }, 0);
};
