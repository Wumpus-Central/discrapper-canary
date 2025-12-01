var r = n(720218),
    i = n(384404),
    a = n(169774),
    o = n(520480),
    s = n(262279),
    l = n(284565),
    c = n(467159),
    u = n(843260),
    d = "'",
    f = "/",
    p = a.isBrowser("Firefox");
function _(e) {
    return p && (e == d || e == f);
}
function m(e, t, n, a, o) {
    var s = r.replaceText(e.getCurrentContent(), e.getSelection(), t, n, a);
    return i.push(e, s, "insert-characters", o);
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n = e._latestEditorState,
        r = t.data;
    if (r) {
        if (e.props.handleBeforeInput && s(e.props.handleBeforeInput(r, n, t.timeStamp)))
            return void t.preventDefault();
        var a = n.getSelection(),
            d = a.getStartOffset(),
            f = a.getAnchorKey();
        if (!a.isCollapsed()) {
            t.preventDefault(),
                e.update(m(n, r, n.getCurrentInlineStyle(), o(n.getCurrentContent(), n.getSelection()), !0));
            return;
        }
        var p = m(n, r, n.getCurrentInlineStyle(), o(n.getCurrentContent(), n.getSelection()), !1),
            h = !1;
        if ((h || (h = l(e._latestCommittedEditorState)), !h)) {
            var g = n.getBlockTree(f),
                E = p.getBlockTree(f);
            h =
                g.size !== E.size ||
                g.zip(E).some(function (e) {
                    var t = e[0],
                        n = e[1],
                        i = t.get("start"),
                        a = i + (i >= d ? r.length : 0),
                        o = t.get("end"),
                        s = o + (o >= d ? r.length : 0),
                        l = n.get("start"),
                        c = n.get("end"),
                        u = n.get("decoratorKey");
                    return (
                        t.get("decoratorKey") !== u ||
                        t.get("leaves").size !== n.get("leaves").size ||
                        a !== l ||
                        s !== c ||
                        (null != u && c - l != o - i)
                    );
                });
        }
        if ((h || (h = _(r)), h || (h = c(p.getDirectionMap()).get(f) !== c(n.getDirectionMap()).get(f)), h)) {
            t.preventDefault(), (p = i.set(p, { forceSelection: !0 })), e.update(p);
            return;
        }
        (p = i.set(p, { nativelyRenderedContent: p.getCurrentContent() })),
            (e._pendingStateFromBeforeInput = p),
            u(function () {
                void 0 !== e._pendingStateFromBeforeInput &&
                    (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
            });
    }
};
