var r = n(869639),
    i = n(45722),
    a = n(241976),
    s = n(181621),
    o = n(418227);
e.exports = function (e, t) {
    var n = o(
        e,
        function (e) {
            var n = e.getSelection();
            if (n.isCollapsed() && 0 === n.getAnchorOffset()) return s(e, 1);
            var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
            return a(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState;
        },
        "backward",
    );
    return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range");
};
