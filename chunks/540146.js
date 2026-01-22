var r = n(869639);
e.exports = function (e, t) {
    e.setMode("composite"),
        e.update(
            r.set(e._latestEditorState, {
                inCompositionMode: !0,
            }),
        ),
        e._onCompositionStart(t);
};
