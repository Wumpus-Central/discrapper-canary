var n = r(869639),
    o = r(45722),
    a = r(241976),
    c = r(181621),
    s = r(418227);
e.exports = function (e, t) {
    var r = s(
        e,
        function (e) {
            var r = e.getSelection();
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return c(e, 1);
            var n = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
            return a(e, null, (n = o(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState;
        },
        "backward",
    );
    return r === e.getCurrentContent() ? e : n.push(e, r, "remove-range");
};
