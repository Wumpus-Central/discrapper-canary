var r = n(384404);
e.exports = function (e, t, n) {
    var i = r.undo(t);
    if ("spellcheck-change" === t.getLastChangeType()) {
        var a = i.getCurrentContent();
        n(r.set(i, { nativelyRenderedContent: a }));
        return;
    }
    if ((e.preventDefault(), !t.getNativelyRenderedContent())) return void n(i);
    n(r.set(t, { nativelyRenderedContent: null })),
        setTimeout(function () {
            n(i);
        }, 0);
};
